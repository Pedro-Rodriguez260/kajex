"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PromoBanner } from "@/data/licencias";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ZoomIn,
  X,
  Clock,
  ShieldCheck,
  Pause,
  Play,
} from "lucide-react";

interface PromoCarouselProps {
  banners: PromoBanner[];
  whatsappNumber?: string;
}

export function PromoCarousel({
  banners,
  whatsappNumber = "573222754259",
}: PromoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const activeBanner = banners[currentIndex];

  // Auto-advance slider every 6 seconds unless paused
  useEffect(() => {
    if (isPaused || lightboxImage) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [banners.length, isPaused, lightboxImage]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    setTouchStart(null);
  };

  const getWhatsAppLink = (banner: PromoBanner) => {
    const encoded = encodeURIComponent(banner.whatsappMessage);
    return `https://wa.me/${whatsappNumber}?text=${encoded}`;
  };

  return (
    <section className="relative py-12 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs font-extrabold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Promociones Oficiales Destacadas
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Ofertas Especiales en Licencias
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              Cuentas personales y licencias originales con entrega inmediata en WhatsApp (
              <span className="font-bold text-purple-700">322 275 4259</span>).
            </p>
          </div>

          {/* Controls: Prev / Pause / Next */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-purple-600 hover:border-purple-300 transition-all shadow-sm"
              aria-label={isPaused ? "Reanudar carrusel" : "Pausar carrusel"}
              title={isPaused ? "Reanudar auto-play" : "Pausar auto-play"}
            >
              {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
            </button>
            <button
              onClick={handlePrev}
              className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-purple-600 hover:border-purple-300 transition-all shadow-sm"
              aria-label="Anterior promoción"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-purple-600 hover:border-purple-300 transition-all shadow-sm"
              aria-label="Siguiente promoción"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Carousel Card */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative bg-gradient-to-br from-slate-900 via-purple-950 to-slate-950 text-white rounded-3xl p-6 sm:p-10 border border-purple-500/30 shadow-2xl overflow-hidden"
        >
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/15 rounded-full blur-[100px] pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeBanner.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10"
            >
              {/* Left Column: Visual Flyer Poster */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative group max-w-xs sm:max-w-sm w-full rounded-2xl overflow-hidden shadow-2xl border border-purple-400/30 bg-slate-950">
                  <div className="relative aspect-[3/4] w-full">
                    <Image
                      src={activeBanner.image}
                      alt={activeBanner.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                  </div>

                  {/* Overlay button to open full lightbox */}
                  <button
                    onClick={() => setLightboxImage(activeBanner.image)}
                    className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-bold text-white backdrop-blur-xs"
                  >
                    <span className="px-4 py-2 rounded-xl bg-purple-600/90 flex items-center gap-1.5 shadow-lg">
                      <ZoomIn className="w-4 h-4" />
                      Ampliar Afiche Oficial
                    </span>
                  </button>
                </div>
              </div>

              {/* Right Column: Information & Direct Action */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-400/40">
                    {activeBanner.badge}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/10 text-slate-200 border border-white/15">
                    {activeBanner.duration}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                  {activeBanner.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {activeBanner.subtitle}
                </p>

                {/* Bullets List */}
                <div className="space-y-2.5 pt-2">
                  {activeBanner.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-purple-200/80 pt-2 border-t border-white/10">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-purple-400" />
                    Entrega en 5 a 10 min
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-purple-400" />
                    Garantía activa en todo el periodo
                  </span>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
                  <a
                    href={getWhatsAppLink(activeBanner)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-extrabold text-sm text-white bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 shadow-xl shadow-emerald-900/40 transition-all"
                  >
                    Pedir por WhatsApp (322 275 4259)
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => setLightboxImage(activeBanner.image)}
                    className="flex items-center justify-center gap-2 px-5 py-4 rounded-xl font-bold text-xs text-slate-200 bg-white/10 hover:bg-white/20 border border-white/15 transition-all"
                  >
                    <ZoomIn className="w-4 h-4" />
                    Ver Afiche Completo
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8 pt-4 border-t border-white/10">
            {banners.map((b, idx) => (
              <button
                key={b.id}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all rounded-full ${
                  currentIndex === idx
                    ? "w-8 h-2 bg-purple-400 shadow-md shadow-purple-500/50"
                    : "w-2 h-2 bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Ir a promoción ${b.title}`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Navigation Strip */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {banners.map((b, idx) => (
            <button
              key={b.id}
              onClick={() => setCurrentIndex(idx)}
              className={`p-2.5 rounded-2xl text-left transition-all border flex flex-col justify-between ${
                currentIndex === idx
                  ? "bg-purple-600 text-white border-purple-500 shadow-md shadow-purple-600/30 scale-[1.02]"
                  : "bg-white text-slate-700 border-slate-200 hover:border-purple-300 hover:bg-purple-50/50"
              }`}
            >
              <div className="text-[10px] font-extrabold uppercase tracking-wider opacity-80 truncate">
                {b.badge}
              </div>
              <div className="text-xs font-black truncate mt-1">
                {b.title.split("-")[0].trim()}
              </div>
              <div className="text-[10px] opacity-75 mt-0.5 font-semibold">
                {b.duration}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setLightboxImage(null)}
          >
            <div
              className="relative max-w-lg w-full max-h-[90vh] flex flex-col items-center bg-slate-900 rounded-2xl border border-slate-800 p-4 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-3 right-3 p-2 rounded-full bg-slate-800 text-white hover:bg-red-600 transition-colors z-10"
                aria-label="Cerrar vista ampliada"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative w-full max-h-[75vh] aspect-[3/4] rounded-xl overflow-hidden">
                <Image
                  src={lightboxImage}
                  alt="Afiche promocional KAJEX"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>

              <div className="mt-4 w-full flex items-center justify-between gap-3">
                <span className="text-xs text-slate-300 font-medium">
                  Atención directa WhatsApp: 322 275 4259
                </span>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Hola%20KAJEX%20Licencias,%20vi%20la%20publicidad%20oficial%20y%20deseo%20adquirir%20el%20servicio.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md transition-all flex items-center gap-1.5"
                >
                  Pedir por WhatsApp
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
