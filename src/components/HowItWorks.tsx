import { Settings2, ScanLine, TrendingUp } from "lucide-react";
import { Reveal } from "./Reveal";

const STEPS = [
  {
    icon: Settings2,
    title: "Configura tu catálogo",
    description:
      "Importa tus productos, precios y categorías en minutos. Nosotros te ayudamos con la migración.",
  },
  {
    icon: ScanLine,
    title: "Vende desde donde estés",
    description:
      "Escanea, cobra y factura desde el mostrador, una tablet o tu celular, con o sin conexión.",
  },
  {
    icon: TrendingUp,
    title: "Analiza y crece",
    description:
      "Revisa qué se vende más, controla tu inventario y toma decisiones con datos reales.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative py-16 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Empieza a vender en{" "}
            <span className="text-gradient">tres pasos</span>
          </h2>
          <p className="mt-4 text-foreground-muted">
            Sin instalaciones complicadas ni curvas de aprendizaje eternas.
          </p>
        </Reveal>

        <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent sm:block" />
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1} className="relative text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-border-subtle bg-background-panel text-accent-soft">
                <step.icon size={26} />
              </div>
              <div className="mx-auto mt-4 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-semibold text-white">
                {i + 1}
              </div>
              <h3 className="mt-4 text-lg font-medium">{step.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm text-foreground-muted">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
