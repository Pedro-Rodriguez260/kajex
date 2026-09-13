import {
  Receipt,
  Boxes,
  Store,
  LineChart,
  Printer,
  Smartphone,
} from "lucide-react";
import { Reveal } from "./Reveal";

const FEATURES = [
  {
    icon: Receipt,
    title: "Facturación electrónica",
    description:
      "Emite facturas electrónicas válidas ante la DIAN en segundos, desde cualquier punto de venta.",
  },
  {
    icon: Boxes,
    title: "Inventario en tiempo real",
    description:
      "Controla existencias, alertas de stock bajo y traslados entre bodegas sin hojas de cálculo.",
  },
  {
    icon: Store,
    title: "Multi-sucursal",
    description:
      "Administra todas tus tiendas desde un solo panel, con permisos y cajas independientes.",
  },
  {
    icon: LineChart,
    title: "Reportes y analítica",
    description:
      "Ventas, productos más vendidos y rendimiento por cajero, en dashboards fáciles de leer.",
  },
  {
    icon: Printer,
    title: "Compatible con tu hardware",
    description:
      "Funciona con lectores de código de barras, impresoras térmicas y cajones de dinero.",
  },
  {
    icon: Smartphone,
    title: "Desde cualquier dispositivo",
    description:
      "Vende desde computador, tablet o celular. Tu información siempre sincronizada en la nube.",
  },
];

export function Features() {
  return (
    <section id="funciones" className="relative py-16 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Todo lo que tu negocio necesita,{" "}
            <span className="text-gradient">en un solo sistema</span>
          </h2>
          <p className="mt-4 text-foreground-muted">
            Kajex reemplaza tu caja registradora, tus cuadernos de inventario
            y tus hojas de cálculo con una sola herramienta simple de usar.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.05}>
              <div className="group h-full rounded-2xl border border-border-subtle bg-background-panel/60 p-6 transition-colors hover:border-accent/40 hover:bg-background-panel">
                <div className="inline-flex rounded-xl bg-primary/10 p-3 text-primary-bright transition-colors group-hover:bg-accent/10 group-hover:text-accent-soft">
                  <feature.icon size={22} />
                </div>
                <h3 className="mt-4 text-lg font-medium">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
