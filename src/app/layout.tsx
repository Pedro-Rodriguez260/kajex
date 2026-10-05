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
    default: "KAJEX Colombia | Sistemas POS, Soporte IT y Licencias Digitales",
    template: "%s | KAJEX Colombia",
  },
  description:
    "KAJEX Colombia: Soluciones tecnológicas para negocios en Colombia. Sistemas y software punto de venta (POS), mantenimiento y repotenciación computacional (IT), y licencias oficiales. Atención y envíos a toda Colombia.",
  keywords: [
    "KAJEX",
    "KAJEX Colombia",
    "Kajexpos",
    "Kajex POS",
    "Kajex IT",
    "Kajex Licencias",
    "Sistema POS Colombia",
    "Software de punto de venta Colombia",
    "Impresora térmica POS",
    "Cajón monedero",
    "Lector de código de barras",
    "Repotenciación de PC Colombia",
    "Mantenimiento de computadores",
    "Cambio disco SSD",
    "Licencias digitales Colombia",
    "Platzi Colombia",
    "Microsoft 365 Colombia",
    "Canva Pro Colombia",
  ],
  authors: [{ name: "KAJEX Colombia" }],
  creator: "KAJEX Colombia",
  publisher: "KAJEX Colombia",
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
    languages: {
      "es-CO": "https://www.kajexpos.com",
    },
  },
  openGraph: {
    title: "KAJEX Colombia | Sistemas POS, Soporte IT y Licencias Digitales",
    description:
      "Potencia tu negocio en Colombia con KAJEX. Punto de venta ultrarrápido, repotenciación computacional y licencias digitales oficiales con garantía y entrega inmediata.",
    url: "https://www.kajexpos.com",
    siteName: "KAJEX Colombia",
    images: [
      {
        url: "/logo2.png",
        width: 800,
        height: 600,
        alt: "KAJEX Colombia Logo",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KAJEX Colombia | Ecosistema Tecnológico para tu Negocio",
    description:
      "Sistemas POS, mantenimiento de computadores y licencias digitales oficiales en Colombia.",
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
  other: {
    "geo.region": "CO",
    "geo.placename": "Colombia",
    "geo.position": "4.60971;-74.08175",
    ICBM: "4.60971, -74.08175",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Store", "ProfessionalService"],
    name: "KAJEX Colombia",
    alternateName: ["KAJEX", "Kajex POS", "Kajex IT", "Kajex Licencias", "kajexpos.com"],
    url: "https://www.kajexpos.com",
    logo: "https://www.kajexpos.com/logo2.png",
    image: "https://www.kajexpos.com/logo2.png",
    description:
      "Empresa colombiana líder en soluciones tecnológicas: sistemas y software punto de venta (POS), servicio técnico computacional e instalación de licencias de software oficiales.",
    telephone: "+573222754259",
    priceRange: "$$",
    currenciesAccepted: "COP",
    paymentAccepted: "Efectivo, Nequi, Daviplata, Bancolombia, Tarjeta de Crédito",
    address: {
      "@type": "PostalAddress",
      addressCountry: "CO",
      addressRegion: "Colombia",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "4.60971",
      longitude: "-74.08175",
    },
    areaServed: {
      "@type": "Country",
      name: "Colombia",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+57-322-275-4259",
      contactType: "customer service",
      areaServed: "CO",
      availableLanguage: ["Spanish"],
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "19:00",
      },
    ],
  };

  return (
    <html
      lang="es-CO"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/icon.png" sizes="any" />
        <meta name="geo.region" content="CO" />
        <meta name="geo.placename" content="Colombia" />
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
