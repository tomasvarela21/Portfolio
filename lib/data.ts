export const person = {
  name: "Tomás Varela",
  title: "Desarrollador Full-Stack | Ingeniería en IA",
  location: "San Miguel de Tucumán, Argentina",
  phone: "+543816832948",
  email: "tomas.varelaa19@gmail.com",
  linkedin: "https://www.linkedin.com/in/tomasvarela7/",
  github: "https://github.com/tomasvarela21",
  portfolio: "https://portfolio-hc4q-tau.vercel.app/",
  profile:
    "Soy desarrollador full-stack independiente, actualmente orientando mi carrera hacia la ingeniería en IA. Construyo plataformas SaaS y APIs, pero lo que realmente define mi día a día es el uso de agentes de IA (como Claude Code, Codex y OpenCode) para programar y lanzar proyectos mucho más rápido. Aprendo creando cosas nuevas, y ahora mismo estoy metido de lleno estudiando LLMs, RAG y flujos de trabajo con agentes por mi cuenta.",
  objectives:
    "Abierto a roles full-time y proyectos freelance, con foco en productos escalables, mantenibles y centrados en la experiencia de usuario.",
} as const

export type ProjectImage = {
  src: string
  alt: string
  width?: number
  height?: number
}

export type Project = {
  slug: string
  title: string
  org?: string
  orgTranslations?: { es: string; en: string }
  role?: string
  period?: {
    es: string
    en: string
  }
  description: string
  impact: string
  stack: string[]
  github?: string
  external?: string
  images: ProjectImage[]
  translations: {
    es: { title: string; description: string; impact: string }
    en: { title: string; description: string; impact: string }
  }
}

export const freelanceExperience = {
  es: {
    title: "Desarrollador Full-Stack Freelance",
    location: "San Miguel de Tucumán, Argentina (remoto)",
    period: "Feb. 2025 – actualidad",
    description:
      "Desarrollo de aplicaciones web a medida para distintos clientes, cubriendo todo el ciclo: relevamiento de requerimientos, arquitectura, desarrollo full stack y despliegue.",
    highlights: [
      "Uso herramientas de IA como Claude Code y OpenCode todos los días para acelerar el desarrollo de nuevas funciones, testing y diseño de arquitectura.",
    ],
  },
  en: {
    title: "Freelance Full-Stack Developer",
    location: "San Miguel de Tucumán, Argentina (remote)",
    period: "Feb. 2025 – present",
    description:
      "Develop custom web applications for clients, from requirements discovery and architecture to full-stack development and deployment.",
    highlights: [
      "I rely on AI coding tools like Claude Code and OpenCode daily to speed up how I write features, test them, and structure the architecture.",
    ],
  },
} as const

