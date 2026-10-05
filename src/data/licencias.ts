export interface LicenseItem {
  id: string;
  name: string;
  category: "Inteligencia Artificial" | "Streaming" | "Productividad" | "Educación" | "Diseño";
  duration: string;
  price: string;
  originalPrice?: string;
  popular?: boolean;
  badge?: string;
  description: string;
  features: string[];
  icon: string;
  logo?: string;
  promoImage?: string;
}

export interface PromoBanner {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  duration: string;
  image: string;
  category: string;
  highlights: string[];
  whatsappMessage: string;
}

export interface LicenciasData {
  title: string;
  subtitle: string;
  description: string;
  heroBadge: string;
  whatsappBaseMessage: string;
  promoBanners: PromoBanner[];
  licenses: LicenseItem[];
  buySteps: { number: string; title: string; description: string }[];
  guarantees: { title: string; description: string; icon: string }[];
}

export const licenciasData: LicenciasData = {
  title: "Kajex Licencias",
  subtitle: "Cuentas Digitales, Inteligencia Artificial & Streaming",
  description:
    "Obtén acceso inmediato a las plataformas de Inteligencia Artificial más potentes del mercado, educación premium, software de productividad y los mejores servicios de entretenimiento con garantía total y soporte continuo.",
  heroBadge: "Activación Inmediata • Licencias 100% Garantizadas",
  whatsappBaseMessage: "Hola KAJEX Licencias, deseo adquirir la licencia de:",
  promoBanners: [
    {
      id: "platzi-promo",
      title: "Platzi - Acceso Completo 1 Año",
      subtitle: "Cuenta 100% personal y privada. Acceso ilimitado a más de 1.500 cursos con certificaciones oficiales.",
      badge: "Educación & Tecnología",
      duration: "1 Año Completo",
      image: "/publicidad/platzi.jpg",
      category: "Educación",
      highlights: [
        "Acceso ilimitado a todas las escuelas y rutas de aprendizaje",
        "Certificados oficiales verificables en LinkedIn",
        "Aprende desde móvil, tablet y computador",
        "Cuenta personal vinculada a tus datos",
      ],
      whatsappMessage: "Hola KAJEX Licencias, deseo adquirir la cuenta personal de Platzi por 1 Año.",
    },
    {
      id: "m365-promo",
      title: "Microsoft 365 Premium Personal",
      subtitle: "Word, Excel, PowerPoint, Outlook + 1TB de almacenamiento en la nube de OneDrive. Hasta en 5 dispositivos.",
      badge: "Ofimática & Nube",
      duration: "1 Año",
      image: "/publicidad/office365.jpg",
      category: "Productividad",
      highlights: [
        "1TB de almacenamiento seguro en OneDrive",
        "Instalación en hasta 5 dispositivos (Windows, Mac, Móviles)",
        "Aplicaciones premium actualizadas siempre",
        "Licencia 100% original con activación rápida",
      ],
      whatsappMessage: "Hola KAJEX Licencias, me interesa la licencia de Microsoft 365 Personal con 1TB de nube.",
    },
    {
      id: "canva-promo",
      title: "Canva Pro - Acceso por 1 Año",
      subtitle: "Diseña sin límites con Magic Studio IA, más de 100 millones de recursos premium y quitafondos instantáneo.",
      badge: "Diseño & Marketing",
      duration: "1 Año",
      image: "/publicidad/canva.jpg",
      category: "Diseño",
      highlights: [
        "Herramientas de IA Magic Studio desbloqueadas",
        "Removedor de fondos de imagen y video en 1 clic",
        "1TB de almacenamiento en la nube para proyectos",
        "Plantillas premium para redes, marcas y empresas",
      ],
      whatsappMessage: "Hola KAJEX Licencias, quiero comprar el acceso a Canva Pro por 1 Año.",
    },
    {
      id: "coursera-promo",
      title: "Coursera Plus - Acceso Total 12 Meses",
      subtitle: "Aprende de Google, IBM, Yale, Stanford y Duke. Más de 7.000 cursos y especializaciones con certificados.",
      badge: "Certificación Universitaria",
      duration: "12 Meses",
      image: "/publicidad/coursera.jpg",
      category: "Educación",
      highlights: [
        "Acceso a más de 7.000 cursos y especializaciones",
        "Certificados universitarios y corporativos incluidos",
        "Proyectos prácticos para tu portafolio profesional",
        "100% confiable y a tu propio ritmo",
      ],
      whatsappMessage: "Hola KAJEX Licencias, deseo activar Coursera Plus por 12 Meses.",
    },
    {
      id: "duolingo-promo",
      title: "Duolingo Super - 1 Año Sin Límites",
      subtitle: "Aprende inglés, francés, alemán o el idioma que quieras sin anuncios, con vidas ilimitadas y lecciones a tu medida.",
      badge: "Idiomas",
      duration: "1 Año",
      image: "/publicidad/duolingo.jpg",
      category: "Educación",
      highlights: [
        "Vidas ilimitadas: comete errores y aprende sin pausas",
        "Cero anuncios publicitarios en toda la app",
        "Práctica personalizada y explicaciones gramaticales",
        "Activación rápida en tu cuenta personal",
      ],
      whatsappMessage: "Hola KAJEX Licencias, me interesa la cuenta de Duolingo Super por 1 Año.",
    },
    {
      id: "figma-promo",
      title: "Figma Pro - 2 Años Acceso Premium",
      subtitle: "La herramienta líder mundial para diseño UI/UX. Colaboración en equipo en tiempo real y bibliotecas ilimitadas.",
      badge: "Diseño UI/UX",
      duration: "2 Años",
      image: "/publicidad/figma.jpg",
      category: "Diseño",
      highlights: [
        "Acceso completo a todas las funciones Pro de Figma",
        "Bibliotecas y componentes compartidos ilimitados",
        "Historial de versiones y almacenamiento ampliado",
        "Ideal para diseñadores, desarrolladores y agencias",
      ],
      whatsappMessage: "Hola KAJEX Licencias, quiero la suscripción de Figma Pro por 2 Años.",
    },
    {
      id: "youtube-promo",
      title: "YouTube Premium - Cuenta Personal",
      subtitle: "Disfruta de YouTube sin un solo anuncio, reproducción con pantalla apagada y descargas ilimitadas + YouTube Music.",
      badge: "Streaming & Música",
      duration: "1 Mes / 1 Año",
      image: "/publicidad/youtube.jpg",
      category: "Streaming",
      highlights: [
        "Cero comerciales antes, durante y después del video",
        "Reproducción en segundo plano con pantalla bloqueada",
        "Descarga tus videos favoritos para ver sin conexión",
        "Incluye YouTube Music Premium sin anuncios",
      ],
      whatsappMessage: "Hola KAJEX Licencias, deseo comprar YouTube Premium cuenta personal.",
    },
  ],
  licenses: [
    {
      id: "platzi-1-ano",
      name: "Platzi Acceso Completo",
      category: "Educación",
      duration: "1 Año",
      price: "$180.000",
      originalPrice: "$990.000",
      popular: true,
      badge: "Promo Oficial",
      description:
        "Cuenta personal con acceso ilimitado a más de 1.500 cursos en tecnología, desarrollo, marketing y negocios con certificados oficiales.",
      features: [
        "Cuenta 100% personal y privada",
        "Acceso a todas las escuelas y rutas",
        "Certificados oficiales verificables",
        "Garantía y entrega inmediata",
      ],
      icon: "Sparkles",
      logo: "/logos/platzi.svg",
      promoImage: "/publicidad/platzi.jpg",
    },
    {
      id: "microsoft-365",
      name: "Microsoft 365 Personal (Office + 1TB)",
      category: "Productividad",
      duration: "1 Año",
      price: "$85.000",
      originalPrice: "$299.000",
      popular: true,
      badge: "1TB Nube",
      description:
        "Suite completa de Word, Excel, PowerPoint, Outlook y 1TB de almacenamiento en OneDrive para hasta 5 dispositivos simultáneos.",
      features: [
        "Usa en hasta 5 dispositivos (Windows, Mac, Móvil)",
        "1TB de almacenamiento en la nube de OneDrive",
        "100% original vinculada a tu correo",
        "Soporte y activación inmediata",
      ],
      icon: "Cpu",
      logo: "/logos/microsoft365.svg",
      promoImage: "/publicidad/office365.jpg",
    },
    {
      id: "canva-pro",
      name: "Canva Pro Cuenta Personal",
      category: "Diseño",
      duration: "1 Año",
      price: "$25.000",
      originalPrice: "$180.000",
      popular: true,
      badge: "Más Vendida",
      description:
        "Accede a millones de plantillas premium, quitador de fondos con 1 clic, herramientas de IA Magic Studio y 1TB de almacenamiento.",
      features: [
        "Removedor de fondos con 1 clic",
        "Magic Studio y herramientas de IA",
        "1TB de almacenamiento en la nube",
        "Plantillas y fotos premium ilimitadas",
      ],
      icon: "Sparkles",
      logo: "/logos/canva.svg",
      promoImage: "/publicidad/canva.jpg",
    },
    {
      id: "coursera-plus",
      name: "Coursera Plus Acceso Total",
      category: "Educación",
      duration: "12 Meses",
      price: "$190.000",
      originalPrice: "$1.400.000",
      badge: "Certificación",
      description:
        "Más de 7.000 cursos de universidades y empresas líderes (Google, IBM, Yale, Duke, Stanford) con certificados incluidos.",
      features: [
        "Acceso ilimitado a más de 7.000 cursos",
        "Certificados válidos para tu CV y LinkedIn",
        "Rutas guiadas y proyectos prácticos",
        "Aprende a tu propio ritmo con garantía",
      ],
      icon: "Sparkles",
      logo: "/logos/coursera.svg",
      promoImage: "/publicidad/coursera.jpg",
    },
    {
      id: "duolingo-super",
      name: "Duolingo Super",
      category: "Educación",
      duration: "1 Año",
      price: "$45.000",
      originalPrice: "$180.000",
      badge: "Aprende Idiomas",
      description:
        "Aprende inglés, francés o cualquier idioma sin pausas, sin anuncios y con vidas ilimitadas para practicar sin límites.",
      features: [
        "Vidas ilimitadas para aprender sin bloqueos",
        "Sin anuncios molestos en móvil y web",
        "Lecciones personalizadas según tu nivel",
        "Activación en tu propia cuenta personal",
      ],
      icon: "Sparkles",
      logo: "/logos/duolingo.svg",
      promoImage: "/publicidad/duolingo.jpg",
    },
    {
      id: "figma-pro",
      name: "Figma Pro Acceso Premium",
      category: "Diseño",
      duration: "2 Años",
      price: "$95.000",
      originalPrice: "$450.000",
      badge: "2 Años",
      description:
        "La suite definitiva para diseñadores UI/UX. Colaboración en equipo en tiempo real, bibliotecas ilimitadas y almacenamiento premium.",
      features: [
        "Funciones Pro completas por 2 años",
        "Bibliotecas y componentes ilimitados",
        "Trabajo colaborativo sin restricciones",
        "Acceso en todos tus dispositivos",
      ],
      icon: "Cpu",
      logo: "/logos/figma.svg",
      promoImage: "/publicidad/figma.jpg",
    },
    {
      id: "chatgpt-plus",
      name: "ChatGPT Plus (GPT-4o & Canvas)",
      category: "Inteligencia Artificial",
      duration: "1 Mes",
      price: "$28.000",
      originalPrice: "$85.000",
      popular: true,
      badge: "Top Ventas IA",
      description:
        "Acceso completo a GPT-4o, generación de imágenes con DALL-E 3, análisis de archivos, navegación web y modo voz avanzado.",
      features: [
        "Acceso ilimitado a modelos GPT-4o y GPT-4",
        "Generador de imágenes DALL-E 3 integrado",
        "Carga de archivos PDF, Excel y código",
        "Respuesta ultrarrápida y cero tiempos de espera",
      ],
      icon: "Bot",
      logo: "/logos/chatgpt.svg",
    },
    {
      id: "midjourney-v6",
      name: "Midjourney Pro V6",
      category: "Inteligencia Artificial",
      duration: "1 Mes",
      price: "$35.000",
      originalPrice: "$120.000",
      badge: "Arte IA",
      description:
        "La herramienta definitiva para crear imágenes hiperrealistas e ilustraciones profesionales con comandos de texto.",
      features: [
        "Generación ilimitada de imágenes relajadas",
        "Modo Fast de rápida creación",
        "Derechos de uso comercial completos",
        "Acceso vía servidor Discord exclusivo",
      ],
      icon: "Sparkles",
      logo: "/logos/midjourney.svg",
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
      logo: "/logos/claude.svg",
    },
    {
      id: "youtube-premium",
      name: "YouTube Premium & Music",
      category: "Streaming",
      duration: "3 Meses / 1 Año",
      price: "$18.000",
      originalPrice: "$60.000",
      popular: true,
      badge: "Sin Anuncios",
      description:
        "Videos sin un solo anuncio, reproducción en segundo plano con pantalla apagada e inclusión de YouTube Music Premium.",
      features: [
        "Cero comerciales antes y durante el video",
        "Reproducción en segundo plano en móvil",
        "Descarga de videos para ver sin internet",
        "Incluye YouTube Music ilimitado",
      ],
      icon: "Tv",
      logo: "/logos/youtube.svg",
      promoImage: "/publicidad/youtube.jpg",
    },
    {
      id: "netflix-4k",
      name: "Netflix Premium Ultra HD 4K",
      category: "Streaming",
      duration: "1 Mes",
      price: "$14.000",
      originalPrice: "$44.000",
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
      logo: "/logos/netflix.svg",
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
      logo: "/logos/disney.svg",
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
      logo: "/logos/spotify.svg",
    },
  ],
  buySteps: [
    {
      number: "1",
      title: "Elige tu Plataforma",
      description: "Explora nuestro catálogo y selecciona la herramienta de IA, software o servicio que deseas.",
    },
    {
      number: "2",
      title: "Contacta por WhatsApp",
      description: "Haz clic en el botón de compra o escríbenos al 3222754259 para confirmar disponibilidad y entrega.",
    },
    {
      number: "3",
      title: "Activación en 5 Minutos",
      description: "Transfieres por Nequi, Daviplata o Bancolombia y recibes tus credenciales y activación de inmediato.",
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
