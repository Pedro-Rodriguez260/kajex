"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowLeft, ShoppingBag, Wrench, Sparkles, Home } from "lucide-react";

interface NavbarProps {
  currentSection?: "hub" | "pos" | "it" | "licencias";
}

export function Navbar({ currentSection = "hub" }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getAccentColor = () => {
    switch (currentSection) {
      case "pos":
        return "text-blue-400 border-blue-500/40 bg-blue-500/10";
      case "it":
        return "text-emerald-400 border-emerald-500/40 bg-emerald-500/10";
      case "licencias":
        return "text-violet-400 border-violet-500/40 bg-violet-500/10";
      default:
        return "text-cyan-400 border-cyan-500/40 bg-cyan-500/10";
    }
  };

  const getBadgeText = () => {
    switch (currentSection) {
      case "pos":
        return "POS";
      case "it":
        return "IT Services";
      case "licencias":
        return "Licencias";
      default:
        return "";
    }
  };

  const navLinks = [
    { name: "Inicio", href: "/", icon: Home, section: "hub" },
    { name: "Kajex POS", href: "/pos", icon: ShoppingBag, section: "pos" },
    { name: "Kajex IT", href: "/it", icon: Wrench, section: "it" },
    { name: "Kajex Licencias", href: "/licencias", icon: Sparkles, section: "licencias" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo & Section Badge */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/60 shadow-lg group-hover:border-slate-500 transition-all">
            <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              K
            </span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-black text-xl tracking-wider text-white group-hover:text-slate-200 transition-colors">
                KAJEX
              </span>
              {currentSection !== "hub" && (
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full border uppercase tracking-wider ${getAccentColor()}`}
                >
                  {getBadgeText()}
                </span>
              )}
            </div>
            <span className="text-[11px] text-slate-400 font-medium tracking-wide">
              kajexpos.com
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-2xl border border-slate-800/80">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive =
              currentSection === link.section || pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-slate-800 text-white shadow-md border border-slate-700/50"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-cyan-400" : ""}`} />
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          {currentSection !== "hub" ? (
            <Link
              href="/"
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/60 hover:border-slate-600 rounded-xl transition-all shadow-sm"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Volver al Inicio
            </Link>
          ) : (
            <a
              href="https://wa.me/573144802437?text=Hola%20KAJEX,%20quisiera%20información%20general."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-bold text-slate-900 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 rounded-xl transition-all shadow-md shadow-cyan-500/20"
            >
              Contacto Rápido
            </a>
          )}
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-b border-slate-800 bg-slate-950/95 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-3"
          >
            <div className="flex flex-col gap-2 pt-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive =
                  currentSection === link.section || pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold ${
                      isActive
                        ? "bg-slate-800/90 text-white border border-slate-700/60"
                        : "text-slate-400 hover:text-white hover:bg-slate-900"
                    }`}
                  >
                    <Icon className="w-5 h-5 text-cyan-400" />
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {currentSection !== "hub" && (
              <div className="pt-3 border-t border-slate-800">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold text-slate-200 bg-slate-900 border border-slate-700"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Volver al Inicio
                </Link>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
