export const siteMetadata = {
  es: {
    title: "Tomás Varela · Desarrollador Full-Stack · Integración de IA | TypeScript, React, Node.js, Python",
    description:
      "Portfolio de Tomás Varela, desarrollador full-stack en Tucumán. Sistemas a medida, plataformas SaaS e integración de LLMs.",
  },
  en: {
    title: "Tomás Varela · Full-Stack Developer · AI Integration | TypeScript, React, Node.js, Python",
    description:
      "Portfolio of Tomás Varela, a full-stack developer based in Tucumán, Argentina. Custom business systems, SaaS platforms, and LLM integration.",
  },
} as const

export const person = {
  name: "Tomás Varela",
  title: "Desarrollador Full-Stack · Integración de IA | TypeScript, React, Node.js, Python",
  location: "San Miguel de Tucumán, Argentina",
  phone: "+543816832948",
  phoneDisplay: "+54 381 683-2948",
  email: "tomas.varelaa19@gmail.com",
  linkedin: "https://www.linkedin.com/in/tomasvarela7/",
  github: "https://github.com/tomasvarela21",
  portfolio: "https://portfolio-hc4q-tau.vercel.app/",
  profile:
    "Desarrollador full-stack freelance desde 2025. Construyo sistemas a medida para empresas: un sistema contable con unos 286 mil registros de cinco empresas, una plataforma SaaS multi-tenant para entrenadores personales y apps de gestión que reemplazan planillas. Mi fuerte son los sistemas con datos de negocio, y estoy sumando IA a mis productos: construí un primer asistente con function calling para Korex y hoy desarrollo un agente para el armado de rutinas.",
  objectives: "Busco un rol full-time construyendo productos que integren LLMs, y sigo tomando proyectos freelance.",
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
  role?: { es: string; en: string }
  period?: {
    es: string
    en: string
  }
  stack: string[]
  github?: string
  external?: string
  images: ProjectImage[]
  translations: {
    es: { title: string; description: string; highlights: string[] }
    en: { title: string; description: string; highlights: string[] }
  }
}

const fullstackRole = { es: "Fullstack", en: "Full-stack" }

export const freelanceExperience = {
  es: {
    title: "Desarrollador Full-Stack Freelance",
    location: "Remoto",
    period: "Feb. 2025 – actualidad",
    description: "Desarrollo aplicaciones web a medida, desde el relevamiento con el cliente hasta el despliegue.",
    highlights: [
      "Clientes: un grupo de construcción e inmobiliario, entrenadores personales, una administradora de consorcios y comercios de Tucumán.",
    ],
  },
  en: {
    title: "Freelance Full-Stack Developer",
    location: "Remote",
    period: "Feb. 2025 – Present",
    description: "I build custom web applications end to end, from client discovery to deployment.",
    highlights: [
      "Clients include a construction and real estate group, personal trainers, a condominium management firm, and local businesses in Tucumán.",
    ],
  },
} as const