export const projects: Project[] = [
  {
    slug: "korex-saas-training-platform",
    title: "Korex – Plataforma SaaS para Entrenadores Personales",
    role: "Fullstack",
    period: {
      es: "Abr. 2026 – actualidad",
      en: "Apr. 2026 – present",
    },
    description:
      "Korex es una plataforma SaaS multi-tenant para entrenadores personales y alumnos que centraliza la gestión operativa de un negocio fitness: alumnos, invitaciones, planes, suscripciones, cuotas y pagos, rutinas, ejercicios y seguimiento de entrenamientos, con vistas diferenciadas para trainer y estudiante en web y móvil. Backend modular en Express y TypeScript con Prisma sobre PostgreSQL, aislamiento de datos por trainer y frontend en React 19, Vite, Tailwind CSS y shadcn/ui.",
    impact:
      "Creé un asistente de IA en Telegram usando 'function calling' y system prompts estrictos. Se conecta directo al backend para gestionar las interacciones entre entrenador y cliente, además de manejar emails y notificaciones automáticas.",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Shadcn UI",
      "Zustand",
      "React Query",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "JWT",
      "Zod",
      "Expo",
      "React Native",
      "Telegram Bot API",
      "Google GenAI",
    ],
    external: "https://fit-pro-app-mu.vercel.app",
    images: [
      {
        src: "/korex-login.png",
        alt: "Pantalla de login de Korex con identidad visual renovada",
        width: 1705,
        height: 817,
      },
      {
        src: "/korex1.png",
        alt: "Dashboard del entrenador en Korex con métricas, alumnos recientes y accesos rápidos",
        width: 1705,
        height: 820,
      },
      {
        src: "/korex2.png",
        alt: "Perfil de alumno en Korex con progreso, rutinas y estado de plan",
        width: 1705,
        height: 825,
      },
      {
        src: "/korex3.png",
        alt: "Detalle de plan y pagos de un alumno en Korex",
        width: 1699,
        height: 820,
      },
      {
        src: "/korex4.png",
        alt: "Biblioteca de ejercicios de Korex organizada por grupos musculares",
        width: 1704,
        height: 816,
      },
      {
        src: "/korex5.png",
        alt: "Analytics del negocio en Korex con métricas de ingresos y alumnos",
        width: 1701,
        height: 820,
      },
    ],
    translations: {
      es: {
        title: "Korex – Plataforma SaaS para Entrenadores Personales",
        description:
          "Korex es una plataforma SaaS multi-tenant para entrenadores personales y alumnos que centraliza la gestión operativa de un negocio fitness: alumnos, invitaciones, planes, suscripciones, cuotas y pagos, rutinas, ejercicios y seguimiento de entrenamientos, con vistas diferenciadas para trainer y estudiante en web y móvil. Backend modular en Express y TypeScript con Prisma sobre PostgreSQL, aislamiento de datos por trainer y frontend en React 19, Vite, Tailwind CSS y shadcn/ui.",
        impact:
          "Creé un asistente de IA en Telegram usando 'function calling' y system prompts estrictos. Se conecta directo al backend para gestionar las interacciones entre entrenador y cliente, además de manejar emails y notificaciones automáticas.",
      },
      en: {
        title: "Korex – SaaS Platform for Personal Trainers",
        description:
          "Korex is a multi-tenant SaaS platform for personal trainers and their clients that centralizes the operations of a fitness business: students, invitations, plans, subscriptions, installments and payments, routines, exercises, and workout tracking, with dedicated trainer and student views across web and mobile. Modular backend built with Express and TypeScript on Prisma over PostgreSQL, trainer-level data isolation, and a React 19 frontend using Vite, Tailwind CSS, and shadcn/ui.",
        impact:
          "Built a Telegram AI assistant for the platform using function calling and strict system prompts. It hooks directly into the backend to manage trainer-client interactions, alongside automated emails and push notifications.",
      },
    },
  },
  {
    slug: "ai-web-demo-generator",
    title: "Generador de Demos Web con IA",
    description:
      "Diseñé un flujo de trabajo comercial automatizado usando Codex y agentes de IA para generar autónomamente demos web funcionales para negocios locales sin presencia digital, extrayendo datos directamente de sus perfiles de Instagram y Google Business para ofrecer servicios de SEO y diseño web.",
    impact:
      "Diseñé un flujo de trabajo comercial automatizado usando Codex y agentes de IA para generar autónomamente demos web funcionales para negocios locales sin presencia digital, extrayendo datos directamente de sus perfiles de Instagram y Google Business para ofrecer servicios de SEO y diseño web.",
    stack: ["Codex", "AI Agents", "Web Automation"],
    images: [],
    translations: {
      es: {
        title: "Generador de Demos Web con IA",
        description:
          "Diseñé un flujo de trabajo comercial automatizado usando Codex y agentes de IA para generar autónomamente demos web funcionales para negocios locales sin presencia digital, extrayendo datos directamente de sus perfiles de Instagram y Google Business para ofrecer servicios de SEO y diseño web.",
        impact:
          "Diseñé un flujo de trabajo comercial automatizado usando Codex y agentes de IA para generar autónomamente demos web funcionales para negocios locales sin presencia digital, extrayendo datos directamente de sus perfiles de Instagram y Google Business para ofrecer servicios de SEO y diseño web.",
      },
      en: {
        title: "AI Web Demo Generator",
        description:
          "Engineered an automated business workflow using Codex and AI agents to autonomously generate functional website demos for local businesses without a web presence, extracting data directly from their Instagram profiles and Google Business listings to offer SEO and web design services.",
        impact:
          "Engineered an automated business workflow using Codex and AI agents to autonomously generate functional website demos for local businesses without a web presence, extracting data directly from their Instagram profiles and Google Business listings to offer SEO and web design services.",
      },
    },
  },
  {
    slug: "de-la-rosa-white-label-korex",
    title: "De la Rosa App – Versión White-Label de Korex",
    org: "Cliente: Franco De la Rosa",
    orgTranslations: { es: "Cliente: Franco De la Rosa", en: "Client: Franco De la Rosa" },
    role: "Fullstack",
    period: {
      es: "Ago. 2026 – actualidad",
      en: "Aug. 2026 – present",
    },
    description:
      "Instancia personalizada de Korex entregada al entrenador Franco De la Rosa, con identidad visual propia y un flujo de onboarding adaptado a su metodología, operando como un tenant más sobre la misma base de datos multi-tenant de Korex.",
    impact:
      "Validó en producción la capacidad de la arquitectura multi-tenant de Korex para escalar a nuevos clientes sin fork de código ni infraestructura separada.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Express.js", "Prisma", "PostgreSQL"],
    images: [
      {
        src: "/delarosa.png",
        alt: "Pantalla de login de De la Rosa App con fotografía e identidad visual propia",
        width: 1693,
        height: 859,
      },
      {
        src: "/dlr1.png",
        alt: "Dashboard de De la Rosa App con métricas, alumnos recientes y alertas",
        width: 1702,
        height: 820,
      },
      {
        src: "/dlr2.png",
        alt: "Listado de alumnos en De la Rosa App con filtros y estado de plan",
        width: 1705,
        height: 823,
      },
      {
        src: "/dlr3.png",
        alt: "Perfil de alumno en De la Rosa App con rutina asignada y parámetros de entrenamiento",
        width: 1704,
        height: 817,
      },
      {
        src: "/dlr4.png",
        alt: "Vista de progreso del alumno en De la Rosa App",
        width: 1699,
        height: 826,
      },
      {
        src: "/dlr5.png",
        alt: "Panel de cobros en De la Rosa App con cuotas y estados de pago",
        width: 1702,
        height: 826,
      },
      {
        src: "/dlr6.png",
        alt: "Gestión de rutinas en De la Rosa App",
        width: 1705,
        height: 819,
      },
    ],
    translations: {
      es: {
        title: "De la Rosa App – Versión White-Label de Korex",
        description:
          "Instancia personalizada de Korex entregada al entrenador Franco De la Rosa, con identidad visual propia y un flujo de onboarding adaptado a su metodología, operando como un tenant más sobre la misma base de datos multi-tenant de Korex.",
        impact:
          "Validó en producción la capacidad de la arquitectura multi-tenant de Korex para escalar a nuevos clientes sin fork de código ni infraestructura separada.",
      },
      en: {
        title: "De la Rosa App – White-Label Version of Korex",
        description:
          "A customized Korex instance delivered to personal trainer Franco De la Rosa, with its own visual identity and an onboarding flow adapted to his methodology, running as another tenant on Korex's shared multi-tenant database.",
        impact:
          "Validated in production that Korex's multi-tenant architecture can scale to new clients without forking the codebase or provisioning separate infrastructure.",
      },
    },
  },
  {
    slug: "reporteapp-multi-company-accounting",
    title: "ReporteApp – Sistema Contable Multi-Empresa",
    org: "Grupo corporativo (construcción e inmobiliario)",
    orgTranslations: {
      es: "Grupo corporativo (construcción e inmobiliario)",
      en: "Corporate group (construction and real estate)",
    },
    role: "Fullstack",
    period: {
      es: "Mar. 2026 – actualidad",
      en: "Mar. 2026 – present",
    },
    description:
      "ReporteApp es un sistema de gestión contable multiempresa para un grupo del sector construcción e inmobiliario que opera cinco empresas en simultáneo. Centraliza la carga, validación y conciliación de datos contables mediante una API REST en Python con arquitectura cliente-servidor desacoplada, cálculo incremental del Libro Mayor por empresa y período, y sincronización en tiempo real con bases de datos externas de proyectos y presupuestos.",
    impact:
      "Eliminó la conciliación manual entre sistemas: valida asientos y detecta descuadres, cuentas inválidas y centros de costo faltantes antes de cargar datos, y actualiza automáticamente dashboards ejecutivos en Power BI. La API expone 44 endpoints documentados en Swagger sobre PostgreSQL, con validador configurable y logging de cada sincronización.",
    stack: ["Python", "FastAPI", "PostgreSQL (Neon)", "Streamlit", "Power BI API", "GitHub Actions", "Render"],
    images: [
      {
        src: "/reporteapp-home.png",
        alt: "Home de ReporteApp con accesos a carga, libro mayor, consulta y administración",
        width: 1690,
        height: 823,
      },
      {
        src: "/reporteapp-libro-mayor.png",
        alt: "Libro Mayor con saldos acumulados por empresa y cuenta en ReporteApp",
        width: 1696,
        height: 825,
      },
      {
        src: "/reporteapp-consulta-diario.png",
        alt: "Consulta de asientos del libro diario con filtros en ReporteApp",
        width: 1699,
        height: 835,
      },
      {
        src: "/reporteapp-carga.png",
        alt: "Carga y validación de archivos CSV por empresa en ReporteApp",
        width: 1702,
        height: 829,
      },
      {
        src: "/reporteapp-administracion.png",
        alt: "Panel de administración con plan de cuentas en ReporteApp",
        width: 1702,
        height: 826,
      },
    ],
    translations: {
      es: {
        title: "ReporteApp – Sistema Contable Multi-Empresa",
        description:
          "ReporteApp es un sistema de gestión contable multiempresa para un grupo del sector construcción e inmobiliario que opera cinco empresas en simultáneo. Centraliza la carga, validación y conciliación de datos contables mediante una API REST en Python con arquitectura cliente-servidor desacoplada, cálculo incremental del Libro Mayor por empresa y período, y sincronización en tiempo real con bases de datos externas de proyectos y presupuestos.",
        impact:
          "Eliminó la conciliación manual entre sistemas: valida asientos y detecta descuadres, cuentas inválidas y centros de costo faltantes antes de cargar datos, y actualiza automáticamente dashboards ejecutivos en Power BI. La API expone 44 endpoints documentados en Swagger sobre PostgreSQL, con validador configurable y logging de cada sincronización.",
      },
      en: {
        title: "ReporteApp – Multi-Company Accounting System",
        description:
          "ReporteApp is a multi-company accounting management system for a construction and real estate corporate group operating five companies simultaneously. It centralizes accounting data ingestion, validation, and reconciliation through a decoupled client-server Python REST API, incremental General Ledger calculation per company and period, and real-time synchronization with external project and budget databases.",
        impact:
          "Eliminated manual reconciliation between systems: validates journal entries and flags unbalanced entries, invalid accounts, and missing cost centers before loading data, and automatically refreshes executive Power BI dashboards. The API exposes 44 endpoints documented in Swagger on top of PostgreSQL, with a configurable validator and per-sync logging.",
      },
    },
  },
  {
    slug: "consorcioapp-multisite-console",
    title: "ConsorcioApp – Gestión Multiedificio",
    org: "ConsorcioApp",
    role: "Fullstack",
    period: {
      es: "Oct. – Dic. 2025",
      en: "Oct. – Dec. 2025",
    },
    description:
      "ConsorcioApp es una app web para administradores de edificios que concentra todo en un único panel: registro de edificios, unidades y responsables, emisión de liquidaciones mensuales, seguimiento de pagos y reportes resumidos con deuda abierta, morosidad y últimos movimientos.",
    impact:
      "Automatiza el cálculo de expensas, recargos y descuentos, genera recibos PDF y mantiene un estado de cuenta claro, reduciendo tareas manuales y acelerando la respuesta ante unidades atrasadas.",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Prisma 5", "PDFKit", "react-hot-toast"],
    images: [
      {
        src: "/consorcioapp-1.png",
        alt: "Dashboard principal de ConsorcioApp con métricas de edificios y últimos pagos",
        width: 1357,
        height: 633,
      },
      {
        src: "/consorcioapp-2.png",
        alt: "Workspace de edificio en ConsorcioApp con panel de morosos y liquidaciones",
        width: 1358,
        height: 629,
      }, 
      {
        src: "/consorcio-residentes.png",
        alt: "Listado de residentes con porcentajes de cobertura en ConsorcioApp",
        width: 1356,
        height: 618,
      },
      {
        src: "/consorcio-liquidaciones.png",
        alt: "Panel de liquidaciones con métricas y estados de pago en ConsorcioApp",
        width: 1359,
        height: 629,
      },
      {
        src: "/consorcio-pagos-historial.png",
        alt: "Historial de pagos con filtros avanzados en ConsorcioApp",
        width: 1359,
        height: 615,
      },
      {
        src: "/consorcio-morosos.png",
        alt: "Sección de morosos con deudas vencidas en ConsorcioApp",
        width: 1352,
        height: 606,
      },
      
    ],
    translations: {
      es: {
        title: "ConsorcioApp – Gestión Multiedificio",
        description:
          "App web para administrar consorcios desde un solo dashboard: registro de edificios, altas de unidades con responsables, liquidaciones mensuales, seguimiento de pagos y reportes claros sobre deuda y morosidad.",
        impact:
          "Automatiza cálculos de expensas, recargos y descuentos, genera recibos PDF y mantiene visibilidad inmediata sobre qué unidades están al día o atrasadas.",
      },
      en: {
        title: "ConsorcioApp – Multi-building Operations Suite",
        description:
          "Web platform for property managers that centralizes building onboarding, unit assignments, settlement generation, payment tracking, and concise reports showing open debt, delinquency, and recent activity.",
        impact:
          "Automates expense calculations, late fees, and early-payment discounts, produces PDF receipts, and keeps a clear statement of account so managers can act faster when units fall behind.",
      },
    },
  },
  {
    slug: "alenort-management-system",
    title: "Sistema de Gestión – Alenort",
    org: "Alenort",
    role: "Fullstack",
    period: {
      es: "Feb. – Abr. 2025",
      en: "Feb. – Apr. 2025",
    },
    description:
      "Plataforma web para automatizar ventas, inventario y procesos administrativos. Autenticación, control de roles, gestión de pedidos y trazabilidad.",
    impact: "Redujo tiempos administrativos y mejoró la trazabilidad de pedidos entre áreas.",
    stack: ["Next.js", "Tailwind CSS", "Firebase Auth", "Firestore", "Cloud Functions", "Git"],
    github: "https://github.com/tomasvarela21/sistemaAlenort",
    external: "https://sistema-alenort.vercel.app",
    images: [
      {
        src: "/alenort.png",
        alt: "Dashboard del sistema de gestión con paneles e indicadores",
        width: 1334,
        height: 614,
      },
      {
        src: "/alenort-extra-20.png",
        alt: "Gestión de clientes registrados en Alenort",
        width: 1318,
        height: 621,
      },
      {
        src: "/alenort-extra-21.png",
        alt: "Pantalla de nueva venta con carrito en Alenort",
        width: 1335,
        height: 619,
      },
      {
        src: "/alenort-extra-22.png",
        alt: "Panel de repartos con métricas de entregas en Alenort",
        width: 1353,
        height: 615,
      },
      {
        src: "/alenort-extra-23.png",
        alt: "Inventario de productos por categoría en Alenort",
        width: 1326,
        height: 632,
      },
    ],
    translations: {
      es: {
        title: "Sistema de Gestión – Alenort",
        description:
          "Plataforma web para automatizar ventas, inventario y procesos administrativos. Autenticación, control de roles, gestión de pedidos y trazabilidad.",
        impact: "Redujo tiempos administrativos y mejoró la trazabilidad de pedidos entre áreas.",
      },
      en: {
        title: "Management System – Alenort",
        description:
          "Web platform to automate sales, inventory, and administrative processes. Authentication, role control, order management and traceability.",
        impact: "Reduced administrative time and improved order traceability between areas.",
      },
    },
  },
  {
    slug: "chapulina-inventory-suite",
    title: "ChapulinaApp – Gestión de Stock",
    org: "Chapulina",
    role: "Fullstack",
    period: {
      es: "Oct. – Nov. 2025",
      en: "Oct. – Nov. 2025",
    },
    description:
      "Web app que centraliza el inventario de indumentaria por talle, ventas y catálogo público. Paneles con filtros, alertas de stock, gestión de vendedores y configuración de márgenes.",
    impact:
      "Digitalizó el seguimiento de stock, eliminó hojas de cálculo manuales y permitió actualizar precios minoristas en minutos según la política comercial.",
    stack: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT", "Axios"],
    github: "https://github.com/tomasvarela21/ChapulinaApp",
    external: "https://chapulinaapp.vercel.app/",
    images: [
      {
        src: "/chapulina-dashboard.png",
        alt: "Dashboard de Chapulina con métricas y alertas de stock",
        width: 1328,
        height: 617,
      },
      {
        src: "/chapulina-products.png",
        alt: "Gestión de productos con filtros y métricas de talles en ChapulinaApp",
        width: 1328,
        height: 617,
      },
      {
        src: "/chap-categoria.png",
        alt: "Panel de categorías con listado de rubros en ChapulinaApp",
        width: 1358,
        height: 635,
      },
      {
        src: "/chapulina-sales.png",
        alt: "Vista de ventas y reservas con historial en ChapulinaApp",
        width: 1339,
        height: 630,
      },
      {
        src: "/chapulina-catalogo.png",
        alt: "Catálogo de productos con acciones de vender o reservar en ChapulinaApp",
        width: 1333,
        height: 625,
      },
      {
        src: "/configuracion.png",
        alt: "Panel de configuración con gestión de vendedores y estadísticas en ChapulinaApp",
        width: 1332,
        height: 630,
      },
    ],
    translations: {
      es: {
        title: "ChapulinaApp – Gestión de Stock",
        description:
          "Web app para una boutique que centraliza inventario por talles, ventas y catálogo digital. Incluye login con roles, panel de productos con filtros, alertas de bajo stock y control de precios con recargos configurables.",
        impact:
          "Digitalizó el seguimiento de stock y precios, eliminó hojas de cálculo manuales y habilitó actualizaciones en minutos según la política comercial.",
      },
      en: {
        title: "ChapulinaApp – Stock Management Web App",
        description:
          "Web app for a fashion boutique that centralizes inventory by size, sales tracking, and the digital catalog. Provides role-based login, product management with filters, low-stock alerts, and configurable price markups.",
        impact:
          "Digitized stock and pricing oversight, removing manual spreadsheets and enabling minute-level price updates aligned with business rules.",
      },
    },
  },
  {
    slug: "olivetuc-web",
    title: "Landing Page – Oliva.Tuc",
    org: "Oliva.Tuc",
    role: "Frontend",
    period: {
      es: "Ago. 2025",
      en: "Aug. 2025",
    },
    description:
      "Landing page moderna y responsive para un emprendimiento de aceite de oliva. Incluye catálogo con carrito desplegable y editable, redirección a WhatsApp para finalizar compras, galería de imágenes y secciones informativas.",
    impact: "Mejoró la presencia digital del emprendimiento, facilitando la interacción con clientes y la gestión de pedidos en línea.",
    stack: ["Next.js", "Tailwind CSS", "TypeScript", "Git"],
    github: "https://github.com/tomasvarela21/OliveTuc-web",
    external: "https://olive-tuc-web-x8ig.vercel.app/",
    images: [
      {
        src: "/olivetuc-hero.png",
        alt: "Hero de Oliva.Tuc destacando calidad del aceite",
        width: 1302,
        height: 630,
      },
      {
        src: "/olivetuc-catalog.png",
        alt: "Catálogo principal de Oliva.Tuc con tarjetas de productos",
        width: 1343,
        height: 629,
      },
      {
        src: "/olivetuc-catalog-cart.png",
        alt: "Catálogo de Oliva.Tuc con el carrito abierto mostrando totales",
        width: 1343,
        height: 627,
      },
      {
        src: "/olivetuc-cart-mobile.png",
        alt: "Carrito móvil con formulario de entrega en Oliva.Tuc",
        width: 196,
        height: 436,
      },
    ],
    translations: {
      es: {
        title: "Landing Page – Oliva.Tuc",
        description:
          "Landing page moderna y responsive para un emprendimiento de aceite de oliva. Incluye catálogo con carrito desplegable y editable, redirección a WhatsApp para finalizar compras, galería de imágenes y secciones informativas.",
        impact:
          "Mejoró la presencia digital del emprendimiento, facilitando la interacción con clientes y la gestión de pedidos en línea.",
      },
      en: {
        title: "Landing Page – Oliva.Tuc",
        description:
          "Modern and responsive landing page for an olive oil business. Includes catalog with expandable and editable cart, WhatsApp redirection for order completion, image gallery, and informational sections.",
        impact:
          "Boosted the business’s digital presence, streamlined customer interaction, and facilitated online order management.",
      },
    },
  },
  {
    slug: "fitapp-virtual-fitness-assistant",
    title: "FitApp – Asistente de Fitness y Nutrición",
    role: "Fullstack",
    description:
      "App con chatbot para rutinas y planes de nutrición personalizados, tracking de progreso y autenticación con Google. Perfiles, generación de rutinas y analítica.",
    impact: "Mejoró la personalización de rutinas y automatizó el registro de datos de usuarios.",
    stack: ["React", "Node.js", "Express", "MySQL", "Sequelize", "OAuth"],
    github: "https://github.com/tomasvarela21/fitApp",
    external: "https://fitapp-demo.vercel.app",
    images: [
      {
        src: "/fitapp.png",
        alt: "Interfaz de una app de fitness con chatbot y seguimiento de progreso",
        width: 1330,
        height: 615,
      },
    ],
    translations: {
      es: {
        title: "FitApp – Asistente de Fitness y Nutrición",
        description:
          "App con chatbot para rutinas y planes de nutrición personalizados, tracking de progreso y autenticación con Google. Perfiles, generación de rutinas y analítica.",
        impact: "Mejoró la personalización de rutinas y automatizó el registro de datos de usuarios.",
      },
      en: {
        title: "FitApp – Virtual Fitness and Nutrition Assistant",
        description:
          "App with chatbot for personalized workout and nutrition plans, progress tracking, and Google authentication. Profiles, routine generation and analytics.",
        impact: "Enhanced personalization of fitness routines and automated user data tracking.",
      },
    },
  },
]

