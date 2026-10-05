import Link from "next/link";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { WhatsAppFloating } from "@/components/common/WhatsAppFloating";
import { Reveal } from "@/components/common/Reveal";
import { hubData } from "@/data/hub";
import {
  ShoppingBag,
  Wrench,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  MessageSquare,
  Zap,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

export default function HubHomePage() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShoppingBag":
        return <ShoppingBag className="w-8 h-8 text-blue-600" />;
      case "Wrench":
        return <Wrench className="w-8 h-8 text-emerald-600" />;
      case "Sparkles":
        return <Sparkles className="w-8 h-8 text-purple-600" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-blue-600" />;
      case "MessageSquare":
        return <MessageSquare className="w-6 h-6 text-emerald-600" />;
      case "Zap":
        return <Zap className="w-6 h-6 text-purple-600" />;
      default:
        return <Sparkles className="w-8 h-8 text-blue-600" />;
    }
  };

  const getCardAccentStyles = (accent: "pos" | "it" | "licencias") => {
    switch (accent) {
      case "pos":
        return {
          borderHover: "hover:border-blue-500 hover:shadow-blue-500/15",
          badge: "bg-blue-50 text-blue-700 border-blue-200",
          button:
            "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/25",
          gradient: "from-blue-500/5 via-blue-500/0 to-transparent",
        };
      case "it":
        return {
          borderHover: "hover:border-emerald-500 hover:shadow-emerald-500/15",
          badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
          button:
            "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/25",
          gradient: "from-emerald-500/5 via-emerald-500/0 to-transparent",
        };
      case "licencias":
        return {
          borderHover: "hover:border-purple-500 hover:shadow-purple-500/15",
          badge: "bg-purple-50 text-purple-700 border-purple-200",
          button:
            "bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-600/25",
          gradient: "from-purple-500/5 via-purple-500/0 to-transparent",
        };
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 grid-pattern">
      <Navbar currentSection="hub" />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden bg-gradient-to-b from-blue-50/60 via-sky-50/30 to-white">
          {/* Ambient Glow Effects */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-gradient-to-r from-blue-400/20 via-sky-400/20 to-indigo-400/15 blur-[120px] pointer-events-none rounded-full" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <Reveal direction="down">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 border border-blue-200 text-xs font-bold text-blue-700 shadow-md shadow-blue-600/10 mb-8">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
                Ecosistema Tecnológico KAJEXPOS Colombia
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-none max-w-5xl mx-auto">
                Potencia Tu Negocio y Vida Digital con{" "}
                <span className="text-gradient-hub">KAJEXPOS</span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed">
                {hubData.heroDescription}
              </p>
            </Reveal>

            {/* Stats Bar */}
            <Reveal delay={0.3}>
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
                {hubData.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="glass-card bg-white p-5 rounded-2xl border border-slate-200/90 text-center shadow-lg shadow-blue-900/5 hover:border-blue-300 transition-all"
                  >
                    <div className="text-2xl sm:text-3xl font-black text-blue-700 tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs font-medium text-slate-600 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* 3 BUSINESS UNITS CARDS SECTION */}
        <section className="py-24 bg-slate-50/80 relative border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Reveal>
                <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
                  Nuestras 3 Unidades Especializadas
                </h2>
                <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Selecciona el Área que Necesitas Explorar
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {hubData.businessUnits.map((unit, index) => {
                const styles = getCardAccentStyles(unit.accent);

                return (
                  <Reveal key={unit.id} delay={index * 0.15}>
                    <div
                      className={`group relative flex flex-col justify-between h-full p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-blue-950/5 transition-all duration-300 transform hover:-translate-y-2 ${styles.borderHover}`}
                    >
                      {/* Subtly colored gradient overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-b ${styles.gradient} opacity-50 rounded-3xl pointer-events-none transition-opacity group-hover:opacity-100`}
                      />

                      <div className="relative z-10">
                        {/* Header: Icon & Badge */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-100 group-hover:scale-110 transition-transform">
                            {getIcon(unit.iconName)}
                          </div>
                          <span
                            className={`text-xs font-bold px-3 py-1 rounded-full border ${styles.badge}`}
                          >
                            {unit.badge}
                          </span>
                        </div>

                        {/* Title & Subtitle */}
                        <h3 className="text-2xl font-black text-slate-900 group-hover:text-blue-700 transition-colors">
                          {unit.title}
                        </h3>
                        <p className="text-xs font-semibold text-slate-500 mt-1 mb-4">
                          {unit.subtitle}
                        </p>

                        <p className="text-sm text-slate-600 leading-relaxed mb-6">
                          {unit.description}
                        </p>

                        {/* Features bullets */}
                        <ul className="space-y-2.5 mb-8">
                          {unit.features.map((feat, i) => (
                            <li
                              key={i}
                              className="flex items-center gap-2.5 text-xs text-slate-600"
                            >
                              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA Button */}
                      <div className="relative z-10 pt-4 border-t border-slate-100">
                        <Link
                          href={unit.href}
                          className={`flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl font-bold text-sm transition-all ${styles.button}`}
                        >
                          {unit.ctaText}
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* QUIÉNES SOMOS SECTION */}
        <section className="py-24 relative overflow-hidden bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <Reveal>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                    Sobre Nosotros
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-2">
                    {hubData.aboutUs.title}
                  </h2>
                </Reveal>

                <Reveal delay={0.1}>
                  <p className="text-slate-700 leading-relaxed text-base">
                    {hubData.aboutUs.description1}
                  </p>
                </Reveal>

                <Reveal delay={0.2}>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {hubData.aboutUs.description2}
                  </p>
                </Reveal>
              </div>

              <div className="lg:col-span-6 space-y-4">
                {hubData.aboutUs.pillars.map((pillar, idx) => (
                  <Reveal key={idx} delay={idx * 0.15}>
                    <div className="glass-card bg-slate-50/80 p-6 rounded-2xl border border-slate-200/90 flex items-start gap-4 hover:border-blue-400 hover:bg-white transition-all shadow-sm">
                      <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 shrink-0">
                        {getIcon(pillar.icon)}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-base">
                          {pillar.title}
                        </h4>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT & FOOTER CTA SECTION */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-950 p-8 sm:p-12 rounded-3xl border border-blue-800/60 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[100px] pointer-events-none rounded-full" />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
                <div>
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                    Contacto Directo
                  </span>
                  <h2 className="text-3xl font-black text-white tracking-tight mt-2">
                    ¿Tienes dudas o necesitas una cotización a medida?
                  </h2>
                  <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                    Estamos listos para atenderte por WhatsApp o correo electrónico de manera inmediata.
                  </p>

                  <div className="mt-6 space-y-3">
                    <a
                      href={`https://wa.me/${hubData.contact.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-slate-200 hover:text-white transition-colors"
                    >
                      <Phone className="w-5 h-5 text-emerald-400" />
                      <span>{hubData.contact.whatsappFormatted}</span>
                    </a>
                    <a
                      href={`mailto:${hubData.contact.email}`}
                      className="flex items-center gap-3 text-sm text-slate-200 hover:text-white transition-colors"
                    >
                      <Mail className="w-5 h-5 text-blue-400" />
                      <span>{hubData.contact.email}</span>
                    </a>
                    <div className="flex items-center gap-3 text-sm text-slate-200">
                      <Clock className="w-5 h-5 text-amber-400" />
                      <span>{hubData.contact.schedule}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-200">
                      <MapPin className="w-5 h-5 text-purple-400" />
                      <span>{hubData.contact.location}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                  <a
                    href={`https://wa.me/${hubData.contact.whatsappNumber}?text=Hola%20KAJEX,%20quiero%20información%20general.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 py-4 px-8 rounded-2xl font-extrabold text-white bg-emerald-600 hover:bg-emerald-500 shadow-xl shadow-emerald-600/30 transition-all text-sm"
                  >
                    Escribir a WhatsApp
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <WhatsAppFloating accent="hub" />
      <Footer />
    </div>
  );
}
