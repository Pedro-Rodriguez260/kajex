import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Kajex IT — Mantenimiento y repotenciación de computadores" },
  description:
    "Mantenimiento preventivo desde $80.000, cambio a disco SSD, ampliación de RAM y formateo con backup incluido. Agenda por WhatsApp.",
};

export default function Layout({ children }: LayoutProps<"/it">) {
  return children;
}
