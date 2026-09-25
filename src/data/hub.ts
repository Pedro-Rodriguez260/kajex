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
  brandName: "KAJEX",
  slogan: "Soluciones Tecnológicas Integrales para Tu Crecimiento",
  heroDescription:
    "Especialistas en sistemas punto de venta (POS), mantenimiento informático profesional y licencias digitales oficiales de streaming e inteligencia artificial.",
  stats: [
    { value: "+500", label: "Negocios Equipados" },
    { value: "99.9%", label: "Garantía & Soporte" },
    { value: "+1,200", label: "Equipos Repotenciados" },
    { value: "24/7", label: "Atención Rápida por WhatsApp" },
  ],
  businessUnits: [
    {
      id: "pos",
      title: "Kajex POS",
      subtitle: "Sistemas Punto de Venta & Hardware Comercial",
      description:
        "Software agilizado para ventas e inventario, cajones monedero, lectores de código de barras e impresoras térmicas de tickets. Todo lo necesario para automatizar tu negocio.",
      accent: "pos",
      badge: "Sistemas de Venta",
      href: "/pos",
      subdomain: "https://pos.kajexpos.com",
      iconName: "ShoppingBag",
      features: [
        "Software POS rápido e intuitivo",
        "Control en tiempo real de inventario",
        "Impresoras de tickets y lectores HD",
        "Kits completos para locales y restaurantes",
      ],
      ctaText: "Explorar Kajex POS",
    },
    {
      id: "it",
      title: "Kajex IT",
      subtitle: "Mantenimiento & Repotenciación Computacional",
      description:
        "Servicios técnicos especializados para computadores de escritorio y portátiles. Mantenimiento preventivo, aumento de RAM, cambio a discos sólidos SSD y reparación experta.",
      accent: "it",
      badge: "Soporte Técnico",
      href: "/it",
      subdomain: "https://it.kajexpos.com",
      iconName: "Wrench",
      features: [
        "Mantenimiento preventivo y correctivo",
        "Repotenciación a SSD y memoria RAM",
        "Limpieza profunda y cambio de pasta térmica",
        "Diagnóstico rápido y garantía directa",
      ],
      ctaText: "Ver Servicios IT",
    },
    {
      id: "licencias",
      title: "Kajex Licencias",
      subtitle: "Software Digital, IA & Entretenimiento",
      description:
        "Acceso inmediato a cuentas y licencias originales de las principales herramientas de Inteligencia Artificial (ChatGPT, Midjourney, Claude) y plataformas de Streaming.",
      accent: "licencias",
      badge: "Licencias Digitales",
      href: "/licencias",
      subdomain: "https://licencias.kajexpos.com",
      iconName: "Sparkles",
      features: [
        "Cuentas de IA: ChatGPT, Midjourney, Claude Pro",
        "Streaming: Netflix, Disney+, Spotify, HBO Max",
        "Activación rápida e instantánea",
        "Soporte y garantía durante todo el periodo",
      ],
      ctaText: "Ver Catálogo de Licencias",
    },
  ],
  aboutUs: {
    title: "Impulsamos Tu Negocio con Tecnología Confiable",
    description1:
      "En KAJEX centralizamos la tecnología que tu negocio y tu vida personal necesitan. Desde la gestión y automatización de cobros en tu local comercial con nuestros sistemas POS, hasta el respaldo técnico especializado para tus computadores y la provisión de las mejores herramientas de software e IA.",
    description2:
      "Nos distingue la rapidez en el servicio, la calidad de nuestros equipos y la transparencia absoluta en cada cotización.",
    pillars: [
      {
        title: "Calidad Garantizada",
        desc: "Equipos probados y licencias originales con soporte posventa activo.",
        icon: "ShieldCheck",
      },
      {
        title: "Atención Inmediata",
        desc: "Respuesta rápida por WhatsApp para cotizaciones, agendamientos y consultas.",
        icon: "MessageSquare",
      },
      {
        title: "Precios Competitivos",
        desc: "Planes accesibles ajustados a emprendedores, pymes y negocios en expansión.",
        icon: "Zap",
      },
    ],
  },
  contact: {
    whatsappNumber: "573000000000",
    whatsappFormatted: "+57 300 000 0000",
    email: "contacto@kajexpos.com",
    location: "Atención Nacional y Envíos a Todo el País",
    schedule: "Lunes a Sábado: 8:00 AM - 7:00 PM",
  },
};
