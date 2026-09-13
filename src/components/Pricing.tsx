import { Check } from "lucide-react";
import { Reveal } from "./Reveal";

const PLANS = [
  {
    name: "POS",
    price: "45.000",
    description: "El punto de venta completo para tu negocio del día a día.",
    features: [
      "Punto de venta ilimitado",
      "Control de inventario en tiempo real",
      "Control de caja y turnos",
      "Compatible con lector de código de barras e impresora térmica",
      "Soporte por chat",
    ],
    highlighted: false,
  },
  {
    name: "POS + Facturación electrónica",
    price: "60.000",
    description: "Todo lo del plan POS, más facturación electrónica ante la DIAN.",
    features: [
      "Todo lo incluido en el plan POS",
      "Facturación electrónica DIAN",
      "Notas crédito y débito electrónicas",
      "Reportes y analítica",
      "Soporte prioritario",
    ],
    highlighted: true,
  },
];

export function Pricing() {
  return (
    <section id="precios" className="relative py-16 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Precios <span className="text-gradient">simples y claros</span>
          </h2>
          <p className="mt-4 text-foreground-muted">
            Sin letra pequeña. Cambia o cancela tu plan cuando quieras.
          </p>
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.08}>
              <div
                className={`relative flex h-full flex-col rounded-2xl border p-7 ${
                  plan.highlighted
                    ? "glow-border border-primary/50 bg-background-panel"
                    : "border-border-subtle bg-background-panel/60"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-7 rounded-full bg-primary px-3 py-1 text-xs font-medium text-white">
                    Recomendado
                  </span>
                )}
                <h3 className="text-lg font-medium">{plan.name}</h3>
                <p className="mt-1 text-sm text-foreground-muted">
                  {plan.description}
                </p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-sm text-foreground-muted">$</span>
                  <span className="text-3xl font-semibold">{plan.price}</span>
                  <span className="text-sm text-foreground-muted">/mes</span>
                </div>

                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-accent-soft"
                      />
                      <span className="text-foreground-muted">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contacto"
                  className={`mt-8 rounded-full px-5 py-2.5 text-center text-sm font-medium transition-transform hover:scale-[1.02] ${
                    plan.highlighted
                      ? "bg-primary text-white hover:bg-primary-bright"
                      : "border border-border-subtle text-foreground hover:border-accent/50"
                  }`}
                >
                  Solicitar demo
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
