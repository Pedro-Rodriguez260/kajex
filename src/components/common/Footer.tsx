import Link from "next/link";
import { ShoppingBag, Wrench, Sparkles, Home, Phone, Mail, MapPin } from "lucide-react";

interface FooterProps {
  whatsappNumber?: string;
  whatsappFormatted?: string;
}

export function Footer({
  whatsappNumber = "573144802437",
  whatsappFormatted = "+57 314 480 2437",
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-800/80 bg-slate-950 text-slate-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/60">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/70 shadow-lg">
                <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                  K
                </span>
              </div>
              <span className="font-black text-2xl tracking-wider text-white">
                KAJEX
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Ecosistema tecnológico integral. Soluciones avanzadas en punto de venta (POS), mantenimiento y repotenciación computacional (IT) y licencias digitales oficiales.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Soporte Activo
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800">
                Envíos a todo el país
              </span>
            </div>
          </div>

          {/* Unidades de Negocio */}
          <div className="space-y-3">
            <h3 className="text-xs font-extrabold text-white uppercase tracking-wider">
              Unidades KAJEX
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
                >
                  <Home className="w-4 h-4 text-cyan-400" />
                  Inicio (kajexpos.com)
                </Link>
              </li>
              <li>
                <Link
                  href="/pos"
                  className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                >
                  <ShoppingBag className="w-4 h-4 text-blue-400" />
                  Kajex POS (pos.kajexpos.com)
                </Link>
              </li>
              <li>
                <Link
                  href="/it"
                  className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
                >
                  <Wrench className="w-4 h-4 text-emerald-400" />
                  Kajex IT (it.kajexpos.com)
                </Link>
              </li>
              <li>
                <Link
                  href="/licencias"
                  className="flex items-center gap-2 hover:text-violet-400 transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-violet-400" />
                  Kajex Licencias (licencias.kajexpos.com)
                </Link>
              </li>
            </ul>
          </div>

          {/* Servicios Destacados */}
          <div className="space-y-3">
            <h3 className="text-xs font-extrabold text-white uppercase tracking-wider">
              Servicios Destacados
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Software POS & Impresoras</li>
              <li>Lectores 2D & Cajones Monedero</li>
              <li>Repotenciación a Discos SSD</li>
              <li>Aumento de Memoria RAM</li>
              <li>Cuentas ChatGPT Plus & Midjourney</li>
              <li>Streaming 4K Ultra HD</li>
            </ul>
          </div>

          {/* Contacto Directo */}
          <div className="space-y-3">
            <h3 className="text-xs font-extrabold text-white uppercase tracking-wider">
              Atención al Cliente
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400" />
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: {whatsappFormatted}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a
                  href="mailto:Ayuda.grupoit@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  Ayuda.grupoit@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                <span>Atención Nacional y Envíos a Todo el País</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} KAJEX. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-slate-200 transition-colors">
              Términos de Servicio
            </Link>
            <Link href="/" className="hover:text-slate-200 transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/" className="hover:text-slate-200 transition-colors">
              Garantías & Soporte
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