// Icon paths used by TechnologiesSection
export const stackIcons = {
  frontend: [
    { label: "HTML5", src: "/tech/html5-new.png" }, // Updated to new HTML5 icon
    { label: "CSS3", src: "/tech/css3-uploaded.png" },
    { label: "JavaScript", src: "/tech/javascript-uploaded.png" },
    { label: "TypeScript", src: "/tech/typescript-new.png" }, // Moved TypeScript from learning to frontend section
    { label: "React", src: "/tech/react.png" },
    { label: "Tailwind CSS", src: "/tech/tailwind-uploaded.png" },
    { label: "Next.js", src: "/tech/nextjs-new.png" }, // Moved Next.js from backend to frontend section
  ],
  backend: [
    { label: "PHP", src: "/tech/php-final.png" }, // Updated PHP icon to new uploaded version
    { label: "Python", src: "/tech/python-uploaded.png" }, // Moved Python from learning to backend section
    { label: "Node.js", src: "/tech/nodejs-new.png" },
    { label: "Express", src: "/tech/express-new.png" },
    { label: "MySQL", src: "/tech/mysql-uploaded.png" },
    { label: "MongoDB", src: "/tech/mongodb-uploaded.png" },
  ],
  tools: [
    { label: "Git", src: "/tech/git-new.png" },
    { label: "GitHub", src: "/tech/github-new.png" },
    { label: "VS Code", src: "/tech/vscode-final.png" }, // Updated VS Code icon to new uploaded version
    { label: "WordPress", src: "/tech/wordpress-uploaded.png" },
    { label: "Terminal", src: "/tech/terminal-new.png" },
    { label: "npm", src: "/tech/npm-new.png" },
    { label: "Visual Studio", src: "/tech/visualstudio-new.png" },
  ],
} as const

