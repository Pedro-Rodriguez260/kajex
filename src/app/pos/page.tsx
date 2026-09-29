"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { WhatsAppFloating } from "@/components/common/WhatsAppFloating";
import { Reveal } from "@/components/common/Reveal";
import { POSSimulator } from "@/components/pos/POSSimulator";
import { posData } from "@/data/pos";
import {
  ShoppingBag,
  Zap,
  Server,
  TrendingUp,
  HardDrive,
  Printer,
  Scan,
  CreditCard,
  PackageCheck,
  Laptop,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Send,
  ShieldCheck,
  Sparkles,
  Play,
} from "lucide-react";

export default function KajexPosPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    negocio: "",
    whatsapp: "",
    correo: "",
  });

  const getProductIcon = (iconName: string) => {
    switch (iconName) {
      case "Printer":
        return <Printer className="w-7 h-7 text-blue-600" />;
      case "Scan":
        return <Scan className="w-7 h-7 text-blue-600" />;
      case "CreditCard":
        return <CreditCard className="w-7 h-7 text-blue-600" />;
      case "PackageCheck":
        return <PackageCheck className="w-7 h-7 text-blue-600" />;
      default:
        return <Laptop className="w-7 h-7 text-blue-600" />;
    }
  };

  const getBenefitIcon = (iconName: string) => {
    switch (iconName) {
      case "Zap":
        return <Zap className="w-6 h-6 text-blue-600" />;
      case "Server":
        return <Server className="w-6 h-6 text-blue-600" />;
      case "TrendingUp":
        return <TrendingUp className="w-6 h-6 text-blue-600" />;
      case "HardDrive":
        return <HardDrive className="w-6 h-6 text-blue-600" />;
      default:
        return <ShoppingBag className="w-6 h-6 text-blue-600" />;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.whatsapp) return;

    const message = `Hola KAJEX POS, mi nombre es ${formData.nombre} de la empresa/tienda ${formData.negocio || "N/A"}. Quisiera solicitar una cotización y demo del sistema POS. Mi WhatsApp es ${formData.whatsapp}.`;
    window.open(`https://wa.me/573144802437?text=${encodeURIComponent(message)}`, "_blank");
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 grid-pattern">
      <Navbar currentSection="pos" />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-gradient-to-b from-blue-50/70 via-sky-50/40 to-white">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-gradient-to-r from-blue-400/20 via-sky-400/20 to-blue-300/15 blur-[130px] pointer-events-none rounded-full" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <Reveal direction="down">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-200 text-xs font-extrabold text-blue-700 shadow-md mb-6">
                <ShoppingBag className="w-4 h-4 text-blue-600" />
                {posData.heroBadge}
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 max-w-4xl mx-auto leading-tight">
                Factura en 3 Segundos y Controla Tu Tienda con{" "}
                <span className="text-gradient-pos">Kajex POS</span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Olvídate de las cuentas a mano y la pérdida de inventario. Software ultrarrápido con cajón monedero, impresora térmica y lector de barras listo para usar en tu local.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#simulador"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl font-extrabold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2"
                >
                  Probar Simulador de Caja
                  <Play className="w-4 h-4 fill-current" />
                </a>
                <a
                  href="#cotizacion"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-all"
                >
                  Solicitar Cotización Gratis
                </a>
              </div>
            </Reveal>

            {/* TRUST PAYMENTS BAR */}
            <div className="mt-12 pt-8 border-t border-slate-200/80 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-600 font-semibold">
              <span className="text-slate-500 font-bold uppercase tracking-wider text-[11px]">MÉTODOS DE PAGO Y FACTURACIÓN:</span>
              <span className="px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 shadow-sm">
                Nequi
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 shadow-sm">
                Daviplata
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 shadow-sm">
                Bancolombia
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 shadow-sm">
                Efectivo & Tarjetas Debit/Credit
              </span>
            </div>
          </div>
        </section>

        {/* INTERACTIVE POS SIMULATOR WIDGET */}
        <section id="simulador" className="py-16 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <Reveal>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                  Prueba Interactiva en Tiempo Real
                </span>
                <h2 className="text-3xl font-black text-slate-900 mt-2">
                  Prueba el Sistema de Registro KAJEX POS
                </h2>
                <p className="text-xs text-slate-600 mt-2">
                  Haz clic en los productos a la izquierda para agregar a la caja e imprimir un ticket térmico de prueba.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.15}>
              <POSSimulator />
            </Reveal>
          </div>
        </section>

        {/* BENEFICIOS BENTO GRID */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <Reveal>
                <h2 className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                  Ventajas Reales para Tu Negocio
                </h2>
                <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                  Todo lo Necesario para Crecer sin Estrés
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {posData.benefits.map((benefit, idx) => (
                <Reveal key={idx} delay={idx * 0.1}>
                  <div className="glass-card bg-slate-50/70 p-6 rounded-2xl border border-slate-200/90 hover:border-blue-400 hover:bg-white transition-all h-full shadow-sm">
                    <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 w-fit mb-4">
                      {getBenefitIcon(benefit.icon)}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PRODUCTOS Y HARDWARE CATALOG */}
        <section id="catalogo" className="py-20 bg-slate-50/80 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <Reveal>
                <div>
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                    Equipos & Periféricos
                  </span>
                  <h2 className="text-3xl font-black text-slate-900 mt-2">
                    Catálogo Hardware & Software POS
                  </h2>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-slate-600 text-sm max-w-md mt-2 md:mt-0">
                  Impresoras térmicas, lectores láser omnidireccionales, cajones monedero reforzados y combos completos.
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posData.products.map((product, idx) => (
                <Reveal key={product.id} delay={idx * 0.1}>
                  <div className="bg-white rounded-3xl p-6 border border-slate-200/90 flex flex-col justify-between h-full hover:border-blue-500 hover:shadow-xl hover:shadow-blue-600/10 transition-all glow-pos">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 rounded-xl bg-blue-50 border border-blue-100">
                          {getProductIcon(product.icon)}
                        </div>
                        {product.badge && (
                          <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                            {product.badge}
                          </span>
                        )}
                      </div>

                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        {product.category}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">
                        {product.name}
                      </h3>
                      <div className="text-lg font-black text-blue-600 mb-3">
                        {product.price}
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed mb-5">
                        {product.description}
                      </p>

                      <ul className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                        {product.specs.map((spec, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-xs text-slate-600"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={`https://wa.me/573144802437?text=Hola%20KAJEX%20POS,%20me%20interesa%20cotizar:%20${encodeURIComponent(product.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 rounded-xl font-bold text-xs text-white bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-600/20"
                    >
                      Cotizar {product.name}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PLANES & PRICING */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Reveal>
                <h2 className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                  Planes Flexibles
                </h2>
                <p className="text-3xl font-black text-slate-900 mt-2">
                  Selecciona la Opción Ideal para Tu Local
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {posData.plans.map((plan, idx) => (
                <Reveal key={idx} delay={idx * 0.15}>
                  <div
                    className={`rounded-3xl p-8 flex flex-col justify-between h-full relative transition-all ${
                      plan.popular
                        ? "bg-slate-900 text-white border-2 border-blue-600 shadow-2xl shadow-blue-600/20"
                        : "bg-white border border-slate-200/90 text-slate-900 shadow-lg"
                    }`}
                  >
                    {plan.popular && (
                      <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-blue-600 text-white text-xs font-extrabold shadow-md">
                        MÁS POPULAR
                      </span>
                    )}

                    <div>
                      <h3 className={`text-xl font-bold ${plan.popular ? "text-white" : "text-slate-900"}`}>{plan.name}</h3>
                      <p className={`text-xs mt-1 mb-6 ${plan.popular ? "text-slate-300" : "text-slate-500"}`}>
                        {plan.description}
                      </p>

                      <div className="flex items-baseline gap-1 mb-6">
                        <span className={`text-4xl font-black ${plan.popular ? "text-white" : "text-slate-900"}`}>
                          {plan.price}
                        </span>
                        <span className={`text-xs font-medium ${plan.popular ? "text-slate-300" : "text-slate-500"}`}>
                          {plan.period}
                        </span>
                      </div>

                      <ul className={`space-y-3 mb-8 border-t pt-6 ${plan.popular ? "border-slate-800" : "border-slate-100"}`}>
                        {plan.features.map((feat, i) => (
                          <li
                            key={i}
                            className={`flex items-center gap-2.5 text-xs ${plan.popular ? "text-slate-200" : "text-slate-600"}`}
                          >
                            <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={`https://wa.me/573144802437?text=Hola%20KAJEX%20POS,%20deseo%20cotizar:%20${encodeURIComponent(plan.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3.5 rounded-xl font-extrabold text-xs text-center transition-all ${
                        plan.popular
                          ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg"
                          : "bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300"
                      }`}
                    >
                      {plan.cta}
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* COTIZACIÓN FORM & DEMO */}
        <section id="cotizacion" className="py-20 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="bg-slate-950 p-8 sm:p-12 rounded-3xl border border-slate-800 relative overflow-hidden shadow-2xl">
                <div className="text-center max-w-xl mx-auto mb-8">
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                    Formulario de Cotización
                  </span>
                  <h2 className="text-3xl font-black text-white mt-2">
                    Solicita Tu Demo Gratuita de Kajex POS
                  </h2>
                  <p className="text-xs text-slate-400 mt-2">
                    Completa tus datos y un asesor te contactará inmediatamente.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="p-6 rounded-2xl bg-blue-950/80 border border-blue-800 text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-blue-400 mx-auto" />
                    <h3 className="text-xl font-bold text-white">
                      ¡Solicitud Enviada con Éxito!
                    </h3>
                    <p className="text-xs text-slate-300">
                      Serás redirigido a WhatsApp para finalizar la cotización.
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
                          placeholder="Ej: Pedro Rodríguez"
                          value={formData.nombre}
                          onChange={(e) =>
                            setFormData({ ...formData, nombre: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">
                          Nombre del Negocio / Tienda
                        </label>
                        <input
                          type="text"
                          placeholder="Ej: Minimarket La 20"
                          value={formData.negocio}
                          onChange={(e) =>
                            setFormData({ ...formData, negocio: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500"
                        />
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
                          className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">
                          Correo Electrónico (Opcional)
                        </label>
                        <input
                          type="email"
                          placeholder="correo@ejemplo.com"
                          value={formData.correo}
                          onChange={(e) =>
                            setFormData({ ...formData, correo: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl font-extrabold text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 transition-all mt-4"
                    >
                      <Send className="w-4 h-4" />
                      Enviar y Cotizar por WhatsApp
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQS ACCORDEON */}
        <section className="py-16 bg-white border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <Reveal>
                <h2 className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                  Preguntas Frecuentes
                </h2>
                <p className="text-2xl font-black text-slate-900 mt-1">
                  Resuelve Tus Dudas sobre Kajex POS
                </p>
              </Reveal>
            </div>

            <div className="space-y-3">
              {posData.faqs.map((faq, idx) => (
                <Reveal key={idx} delay={idx * 0.05}>
                  <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                    <button
                      onClick={() =>
                        setActiveFaq(activeFaq === idx ? null : idx)
                      }
                      className="w-full px-6 py-4 flex items-center justify-between text-left font-bold text-sm text-slate-900 hover:text-blue-600 transition-colors"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeFaq === idx ? "rotate-180 text-blue-600" : ""
                        }`}
                      />
                    </button>
                    {activeFaq === idx && (
                      <div className="px-6 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-200 pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <WhatsAppFloating
        accent="pos"
        message={posData.whatsappMessage}
      />
      <Footer />
    </div>
  );
}
