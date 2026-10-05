import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Kajex IT Colombia — Mantenimiento y Repotenciación de Computadores" },
  description:
    "Servicio técnico informático en Colombia: mantenimiento preventivo, cambio a discos SSD de alta velocidad, aumento de memoria RAM y formateo con respaldo de archivos.",
  keywords: [
    "Kajex IT Colombia",
    "Mantenimiento de computadores Colombia",
    "Repotenciación SSD Colombia",
    "Cambio disco sólido portátil",
    "Aumento de memoria RAM",
    "Servicio técnico PC Colombia",
  ],
  alternates: {
    canonical: "/it",
  },
};

export default function Layout({ children }: LayoutProps<"/it">) {
  return children;
}
