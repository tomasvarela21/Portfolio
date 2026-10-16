"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "es" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  es: {
    // Navigation
    "nav.presentacion": "Presentación",
    "nav.tecnologias": "Tecnologías",
    "nav.proyectos": "Proyectos",
    "nav.sobre-mi": "Sobre mí",
    "nav.certificados": "Certificados",
    "nav.contacto": "Contacto",

    // Hero
    "hero.greeting": "Hola, soy",
    "hero.role": "Desarrollador Full-Stack Nativo en IA",
    "hero.description":
      "Soy desarrollador full-stack independiente, actualmente orientando mi carrera hacia la ingeniería en IA. Construyo plataformas SaaS y APIs, pero lo que realmente define mi día a día es el uso de agentes de IA (como Claude Code, Codex y OpenCode) para programar y lanzar proyectos mucho más rápido. Aprendo creando cosas nuevas, y ahora mismo estoy metido de lleno estudiando LLMs, RAG y flujos de trabajo con agentes por mi cuenta.",
    "hero.location": "San Miguel de Tucumán, Argentina",

    // Technologies
    "tech.title": "Tecnologías",
    "tech.subtitle": "Mi stack y herramientas de trabajo.",
    "tech.frontend": "Frontend",
    "tech.backend": "Backend",
    "tech.tools": "Herramientas",
    "tech.learning": "Aprendiendo",

    // Projects
    "projects.title": "Proyectos",
    "projects.subtitle": "Una selección de proyectos recientes.",
    "projects.view-code": "Ver código",

    // About
    "about.title": "Sobre mí",
    "about.subtitle": "Formación, enfoque y objetivos.",
    "about.profile": "Cómo trabajo",
    "about.objectives": "Objetivos",
    "about.education": "Educación",
    "about.skills": "Habilidades Blandas",
    "about.languages": "Idiomas",

    // Certifications
    "cert.title": "Certificados y aprendiendo...",
    "cert.subtitle": "Formación complementaria y tecnologías que estoy explorando.",
    "cert.additional-training": "Formación y Certificaciones",
    "cert.view": "Ver certificado",
    "cert.hide": "Ocultar certificado",
    "cert.open": "Abrir PDF",
    "cert.download": "Descargar certificado",

    // Contact
    "contact.title": "Contacto",
    "contact.subtitle": "¿Te interesa colaborar? ¡Escríbeme!",
    "contact.email": "Enviar email",
    "contact.linkedin": "Ver LinkedIn",
    "contact.github": "Ver GitHub",

    // Footer
    "footer.text": "Desarrollado con Next.js y Tailwind CSS",
  },
  en: {
    // Navigation
    "nav.presentacion": "About",
    "nav.tecnologias": "Technologies",
    "nav.proyectos": "Projects",
    "nav.sobre-mi": "About Me",
    "nav.certificados": "Certifications",
    "nav.contacto": "Contact",

    // Hero
    "hero.greeting": "Hi, I'm",
    "hero.role": "AI-Native Full-Stack Developer",
    "hero.description":
      "I'm a freelance full-stack developer currently shifting my focus toward AI engineering. I build multi-tenant SaaS platforms and APIs, but what really drives my workflow right now is using AI agents (like Claude Code, Codex, and OpenCode) to ship code faster—from the first idea to deployment. I learn by building, and right now I'm deep diving into LLMs, RAG, and agentic workflows on my own.",
    "hero.location": "San Miguel de Tucumán, Argentina",

    // Technologies
    "tech.title": "Technologies",
    "tech.subtitle": "My stack and work tools.",
    "tech.frontend": "Frontend",
    "tech.backend": "Backend",
    "tech.tools": "Tools",
    "tech.learning": "Learning",

    // Projects
    "projects.title": "Projects",
    "projects.subtitle": "A selection of recent projects.",
    "projects.view-code": "View code",

    // About
    "about.title": "About Me",
    "about.subtitle": "Education, approach and goals.",
    "about.profile": "How I Work",
    "about.objectives": "Objectives",
    "about.education": "Education",
    "about.skills": "Soft Skills",
    "about.languages": "Languages",

    // Certifications
    "cert.title": "Certifications and learning...",
    "cert.subtitle": "Complementary training and technologies I'm exploring.",
    "cert.additional-training": "Training & Certifications",
    "cert.view": "View certificate",
    "cert.hide": "Hide certificate",
    "cert.open": "Open PDF",
    "cert.download": "Download certificate",

    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "Interested in collaborating? Write to me!",
    "contact.email": "Send email",
    "contact.linkedin": "View LinkedIn",
    "contact.github": "View GitHub",

    // Footer
    "footer.text": "Built with Next.js and Tailwind CSS",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["es"]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
