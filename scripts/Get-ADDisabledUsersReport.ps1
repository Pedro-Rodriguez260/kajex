<#
.SYNOPSIS
    Reporta las cuentas de Active Directory que fueron deshabilitadas durante el año en curso
    (o el rango de fechas indicado), incluyendo quién realizó cada deshabilitación.

.DESCRIPTION
    Active Directory no guarda "quién deshabilitó a quién" como atributo del usuario, así que
    este dato se obtiene del registro de Seguridad de los controladores de dominio (Event ID
    4725 - "A user account was disabled"). El script recorre todos los DCs del dominio (o los
    que se indiquen), lee esos eventos en el rango de fechas dado y arma un reporte con:
    fecha/hora, cuenta deshabilitada, quién lo hizo y desde qué DC se registró el evento.

    Requisito indispensable: la auditoría de "Administración de cuentas de usuario" (Account
    Management > User Account Management, éxito) debe estar habilitada vía GPO en los
    controladores de dominio. Si nunca se habilitó, no habrá eventos 4725 previos que consultar
    (el registro de Seguridad tampoco los retiene indefinidamente: revisa el tamaño/retención
    del log). Se puede habilitar con:
        auditpol /set /subcategory:"User Account Management" /success:enable

.PARAMETER StartDate
    Fecha/hora de inicio del reporte. Por defecto: 1 de enero del año actual, 00:00.

.PARAMETER EndDate
    Fecha/hora de fin del reporte. Por defecto: ahora.

.PARAMETER DomainControllers
    Lista de controladores de dominio a consultar (nombres o FQDN). Por defecto, se consultan
    todos los DCs del dominio actual.

.PARAMETER Credential
    Credenciales a usar para conectarse a los DCs remotos, si la cuenta actual no tiene permisos
    suficientes para leer su registro de Seguridad.

.PARAMETER OnlyCurrentlyDisabled
    Si se indica, filtra el reporte para mostrar solo las cuentas que siguen deshabilitadas HOY
    en AD (excluye cuentas que fueron deshabilitadas y luego reactivadas dentro del rango).

.PARAMETER OutputCsv
    Ruta de archivo CSV donde exportar el resultado. Si no se indica, solo se muestra en pantalla.

.EXAMPLE
    .\Get-ADDisabledUsersReport.ps1

    Reporta todas las deshabilitaciones desde el 1 de enero del año actual hasta hoy, en todos
    los DCs del dominio.

.EXAMPLE
    .\Get-ADDisabledUsersReport.ps1 -OnlyCurrentlyDisabled -OutputCsv "C:\Reportes\bajas_2026.csv"

    Igual que el anterior, pero solo cuentas que siguen deshabilitadas hoy, y exporta a CSV.

.EXAMPLE
    .\Get-ADDisabledUsersReport.ps1 -DomainControllers 'dc01.midominio.local' -Credential (Get-Credential)

    Consulta solo un DC específico, usando credenciales distintas a las de la sesión actual.
#>

[CmdletBinding()]
param(
    [datetime]$StartDate = (Get-Date -Month 1 -Day 1 -Hour 0 -Minute 0 -Second 0),
    [datetime]$EndDate = (Get-Date),
    [string[]]$DomainControllers,
    [System.Management.Automation.PSCredential]$Credential,
    [switch]$OnlyCurrentlyDisabled,
    [string]$OutputCsv
)

Import-Module ActiveDirectory -ErrorAction Stop

if (-not $DomainControllers) {
    $DomainControllers = (Get-ADDomainController -Filter *).HostName
}

if (-not $DomainControllers) {
    throw "No se encontraron controladores de dominio para consultar."
}

$filterHashtable = @{
    LogName   = 'Security'
    Id        = 4725
    StartTime = $StartDate
    EndTime   = $EndDate
}

$results = New-Object System.Collections.Generic.List[Object]

