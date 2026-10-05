import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Kajex POS Colombia — Software Punto de Venta y Equipos Comerciales" },
  description:
    "Software POS para ventas e inventario, impresoras térmicas, lectores de código de barras y cajones monedero en Colombia. Facturación ágil para comercios y restaurantes con envíos a nivel nacional.",
  keywords: [
    "Kajex POS Colombia",
    "Sistema POS Colombia",
    "Software punto de venta Colombia",
    "Impresora térmica de tickets",
    "Lector código de barras",
    "Cajón monedero Colombia",
  ],
  alternates: {
    canonical: "/pos",
  },
};

export default function Layout({ children }: LayoutProps<"/pos">) {
  return children;
}
