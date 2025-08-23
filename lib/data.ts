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
  image: { src: string; alt: string }
}

export const projects: Project[] = [
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
    image: {
      src: "/alenort.png",
      alt: "Dashboard del sistema de gestión con paneles e indicadores",
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
    image: {
      src: "/fitapp.png",
      alt: "Interfaz de una app de fitness con chatbot y seguimiento de progreso",
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
    external: "https://olivetuc.vercel.app",
    image: {
      src: "/olivetuc.png",
      alt: "Vista previa de la landing page de Oliva.Tuc con catálogo y carrito de compras",
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
    { label: "React", src: "/tech/react-uploaded.png" },
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
    projects: [
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
    image: {
      src: "/alenort.png",
      alt: "Dashboard del sistema de gestión con paneles e indicadores",
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
    image: {
      src: "/fitapp.png",
      alt: "Interfaz de una app de fitness con chatbot y seguimiento de progreso",
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
    image: {
      src: "/olivetuc.png",
      alt: "Vista previa de la landing page de Oliva.Tuc con catálogo y carrito de compras",
    },
  },
    ],
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
    projects: [
      {
        title: "Management System – Alenort",
        description:
          "Web platform to automate sales, inventory, and administrative processes. Authentication, role control, order management and traceability.",
        impact: "Reduced administrative time and improved order traceability between areas.",
      },
      {
        title: "FitApp – Virtual Fitness and Nutrition Assistant",
        description:
          "App with chatbot for personalized workout and nutrition plans, progress tracking, and Google authentication. Profiles, routine generation and analytics.",
        impact: "Enhanced personalization of fitness routines and automated user data tracking.",
      },
      {
        title: "Landing Page – Oliva.Tuc",
        description:
          "Modern and responsive landing page for an olive oil business. Includes catalog with expandable and editable cart, WhatsApp redirection for order completion, image gallery, and informational sections.",
        impact: "Boosted the business’s digital presence, streamlined customer interaction, and facilitated online order management.",
      },
    ],
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