export const technologyIcons: Record<string, string> = {
  ...Object.fromEntries(Object.values(stackIcons).flat().map((tech) => [tech.label, tech.src])),
  HTML: "/tech/html5-new.png",
  CSS: "/tech/css3-uploaded.png",
  FastAPI: "/tech/fastapi.svg",
  PostgreSQL: "/tech/postgresql.svg",
  Prisma: "/tech/prisma.svg",
  "Firebase Authentication": "/tech/firebase.svg",
  Firestore: "/tech/firebase.svg",
  Zod: "/tech/zod.svg",
  JWT: "/tech/jsonwebtokens.svg",
  "GitHub Actions": "/tech/githubactions.svg",
  Postman: "/tech/postman.svg",
  "Thunder Client": "/tech/thunderclient.png",
  "C#": "/tech/csharp.svg",
  ".NET": "/tech/dotnetcore.svg",
  "SQL Server": "/tech/microsoftsqlserver.svg",
}

export const education = [
  {
    program: "Tecnicatura en Programación",
    institution: "UTN FRT – San Miguel de Tucumán",
    status: "Graduado",
    period: "2023 – mayo de 2025",
  },
  {
    program: "Ingeniería en Sistemas de Información",
    institution: "UTN FRT – San Miguel de Tucumán",
    status: "Cursado pausado desde 2022",
    period: "2020 – 2022",
  },
] as const

