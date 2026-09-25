"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { WhatsAppFloating } from "@/components/common/WhatsAppFloating";
import { Reveal } from "@/components/common/Reveal";
import { SpeedComparator } from "@/components/it/SpeedComparator";
import { itData } from "@/data/it";
import {
  Wrench,
  Cpu,
  Zap,
  Server,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Star,
  Calendar,
  Clock,
  Send,
  MessageSquare,
  Play,
} from "lucide-react";

export default function KajexItPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    equipo: "Laptop",
    falla: "",
    whatsapp: "",
  });

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Cpu":
        return <Cpu className="w-7 h-7 text-emerald-400" />;
      case "Zap":
        return <Zap className="w-7 h-7 text-emerald-400" />;
      case "Server":
        return <Server className="w-7 h-7 text-emerald-400" />;
      default:
        return <Wrench className="w-7 h-7 text-emerald-400" />;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.whatsapp) return;

    const message = `Hola KAJEX IT, mi nombre es ${formData.nombre}. Requiero servicio técnico para un equipo tipo ${formData.equipo}. Problema/Detalle: ${formData.falla || "Mantenimiento / Repotenciación"}. Mi contacto es ${formData.whatsapp}.`;
    window.open(`https://wa.me/573000000000?text=${encodeURIComponent(message)}`, "_blank");
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#060c09] text-slate-100 grid-pattern">
      <Navbar currentSection="it" />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-gradient-to-r from-emerald-600/30 via-teal-500/20 to-emerald-400/20 blur-[130px] pointer-events-none rounded-full" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <Reveal direction="down">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-xs font-extrabold text-emerald-300 shadow-xl mb-6">
                <Wrench className="w-4 h-4 text-emerald-400" />
                {itData.heroBadge}
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white max-w-4xl mx-auto leading-tight">
                ¿Tu Portátil Tarda en Encender? Le Ponemos SSD y{" "}
                <span className="text-gradient-it">Vuela Hoy Mismo</span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Servicio técnico profesional sin sorpresas. Diagnóstico honesto, cambio a discos SSD de alta velocidad, aumento de RAM y limpieza profunda con pasta térmica de calidad.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#comparador"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl font-extrabold text-sm text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2"
                >
                  Probar Comparador de Velocidad
                  <Zap className="w-4 h-4" />
                </a>
                <a
                  href="#agendar"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-all"
                >
                  Agendar Diagnóstico Técnico
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* COMPARADOR DE RENDIMIENTO INTERACTIVO */}
        <section id="comparador" className="py-16 bg-slate-950/90 border-y border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal delay={0.15}>
              <SpeedComparator />
            </Reveal>
          </div>
        </section>

        {/* SERVICIOS TÉCNICOS & PRECIOS DESDE $ */}
        <section id="servicios" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Reveal>
                <h2 className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                  Servicios Especializados
                </h2>
                <p className="text-3xl font-black text-white mt-2">
                  Soluciones Técnicas con Garantía Transparente
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {itData.services.map((service, idx) => (
                <Reveal key={service.id} delay={idx * 0.1}>
                  <div className="glass-card rounded-3xl p-8 border border-slate-800 hover:border-emerald-500/50 transition-all flex flex-col justify-between h-full glow-it">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 rounded-2xl bg-emerald-950/70 border border-emerald-800/60">
                          {getServiceIcon(service.icon)}
                        </div>
                        {service.badge && (
                          <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                            {service.badge}
                          </span>
                        )}
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-1">
                        {service.title}
                      </h3>
                      <div className="text-lg font-black text-emerald-400 mb-3">
                        {service.startingPrice}
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed mb-6">
                        {service.description}
                      </p>

                      <ul className="space-y-2.5 mb-8 border-t border-slate-800/80 pt-4">
                        {service.includes.map((inc, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2.5 text-xs text-slate-300"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={`https://wa.me/573000000000?text=Hola%20KAJEX%20IT,%20deseo%20consultar%20sobre:%20${encodeURIComponent(service.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 rounded-xl font-extrabold text-xs text-white bg-emerald-600 hover:bg-emerald-500 flex items-center justify-center gap-2 transition-all shadow-md"
                    >
                      Consultar {service.title}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESO DE TRABAJO (PASO A PASO) */}
        <section className="py-20 bg-slate-950/80 border-t border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Reveal>
                <h2 className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                  Transparencia Total
                </h2>
                <p className="text-3xl font-black text-white mt-2">
                  Nuestro Proceso de Trabajo en 4 Pasos
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {itData.steps.map((step, idx) => (
                <Reveal key={idx} delay={idx * 0.1}>
                  <div className="glass-card p-6 rounded-2xl border border-slate-800/80 relative flex flex-col justify-between h-full">
                    <div>
                      <span className="text-4xl font-black text-emerald-500/30 block mb-3">
                        {step.number}
                      </span>
                      <h3 className="text-lg font-bold text-white mb-2">
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

        {/* TESTIMONIOS */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Reveal>
                <h2 className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                  Opiniones Reales
                </h2>
                <p className="text-3xl font-black text-white mt-2">
                  Lo que Dicen Nuestros Clientes
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {itData.testimonials.map((testi, idx) => (
                <Reveal key={idx} delay={idx * 0.15}>
                  <div className="glass-card p-8 rounded-3xl border border-slate-800 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center gap-1 text-amber-400 mb-4">
                        {[...Array(testi.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <p className="text-xs text-slate-300 italic leading-relaxed mb-6">
                        "{testi.comment}"
                      </p>
                    </div>

                    <div className="border-t border-slate-800 pt-4">
                      <div className="font-bold text-sm text-white">
                        {testi.name}
                      </div>
                      <div className="text-xs text-emerald-400 font-medium">
                        {testi.role}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FORMULARIO AGENDAR SERVICIO */}
        <section id="agendar" className="py-20 bg-slate-950 border-t border-slate-800/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-800 relative overflow-hidden">
                <div className="text-center max-w-xl mx-auto mb-8">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                    Agendamiento Rápido
                  </span>
                  <h2 className="text-3xl font-black text-white mt-2">
                    Solicita Tu Diagnóstico Técnico
                  </h2>
                  <p className="text-xs text-slate-400 mt-2">
                    Te responderemos en menos de 15 minutos para agendar el servicio.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="p-6 rounded-2xl bg-emerald-950/80 border border-emerald-800 text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                    <h3 className="text-xl font-bold text-white">
                      ¡Solicitud Recibida!
                    </h3>
                    <p className="text-xs text-slate-300">
                      Serás redirigido al chat de WhatsApp con nuestros técnicos.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">
                          Tu Nombre *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Ej: Carlos Mendoza"
                          value={formData.nombre}
                          onChange={(e) =>
                            setFormData({ ...formData, nombre: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">
                          Tipo de Equipo
                        </label>
                        <select
                          value={formData.equipo}
                          onChange={(e) =>
                            setFormData({ ...formData, equipo: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-500"
                        >
                          <option value="Laptop">Laptop / Portátil</option>
                          <option value="PC Escritorio">PC de Escritorio</option>
                          <option value="All-in-One">All in One</option>
                          <option value="Varios Equipos">Varios Equipos (Empresarial)</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">
                          Número de WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="Ej: 3001234567"
                          value={formData.whatsapp}
                          onChange={(e) =>
                            setFormData({ ...formData, whatsapp: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">
                          Falla o Servicio Requerido
                        </label>
                        <input
                          type="text"
                          placeholder="Ej: Cambio a SSD, laptop lenta, mantenimiento"
                          value={formData.falla}
                          onChange={(e) =>
                            setFormData({ ...formData, falla: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl font-extrabold text-sm text-white bg-emerald-600 hover:bg-emerald-500 shadow-xl shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all mt-4"
                    >
                      <Send className="w-4 h-4" />
                      Agendar Servicio por WhatsApp
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <WhatsAppFloating
        accent="it"
        message={itData.whatsappMessage}
      />
      <Footer />
    </div>
  );
}
