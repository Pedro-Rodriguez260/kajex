"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  ScanBarcode,
  ShoppingCart,
  Wallet,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";

const STATS = [
  { value: 1200, suffix: "+", label: "negocios activos" },
  { value: 4, suffix: "M+", label: "ventas procesadas" },
  { value: 99, suffix: ".9%", label: "disponibilidad" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-14 sm:pt-44 sm:pb-32">
      <div className="grid-overlay pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_40%,transparent_100%)]" />
      <div className="pointer-events-none absolute left-1/2 top-[-10%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-center gap-2 rounded-full border border-border-subtle bg-background-panel/80 px-4 py-1.5 text-xs font-medium text-accent-soft"
        >
          <Sparkles size={14} />
          Kajex Cloud — vende desde cualquier lugar
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl"
        >
          El sistema POS que hace{" "}
          <span className="text-gradient">crecer tu negocio</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 max-w-xl text-lg text-foreground-muted"
        >
          Ventas, facturación electrónica, inventario y reportes en un solo
          lugar. Kajex se adapta a tu negocio, desde tiendas de barrio hasta
          cadenas con varias sucursales.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-9 flex flex-col gap-3 sm:flex-row"
        >
          <a
            href="#contacto"
            className="group flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white shadow-[0_0_30px_-6px_rgba(47,107,255,0.7)] transition-transform hover:scale-[1.03] hover:bg-primary-bright"
          >
            Solicitar demo gratis
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#funciones"
            className="rounded-full border border-border-subtle px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/60 hover:text-accent-soft"
          >
            Ver funciones
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid w-full max-w-lg grid-cols-3 gap-6 border-t border-border-subtle pt-8 sm:mt-20"
        >
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-semibold sm:text-3xl">
                <AnimatedCounter to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-1 text-xs text-foreground-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="relative mt-12 w-full max-w-3xl sm:mt-20"
        >
          <div className="glow-border animate-float rounded-2xl border border-border-subtle bg-background-panel/90 p-3 shadow-2xl shadow-black/40 sm:p-4">
            <div className="flex items-center gap-1.5 border-b border-border-subtle pb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              <span className="ml-3 text-xs text-foreground-muted">
                Kajex · Panel de ventas
              </span>
            </div>
            <div className="grid grid-cols-1 gap-3 pt-4 sm:grid-cols-3">
              <div className="rounded-xl bg-background-elevated p-4 sm:col-span-2">
                <div className="flex items-center justify-between text-xs text-foreground-muted">
                  <span>Ventas de hoy</span>
                  <BarChart3 size={16} className="text-accent-soft" />
                </div>
                <div className="mt-2 text-2xl font-semibold">
                  $2.480.500
                </div>
                <div className="mt-4 flex h-20 items-end gap-1.5">
                  {[40, 65, 50, 80, 60, 95, 70].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-sm bg-gradient-to-t from-primary to-accent"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 rounded-xl bg-background-elevated p-3">
                  <div className="rounded-lg bg-primary/15 p-2 text-primary-bright">
                    <ScanBarcode size={16} />
                  </div>
                  <div>
                    <div className="text-xs text-foreground-muted">
                      Productos
                    </div>
                    <div className="text-sm font-medium">1.284</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-background-elevated p-3">
                  <div className="rounded-lg bg-accent/15 p-2 text-accent-soft">
                    <ShoppingCart size={16} />
                  </div>
                  <div>
                    <div className="text-xs text-foreground-muted">
                      Órdenes hoy
                    </div>
                    <div className="text-sm font-medium">96</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-background-elevated p-3">
                  <div className="rounded-lg bg-primary/15 p-2 text-primary-bright">
                    <Wallet size={16} />
                  </div>
                  <div>
                    <div className="text-xs text-foreground-muted">
                      Caja actual
                    </div>
                    <div className="text-sm font-medium">$540.200</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
