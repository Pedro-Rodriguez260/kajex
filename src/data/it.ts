export interface ITService {
  id: string;
  title: string;
  badge?: string;
  startingPrice: string;
  description: string;
  includes: string[];
  icon: string;
}

export interface ITStep {
  number: string;
  title: string;
  description: string;
}

export interface ITTestimonial {
  name: string;
  role: string;
  comment: string;
  rating: number;
}

export interface ITData {
  title: string;
  subtitle: string;
  description: string;
  heroBadge: string;
  whatsappMessage: string;
  services: ITService[];
  steps: ITStep[];
  testimonials: ITTestimonial[];
}

export const itData: ITData = {
  title: "Kajex IT",
  subtitle: "Servicios Técnicos, Mantenimiento & Repotenciación de Cómputo",
  description:
    "Devolvemos la velocidad y vida útil a tus computadores. Servicio técnico especializado en mantenimiento preventivo, cambio a discos SSD de alta velocidad, ampliación de RAM y diagnóstico de hardware.",
  heroBadge: "Soporte Técnico Profesional para Laptops y PC de Escritorio",
  whatsappMessage: "Hola KAJEX IT, necesito asesoría o agendar un servicio técnico para mi computador.",
  services: [
    {
      id: "preventivo",
      title: "Mantenimiento Preventivo",
      badge: "Recomendado cada 6 meses",
      startingPrice: "$80.000",
      description:
        "Limpieza interna y externa del equipo, limpieza de ventiladores con alcohol isopropílico y soplador, y actualización del sistema operativo y las aplicaciones.",
      includes: [
        "Limpieza interna y externa del equipo",
        "Limpieza de ventiladores con alcohol isopropílico",
        "Soplado de polvo en componentes internos",
        "Actualización del sistema operativo y aplicaciones",
      ],
      icon: "Cpu",
    },
    {
      id: "repotenciacion-ssd",
      title: "Repotenciación a Disco SSD Ultrarrápido",
      badge: "Hasta 10x más rápido",
      startingPrice: "Desde $170.000",
      description:
        "Reemplaza tu antiguo disco duro mecánico por un SSD. El precio depende del disco que elijas: desde $170.000 solo el disco, o desde $250.000 con instalación y mantenimiento incluidos.",
      includes: [
        "Disco SSD desde $170.000 (según capacidad y marca)",
        "Con instalación y mantenimiento: desde $250.000",
        "Clonación de tus archivos y sistema sin perder nada",
        "Configuración para arranque veloz",
      ],
      icon: "Zap",
    },
    {
      id: "memoria-ram",
      title: "Ampliación de Memoria RAM",
      startingPrice: "Instalación $80.000",
      description:
        "Aumenta la memoria RAM de tu portátil o PC para ejecutar múltiples pestañas y programas pesados sin congelamientos. El valor de la memoria RAM varía según la capacidad.",
      includes: [
        "Instalación: $80.000",
        "Memoria RAM: el valor depende de la capacidad (8GB, 16GB, 32GB)",
        "Diagnóstico de compatibilidad (DDR4 / DDR5)",
        "Pruebas de estabilidad de memoria",
      ],
      icon: "Server",
    },
    {
      id: "formateo-correctivo",
      title: "Formateo, Reinstalación & Licenciamiento",
      startingPrice: "$80.000",
      description:
        "Eliminación total de virus, pantalla azul y lentitud. Reinstalación limpia de Windows 10/11 optimizado con programas de oficina esenciales. Incluye backup de tu información.",
      includes: [
        "Backup de archivos personales incluido",
        "Instalación limpia del sistema operativo de 64 bits",
        "Paquete Office, lectores PDF, navegadores y antivirus",
        "Actualización completa de controladores oficiales",
      ],
      icon: "Wrench",
    },
  ],
  steps: [
    {
      number: "01",
      title: "Diagnóstico & Recepción",
      description: "Recibimos tu equipo en nuestra sede o domicilio. Realizamos pruebas preliminares de hardware.",
    },
    {
      number: "02",
      title: "Cotización Transparente",
      description: "Te enviamos el reporte del estado del equipo y la propuesta de servicio antes de intervenir.",
    },
    {
      number: "03",
      title: "Servicio Técnico Experto",
      description: "Nuestros técnicos certificados realizan el mantenimiento o cambio de piezas con repuestos de calidad.",
    },
    {
      number: "04",
      title: "Pruebas de Rendimiento & Entrega",
      description: "Ejecutamos pruebas de estrés y velocidad. Te entregamos el computador como nuevo y con garantía.",
    },
  ],
  testimonials: [
    {
      name: "Carlos Mendoza",
      role: "Diseñador Gráfico",
      comment:
        "Mi laptop tardaba casi 10 minutos en encender y renderizar. En Kajex IT le instalaron un SSD M.2 y le aumentaron la RAM. ¡Ahora enciende en 10 segundos! Servicio recomendadísimo.",
      rating: 5,
    },
    {
      name: "Dra. Sofía Ramírez",
      role: "Consultorio Médico",
      comment:
        "Excelente atención. Traje los 3 computadores de mi consultorio para mantenimiento preventivo. Quedaron silenciosos, limpios y muy veloces. El precio fue muy honesto.",
      rating: 5,
    },
    {
      name: "Andrés Gutiérrez",
      role: "Estudiante Universitario",
      comment:
        "Se me infectó el equipo con un virus muy pesado que bloqueaba mis archivos. Me hicieron respaldo, formateo optimizado y me dejaron el PC volando. ¡Gracias KAJEX!",
      rating: 5,
    },
  ],
};
