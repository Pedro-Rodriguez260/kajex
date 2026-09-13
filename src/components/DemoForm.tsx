"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";

type Values = {
  nombre: string;
  tienda: string;
  whatsapp: string;
  correo: string;
};

const EMPTY: Values = { nombre: "", tienda: "", whatsapp: "", correo: "" };

const inputClass =
  "w-full rounded-xl border border-border-subtle bg-background-elevated px-4 py-3 text-sm outline-none placeholder:text-foreground-muted focus:border-accent/60";

export function DemoForm() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">(
    "idle",
  );
  const [error, setError] = useState("");

  function update(field: keyof Values) {
    return (e: ChangeEvent<HTMLInputElement>) =>
      setValues((v) => ({ ...v, [field]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "No se pudo enviar la solicitud.");
      }

      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error ? err.message : "No se pudo enviar la solicitud.",
      );
    }
  }

  if (status === "sent") {
    return (
      <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-2 rounded-full border border-accent/40 bg-background-elevated px-5 py-3 text-sm text-accent-soft">
        <Check size={16} />
        ¡Listo! Te contactaremos muy pronto.
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-8 flex max-w-lg flex-col gap-3 text-left"
    >
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input
          required
          placeholder="Tu nombre"
          value={values.nombre}
          onChange={update("nombre")}
          className={inputClass}
        />
        <input
          required
          placeholder="Nombre de tu tienda"
          value={values.tienda}
          onChange={update("tienda")}
          className={inputClass}
        />
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input
          required
          type="tel"
          placeholder="Número de WhatsApp"
          value={values.whatsapp}
          onChange={update("whatsapp")}
          className={inputClass}
        />
        <input
          type="email"
          placeholder="Correo (opcional)"
          value={values.correo}
          onChange={update("correo")}
          className={inputClass}
        />
      </div>

      {status === "error" && (
        <p className="text-xs text-red-400">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="group mt-1 flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.02] hover:bg-primary-bright disabled:opacity-70 disabled:hover:scale-100"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            Solicitar demo
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </>
        )}
      </button>
    </form>
  );
}
