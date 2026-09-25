export interface POSProduct {
  id: string;
  name: string;
  category: "Software" | "Hardware" | "Kits";
  price: string;
  badge?: string;
  description: string;
  specs: string[];
  icon: string;
}

export interface POSPlan {
  name: string;
  price: string;
  period: string;
  popular?: boolean;
  description: string;
  features: string[];
  cta: string;
}

export interface POSData {
  title: string;
  subtitle: string;
  description: string;
  heroBadge: string;
  whatsappMessage: string;
  benefits: { title: string; description: string; icon: string }[];
  products: POSProduct[];
  plans: POSPlan[];
  faqs: { question: string; answer: string }[];
}

export const posData: POSData = {
  title: "Kajex POS",
  subtitle: "Sistemas Punto de Venta, Software & Equipos Comerciales",
  description:
    "Transforma la gestión de tu comercio o restaurante. Controla tu inventario, agiliza la facturación y supervisa tus ventas diarias con nuestro hardware y software POS de alto rendimiento.",
  heroBadge: "Sistemas POS para Comercios y Restaurantes",
  whatsappMessage: "Hola KAJEX, deseo cotizar el sistema POS y equipos comerciales para mi negocio.",
  benefits: [
    {
      title: "Facturación Ultrarrápida",
      description: "Emite tiquetes de venta en segundos desde cualquier pantalla táctil o computador.",
      icon: "Zap",
    },
    {
      title: "Inventario en Tiempo Real",
      description: "Descuento automático de existencias, alertas de stock bajo y control multi-sucursal.",
      icon: "Server",
    },
    {
      title: "Reportes de Ventas y Ganancias",
      description: "Visualiza gráficos de productos más vendidos, cierre de caja diario y utilidad neta.",
      icon: "TrendingUp",
    },
    {
      title: "Compatibilidad Periférica Total",
      description: "Funciona perfectamente con impresoras de tickets, lectores de código de barras y cajones monedero.",
      icon: "HardDrive",
    },
  ],
  products: [
    {
      id: "soft-pos",
      name: "Software Kajex POS Cloud / Local",
      category: "Software",
      price: "Desde $120.000",
      badge: "Más Vendido",
      description:
        "Sistema amigable para punto de venta. Incluye módulo de inventario, facturación, reporte de caja y usuarios ilimitados.",
      specs: [
        "Interfaz intuitiva de rápida navegación",
        "Impresión de facturas y tickets PDF / Térmico",
        "Soporte para múltiples formas de pago",
        "Copias de seguridad automáticas",
      ],
      icon: "Laptop",
    },
    {
      id: "impresora-80mm",
      name: "Impresora Térmica de Tickets 80mm",
      category: "Hardware",
      price: "Desde $220.000",
      description:
        "Impresora de alta velocidad con cortador automático. Conexión USB, LAN y compatibilidad con cajón monedero.",
      specs: [
        "Velocidad de impresión: 260 mm/s",
        "Cortador de papel automático de larga duración",
        "Compatibilidad con Windows, Android y Linux",
        "No requiere tinta ni cintas",
      ],
      icon: "Printer",
    },
    {
      id: "lector-2d",
      name: "Lector de Código de Barras 1D/2D QR",
      category: "Hardware",
      price: "Desde $130.000",
      badge: "Alta Precisión",
      description:
        "Lector láser ergonómico omnidireccional. Lee códigos impresos y desde pantallas móviles (QR, DataMatrix, EAN).",
      specs: [
        "Escaneo instantáneo sin retrasos",
        "Luz LED guía y sensor automático",
        "Conexión Plug & Play USB",
        "Resistente a caídas desde 1.5 metros",
      ],
      icon: "Scan",
    },
    {
      id: "cajon-monedero",
      name: "Cajón Monedero Metálico Automático",
      category: "Hardware",
      price: "Desde $180.000",
      description:
        "Caja registradora reforzada en acero con apertura automática conectable a la impresora de tiquetes.",
      specs: [
        "5 compartimentos para billetes y 8 para monedas",
        "Pinza sujetadora metálica de alta durabilidad",
        "Cerradura de 3 posiciones con llave",
        "Puerto RJ11 para apertura por software",
      ],
      icon: "CreditCard",
    },
    {
      id: "kit-combo",
      name: "Kit Combo POS Negocio Completo",
      category: "Kits",
      price: "Desde $1.290.000",
      badge: "Solución Integral",
      description:
        "Todo lo necesario para abrir tu punto de venta hoy mismo: computador re-potenciado + impresora + lector + cajón + software configurado.",
      specs: [
        "Computador optimizado listo para trabajar",
        "Impresora térmica + Lector de barras 2D + Cajón metálico",
        "Software POS instalado y configurado con tus datos",
        "Capacitación de uso de 1 hora e instalación gratis",
      ],
      icon: "PackageCheck",
    },
  ],
  plans: [
    {
      name: "Plan Emprendedor",
      price: "$35.000",
      period: "/ mes",
      description: "Ideal para pequeños negocios o tiendas que inician su digitalización.",
      features: [
        "1 Punto de venta",
        "Hasta 500 productos en inventario",
        "Facturación estándar",
        "Reportes básicos mensuales",
        "Soporte por WhatsApp en horario laboral",
      ],
      cta: "Cotizar Plan Emprendedor",
    },
    {
      name: "Plan Comercio Pro",
      price: "$65.000",
      period: "/ mes",
      popular: true,
      description: "Perfecto para negocios consolidados, minimarkets y droguerías con alto volumen.",
      features: [
        "Puntos de venta ilimitados",
        "Productos e inventario ilimitado",
        "Control de caja por turnos de cajeros",
        "Reportes avanzados y exportación Excel",
        "Integración con impresoras y lectores",
        "Soporte prioritario 24/7",
      ],
      cta: "Cotizar Plan Pro",
    },
    {
      name: "Hardware + Licencia Vitalicia",
      price: "Pago Único",
      period: "",
      description: "Para negocios que prefieren comprar el equipo completo sin mensualidades de software.",
      features: [
        "Software POS de pago único (sin mensualidades)",
        "Hardware nuevo con 1 año de garantía",
        "Capacitación inicial del personal",
        "Respaldo de base de datos local",
        "Instalación presencial o remota asistida",
      ],
      cta: "Solicitar Asesoría Personalizada",
    },
  ],
  faqs: [
    {
      question: "¿El sistema POS funciona si se va el internet?",
      answer:
        "Sí, nuestro sistema POS cuenta con modalidad híbrida/local que permite seguir registrando ventas e imprimiendo tickets sin conexión. Al regresar el internet, se sincronizan los datos automáticos.",
    },
    {
      question: "¿Capacitan a mis empleados para usar el sistema?",
      answer:
        "¡Absolutamente! Todos nuestros planes y combos incluyen capacitación guiada para el manejo de inventario, apertura/cierre de caja y emisión de comprobantes.",
    },
    {
      question: "¿Puedo usar impresoras o lectores que ya tengo?",
      answer:
        "Sí. Nuestro software es compatible con el 99% de marcas de periféricos del mercado (Epson, Xprinter, Honeywell, Zebra, Digital POS, etc.).",
    },
    {
      question: "¿Cuentan con garantía física en los equipos?",
      answer:
        "Todos los equipos de hardware (impresoras, lectores, cajones monedero) cuentan con garantía directa de 6 a 12 meses contra defectos de fábrica.",
    },
  ],
};
