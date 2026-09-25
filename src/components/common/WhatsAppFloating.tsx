"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface WhatsAppFloatingProps {
  message?: string;
  phoneNumber?: string;
  accent?: "hub" | "pos" | "it" | "licencias";
}

export function WhatsAppFloating({
  message = "Hola KAJEX, deseo solicitar información sobre sus servicios.",
  phoneNumber = "573144802437",
  accent = "hub",
}: WhatsAppFloatingProps) {
  const [hovered, setHovered] = useState(false);

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  const getAccentBadgeColor = () => {
    switch (accent) {
      case "pos":
        return "bg-blue-600 hover:bg-blue-500 shadow-blue-500/30";
      case "it":
        return "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-500/30";
      case "licencias":
        return "bg-violet-600 hover:bg-violet-500 shadow-violet-500/30";
      default:
        return "bg-emerald-500 hover:bg-emerald-400 shadow-emerald-500/40";
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip visible al hacer hover */}
      <motion.div
        initial={{ opacity: 0, x: 10, scale: 0.95 }}
        animate={{
          opacity: hovered ? 1 : 0,
          x: hovered ? 0 : 10,
          scale: hovered ? 1 : 0.95,
        }}
        transition={{ duration: 0.2 }}
        className="pointer-events-none hidden sm:block bg-slate-900/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-2 rounded-xl border border-slate-700/60 shadow-xl"
      >
        ¡Habla con nosotros por WhatsApp!
      </motion.div>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`relative flex items-center justify-center w-14 h-14 rounded-full text-white shadow-2xl transition-all ${getAccentBadgeColor()}`}
        aria-label="Contactar por WhatsApp"
      >
        {/* Efecto de pulso en el botón */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping opacity-75 pointer-events-none" />

        <svg
          className="w-7 h-7 fill-current relative z-10"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.006 3.674 3.749-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </motion.a>
    </div>
  );
}