export type Training = {
  title: string
  provider: string
  details?: string
  category?: { es: string; en: string }
  certificate?: {
    href: string
    preview: string
    width: number
    height: number
  }
}

const selfTaughtAiCategory = {
  es: "Ingeniería en IA y Desarrollo con Agentes (Autodidacta)",
  en: "AI Engineering & Agentic Development (Self-Taught)",
} as const

const selfTaughtAiTrainings: readonly Training[] = [
  {
    title: "AI Engineering for Programmers",
    provider: "DataCamp",
    details: "Cursando actualmente",
    category: selfTaughtAiCategory,
  },
  {
    title: "Agentic Workflows & OpenCode",
    provider: "Midudev",
    category: selfTaughtAiCategory,
  },
  {
    title: "Web Development with AI (Streaming & Integrations)",
    provider: "Midudev",
    category: selfTaughtAiCategory,
  },
  {
    title: "Introduction to AI for Developers (MCPs & LLM Fundamentals)",
    provider: "Midudev",
    category: selfTaughtAiCategory,
  },
  {
    title: "Building AI Agents for Beginners",
    provider: "Microsoft Learn",
    category: selfTaughtAiCategory,
  },
] as const

const aiDevelopmentTraining: Training = {
  title: "Iniciación al Desarrollo con IA – El Nuevo Programador",
  provider: "BIG school · mouredev",
  details: "Certificado de asistencia · 4 horas · 5 de octubre de 2026",
  certificate: {
    href: "/Certificado-Tomas-Varela-rsl3t6wy.pdf",
    preview: "/certificado-desarrollo-ia.webp",
    width: 2000,
    height: 1545,
  },
}

