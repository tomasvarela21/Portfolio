export const person = {
  name: "Tomás Varela",
  title: "Desarrollador Fullstack",
  location: "San Miguel de Tucumán, Argentina",
  email: "tomas.varelaa19@gmail.com",
  linkedin: "https://www.linkedin.com/in/tomasvarela7/",
  github: "https://github.com/tomasvarela21",
  profile:
    "Desarrollador Fullstack con base sólida en programación e ingeniería en sistemas. Experiencia construyendo aplicaciones web modernas con el stack JavaScript, bases de datos relacionales y no relacionales, y metodologías ágiles. Enfocado en mejora continua, calidad de código y soluciones centradas en el usuario.",
  objectives:
    "Contribuir como fullstack a productos de impacto, creando sistemas escalables y mantenibles con foco en la experiencia de usuario y la calidad de entrega. Abierto a roles full‑time y proyectos freelance.",
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
  role?: string
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

export const projects: Project[] = [
  {
    slug: "fitproapp-saas-training-platform",
    title: "FitProApp – Plataforma SaaS para Entrenadores",
    role: "Fullstack",
    description:
      "FitProApp es una plataforma SaaS multi-rol para entrenadores personales y alumnos que centraliza la gestión operativa de un negocio fitness: alumnos, invitaciones, planes, suscripciones, cuotas y pagos, rutinas, ejercicios y seguimiento de entrenamientos, con vistas diferenciadas para trainer y estudiante en web y móvil. Backend modular en Express y TypeScript con Prisma sobre PostgreSQL, autenticación JWT y control de acceso por roles, y frontend en React con Vite, TailwindCSS, Shadcn UI, Zustand y React Query.",
    impact:
      "Digitaliza la operación completa del entrenador: dashboard con métricas y alertas de vencimiento, constructor de rutinas con series, RPE y peso sugerido, portal del alumno para registrar entrenamientos y ver su progreso, y automatización de emails y notificaciones push para recordatorios de pago. Incorpora además un asistente vía Telegram con function calling para consultar datos y ejecutar acciones del sistema con confirmación.",
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
        src: "/fitproapp-trainer-dashboard.png",
        alt: "Dashboard del entrenador en FitProApp con métricas y alertas de vencimiento",
        width: 1692,
        height: 823,
      },
      {
        src: "/fitproapp-trainer-alumnos.png",
        alt: "Gestión de alumnos con estado de plan y pagos en FitProApp",
        width: 1699,
        height: 822,
      },
      {
        src: "/fitproapp-trainer-plan-pagos.png",
        alt: "Detalle de plan, cuotas y rutina asignada de un alumno en FitProApp",
        width: 1662,
        height: 826,
      },
      {
        src: "/fitproapp-trainer-rutinas.png",
        alt: "Gestión de rutinas globales y propias en FitProApp",
        width: 1696,
        height: 822,
      },
      {
        src: "/fitproapp-trainer-ejercicios.png",
        alt: "Biblioteca de ejercicios organizada por grupo muscular en FitProApp",
        width: 1702,
        height: 826,
      },
      {
        src: "/fitproapp-alumno-entrenar-hoy.png",
        alt: "Vista del alumno para entrenar hoy con series, reps y RPE en FitProApp",
        width: 1687,
        height: 817,
      },
      {
        src: "/fitproapp-alumno-progreso.png",
        alt: "Gráfico de progreso de peso máximo por ejercicio en FitProApp",
        width: 1693,
        height: 826,
      },
      {
        src: "/fitproapp-alumno-ejercicios.png",
        alt: "Biblioteca de ejercicios del alumno con filtros en FitProApp",
        width: 1687,
        height: 816,
      },
    ],
    translations: {
      es: {
        title: "FitProApp – Plataforma SaaS para Entrenadores",
        description:
          "FitProApp es una plataforma SaaS multi-rol para entrenadores personales y alumnos que centraliza la gestión operativa de un negocio fitness: alumnos, invitaciones, planes, suscripciones, cuotas y pagos, rutinas, ejercicios y seguimiento de entrenamientos, con vistas diferenciadas para trainer y estudiante en web y móvil. Backend modular en Express y TypeScript con Prisma sobre PostgreSQL, autenticación JWT y control de acceso por roles, y frontend en React con Vite, TailwindCSS, Shadcn UI, Zustand y React Query.",
        impact:
          "Digitaliza la operación completa del entrenador: dashboard con métricas y alertas de vencimiento, constructor de rutinas con series, RPE y peso sugerido, portal del alumno para registrar entrenamientos y ver su progreso, y automatización de emails y notificaciones push para recordatorios de pago. Incorpora además un asistente vía Telegram con function calling para consultar datos y ejecutar acciones del sistema con confirmación.",
      },
      en: {
        title: "FitProApp – SaaS Platform for Personal Trainers",
        description:
          "FitProApp is a multi-role SaaS platform for personal trainers and their clients that centralizes the operations of a fitness business: students, invitations, plans, subscriptions, installments and payments, routines, exercises, and workout tracking, with dedicated trainer and student views across web and mobile. Modular backend built with Express and TypeScript on Prisma over PostgreSQL, JWT authentication with role-based access control, and a React frontend using Vite, TailwindCSS, Shadcn UI, Zustand, and React Query.",
        impact:
          "Digitizes the trainer's entire operation: a dashboard with metrics and expiration alerts, a routine builder with sets, RPE, and suggested weight, a student portal to log workouts and track progress, and automated emails and push notifications for payment reminders. It also includes a Telegram-based assistant with function calling to query data and execute system actions with confirmation.",
      },
    },
  },
  {
    slug: "reporteapp-multi-company-accounting",
    title: "ReporteApp – Sistema Contable Multi-Empresa",
    org: "Grupo corporativo (construcción e inmobiliario)",
    role: "Fullstack",
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
  learning: [
    { label: "Astro", src: "/tech/astro-uploaded.png" },
    { label: "Docker", src: "/tech/docker-uploaded.png" },
    // Removed TypeScript (moved to frontend) and Python (moved to backend)
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

export const education = [
  {
    program: "Ingeniería en Sistemas de Información",
    institution: "UTN FRT – San Miguel de Tucumán",
    status: "En curso",
  },
  {
    program: "Tecnicatura en Programación",
    institution: "UTN FRT – San Miguel de Tucumán",
    status: "Graduado",
  },
] as const

export const trainings = [
  { title: "Python – Scientific Computing", provider: "freeCodeCamp" },
  { title: "Building AI Agents for beginners", provider: "Microsoft Learn" },
  { title: "Introducción a Microsoft Power Platform", provider: "Microsoft Learn" },
] as const

export const technicalSkills = [
  "JavaScript",
  "HTML5",
  "CSS3",
  "C#",
  "SQL",
  "Python",
  "MySQL",
  "SQL Server",
  "MongoDB",
  "Firebase Firestore",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Tailwind CSS",
  ".NET",
  "Git",
  "GitHub",
  "Firebase",
  "Visual Studio Code",
  "Visual Studio",
  "REST Client (Postman/Thunder)",
  "Scrum",
  "UML",
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
      title: "Desarrollador Fullstack",
      profile:
        "Desarrollador Fullstack con base sólida en programación e ingeniería en sistemas. Experiencia construyendo aplicaciones web modernas con el stack JavaScript, bases de datos relacionales y no relacionales, y metodologías ágiles. Enfocado en mejora continua, calidad de código y soluciones centradas en el usuario.",
      objectives:
        "Contribuir como fullstack a productos de impacto, creando sistemas escalables y mantenibles con foco en la experiencia de usuario y la calidad de entrega. Abierto a roles full‑time y proyectos freelance.",
    },
    education: [
      {
        program: "Ingeniería en Sistemas de Información",
        institution: "UTN FRT – San Miguel de Tucumán",
        status: "En curso",
      },
      {
        program: "Tecnicatura en Programación",
        institution: "UTN FRT – San Miguel de Tucumán",
        status: "Graduado",
      },
    ],
    trainings: [
      { title: "Python – Scientific Computing", provider: "freeCodeCamp" },
      { title: "Building AI Agents for beginners", provider: "Microsoft Learn" },
      { title: "Introducción a Microsoft Power Platform", provider: "Microsoft Learn" },
    ],
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
      title: "Fullstack Developer",
      profile:
        "Fullstack Developer with a strong background in programming and systems engineering. Experienced in developing modern web applications with solid command of the JavaScript stack, relational and non-relational databases, and agile methodologies. Passionate about continuous improvement, code quality, and creating user-centered digital solutions.",
      objectives:
        "Contribute as a fullstack developer to impactful products, creating scalable and maintainable systems with focus on user experience and delivery quality. Open to full-time roles and freelance projects.",
    },
    education: [
      {
        program: "Information Systems Engineering",
        institution: "UTN FRT – San Miguel de Tucumán",
        status: "In progress",
      },
      {
        program: "Technical Degree in Programming",
        institution: "UTN FRT – San Miguel de Tucumán",
        status: "Graduated",
      },
     
    ],
    trainings: [
      { title: "Python Course – Scientific Computing", provider: "freeCodeCamp" },
      { title: "Building AI Agents for beginners", provider: "Microsoft Learn" },
      { title: "Introduction to Microsoft Power Platform", provider: "Microsoft Learn" },
    ],
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
