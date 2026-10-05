import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Kajex Licencias Colombia — Software, Cursos, IA y Streaming" },
  description:
    "Cuentas personales y licencias oficiales en Colombia: Platzi, Microsoft 365, Canva Pro, Coursera, Duolingo, Figma, ChatGPT Plus y Streaming. Activación rápida y pagos locales por Nequi y Daviplata.",
  keywords: [
    "Kajex Licencias Colombia",
    "Licencias digitales Colombia",
    "Platzi Colombia",
    "Microsoft 365 Colombia",
    "Canva Pro Colombia",
    "Coursera Plus Colombia",
    "Duolingo Super Colombia",
    "Figma Pro Colombia",
    "ChatGPT Plus Colombia",
  ],
  alternates: {
    canonical: "/licencias",
  },
};

export default function Layout({ children }: LayoutProps<"/licencias">) {
  return children;
}
