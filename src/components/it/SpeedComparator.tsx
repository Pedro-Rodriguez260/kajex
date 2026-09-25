"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Zap, Clock, Cpu, Gauge, CheckCircle2, ArrowRight } from "lucide-react";

export function SpeedComparator() {
  const [activeTab, setActiveTab] = useState<"despues" | "antes">("despues");

  return (
    <div className="w-full glass-card rounded-3xl p-6 sm:p-8 border border-emerald-500/30 relative overflow-hidden shadow-2xl shadow-emerald-950/30">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
            Comparador de Rendimiento En Vivo
          </span>
          <h3 className="text-xl font-extrabold text-white mt-1">
            Mira la Diferencia Real en Tu Computador
          </h3>
        </div>

        {/* Toggle Switch */}
        <div className="flex items-center gap-1 bg-slate-900 p-1.5 rounded-2xl border border-slate-800 w-fit">
          <button
            onClick={() => setActiveTab("antes")}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
              activeTab === "antes"
                ? "bg-red-500/20 text-red-400 border border-red-500/40 shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Antes (Disco Mecánico HDD)
          </button>

          <button
            onClick={() => setActiveTab("despues")}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
              activeTab === "despues"
                ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Con KAJEX IT (SSD + RAM)
          </button>
        </div>
      </div>

      {/* Interactive Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
        {/* Metric 1: Boot Time */}
        <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1.5 font-bold">
              <Clock className="w-4 h-4 text-emerald-400" />
              Tiempo de Encendido (Boot)
            </span>
            <span className="font-mono text-slate-500">Windows 11</span>
          </div>

          <div className="text-3xl font-black text-white flex items-baseline gap-2">
            {activeTab === "despues" ? (
              <>
                <span className="text-emerald-400">9 Segundos</span>
                <span className="text-xs text-emerald-400 font-bold">
                  (⚡ 18x Más Rápido)
                </span>
              </>
            ) : (
              <span className="text-red-400">2 Min 45 Segundos</span>
            )}
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: activeTab === "despues" ? "92%" : "15%" }}
              transition={{ duration: 0.5 }}
              className={`h-full ${
                activeTab === "despues" ? "bg-emerald-500" : "bg-red-500"
              }`}
            />
          </div>
        </div>

        {/* Metric 2: Program Opening Speed */}
        <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1.5 font-bold">
              <Zap className="w-4 h-4 text-cyan-400" />
              Apertura de Programas
            </span>
            <span className="font-mono text-slate-500">Office / Navegador</span>
          </div>

          <div className="text-3xl font-black text-white flex items-baseline gap-2">
            {activeTab === "despues" ? (
              <>
                <span className="text-emerald-400">2.5 Segundos</span>
                <span className="text-xs text-emerald-400 font-bold">
                  (Instante)
                </span>
              </>
            ) : (
              <span className="text-red-400">45 Segundos</span>
            )}
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: activeTab === "despues" ? "95%" : "20%" }}
              transition={{ duration: 0.5 }}
              className={`h-full ${
                activeTab === "despues" ? "bg-emerald-500" : "bg-red-500"
              }`}
            />
          </div>
        </div>

        {/* Metric 3: Temperature & Stability */}
        <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1.5 font-bold">
              <Gauge className="w-4 h-4 text-amber-400" />
              Temperatura & Ruido
            </span>
            <span className="font-mono text-slate-500">CPU Temp</span>
          </div>

          <div className="text-3xl font-black text-white flex items-baseline gap-2">
            {activeTab === "despues" ? (
              <>
                <span className="text-emerald-400">48 °C</span>
                <span className="text-xs text-emerald-400 font-bold">
                  (Silencioso & Frío)
                </span>
              </>
            ) : (
              <span className="text-red-400">84 °C</span>
            )}
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: activeTab === "despues" ? "90%" : "30%" }}
              transition={{ duration: 0.5 }}
              className={`h-full ${
                activeTab === "despues" ? "bg-emerald-500" : "bg-red-500"
              }`}
            />
          </div>
        </div>
      </div>

      {/* CTA Footer inside comparator */}
      <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-slate-300">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>
            Incluye respaldo completo de archivos + clonación del sistema sin perder nada.
          </span>
        </div>

        <a
          href="https://wa.me/573144802437?text=Hola%20KAJEX%20IT,%20deseo%20repotenciar%20mi%20computador%20con%20SSD%20y%20RAM."
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-xl text-xs font-extrabold text-white bg-emerald-600 hover:bg-emerald-500 flex items-center gap-2 shadow-lg shadow-emerald-600/30 transition-all shrink-0"
        >
          Repotenciar Mi Equipo Hoy
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