export const projects: Project[] = [
  {
    slug: "korex-saas-training-platform",
    title: "Korex – Plataforma SaaS para Entrenadores Personales",
    role: fullstackRole,
    period: {
      es: "Abr. 2026 – actualidad",
      en: "Apr. 2026 – Present",
    },
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "Zustand",
      "React Query",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "JWT",
      "Zod",
      "Expo",
      "React Native",
      "Gemini API",
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
          "Plataforma SaaS multi-tenant para entrenadores personales: alumnos, invitaciones, planes, suscripciones, cuotas y pagos, rutinas y seguimiento de entrenamientos, con datos aislados por entrenador. La web está en producción; la app móvil para alumnos está en desarrollo.",
        highlights: [
          "Cuotas con estados (pendiente, pagada, vencida), para que cada entrenador vea de un vistazo quién está al día.",
          "App móvil para alumnos (Expo Router): entrenamiento del día, registro de series con los pesos de la sesión anterior precargados, RPE, temporizador de descanso y racha. Todavía sin publicar.",
          "Asistente de IA: construí una primera versión en Telegram (Gemini 2.5 Flash con function calling, bot en grammY). El entrenador vinculaba su cuenta con un código generado desde la web y operaba sobre el backend en lenguaje natural: las consultas se ejecutaban directo y las escrituras (registrar pagos, crear alumnos, asignar rutinas) pedían confirmación con un botón. La retiré para integrar el asistente dentro de la app. Hoy estoy desarrollando un agente para el armado de rutinas, y después vendrá uno de seguimiento por alumno.",
        ],
      },
      en: {
        title: "Korex – SaaS Platform for Personal Trainers",
        description:
          "A multi-tenant SaaS platform for personal trainers covering clients, invitations, plans, subscriptions, fees and payments, workout programs, and training logs, with data isolated per trainer. The web app is live; the client mobile app is in development.",
        highlights: [
          "Fee tracking with payment statuses (pending, paid, overdue), so each trainer can see at a glance who's up to date.",
          "Client mobile app (Expo Router): today's workout, set logging with weights prefilled from the previous session, RPE, rest timer, and streaks. Not yet published.",
          "AI assistant: I built a first version as a Telegram bot (Gemini 2.5 Flash with function calling, built on grammY). Trainers linked their account with a code generated in the web app and could query and act on the backend in plain language: read queries ran immediately, while write actions (logging payments, adding clients, assigning programs) required confirmation via a button. I retired it to move the assistant into the app itself. I'm now building an agent that helps trainers create workout programs, to be followed by one for per-client progress tracking.",
        ],
      },
    },
  },
  {
    slug: "de-la-rosa-white-label-korex",
    title: "De la Rosa App – Versión White-Label de Korex",
    org: "Cliente: Franco De la Rosa",
    orgTranslations: { es: "Cliente: Franco De la Rosa", en: "Client: Franco De la Rosa" },
    role: fullstackRole,
    period: {
      es: "Ago. 2026 – actualidad",
      en: "Aug. 2026 – Present",
    },
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
          "Versión de Korex con la marca del entrenador Franco De la Rosa y un onboarding adaptado a su metodología.",
        highlights: [
          "Primer cliente en producción sobre Korex: gestiona entre 40 y 60 alumnos con marca y onboarding propios, configurado como un tenant más, sin fork de código ni infraestructura aparte.",
        ],
      },
      en: {
        title: "De la Rosa App – White-Label Version of Korex",
        description:
          "A version of Korex branded for trainer Franco De la Rosa, with onboarding tailored to his coaching method.",
        highlights: [
          "Korex's first production client: manages 40–60 clients under his own brand and onboarding, set up as just another tenant with no code fork or separate infrastructure.",
        ],
      },
    },
  },
  {
    slug: "reporteapp-multi-company-accounting",
    title: "ReporteApp – Sistema Contable Multi-Empresa",
    org: "Grupo de construcción e inmobiliario",
    orgTranslations: {
      es: "Grupo de construcción e inmobiliario",
      en: "Construction and real estate group",
    },
    role: fullstackRole,
    period: {
      es: "Mar. 2026 – actualidad",
      en: "Mar. 2026 – Present",
    },
    stack: ["Python", "FastAPI", "PostgreSQL (Neon)", "Streamlit", "Power BI", "GitHub Actions", "Render"],
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
          "Sistema contable multiempresa para un grupo de construcción e inmobiliario: centraliza la carga, validación y conciliación de unos 286 mil registros contables de cinco empresas, con cálculo incremental del Libro Mayor por empresa y período y sincronización bajo demanda con las bases externas de proyectos y presupuestos.",
        highlights: [
          "Sobre esta base se generan los reportes que el grupo usa para tomar decisiones: estado patrimonial, resultado económico, cashflow por proyecto y un dashboard general en Power BI.",
          "Detecté cinco causas raíz de diferencias en los saldos de apertura entre dos versiones del Libro Mayor (filas duplicadas, detalle de subcuenta y centro de costo faltante, valores mal cargados) y reconstruí el mayor desde los datos corregidos.",
          "Cada carga pasa por un validador que bloquea descuadres, cuentas inválidas y centros de costo faltantes.",
        ],
      },
      en: {
        title: "ReporteApp – Multi-Company Accounting System",
        description:
          "A multi-company accounting system for a construction and real estate group. It centralizes the upload, validation, and reconciliation of roughly 286,000 accounting records across five companies, with incremental General Ledger calculations by company and period and on-demand sync with external project and budget databases.",
        highlights: [
          "This database feeds the reports the group relies on for decision-making: balance sheet, income statement, project-level cash flow, and an executive dashboard in Power BI.",
          "Traced opening-balance discrepancies between two versions of the General Ledger to five root causes (duplicate rows, missing sub-account and cost center detail, incorrect values) and rebuilt the ledger from corrected source data.",
          "Every upload goes through a validator that blocks unbalanced entries, invalid accounts, and missing cost centers.",
        ],
      },
    },
  },
  {
    slug: "consorcioapp-multisite-console",
    title: "ConsorcioApp – Gestión de consorcios",
    org: "Cliente: administradora de consorcios",
    orgTranslations: {
      es: "Cliente: administradora de consorcios",
      en: "Client: condominium management firm",
    },
    role: fullstackRole,
    period: {
      es: "Oct. – Dic. 2025",
      en: "Oct. – Dec. 2025",
    },
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
        title: "ConsorcioApp – Gestión de consorcios",
        description:
          "App web para administrar consorcios desde un solo panel: edificios, unidades con sus responsables, liquidaciones mensuales, seguimiento de pagos y reportes de deuda y morosidad.",
        highlights: [
          "Automatiza el cálculo de expensas, recargos y descuentos, genera recibos en PDF y muestra de un vistazo qué unidades están al día y cuáles atrasadas.",
        ],
      },
      en: {
        title: "ConsorcioApp – Condominium Management",
        description:
          "A web app for managing condominium buildings from a single dashboard: buildings, units and their assigned owners, monthly statements, payment tracking, and debt and delinquency reports.",
        highlights: [
          "Automates maintenance fee, late fee, and discount calculations, generates PDF receipts, and shows at a glance which units are paid up and which are behind.",
        ],
      },
    },
  },
  {
    slug: "alenort-management-system",
    title: "Sistema de Gestión – Alenort",
    org: "Alenort",
    role: fullstackRole,
    period: {
      es: "Feb. – Abr. 2025",
      en: "Feb. – Apr. 2025",
    },
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
          "Plataforma web para ventas, inventario y procesos administrativos, con autenticación, control por roles y gestión de pedidos.",
        highlights: [
          "Centraliza ventas, inventario y pedidos en un solo sistema, con permisos por rol y el historial de cada pedido.",
        ],
      },
      en: {
        title: "Management System – Alenort",
        description:
          "A web platform for sales, inventory, and back-office processes, with authentication, role-based access, and order management.",
        highlights: [
          "Brings sales, inventory, and orders into a single system, with role-based permissions and a full history for every order.",
        ],
      },
    },
  },
  {
    slug: "chapulina-inventory-suite",
    title: "ChapulinaApp – Gestión de Stock",
    org: "Chapulina",
    role: fullstackRole,
    period: {
      es: "Oct. – Nov. 2025",
      en: "Oct. – Nov. 2025",
    },
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
          "Web app para una boutique que reúne inventario por talles, ventas y catálogo digital, con login por roles, panel de productos con filtros, alertas de stock bajo y control de precios con recargos configurables.",
        highlights: [
          "Reemplazó las planillas con las que la boutique controlaba stock y precios: los cambios de precio se aplican desde el panel con los recargos ya configurados.",
        ],
      },
      en: {
        title: "ChapulinaApp – Stock Management Web App",
        description:
          "A web app for a clothing boutique that brings together size-based inventory, sales, and a digital catalog, with role-based login, a filterable product dashboard, low-stock alerts, and pricing controls with configurable surcharges.",
        highlights: [
          "Replaced the spreadsheets the boutique used to track stock and prices: price changes are applied from the dashboard with surcharges already configured.",
        ],
      },
    },
  },
  {
    slug: "olivetuc-web",
    title: "Landing Page – Oliva.Tuc",
    org: "Oliva.Tuc",
    role: { es: "Frontend", en: "Frontend" },
    period: {
      es: "Ago. 2025",
      en: "Aug. 2025",
    },
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
          "Landing page responsive para una marca de aceite de oliva, con catálogo, carrito editable, galería de imágenes y cierre de compra por WhatsApp.",
        highlights: ["Los pedidos llegan por WhatsApp con el carrito ya armado, sin necesidad de pasarela de pago."],
      },
      en: {
        title: "Landing Page – Oliva.Tuc",
        description:
          "A responsive landing page for an olive oil brand, with a product catalog, an editable cart, an image gallery, and checkout via WhatsApp.",
        highlights: ["Orders arrive on WhatsApp with the cart already filled in, with no payment gateway needed."],
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
    { label: "Terminal", src: "/tech/terminal-new.png" },
    { label: "npm", src: "/tech/npm-new.png" },
    { label: "Visual Studio", src: "/tech/visualstudio-new.png" },
  ],
} as const

