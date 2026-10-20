"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { siteMetadata } from "@/lib/data"

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
    "nav.certificados": "Formación",
    "nav.contacto": "Contacto",

    // Hero
    "hero.greeting": "Hola, soy",
    "hero.location": "San Miguel de Tucumán, Argentina",

    // Technologies
    "tech.title": "Tecnologías",
    "tech.subtitle": "Mi stack y herramientas de trabajo.",

    // Projects
    "projects.title": "Proyectos",
    "projects.subtitle": "Una selección de proyectos recientes.",
    "projects.highlights": "Qué resolví",

    // About
    "about.title": "Sobre mí",
    "about.subtitle": "Formación, enfoque y objetivos.",
    "about.profile": "Cómo trabajo",
    "about.objectives": "Objetivos",
    "about.education": "Educación",
    "about.languages": "Idiomas",

    // Certifications
    "cert.title": "Formación en IA",
    "cert.subtitle": "Cursos y certificaciones.",
    "cert.view": "Ver certificado",

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
    "nav.presentacion": "Home",
    "nav.tecnologias": "Technologies",
    "nav.proyectos": "Projects",
    "nav.sobre-mi": "About",
    "nav.certificados": "Training",
    "nav.contacto": "Contact",

    // Hero
    "hero.greeting": "Hi, I'm",
    "hero.location": "San Miguel de Tucumán, Argentina",

    // Technologies
    "tech.title": "Technologies",
    "tech.subtitle": "The stack and tools I work with.",

    // Projects
    "projects.title": "Projects",
    "projects.subtitle": "A selection of recent projects.",
    "projects.highlights": "Highlights",

    // About
    "about.title": "About Me",
    "about.subtitle": "Education, approach, and goals.",
    "about.profile": "How I Work",
    "about.objectives": "Goals",
    "about.education": "Education",
    "about.languages": "Languages",

    // Certifications
    "cert.title": "AI Training",
    "cert.subtitle": "Courses and certifications.",
    "cert.view": "View certificate",

    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "Interested in working together? Get in touch.",
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

  // Metadata is rendered in Spanish on the server; keep it in sync when the visitor switches language.
  useEffect(() => {
    const meta = siteMetadata[language]
    document.documentElement.lang = language
    document.title = meta.title
    document.querySelector('meta[name="description"]')?.setAttribute("content", meta.description)
  }, [language])

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
