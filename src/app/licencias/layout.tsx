import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Kajex Licencias — Software, IA y streaming" },
  description:
    "Licencias digitales oficiales de software, inteligencia artificial y streaming con activación rápida y soporte.",
};

export default function Layout({ children }: LayoutProps<"/licencias">) {
  return children;
}