export const technologyIcons: Record<string, string> = {
  ...Object.fromEntries(Object.values(stackIcons).flat().map((tech) => [tech.label, tech.src])),
  HTML: "/tech/html5-new.png",
  CSS: "/tech/css3-uploaded.png",
  "React Native": "/tech/react.png",
  FastAPI: "/tech/fastapi.svg",
  PostgreSQL: "/tech/postgresql.svg",
  Prisma: "/tech/prisma.svg",
  "Firebase Authentication": "/tech/firebase.svg",
  Firestore: "/tech/firebase.svg",
  Zod: "/tech/zod.svg",
  JWT: "/tech/jsonwebtokens.svg",
  "GitHub Actions": "/tech/githubactions.svg",
  Postman: "/tech/postman.svg",
}

export const education = [
  {
    program: "Tecnicatura en Programación",
    institution: "UTN FRT, San Miguel de Tucumán",
    status: "Graduado",
    period: "2023 – mayo 2025",
  },
  {
    program: "Ingeniería en Sistemas de Información",
    institution: "UTN FRT, San Miguel de Tucumán",
    status: "Cursado pausado desde 2022",
    period: "2020 – 2022",
  },
] as const

export type Training = {
  title: string
  url?: string
  titleNote?: string
  provider: string
  details?: string
  certificate?: string
}

