# Kajex — Landing page

Landing page de marketing para **Kajex**, sistema POS. Construida con Next.js
(App Router), TypeScript, Tailwind CSS v4 y Framer Motion.

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # build de producción
npm run start   # sirve el build de producción
npm run lint    # eslint
```

### Correo del formulario de demo

El formulario de "Solicitar demo" envía un correo por Gmail SMTP. Copia
`.env.example` a `.env.local` y completa:

- `GMAIL_USER` — la cuenta de Gmail que envía el correo.
- `GMAIL_APP_PASSWORD` — una [contraseña de aplicación](https://myaccount.google.com/apppasswords)
  de esa cuenta (requiere verificación en dos pasos activada).
- `DEMO_RECIPIENT_EMAIL` — a quién le llega la solicitud (por defecto
  `soporteit@gmail.com`).

Configura las mismas variables en Vercel (**Settings → Environment
Variables**) antes de desplegar, o el formulario mostrará un error de "envío
no configurado".

## Estructura

- `src/app/page.tsx` — ensambla las secciones de la landing.
- `src/components/` — un componente por sección (`Hero`, `Features`,
  `HowItWorks`, `Pricing`, `Testimonials`, `CTA`, `Footer`, `Navbar`) más
  utilidades (`Reveal` para animaciones de scroll, `AnimatedCounter`,
  `DemoForm`).
- `src/app/globals.css` — tokens de marca (colores, gradientes, efectos de
  brillo) sobre Tailwind v4 (`@theme inline`, sin `tailwind.config.js`).
- `public/kajex-logo.png` — logo de la marca.

## Deploy en Vercel

1. Sube este proyecto a un repositorio en GitHub/GitLab/Bitbucket.
2. En [vercel.com/new](https://vercel.com/new), importa el repositorio.
   Vercel detecta Next.js automáticamente — no requiere configuración
   adicional.
3. Cada push a la rama principal genera un deploy de producción; cada PR
   genera un preview.

## Conectar el dominio (Cloudflare)

1. En el proyecto de Vercel: **Settings → Domains** → agrega tu dominio
   (ej. `kajex.com` y/o `www.kajex.com`).
2. Vercel mostrará los registros DNS que debes crear. En el dashboard de
   Cloudflare, en la zona del dominio (**DNS → Records**):
   - Si apuntas el dominio raíz (`kajex.com`): registro **A** hacia la IP
     de Vercel (`76.76.21.21`), o **CNAME** si usas modo flatten.
   - Para `www`: registro **CNAME** hacia `cname.vercel-dns.com`.
3. Importante: en Cloudflare, pon el proxy de esos registros en **DNS only**
   (nube gris, no naranja) mientras Vercel emite el certificado SSL. Puedes
   activar el proxy naranja de Cloudflare después si lo necesitas, pero
   valida primero que el sitio cargue correctamente.
4. Espera la propagación DNS (minutos a unas horas) y confirma en Vercel que
   el dominio quedó marcado como "Valid Configuration".
