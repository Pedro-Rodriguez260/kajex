export interface BusinessUnit {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  accent: "pos" | "it" | "licencias";
  badge: string;
  href: string;
  subdomain: string;
  iconName: string;
  features: string[];
  ctaText: string;
}

export interface HubData {
  brandName: string;
  slogan: string;
  heroDescription: string;
  stats: { value: string; label: string }[];
  businessUnits: BusinessUnit[];
  aboutUs: {
    title: string;
    description1: string;
    description2: string;
    pillars: { title: string; desc: string; icon: string }[];
  };
  contact: {
    whatsappNumber: string;
    whatsappFormatted: string;
    email: string;
    location: string;
    schedule: string;
  };
}

export const hubData: HubData = {
  brandName: "KAJEXPOS",
  slogan: "Soluciones Tecnológicas Integrales para Tu Crecimiento",
  heroDescription:
    "En KAJEXPOS (kajexpos.com) somos especialistas en Colombia en sistemas punto de venta (POS), mantenimiento informático profesional (IT) y licencias digitales oficiales con envíos y cobertura a nivel nacional.",
  stats: [
    { value: "+500", label: "Negocios en Colombia" },
    { value: "99.9%", label: "Garantía & Soporte" },
    { value: "+1,200", label: "Equipos Repotenciados" },
    { value: "24/7", label: "Atención por WhatsApp" },
  ],
  businessUnits: [
    {
      id: "pos",
      title: "Kajex POS Colombia",
      subtitle: "Sistemas Punto de Venta & Hardware Comercial",
      description:
        "Software agilizado para ventas e inventario, cajones monedero, lectores de código de barras e impresoras térmicas de tickets. Todo lo necesario para automatizar tu local o restaurante en Colombia.",
      accent: "pos",
      badge: "Sistemas de Venta",
      href: "/pos",
      subdomain: "https://pos.kajexpos.com",
      iconName: "ShoppingBag",
      features: [
        "Software POS rápido e intuitivo para Colombia",
        "Control en tiempo real de inventario y caja",
        "Impresoras térmicas de tickets y lectores 2D",
        "Kits completos para locales y restaurantes",
      ],
      ctaText: "Explorar Kajex POS",
    },
    {
      id: "it",
      title: "Kajex IT Colombia",
      subtitle: "Mantenimiento & Repotenciación Computacional",
      description:
        "Servicios técnicos especializados para computadores de escritorio y portátiles. Mantenimiento preventivo, aumento de RAM, cambio a discos sólidos SSD y reparación experta con repuestos de calidad.",
      accent: "it",
      badge: "Soporte Técnico",
      href: "/it",
      subdomain: "https://it.kajexpos.com",
      iconName: "Wrench",
      features: [
        "Mantenimiento preventivo y correctivo profundo",
        "Repotenciación a SSD y memoria RAM veloz",
        "Limpieza profunda y cambio de pasta térmica",
        "Diagnóstico rápido y garantía directa",
      ],
      ctaText: "Ver Servicios IT",
    },
    {
      id: "licencias",
      title: "Kajex Licencias Colombia",
      subtitle: "Software Digital, IA, Educación & Entretenimiento",
      description:
        "Acceso inmediato a cuentas personales y licencias originales de Platzi, Microsoft 365, Canva Pro, Coursera, Duolingo, Figma, ChatGPT Plus y Streaming con pagos por Nequi, Daviplata y Bancolombia.",
      accent: "licencias",
      badge: "Licencias Digitales",
      href: "/licencias",
      subdomain: "https://licencias.kajexpos.com",
      iconName: "Sparkles",
      features: [
        "Platzi, Coursera, Duolingo y Figma Pro",
        "Microsoft 365 Personal con 1TB OneDrive",
        "ChatGPT Plus, Midjourney y Claude Pro",
        "Pagos locales: Nequi, Daviplata y Bancolombia",
      ],
      ctaText: "Ver Catálogo de Licencias",
    },
  ],
  aboutUs: {
    title: "Impulsamos Negocios y Profesionales en Colombia con Tecnología Confiable",
    description1:
      "En KAJEXPOS (kajexpos.com) centralizamos la tecnología que tu negocio y tu vida profesional necesitan en Colombia. Desde la automatización comercial con sistemas POS rápidos y robustos, hasta el respaldo técnico informático para tus computadores y la provisión de las mejores herramientas de software, educación e inteligencia artificial.",
    description2:
      "Nos distingue la atención inmediata por WhatsApp (322 275 4259), la calidad comprobada de nuestros productos y la transparencia total con precios en pesos colombianos (COP).",
    pillars: [
      {
        title: "Garantía en Colombia",
        desc: "Equipos probados y licencias originales con soporte posventa activo y seguro.",
        icon: "ShieldCheck",
      },
      {
        title: "Atención Inmediata",
        desc: "Respuesta rápida por WhatsApp para cotizaciones, entregas y soporte en minutos.",
        icon: "MessageSquare",
      },
      {
        title: "Precios Competitivos en COP",
        desc: "Planes accesibles en pesos colombianos con medios de pago locales (Nequi, Daviplata, Bancolombia).",
        icon: "Zap",
      },
    ],
  },
  contact: {
    whatsappNumber: "573222754259",
    whatsappFormatted: "+57 322 275 4259",
    email: "Ayuda.grupoit@gmail.com",
    location: "Atención Nacional y Envíos a Toda Colombia (Bogotá, Medellín, Cali, Barranquilla y todo el país)",
    schedule: "Lunes a Sábado: 8:00 AM - 7:00 PM",
  },
};
