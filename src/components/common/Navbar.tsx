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
        return "text-blue-700 border-blue-200 bg-blue-50";
      case "it":
        return "text-emerald-700 border-emerald-200 bg-emerald-50";
      case "licencias":
        return "text-violet-700 border-violet-200 bg-violet-50";
      default:
        return "text-blue-700 border-blue-200 bg-blue-50";
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
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-xl shadow-sm shadow-blue-950/5 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo & Section Badge */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex items-center gap-2">
            <img
              src="/logo2.png"
              alt="KAJEX Logo"
              className="h-11 w-auto object-contain transition-transform group-hover:scale-105 drop-shadow-xs"
            />
            {currentSection !== "hub" && (
              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded-full border uppercase tracking-wider ${getAccentColor()}`}
              >
                {getBadgeText()}
              </span>
            )}
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-2xl border border-slate-200/90 shadow-inner">
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
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/25"
                    : "text-slate-600 hover:text-blue-700 hover:bg-white"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-blue-600"}`} />
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
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-700 hover:text-blue-600 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-all shadow-sm"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Volver al Inicio
            </Link>
          ) : (
            <a
              href="https://wa.me/573144802437?text=Hola%20KAJEX,%20quisiera%20información%20general."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl transition-all shadow-md shadow-blue-600/25 active:scale-95"
            >
              Contacto Rápido
            </a>
          )}
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-blue-600"
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
            className="md:hidden border-b border-slate-200 bg-white/95 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-3 shadow-xl"
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
                        ? "bg-blue-600 text-white shadow-md shadow-blue-600/25"
                        : "text-slate-700 hover:text-blue-600 hover:bg-slate-100"
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-blue-600"}`} />
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {currentSection !== "hub" && (
              <div className="pt-3 border-t border-slate-200">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold text-slate-700 bg-slate-100 border border-slate-300"
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
