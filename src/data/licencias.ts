export interface LicenseItem {
  id: string;
  name: string;
  category: "Inteligencia Artificial" | "Streaming" | "Productividad";
  duration: string;
  price: string;
  originalPrice?: string;
  popular?: boolean;
  badge?: string;
  description: string;
  features: string[];
  icon: string;
}

export interface LicenciasData {
  title: string;
  subtitle: string;
  description: string;
  heroBadge: string;
  whatsappBaseMessage: string;
  licenses: LicenseItem[];
  buySteps: { number: string; title: string; description: string }[];
  guarantees: { title: string; description: string; icon: string }[];
}

export const licenciasData: LicenciasData = {
  title: "Kajex Licencias",
  subtitle: "Cuentas Digitales, Inteligencia Artificial & Streaming",
  description:
    "Obtén acceso inmediato a las plataformas de Inteligencia Artificial más potentes del mercado y a los mejores servicios de entretenimiento con garantía total y soporte continuo.",
  heroBadge: "Activación Inmediata • Licencias 100% Garantizadas",
  whatsappBaseMessage: "Hola KAJEX Licencias, deseo adquirir la licencia de:",
  licenses: [
    {
      id: "chatgpt-plus",
      name: "ChatGPT Plus (GPT-4o & Canvas)",
      category: "Inteligencia Artificial",
      duration: "1 Mes",
      price: "$28.000",
      originalPrice: "$85.000",
      popular: true,
      badge: "Más Solicitada",
      description:
        "Acceso completo a GPT-4o, generación de imágenes con DALL-E 3, análisis de archivos, navegación web y modo voz avanzado.",
      features: [
        "Acceso ilimitado a modelos GPT-4o y GPT-4",
        "Generador de imágenes DALL-E 3 integrado",
        "Carga de archivos PDF, Excel y código",
        "Respuesta ultrarrápida y cero tiempos de espera",
      ],
      icon: "Bot",
    },
    {
      id: "midjourney-v6",
      name: "Midjourney Pro V6",
      category: "Inteligencia Artificial",
      duration: "1 Mes",
      price: "$35.000",
      originalPrice: "$120.000",
      badge: "Diseño & Arte",
      description:
        "La herramienta definitiva para crear imágenes hiperrealistas e ilustraciones profesionales con comandos de texto.",
      features: [
        "Generación ilimitada de imágenes relajadas",
        "Modo Fast de rápida creación",
        "Derechos de uso comercial completos",
        "Acceso vía servidor Discord exclusivo",
      ],
      icon: "Sparkles",
    },
    {
      id: "claude-pro",
      name: "Claude Pro (Anthropic Sonnet 3.5)",
      category: "Inteligencia Artificial",
      duration: "1 Mes",
      price: "$32.000",
      originalPrice: "$90.000",
      popular: true,
      description:
        "Ideal para redacción de documentos extensos, programación avanzada y análisis de código complejo con ventana de contexto gigante.",
      features: [
        "Modelo Sonnet 3.5 con máxima inteligencia",
        "5 veces más uso que la versión gratuita",
        "Carga de proyectos y múltiples archivos",
        "Creación de artefactos y prototipos",
      ],
      icon: "Cpu",
    },
    {
      id: "canva-pro",
      name: "Canva Pro Educación / Personal",
      category: "Productividad",
      duration: "12 Meses",
      price: "$25.000",
      originalPrice: "$180.000",
      badge: "Plan Anual",
      description:
        "Accede a millones de plantillas premium, quitador de fondos en 1 clic, kit de marca y elementos de diseño ilimitados.",
      features: [
        "Removedor de fondos de imágenes con 1 clic",
        "Más de 100 millones de fotos y videos pro",
        "Redimensionador mágico de publicaciones",
        "1TB de almacenamiento en la nube",
      ],
      icon: "Sparkles",
    },
    {
      id: "netflix-4k",
      name: "Netflix Premium Ultra HD 4K",
      category: "Streaming",
      duration: "1 Mes",
      price: "$14.000",
      originalPrice: "$44.000",
      popular: true,
      badge: "4K Ultra HD",
      description:
        "Disfruta de las mejores series, películas y documentales en resolución 4K HDR con PIN de privacidad personalizado.",
      features: [
        "Perfil privado con PIN de seguridad",
        "Resolución 4K Ultra HD + Spatial Audio",
        "Sin interrupciones ni bloqueos de hogar",
        "Soporte directo ante cualquier duda",
      ],
      icon: "Tv",
    },
    {
      id: "disney-premium",
      name: "Disney+ Premium (Con Deportes ESPN)",
      category: "Streaming",
      duration: "1 Mes",
      price: "$13.000",
      originalPrice: "$38.000",
      description:
        "Todo el catálogo de Disney, Pixar, Marvel, Star Wars, National Geographic y todos los partidos en vivo de ESPN.",
      features: [
        "Perfil exclusivo personalizado",
        "Transmisiones en vivo de ESPN en HD/4K",
        "Catálogo completo de películas y series Star",
        "Audio Dolby Atmos compatible",
      ],
      icon: "Tv",
    },
    {
      id: "youtube-premium",
      name: "YouTube Premium Sin Anuncios",
      category: "Streaming",
      duration: "3 Meses",
      price: "$18.000",
      originalPrice: "$60.000",
      badge: "3 Meses",
      description:
        "Videos sin un solo anuncio, reproducción en segundo plano con pantalla apagada e inclusión de YouTube Music Premium.",
      features: [
        "Cero anuncios comerciales antes y durante el video",
        "Reproducción en segundo plano en móvil",
        "Descarga de videos para ver sin internet",
        "Incluye YouTube Music ilimitado",
      ],
      icon: "Tv",
    },
    {
      id: "spotify-premium",
      name: "Spotify Premium Música Sin Límites",
      category: "Streaming",
      duration: "3 Meses",
      price: "$20.000",
      originalPrice: "$54.000",
      description:
        "Escucha millones de canciones y podcasts sin anuncios, pasa canciones ilimitadamente y descarga en tu celular.",
      features: [
        "Reproducción de música sin pausas publicitarias",
        "Descarga de canciones para modo offline",
        "Audio en alta calidad 320 kbps",
        "Compatible con Alexa, Smart TV y celular",
      ],
      icon: "Tv",
    },
  ],
  buySteps: [
    {
      number: "1",
      title: "Elige tu Plataforma",
      description: "Explora nuestro catálogo y selecciona la herramienta de IA o servicio de streaming que deseas.",
    },
    {
      number: "2",
      title: "Contacta por WhatsApp",
      description: "Haz clic en el botón de compra. Se abrirá un chat directo con el nombre del producto seleccionado.",
    },
    {
      number: "3",
      title: "Activación en 5 Minutos",
      description: "Realizas la transferencia por Nequi, Daviplata o Bancolombia y recibes tus credenciales activas inmediatamente.",
    },
  ],
  guarantees: [
    {
      title: "Garantía Durante Todo el Periodo",
      description:
        "Si tu cuenta presenta alguna eventualidad antes de cumplir el tiempo contratado, la solucionamos o reemplazamos inmediatamente.",
      icon: "ShieldCheck",
    },
    {
      title: "Entrega Instantánea",
      description:
        "Contamos con inventario activo. Las entregas se efectúan en un promedio de 3 a 10 minutos tras confirmar el pago.",
      icon: "Zap",
    },
    {
      title: "Métodos de Pago Locales",
      description:
        "Aceptamos Nequi, Daviplata, Bancolombia y transferencias bancarias de fácil acceso.",
      icon: "CreditCard",
    },
  ],
};
