"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { WhatsAppFloating } from "@/components/common/WhatsAppFloating";
import { Reveal } from "@/components/common/Reveal";
import { licenciasData } from "@/data/licencias";
import {
  Sparkles,
  Bot,
  Cpu,
  Tv,
  ShieldCheck,
  Zap,
  CreditCard,
  CheckCircle2,
  ArrowRight,
  Clock,
  Filter,
} from "lucide-react";

export default function KajexLicenciasPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todas");

  const categories = [
    "Todas",
    "Inteligencia Artificial",
    "Streaming",
    "Productividad",
  ];

  const filteredLicenses =
    selectedCategory === "Todas"
      ? licenciasData.licenses
      : licenciasData.licenses.filter(
          (lic) => lic.category === selectedCategory
        );

  const getLicenseIcon = (iconName: string) => {
    switch (iconName) {
      case "Bot":
        return <Bot className="w-7 h-7 text-violet-400" />;
      case "Cpu":
        return <Cpu className="w-7 h-7 text-purple-400" />;
      case "Tv":
        return <Tv className="w-7 h-7 text-violet-400" />;
      default:
        return <Sparkles className="w-7 h-7 text-violet-400" />;
    }
  };

  const getGuaranteeIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-violet-400" />;
      case "Zap":
        return <Zap className="w-6 h-6 text-purple-400" />;
      case "CreditCard":
        return <CreditCard className="w-6 h-6 text-violet-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-violet-400" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0b0714] text-slate-100 grid-pattern">
      <Navbar currentSection="licencias" />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-gradient-to-r from-violet-600/30 via-purple-500/20 to-fuchsia-500/20 blur-[130px] pointer-events-none rounded-full" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <Reveal direction="down">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-950/80 border border-violet-800/60 text-xs font-extrabold text-violet-300 shadow-xl mb-6">
                <Sparkles className="w-4 h-4 text-violet-400" />
                {licenciasData.heroBadge}
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white max-w-4xl mx-auto leading-tight">
                Licencias Digitales de IA & Streaming con{" "}
                <span className="text-gradient-licencias">Kajex Licencias</span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                {licenciasData.description}
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#catalogo"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl font-extrabold text-sm text-white bg-violet-600 hover:bg-violet-500 shadow-lg shadow-violet-600/30 transition-all flex items-center justify-center gap-2"
                >
                  Explorar Catálogo
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#garantia"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-all"
                >
                  Garantía & Métodos de Pago
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CATALOGO CON TABS DE FILTRADO */}
        <section id="catalogo" className="py-20 bg-slate-950/80 border-y border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <Reveal>
                <h2 className="text-xs font-bold text-violet-400 uppercase tracking-widest">
                  Catálogo Digital
                </h2>
                <p className="text-3xl font-black text-white mt-2">
                  Selecciona la Licencia o Plataforma que Deseas
                </p>
              </Reveal>
            </div>

            {/* Category Tabs */}
            <Reveal delay={0.1}>
              <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all border ${
                      selectedCategory === cat
                        ? "bg-violet-600 text-white border-violet-500 shadow-lg shadow-violet-600/30"
                        : "bg-slate-900 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </Reveal>

            {/* License Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredLicenses.map((lic, idx) => (
                <Reveal key={lic.id} delay={idx * 0.08}>
                  <div className="glass-card rounded-3xl p-7 border border-slate-800/90 hover:border-violet-500/50 transition-all flex flex-col justify-between h-full glow-licencias">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 rounded-2xl bg-violet-950/70 border border-violet-800/60">
                          {getLicenseIcon(lic.icon)}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-extrabold px-2.5 py-1 rounded-full bg-slate-900 text-slate-300 border border-slate-800">
                            {lic.duration}
                          </span>
                          {lic.badge && (
                            <span className="text-[11px] font-extrabold px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/30">
                              {lic.badge}
                            </span>
                          )}
                        </div>
                      </div>

                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        {lic.category}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-1 mb-2">
                        {lic.name}
                      </h3>

                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-2xl font-black text-violet-400">
                          {lic.price}
                        </span>
                        {lic.originalPrice && (
                          <span className="text-xs text-slate-500 line-through font-medium">
                            {lic.originalPrice}
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed mb-6">
                        {lic.description}
                      </p>

                      <ul className="space-y-2 mb-8 border-t border-slate-800/80 pt-4">
                        {lic.features.map((feat, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2.5 text-xs text-slate-300"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={`https://wa.me/573000000000?text=${encodeURIComponent(licenciasData.whatsappBaseMessage)}%20${encodeURIComponent(lic.name)}%20(${lic.duration})`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 rounded-xl font-extrabold text-xs text-white bg-violet-600 hover:bg-violet-500 flex items-center justify-center gap-2 transition-all shadow-md"
                    >
                      Comprar por WhatsApp
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CÓMO COMPRAR (PASO A PASO) */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Reveal>
                <h2 className="text-xs font-bold text-violet-400 uppercase tracking-widest">
                  Fácil y Rápido
                </h2>
                <p className="text-3xl font-black text-white mt-2">
                  ¿Cómo Comprar Tu Licencia?
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {licenciasData.buySteps.map((step, idx) => (
                <Reveal key={idx} delay={idx * 0.15}>
                  <div className="glass-card p-8 rounded-3xl border border-slate-800 text-center relative flex flex-col justify-between h-full">
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-violet-600 text-white font-black text-xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-violet-600/30">
                        {step.number}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* GARANTÍAS Y SOPORTE */}
        <section id="garantia" className="py-20 bg-slate-950 border-t border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Reveal>
                <h2 className="text-xs font-bold text-violet-400 uppercase tracking-widest">
                  Respaldo KAJEX
                </h2>
                <p className="text-3xl font-black text-white mt-2">
                  Garantías & Compromiso con el Cliente
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {licenciasData.guarantees.map((guar, idx) => (
                <Reveal key={idx} delay={idx * 0.15}>
                  <div className="glass-card p-8 rounded-3xl border border-slate-800 flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-violet-950/70 border border-violet-800/60 shrink-0">
                      {getGuaranteeIcon(guar.icon)}
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">
                        {guar.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                        {guar.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <WhatsAppFloating
        accent="licencias"
        message="Hola KAJEX Licencias, quisiera información sobre el catálogo de licencias digitales."
      />
      <Footer />
    </div>
  );
}
