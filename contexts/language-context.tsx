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
    "hero.role": "Desarrollador Fullstack",
    "hero.description":
      "Desarrollador con experiencia en JavaScript, React, Node.js y bases de datos. Apasionado por crear soluciones digitales centradas en el usuario.",
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
    "about.profile": "Perfil Profesional",
    "about.objectives": "Objetivos",
    "about.education": "Educación",
    "about.skills": "Habilidades Blandas",
    "about.languages": "Idiomas",

    // Certifications
    "cert.title": "Certificados y aprendiendo...",
    "cert.subtitle": "Formación complementaria y tecnologías que estoy explorando.",
    "cert.additional-training": "Formación Adicional",

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
    "hero.role": "Fullstack Developer",
    "hero.description":
      "Developer with experience in JavaScript, React, Node.js and databases. Passionate about creating user-centered digital solutions.",
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
    "about.profile": "Professional Profile",
    "about.objectives": "Objectives",
    "about.education": "Education",
    "about.skills": "Soft Skills",
    "about.languages": "Languages",

    // Certifications
    "cert.title": "Certifications and learning...",
    "cert.subtitle": "Complementary training and technologies I'm exploring.",
    "cert.additional-training": "Additional Training",

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
