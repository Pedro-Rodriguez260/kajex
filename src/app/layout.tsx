import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kajexpos.com"),
  title: {
    default: "KAJEX | Sistemas POS, Servicio Técnico e Instalación de Licencias",
    template: "%s | KAJEX",
  },
  description:
    "Soluciones integrales KAJEX: Software y hardware de punto de venta (POS), mantenimiento y repotenciación computacional (IT), y licencias digitales oficiales. Envíos y atención a nivel nacional en Colombia.",
  keywords: [
    "Sistema POS Colombia",
    "Software de punto de venta",
    "Impresora térmica POS",
    "Cajón monedero",
    "Lector de código de barras",
    "Repotenciación de PC",
    "Mantenimiento de computadores",
    "Cambio disco SSD",
    "Licencias digitales Colombia",
    "Kajex POS",
    "Kajex IT",
  ],
  authors: [{ name: "KAJEX" }],
  creator: "KAJEX",
  publisher: "KAJEX",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "KAJEX | Sistemas POS, Servicio Técnico e Instalación de Licencias",
    description:
      "Potencia tu negocio con KAJEX. Punto de venta ultrarrápido, repotenciación computacional y licencias digitales oficiales con garantía.",
    url: "https://www.kajexpos.com",
    siteName: "KAJEX",
    images: [
      {
        url: "/logo2.png",
        width: 800,
        height: 600,
        alt: "KAJEX Logo",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KAJEX | Ecosistema Tecnológico Unificado",
    description:
      "Sistemas POS, mantenimiento de equipos y licencias digitales en Colombia.",
    images: ["/logo2.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "KAJEX",
    url: "https://www.kajexpos.com",
    logo: "https://www.kajexpos.com/logo2.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+57-314-480-2437",
      contactType: "customer service",
      areaServed: "CO",
      availableLanguage: "Spanish",
    },
    sameAs: [],
  };

  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/icon.png" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