# Se ejecuta local (con -ComputerName -> RPC) o dentro de Invoke-Command (WinRM, ya sin
# -ComputerName porque ahí el script ya corre EN el DC destino). En ambos casos el XML se
# parsea del lado donde el objeto de evento sigue siendo "real" (antes de cualquier
# serialización de PowerShell remoting, que le quita el método ToXml()).
$parseEventsScriptBlock = {
    param($FilterHashtable, $ComputerName, $Credential)

    $p = @{ FilterHashtable = $FilterHashtable; ErrorAction = 'Stop' }
    if ($ComputerName) { $p['ComputerName'] = $ComputerName }
    if ($Credential)   { $p['Credential']   = $Credential }

    Get-WinEvent @p | ForEach-Object {
        $xml  = [xml]$_.ToXml()
        $data = $xml.Event.EventData.Data
        [PSCustomObject]@{
            FechaHora            = $_.TimeCreated
            UsuarioDeshabilitado = ($data | Where-Object { $_.Name -eq 'TargetUserName' }).'#text'
            DominioUsuario       = ($data | Where-Object { $_.Name -eq 'TargetDomainName' }).'#text'
            RealizadoPor         = ($data | Where-Object { $_.Name -eq 'SubjectUserName' }).'#text'
            DominioResponsable   = ($data | Where-Object { $_.Name -eq 'SubjectDomainName' }).'#text'
        }
    }
}

foreach ($dc in $DomainControllers) {
    Write-Host "Consultando $dc ..." -ForegroundColor Cyan

    $events = $null

    # Intento 1: RPC/DCOM clásico (Get-WinEvent -ComputerName). Es lo más directo,
    # pero requiere que el firewall del DC remoto permita "Remote Event Log Management".
    try {
        $events = & $parseEventsScriptBlock $filterHashtable $dc $Credential
    }
    catch {
        if ($_.Exception.Message -match 'No events were found') {
            Write-Verbose "Sin eventos 4725 en $dc dentro del rango indicado (vía RPC)."
            $events = @()
        }
        elseif ($_.Exception.Message -match 'RPC server is unavailable|servidor RPC no está disponible') {
            # Intento 2: WinRM (Invoke-Command), que suele estar abierto en el dominio
            # aunque el puerto RPC dinámico esté bloqueado por firewall entre sitios/VLANs.
            Write-Warning "$dc no respondió por RPC, probando por WinRM..."
            $icParams = @{
                ComputerName = $dc
                ScriptBlock  = $parseEventsScriptBlock
                ArgumentList = @($filterHashtable, $null, $null)
                ErrorAction  = 'Stop'
            }
            if ($Credential) { $icParams['Credential'] = $Credential }

            try {
                $events = Invoke-Command @icParams
            }
            catch {
                if ($_.Exception.Message -match 'No events were found') {
                    Write-Verbose "Sin eventos 4725 en $dc dentro del rango indicado (vía WinRM)."
                    $events = @()
                }
                else {
                    Write-Warning "Tampoco se pudo consultar $dc por WinRM: $($_.Exception.Message)"
                }
            }
        }
        else {
            Write-Warning "No se pudo consultar $dc : $($_.Exception.Message)"
        }
    }

    if (-not $events) { continue }

    foreach ($event in $events) {
        $event.PSObject.Properties.Add([psnoteproperty]::new('ControladorDominio', $dc))
        $results.Add($event)
    }
}

if ($OnlyCurrentlyDisabled -and $results.Count -gt 0) {
    $results = $results | Where-Object {
        try {
            -not (Get-ADUser -Identity $_.UsuarioDeshabilitado -Properties Enabled -ErrorAction Stop).Enabled
        }
        catch {
            # Cuenta ya no existe en AD (eliminada) -> se conserva en el reporte histórico.
            $true
        }
    }
}

$results = $results | Sort-Object FechaHora -Descending

if ($results.Count -eq 0) {
    Write-Warning "No se encontraron deshabilitaciones de cuentas entre $StartDate y $EndDate."
}
else {
    $results | Format-Table -AutoSize
}

if ($OutputCsv) {
    $results | Export-Csv -Path $OutputCsv -NoTypeInformation -Encoding UTF8
    Write-Host "Resultados exportados a $OutputCsv" -ForegroundColor Green
}

$results
