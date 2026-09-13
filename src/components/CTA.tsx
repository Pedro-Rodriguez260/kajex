import { Reveal } from "./Reveal";
import { DemoForm } from "./DemoForm";

export function CTA() {
  return (
    <section id="contacto" className="relative py-16 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="glow-border relative overflow-hidden rounded-3xl border border-primary/30 bg-background-panel px-8 py-14 text-center sm:px-16">
            <div className="pointer-events-none absolute inset-0 grid-overlay opacity-40" />
            <div className="animate-pulse-glow pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/20 blur-[100px]" />

            <div className="relative">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Empieza a vender de forma{" "}
                <span className="text-gradient">más inteligente</span>
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-foreground-muted">
                Agenda una demo gratuita y descubre cómo Kajex puede
                simplificar la operación diaria de tu negocio.
              </p>

              <DemoForm />
              <p className="mt-3 text-xs text-foreground-muted">
                Sin tarjeta de crédito. Te contactamos en menos de 24 horas.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
