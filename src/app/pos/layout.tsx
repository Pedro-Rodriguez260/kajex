import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Kajex POS — Sistema punto de venta" },
  description:
    "Software POS para ventas e inventario, impresoras térmicas, lectores de código de barras y cajones monedero. Cotiza por WhatsApp.",
};

export default function Layout({ children }: LayoutProps<"/pos">) {
  return children;
}