const dataCampTrack = {
  title: "Associate AI Engineer for Developers",
  url: "https://www.datacamp.com/tracks/associate-ai-engineer-for-developers",
  provider: "DataCamp",
} as const

const aiDevelopmentCourse = {
  title: "Curso de Desarrollo con IA: el Nuevo Programador",
  provider: "MoureDev · BIG school",
  certificate: "/Certificado-Tomas-Varela-rsl3t6wy.pdf",
} as const

export const trainings: readonly Training[] = [
  { ...dataCampTrack, details: "en curso" },
  { ...aiDevelopmentCourse, details: "oct. 2026, con certificado" },
  { title: "AI Agents for Beginners", provider: "Microsoft" },
]

const englishTrainings: readonly Training[] = [
  { ...dataCampTrack, details: "in progress" },
  { ...aiDevelopmentCourse, titleNote: "(AI-assisted development course, Oct. 2026, certificate)" },
  { title: "AI Agents for Beginners", provider: "Microsoft" },
]

type Localized = { es: string; en: string }

// A skill is either a plain name or a localized label; `cv` overrides the label in the PDF's inline list.
export type SkillItem = string | (Localized & { cv?: Localized })

export const skillLabel = (item: SkillItem, lang: "es" | "en", context: "web" | "cv" = "web") => {
  if (typeof item === "string") return item
  return context === "cv" && item.cv ? item.cv[lang] : item[lang]
}

