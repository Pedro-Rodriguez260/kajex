import { Reveal } from "./Reveal";

const TESTIMONIALS = [
  {
    quote:
      "Con Kajex controlamos el inventario del taller y de la distribuidora de repuestos desde un solo sistema. Facturar ya no nos quita tiempo.",
    name: "MotoSpeed",
    role: "Distribuidora de repuestos y taller",
  },
  {
    quote:
      "Pasamos de anotar todo a mano a tener cada venta y cada producto controlado en tiempo real. La facturación electrónica nos ahorra horas cada semana.",
    name: "Ferretería JJ",
    role: "Ferretería",
  },
  {
    quote:
      "Kajex se adaptó a cómo trabajamos en la metalúrgica: control de caja, inventario y facturación electrónica en un solo lugar.",
    name: "Encofrados FYF",
    role: "Metalúrgica",
  },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="relative py-16 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Negocios que ya <span className="text-gradient">venden con Kajex</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col justify-between rounded-2xl border border-border-subtle bg-background-panel/60 p-6">
                <blockquote className="text-sm leading-relaxed text-foreground">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-border-subtle pt-4">
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-foreground-muted">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
