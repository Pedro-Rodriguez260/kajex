import Image from "next/image";
import type { SVGProps } from "react";

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.5h2.5l.4-3H13.5V8.5c0-.9.2-1.5 1.5-1.5h1.6V4.3C16.3 4.2 15.3 4 14.2 4c-2.4 0-4.2 1.5-4.2 4.2V10.5H7.5v3H10V21h3.5Z" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3.5 9.75h3V20.5h-3V9.75ZM9.75 9.75h2.9v1.47h.04c.4-.76 1.4-1.56 2.9-1.56 3.1 0 3.66 2.04 3.66 4.7v6.14h-3v-5.45c0-1.3-.02-2.97-1.8-2.97-1.82 0-2.1 1.42-2.1 2.88v5.54h-3V9.75Z" />
    </svg>
  );
}

const COLUMNS = [
  {
    title: "Producto",
    links: [
      { label: "Funciones", href: "#funciones" },
      { label: "Cómo funciona", href: "#como-funciona" },
      { label: "Precios", href: "#precios" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Testimonios", href: "#testimonios" },
      { label: "Contacto", href: "#contacto" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Términos de servicio", href: "#" },
      { label: "Política de privacidad", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-background-elevated/50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2.5">
              <Image
                src="/kajex-logo.png"
                alt="Kajex"
                width={36}
                height={36}
                className="h-9 w-9"
              />
              <span className="text-lg font-semibold">Kajex</span>
            </div>
            <p className="mt-4 max-w-[220px] text-sm text-foreground-muted">
              El sistema POS que hace crecer tu negocio.
            </p>
            <div className="mt-5 flex gap-3 text-foreground-muted">
              <a href="#" aria-label="Facebook" className="hover:text-accent-soft">
                <FacebookIcon width={18} height={18} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-accent-soft">
                <InstagramIcon width={18} height={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-accent-soft">
                <LinkedinIcon width={18} height={18} />
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-medium">{col.title}</h4>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-foreground-muted hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border-subtle pt-8 text-xs text-foreground-muted">
          © {new Date().getFullYear()} Kajex. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
