"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Zap, Clock, Cpu, Gauge, CheckCircle2, ArrowRight } from "lucide-react";

export function SpeedComparator() {
  const [activeTab, setActiveTab] = useState<"despues" | "antes">("despues");

  return (
    <div className="w-full bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 relative overflow-hidden shadow-xl shadow-emerald-950/5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-widest">
            Comparador de Rendimiento En Vivo
          </span>
          <h3 className="text-xl font-extrabold text-slate-900 mt-1">
            Mira la Diferencia Real en Tu Computador
          </h3>
        </div>

        {/* Toggle Switch */}
        <div className="flex items-center gap-1 bg-slate-100 p-1.5 rounded-2xl border border-slate-200 w-fit">
          <button
            onClick={() => setActiveTab("antes")}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
              activeTab === "antes"
                ? "bg-red-100 text-red-700 border border-red-200 shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Antes (Disco Mecánico HDD)
          </button>

          <button
            onClick={() => setActiveTab("despues")}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
              activeTab === "despues"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/25"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Con KAJEX IT (SSD + RAM)
          </button>
        </div>
      </div>

      {/* Interactive Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
        {/* Metric 1: Boot Time */}
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span className="flex items-center gap-1.5 font-bold text-slate-700">
              <Clock className="w-4 h-4 text-emerald-600" />
              Tiempo de Encendido (Boot)
            </span>
            <span className="font-mono text-slate-400">Windows 11</span>
          </div>

          <div className="text-3xl font-black text-slate-900 flex items-baseline gap-2">
            {activeTab === "despues" ? (
              <>
                <span className="text-emerald-600">9 Segundos</span>
                <span className="text-xs text-emerald-600 font-bold">
                  (⚡ 18x Más Rápido)
                </span>
              </>
            ) : (
              <span className="text-red-600">2 Min 45 Segundos</span>
            )}
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: activeTab === "despues" ? "92%" : "15%" }}
              transition={{ duration: 0.5 }}
              className={`h-full ${
                activeTab === "despues" ? "bg-emerald-600" : "bg-red-500"
              }`}
            />
          </div>
        </div>

        {/* Metric 2: Program Opening Speed */}
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span className="flex items-center gap-1.5 font-bold text-slate-700">
              <Zap className="w-4 h-4 text-blue-600" />
              Apertura de Programas
            </span>
            <span className="font-mono text-slate-400">Office / Navegador</span>
          </div>

          <div className="text-3xl font-black text-slate-900 flex items-baseline gap-2">
            {activeTab === "despues" ? (
              <>
                <span className="text-emerald-600">2.5 Segundos</span>
                <span className="text-xs text-emerald-600 font-bold">
                  (Instantáneo)
                </span>
              </>
            ) : (
              <span className="text-red-600">45 Segundos</span>
            )}
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: activeTab === "despues" ? "95%" : "20%" }}
              transition={{ duration: 0.5 }}
              className={`h-full ${
                activeTab === "despues" ? "bg-emerald-600" : "bg-red-500"
              }`}
            />
          </div>
        </div>

        {/* Metric 3: Multitasking */}
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span className="flex items-center gap-1.5 font-bold text-slate-700">
              <Cpu className="w-4 h-4 text-purple-600" />
              Fluidez Multitarea
            </span>
            <span className="font-mono text-slate-400">+20 Pestañas abiertas</span>
          </div>

          <div className="text-3xl font-black text-slate-900 flex items-baseline gap-2">
            {activeTab === "despues" ? (
              <>
                <span className="text-emerald-600">100% Fluido</span>
                <span className="text-xs text-emerald-600 font-bold">
                  (Sin Congelaciones)
                </span>
              </>
            ) : (
              <span className="text-red-600">Lento / Trabado</span>
            )}
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: activeTab === "despues" ? "98%" : "25%" }}
              transition={{ duration: 0.5 }}
              className={`h-full ${
                activeTab === "despues" ? "bg-emerald-600" : "bg-red-500"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
