# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Marketing/landing page for **Kajex**, a POS (point-of-sale) system brand. This
repo is the public website only — it does not contain the POS product itself.
Single page (`/`), all sections composed in `src/app/page.tsx`. Target
platform: Vercel, with the domain's DNS managed in Cloudflare (see
`README.md` for the connection steps).

## Commands

```bash
npm run dev      # dev server (Turbopack), http://localhost:3000
npm run build    # production build — also type-checks (tsc runs as part of build)
npm run start    # serve the production build
npm run lint     # eslint (flat config, eslint.config.mjs)
```

There is no test suite. There is no `tsc --noEmit` script — type errors
surface via `npm run build` or editor diagnostics.

## Stack notes

- **Next.js 16** (App Router, Turbopack), **React 19**, TypeScript, **Tailwind
  CSS v4**, Framer Motion, lucide-react.
- Next.js 16 is newer than most training data and has breaking changes vs.
  older Next versions. Before relying on an App Router API, check
  `node_modules/next/dist/docs/01-app/` (bundled docs) rather than assuming
  older conventions. One concrete example already in this codebase: layout
  props use the generated `LayoutProps<"/">` type (see `src/app/layout.tsx`)
  instead of a hand-written `{ children: React.ReactNode }` prop type.
- Tailwind v4 has no `tailwind.config.js` — theme tokens are defined as CSS
  custom properties in `src/app/globals.css` under `:root` and re-exposed via
  `@theme inline`. Add new design tokens there, not in a config file.
- **lucide-react is on a major version (1.x) that dropped brand/logo icons**
  (no `Facebook`, `Instagram`, `Linkedin`, etc. — importing them is a build
  error). `src/components/Footer.tsx` defines small inline SVG components for
  the social icons it needs instead of importing them from the package. Follow
  the same pattern for any other brand icon; don't assume it exists in
  lucide-react.

## Architecture

- `src/app/page.tsx` is a plain composition of section components in order —
  there's no routing complexity, CMS, or data fetching. To reorder or
  add/remove a marketing section, edit this file and add/remove a component
  in `src/components/`.
- Each landing section is one component in `src/components/` (`Navbar`,
  `Hero`, `Features`, `HowItWorks`, `Pricing`, `Testimonials`, `CTA`,
  `Footer`). They're independent — no shared section state.
- `src/components/Reveal.tsx` is the scroll-in-view animation wrapper
  (Framer Motion `whileInView`) used to fade/slide sections in as the user
  scrolls. Wrap new section content in it for consistency with the rest of
  the page.
- `src/components/AnimatedCounter.tsx` drives the animated stat numbers in
  the hero (`useInView` + `requestAnimationFrame`, no external tweening
  library).
- `src/components/DemoForm.tsx` (nombre, tienda, WhatsApp, correo opcional)
  POSTs to `src/app/api/demo/route.ts`, which emails the lead via Gmail SMTP
  (nodemailer) to `DEMO_RECIPIENT_EMAIL` (defaults to `soporteit@gmail.com`).
  Requires `GMAIL_USER` and `GMAIL_APP_PASSWORD` env vars (see
  `.env.example`) — without them the route returns a 500 with a Spanish
  error message instead of throwing. `CTA.tsx` is where the form is
  rendered.
- Brand color tokens (`--primary`, `--accent`, `--background*`, etc.), the
  text-gradient utility, the animated glow border, and the background grid
  overlay all live in `src/app/globals.css`. Reuse these classes
  (`.text-gradient`, `.glow-border`, `.grid-overlay`, `.animate-float`,
  `.animate-pulse-glow`) rather than inventing new one-off gradients per
  component, to keep the visual language consistent.
- `public/kajex-logo.png` is the brand logo used in `Navbar` and `Footer`.