export const trainings: readonly Training[] = [
  aiDevelopmentTraining,
  ...selfTaughtAiTrainings,
] as const

const englishTrainings: readonly Training[] = [
  {
    ...aiDevelopmentTraining,
    title: "Introduction to AI-Assisted Development – El Nuevo Programador",
    details: "Certificate of attendance · 4 hours · October 5, 2026",
  },
  ...selfTaughtAiTrainings.map((training) =>
    training.title === "AI Engineering for Programmers"
      ? { ...training, details: "Currently enrolled" }
      : training,
  ),
]

export const technicalSkillGroups = [
  {
    id: "languages",
    label: { es: "Lenguajes de programación", en: "Programming languages" },
    items: ["TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    id: "frontend",
    label: { es: "Frontend", en: "Frontend" },
    items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    id: "backend",
    label: { es: "Backend e integraciones", en: "Backend & integrations" },
    items: ["Node.js", "Express", "FastAPI", "REST APIs", "JWT", "Firebase Authentication", "Zod"],
  },
  {
    id: "data",
    label: { es: "Bases de datos y ORM", en: "Databases & ORM" },
    items: ["PostgreSQL", "MySQL", "MongoDB", "Firestore", "Prisma"],
  },
  {
    id: "tools",
    label: { es: "Herramientas", en: "Tools" },
    items: ["Git", "GitHub", "GitHub Actions", "Postman", "Thunder Client"],
  },
  {
    id: "methods",
    label: { es: "Metodologías y modelado", en: "Methodologies & modeling" },
    items: ["Scrum", "UML"],
  },
  {
    id: "additional",
    label: { es: "Conocimientos adicionales", en: "Additional knowledge" },
    items: ["C#", ".NET", "SQL Server", "PHP", "WordPress"],
  },
  {
    id: "ai-agentic",
    label: { es: "Herramientas de IA y Agentes", en: "AI & Agentic Tools" },
    items: [
      "OpenCode",
      "Claude Code",
      "Model Context Protocol (MCP)",
      "RAG",
      "Prompt Engineering",
      "AI Agents",
      "OpenAI API",
      "LLMs",
    ],
  },
] as const

export const technicalSkills = technicalSkillGroups.flatMap((group) => [...group.items])

export const cvExperience = [
  {
    slug: "korex-saas-training-platform",
    stack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "JWT", "Google GenAI"],
    es: {
      title: "Korex – Plataforma SaaS para entrenadores personales",
      highlights: [
        "Desarrollo de una plataforma multi-tenant con aislamiento de datos por entrenador, gestión de alumnos, rutinas, suscripciones y seguimiento de pagos.",
        "Creé un asistente de IA en Telegram usando 'function calling' y system prompts estrictos. Se conecta directo al backend para gestionar las interacciones entre entrenador y cliente, además de manejar emails y notificaciones automáticas.",
        "Entrega de De la Rosa App al cliente Franco De la Rosa sobre la misma plataforma, con marca y onboarding personalizados, sin duplicar código ni infraestructura.",
      ],
    },
    en: {
      title: "Korex – SaaS platform for personal trainers",
      highlights: [
        "Develop a multi-tenant platform with trainer-level data isolation, client management, workout plans, subscriptions, and payment tracking.",
        "Built a Telegram AI assistant for the platform using function calling and strict system prompts. It hooks directly into the backend to manage trainer-client interactions, alongside automated emails and push notifications.",
        "Delivered De la Rosa App to client Franco De la Rosa on the shared platform, with custom branding and onboarding, without duplicating code or infrastructure.",
      ],
    },
  },
  {
    slug: "reporteapp-multi-company-accounting",
    stack: ["Python", "FastAPI", "PostgreSQL", "Streamlit", "Power BI API", "GitHub Actions", "Render"],
    es: {
      title: "ReporteApp – Sistema contable multiempresa",
      highlights: [
        "Desarrollo de un sistema contable para un grupo de construcción e inmobiliario que opera cinco empresas, con API REST de 44 endpoints documentados en Swagger.",
        "Automatización de la validación de asientos y conciliación entre sistemas, con detección de descuadres, cuentas inválidas y centros de costo faltantes.",
        "Implementación del cálculo incremental del Libro Mayor, sincronización con bases externas y actualización automática de dashboards en Power BI.",
      ],
    },
    en: {
      title: "ReporteApp – Multi-company accounting system",
      highlights: [
        "Develop an accounting system for a construction and real estate group operating five companies, with a REST API exposing 44 Swagger-documented endpoints.",
        "Automate journal-entry validation and reconciliation across systems, detecting unbalanced entries, invalid accounts, and missing cost centers.",
        "Implement incremental General Ledger calculations, synchronization with external databases, and automatic Power BI dashboard updates.",
      ],
    },
  },
  {
    slug: "consorcioapp-multisite-console",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "PDFKit"],
    es: {
      title: "ConsorcioApp – Gestión multiedificio",
      highlights: [
        "Desarrollo de una aplicación para administrar edificios, unidades, liquidaciones mensuales y seguimiento de pagos desde un único panel.",
        "Automatización de expensas, recargos y descuentos, generación de recibos PDF y reportes de deuda y morosidad.",
      ],
    },
    en: {
      title: "ConsorcioApp – Multi-building management",
      highlights: [
        "Built an application to manage buildings, units, monthly settlements, and payment tracking from a single dashboard.",
        "Automated expense calculations, late fees, and discounts, with PDF receipts and outstanding-debt reports.",
      ],
    },
  },
] as const

