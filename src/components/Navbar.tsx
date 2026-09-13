"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#funciones", label: "Funciones" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#precios", label: "Precios" },
  { href: "#testimonios", label: "Testimonios" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border-subtle/60 bg-background/70 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="#" className="flex items-center gap-2.5">
          <Image
            src="/kajex-logo.png"
            alt="Kajex"
            width={40}
            height={40}
            className="h-10 w-10"
            priority
          />
          <span className="text-lg font-semibold tracking-tight">
            Kajex
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-foreground-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contacto"
            className="text-sm font-medium text-foreground-muted transition-colors hover:text-foreground"
          >
            Iniciar sesión
          </a>
          <a
            href="#contacto"
            className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-white shadow-[0_0_0_1px_rgba(79,139,255,0.4)] transition-transform hover:scale-[1.03] hover:bg-primary-bright"
          >
            Solicitar demo
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border-subtle/60 bg-background px-6 py-4 flex flex-col gap-4">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm text-foreground-muted hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="rounded-full bg-primary px-4 py-2 text-center text-sm font-medium text-white"
          >
            Solicitar demo
          </a>
        </div>
      )}
    </header>
  );
}
