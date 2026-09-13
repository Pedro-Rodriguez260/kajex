<#
.SYNOPSIS
    Da una fecha aproximada de cuándo se deshabilitó una cuenta de Active Directory,
    usando metadata de replicación (NO requiere auditoría habilitada ni cambios de
    firewall/GPO: es una consulta de solo lectura contra AD).

.DESCRIPTION
    En vez del registro de Seguridad (Event ID 4725), este script usa
    Get-ADReplicationAttributeMetadata sobre el atributo "userAccountControl" -el
    atributo que, entre otras cosas, controla si la cuenta está habilitada o no-.
    AD replica junto con cada atributo la fecha de su último cambio
    (LastOriginatingChangeTime) y el DC donde se originó ese cambio, así que se puede
    consultar sin tocar auditoría, firewall ni ninguna configuración.

    LIMITACIONES (importantes):
      - NO dice quién hizo el cambio. Esa identidad solo la registra el log de
        Seguridad (evento 4725), que requiere auditoría habilitada.
      - "userAccountControl" agrupa varias banderas (deshabilitada, contraseña que no
        expira, tarjeta inteligente requerida, etc.). La fecha mostrada es la del
        ÚLTIMO cambio a ese atributo -normalmente coincide con la deshabilitación,
        pero no está garantizado al 100% si hubo otro cambio de bandera después-.
      - Solo es confiable para cuentas que SIGUEN deshabilitadas hoy. Si alguien
        reactivó la cuenta después, el atributo volvió a cambiar y esta fecha ya no
        refleja la deshabilitación original.

.PARAMETER Identity
    Uno o varios usuarios (sAMAccountName, DN, SID o GUID) a consultar. Si se omite,
    se consultan TODAS las cuentas que están deshabilitadas hoy en el dominio.

.EXAMPLE
    .\Get-ADUserDisabledDateApprox.ps1 -Identity jperez

.EXAMPLE
    .\Get-ADUserDisabledDateApprox.ps1 -Identity jperez, mrodriguez

.EXAMPLE
    .\Get-ADUserDisabledDateApprox.ps1 | Export-Csv C:\Reportes\deshabilitados_2026.csv -NoTypeInformation -Encoding UTF8

    Reporta TODAS las cuentas actualmente deshabilitadas y exporta a CSV.
#>

[CmdletBinding()]
param(
    [string[]]$Identity,
    [string]$Server
)

Import-Module ActiveDirectory -ErrorAction Stop

if (-not $Server) {
    $Server = $env:COMPUTERNAME
}

if ($Identity) {
    $users = foreach ($id in $Identity) {
        try {
            Get-ADUser -Identity $id -Properties Enabled, whenChanged, whenCreated -ErrorAction Stop
        }
        catch {
            Write-Warning "No se encontró el usuario '$id': $($_.Exception.Message)"
        }
    }
}
else {
    $users = Get-ADUser -Filter { Enabled -eq $false } -Properties Enabled, whenChanged, whenCreated
}

if (-not $users) {
    Write-Warning "No se encontraron usuarios para consultar."
    return
}

$results = foreach ($u in $users) {
    $fechaAprox    = $null
    $dcOrigenRaw   = $null
    $dcOrigenNombre = $null

    try {
        $meta = Get-ADReplicationAttributeMetadata -Object $u.DistinguishedName -Server $Server -Properties userAccountControl -ErrorAction Stop |
                Select-Object -First 1

        if ($meta) {
            $fechaAprox  = $meta.LastOriginatingChangeTime
            $dcOrigenRaw = $meta.LastOriginatingChangeDirectoryServerIdentity

            if ($dcOrigenRaw -match 'CN=([^,]+),CN=Servers') {
                $dcOrigenNombre = $matches[1]
            }
            else {
                $dcOrigenNombre = $dcOrigenRaw
            }
        }
    }
    catch {
        Write-Warning "No se pudo obtener metadata de replicación para $($u.SamAccountName): $($_.Exception.Message)"
    }

    [PSCustomObject]@{
        Usuario                   = $u.SamAccountName
        NombreCompleto            = $u.Name
        DeshabilitadoActualmente  = -not $u.Enabled
        FechaAproxUltimoCambioUAC = $fechaAprox
        DCOrigenDelCambio         = $dcOrigenNombre
        UltimaModificacionGeneral = $u.whenChanged
    }
}

$results = $results | Sort-Object FechaAproxUltimoCambioUAC -Descending
$results | Format-Table -AutoSize

$results