export const additionalCvProjects = [
  {
    slug: "chapulina-inventory-suite",
    es: "Inventario por talles, alertas de stock y control de precios para una boutique. React, Node.js, Express y MongoDB.",
    en: "Size-based inventory, stock alerts, and pricing controls for a boutique. React, Node.js, Express, and MongoDB.",
  },
  {
    slug: "olivetuc-web",
    es: "Catálogo responsive con carrito y pedidos por WhatsApp. Next.js, TypeScript y Tailwind CSS.",
    en: "Responsive catalog with a shopping cart and WhatsApp ordering. Next.js, TypeScript, and Tailwind CSS.",
  },
  {
    slug: "alenort-management-system",
    es: "Gestión de ventas, inventario y pedidos con autenticación y control de roles. Next.js y Firebase.",
    en: "Sales, inventory, and order management with authentication and role-based access. Next.js and Firebase.",
  },
] as const

export const softSkills = [
  "Resolución de problemas",
  "Comunicación efectiva con equipos técnicos y no técnicos",
  "Trabajo colaborativo en entornos ágiles",
  "Adaptabilidad y aprendizaje continuo",
  "Atención al detalle y enfoque en experiencia de usuario",
  "Gestión eficiente de tiempo y prioridades",
] as const

export const languages =  [
  { language: "Español", level: "Nativo" },
  { language: "Inglés", level: "Intermedio Alto – B2" },
] as const 

