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
    default: "KAJEXPOS Colombia | Sistemas POS, Soporte IT y Licencias Digitales",
    template: "%s | KAJEXPOS Colombia",
  },
  description:
    "KAJEXPOS (https://www.kajexpos.com): Soluciones tecnológicas en Colombia. Sistemas y software punto de venta (POS), mantenimiento y repotenciación computacional (IT), y licencias oficiales. Atención y envíos a toda Colombia.",
  keywords: [
    "KAJEXPOS",
    "kajexpos",
    "kajexpos.com",
    "KAJEXPOS Colombia",
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
  authors: [{ name: "KAJEXPOS" }],
  creator: "KAJEXPOS",
  publisher: "KAJEXPOS",
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
    canonical: "https://www.kajexpos.com/",
    languages: {
      "es-CO": "https://www.kajexpos.com/",
    },
  },
  openGraph: {
    title: "KAJEXPOS Colombia | Sistemas POS, Soporte IT y Licencias Digitales",
    description:
      "Potencia tu negocio en Colombia con KAJEXPOS (kajexpos.com). Punto de venta ultrarrápido, repotenciación computacional y licencias digitales oficiales con garantía y entrega inmediata.",
    url: "https://www.kajexpos.com/",
    siteName: "KAJEXPOS Colombia",
    images: [
      {
        url: "/logo2.png",
        width: 800,
        height: 600,
        alt: "KAJEXPOS Logo",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KAJEXPOS Colombia | Sistemas POS, IT y Licencias",
    description:
      "KAJEXPOS: Sistemas POS, mantenimiento de computadores y licencias digitales oficiales en Colombia.",
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
    name: "KAJEXPOS",
    alternateName: ["KAJEXPOS Colombia", "Kajexpos", "kajexpos.com", "Kajex POS", "Kajex IT", "Kajex Licencias"],
    url: "https://www.kajexpos.com/",
    logo: "https://www.kajexpos.com/logo2.png",
    image: "https://www.kajexpos.com/logo2.png",
    description:
      "KAJEXPOS: Empresa colombiana líder en soluciones tecnológicas. Sistemas y software punto de venta (POS), servicio técnico computacional e instalación de licencias de software oficiales en Colombia.",
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