export const technicalSkillGroups: readonly { id: string; label: Localized; items: readonly SkillItem[] }[] = [
  {
    id: "languages",
    label: { es: "Lenguajes", en: "Languages" },
    items: ["TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    id: "frontend",
    label: { es: "Frontend", en: "Frontend" },
    items: ["React", "Next.js", "Tailwind CSS", "Zustand", "React Query", "HTML", "CSS"],
  },
  {
    id: "mobile",
    label: { es: "Mobile", en: "Mobile" },
    items: ["React Native", "Expo"],
  },
  {
    id: "backend",
    label: { es: "Backend e integraciones", en: "Backend & Integrations" },
    items: [
      "Node.js",
      "Express",
      "FastAPI",
      { es: "APIs REST", en: "REST APIs" },
      "JWT",
      "Zod",
      "Firebase Authentication",
    ],
  },
  {
    id: "data",
    label: { es: "Bases de datos y ORM", en: "Databases & ORMs" },
    items: ["PostgreSQL", "MySQL", "MongoDB", "Firestore", "Prisma"],
  },
  {
    id: "tools",
    label: { es: "Herramientas", en: "Tools" },
    items: ["Git", "GitHub", "GitHub Actions", "Postman"],
  },
  {
    id: "methods",
    label: { es: "Metodologías", en: "Methodologies" },
    items: ["Scrum", "UML"],
  },
  {
    id: "ai-used",
    label: { es: "IA usada en proyectos", en: "AI Used in Projects" },
    items: ["Gemini API (function calling)", "Claude Code", "OpenCode"],
  },
  {
    id: "learning",
    label: { es: "Aprendiendo", en: "Currently Learning" },
    items: [
      "RAG",
      "MCP",
      { es: "Agentes de IA", en: "AI agents", cv: { es: "agentes de IA", en: "AI agents" } },
    ],
  },
]

export const cvExperience = [
  {
    slug: "korex-saas-training-platform",
    stack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "Zod", "Expo", "Gemini API"],
    es: {
      title: "Korex – Plataforma SaaS para entrenadores personales",
      highlights: [
        "Desarrollé una plataforma multi-tenant con datos aislados por entrenador: alumnos, planes, suscripciones, rutinas y cuotas con estados (pendiente, pagada, vencida).",
        "Entregué De la Rosa App a un entrenador que gestiona entre 40 y 60 alumnos, con marca y onboarding propios, como un tenant más, sin fork de código ni infraestructura aparte.",
        "Construí una primera versión del asistente de IA como bot de Telegram con Gemini 2.5 Flash y function calling: las consultas se ejecutaban directo y las escrituras pedían confirmación. Lo retiré para llevarlo a la app, donde hoy desarrollo un agente para el armado de rutinas.",
        "Implementé la app móvil para alumnos en Expo (registro de series, RPE, temporizador de descanso), todavía sin publicar.",
      ],
    },
    en: {
      title: "Korex – SaaS Platform for Personal Trainers",
      highlights: [
        "Built a multi-tenant platform with per-trainer data isolation covering clients, plans, subscriptions, workout programs, and fee tracking with payment statuses (pending, paid, overdue).",
        "Delivered De la Rosa App to a trainer who manages 40–60 clients, with his own branding and onboarding, running as just another tenant with no code fork or separate infrastructure.",
        "Developed a first version of the AI assistant as a Telegram bot using Gemini 2.5 Flash with function calling: read queries ran immediately, while write actions required confirmation. I retired it to bring the assistant into the app, where I'm now building an agent that helps trainers create workout programs.",
        "Implemented the client mobile app in Expo (set logging, RPE, rest timer); not yet published.",
      ],
    },
  },
  {
    slug: "reporteapp-multi-company-accounting",
    stack: ["Python", "FastAPI", "PostgreSQL", "Streamlit", "Power BI", "GitHub Actions", "Render"],
    es: {
      title: "ReporteApp – Sistema contable multiempresa",
      highlights: [
        "Desarrollé un sistema que centraliza la carga, validación y conciliación de unos 286 mil registros contables de cinco empresas. De esa base salen los reportes que el grupo usa para decidir: estado patrimonial, resultado económico y cashflow por proyecto.",
        "Detecté cinco causas raíz de diferencias en los saldos de apertura entre dos versiones del Libro Mayor y reconstruí el mayor desde los datos corregidos.",
        "Implementé un validador que bloquea descuadres, cuentas inválidas y centros de costo faltantes, junto con el cálculo incremental del Libro Mayor y la sincronización bajo demanda con bases externas.",
      ],
    },
    en: {
      title: "ReporteApp – Multi-Company Accounting System",
      highlights: [
        "Built a system that centralizes the upload, validation, and reconciliation of ~286,000 accounting records across five companies. It feeds the reports the group relies on for decision-making: balance sheet, income statement, and project-level cash flow.",
        "Traced opening-balance discrepancies between two versions of the General Ledger to five root causes and rebuilt the ledger from corrected source data.",
        "Implemented a validator that blocks unbalanced entries, invalid accounts, and missing cost centers, along with incremental General Ledger calculations and on-demand sync with external databases.",
      ],
    },
  },
  {
    slug: "consorcioapp-multisite-console",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "PDFKit"],
    es: {
      title: "ConsorcioApp – Gestión de consorcios",
      highlights: [
        "Desarrollé una app para administrar edificios, unidades, liquidaciones mensuales y pagos desde un solo panel.",
        "Automaticé el cálculo de expensas, recargos y descuentos, con recibos en PDF y reportes de deuda y morosidad.",
      ],
    },
    en: {
      title: "ConsorcioApp – Condominium Management",
      highlights: [
        "Built an app to manage buildings, units, monthly statements, and payments from a single dashboard.",
        "Automated maintenance fee calculations, late fees, and discounts, with PDF receipts and outstanding-balance reports.",
      ],
    },
  },
] as const