export const translations = {
  es: {
    person: {
      title: person.title,
      profile: person.profile,
      about:
        "En los proyectos procuro comprender primero cómo trabaja el negocio y traducir esas necesidades en herramientas claras y mantenibles. Esa forma de trabajo se refleja en productos como Korex, una plataforma SaaS multi-tenant para entrenadores, y ReporteApp, un sistema contable para varias empresas. Me involucro en las decisiones técnicas y en la implementación, cuidando que la solución sea útil además de funcionar.",
      objectives: person.objectives,
    },
    education,
    trainings,
    softSkills: [
      "Resolución de problemas",
      "Comunicación efectiva con equipos técnicos y no técnicos",
      "Trabajo colaborativo en entornos ágiles",
      "Adaptabilidad y aprendizaje continuo",
      "Atención al detalle y enfoque en experiencia de usuario",
      "Gestión eficiente de tiempo y prioridades",
    ],
    languages: [
      { language: "Español", level: "Nativo" },
      { language: "Inglés", level: "Intermedio Alto – B2" },
    ],
  },
  en: {
    person: {
      title: "Full-Stack Developer | AI Engineering",
      profile:
        "I'm a freelance full-stack developer currently shifting my focus toward AI engineering. I build multi-tenant SaaS platforms and APIs, but what really drives my workflow right now is using AI agents (like Claude Code, Codex, and OpenCode) to ship code faster—from the first idea to deployment. I learn by building, and right now I'm deep diving into LLMs, RAG, and agentic workflows on my own.",
      about:
        "I start by understanding how a business operates and translating its needs into clear, maintainable software. That approach is reflected in products such as Korex, a multi-tenant SaaS platform for personal trainers, and ReporteApp, an accounting system for a multi-company group. I stay involved in both technical decisions and implementation, with a focus on building solutions that are useful as well as functional.",
      objectives:
        "Open to full-time roles and freelance projects, focused on scalable, maintainable products centered on user experience.",
    },
    education: [
      {
        program: "Technical Degree in Programming",
        institution: "UTN FRT – San Miguel de Tucumán",
        status: "Graduated",
        period: "2023 – May 2025",
      },
      {
        program: "Information Systems Engineering",
        institution: "UTN FRT – San Miguel de Tucumán",
        status: "Studies on hold since 2022",
        period: "2020 – 2022",
      },
     
    ],
    trainings: englishTrainings,
    softSkills: [
      "Strong problem-solving skills",
      "Effective communication with both technical and non-technical stakeholders",
      "Collaborative teamwork in agile environments",
      "Adaptability and continuous learning",
      "Attention to detail and user experience focus",
      "Efficient time and priority management",
    ],
    languages: [
      { language: "Spanish", level: "Native" },
      { language: "English", level: "Upper Intermediate – B2" },
    ],
  },
} as const
