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
      title: "Mantenimiento Preventivo Profundo",
      badge: "Recomendado cada 6 meses",
      startingPrice: "Desde $50.000",
      description:
        "Limpieza interna detallada de componentes, eliminación de polvo en disipadores y ventiladores, y aplicación de pasta térmica de alto rendimiento.",
      includes: [
        "Desarmado y soplado con aire comprimido",
        "Limpieza ultrasónica de ventiladores",
        "Cambio de pasta térmica gris / artic silver",
        "Optimización de software y limpieza de registros",
      ],
      icon: "Cpu",
    },
    {
      id: "repotenciacion-ssd",
      title: "Repotenciación a Disco SSD Ultrarrápido",
      badge: "Hasta 10x más rápido",
      startingPrice: "Desde $120.000",
      description:
        "Reemplaza tu antiguo disco duro mecánico por un SSD M.2 NVMe o SATA. Tu equipo encenderá en menos de 15 segundos y abrirá programas al instante.",
      includes: [
        "Instalación de SSD de marcas líderes (Kingston, Crucial, Western Digital)",
        "Clonación exacta de tus archivos y sistema sin perder nada",
        "Configuración de rendimiento para arranque veloz",
        "Garantía de 1 a 3 años en el componente",
      ],
      icon: "Zap",
    },
    {
      id: "memoria-ram",
      title: "Ampliación de Memoria RAM",
      startingPrice: "Desde $80.000",
      description:
        "Aumenta la memoria RAM de tu portátil o PC a 8GB, 16GB o 32GB para ejecutar múltiples pestañas y programas pesados sin congelamientos.",
      includes: [
        "Diagnóstico de compatibilidad y frecuencia (DDR4 / DDR5)",
        "Instalación en dual-channel para máxima velocidad",
        "Pruebas de estabilidad de memoria de 30 minutos",
      ],
      icon: "Server",
    },
    {
      id: "formateo-correctivo",
      title: "Formateo, Reinstalación & Licenciamiento",
      startingPrice: "Desde $60.000",
      description:
        "Eliminación total de virus, pantalla azul y lentitud. Reinstalación limpia de Windows 10/11 optimizado con programas de oficina esenciales.",
      includes: [
        "Respaldo de archivos personales importantes",
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