export const additionalCvProjects = [
  {
    slug: "chapulina-inventory-suite",
    title: { es: "ChapulinaApp – Gestión de stock", en: "ChapulinaApp – Inventory Management" },
    es: "Inventario por talles, alertas de stock bajo y control de precios para una boutique. React, Node.js, Express y MongoDB.",
    en: "Size-based inventory, low-stock alerts, and pricing controls for a clothing boutique. React, Node.js, Express, and MongoDB.",
  },
  {
    slug: "olivetuc-web",
    title: { es: "Oliva.Tuc – Landing page", en: "Oliva.Tuc – Landing Page" },
    es: "Catálogo responsive con carrito y pedidos por WhatsApp. Next.js, TypeScript y Tailwind CSS.",
    en: "Responsive product catalog with a cart and WhatsApp ordering for an olive oil brand. Next.js, TypeScript, and Tailwind CSS.",
  },
  {
    slug: "alenort-management-system",
    title: { es: "Alenort – Sistema de gestión", en: "Alenort – Management System" },
    es: "Ventas, inventario y pedidos con autenticación y permisos por rol. Next.js y Firebase.",
    en: "Sales, inventory, and order management with authentication and role-based permissions. Next.js and Firebase.",
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

// `cvLevel` keeps the lowercase wording used inline in the PDF.
export const languages = [
  { language: "Español", level: "Nativo", cvLevel: "nativo" },
  { language: "Inglés", level: "Intermedio alto (B2)", cvLevel: "intermedio alto (B2)" },
] as const

export const translations = {
  es: {
    person: {
      title: person.title,
      profile: person.profile,
      about:
        "Antes de escribir código, entiendo cómo trabaja el negocio: en ReporteApp eso significó aprender la lógica contable del grupo antes de diseñar la validación. En sistemas con datos financieros prefiero resolver las reglas críticas en la base de datos (SQL, restricciones, cálculos incrementales) y no en la aplicación, porque ahí es donde un error cuesta caro.",
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
    languages,
  },
  en: {
    person: {
      title: "Full-Stack Developer · AI Integration | TypeScript, React, Node.js, Python",
      profile:
        "Freelance full-stack developer since 2025. I build custom systems for businesses: an accounting system holding ~286,000 records across five companies, a multi-tenant SaaS platform for personal trainers, and management apps that replace spreadsheets. My strength is systems built around business data, and I'm now adding AI to my products: I built a first function-calling assistant for Korex and I'm currently developing an agent that helps trainers create workout programs.",
      about:
        "Before writing any code, I make sure I understand how the business actually runs. On ReporteApp, that meant learning the group's accounting logic before designing the validation layer. In systems that handle financial data, I prefer to enforce critical rules in the database (SQL, constraints, incremental calculations) rather than in the application layer, because that's where mistakes get expensive.",
      objectives:
        "I'm looking for a full-time role building products that integrate LLMs, and I'm still taking on freelance projects.",
    },
    education: [
      {
        program: "Associate Degree in Programming (Tecnicatura en Programación)",
        institution: "National Technological University (UTN FRT), San Miguel de Tucumán",
        status: "Completed",
        period: "2023 – May 2025",
      },
      {
        program: "Information Systems Engineering",
        institution: "National Technological University (UTN FRT)",
        status: "On hold since 2022",
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
      { language: "English", level: "Upper-intermediate (B2)" },
    ],
  },
} as const
