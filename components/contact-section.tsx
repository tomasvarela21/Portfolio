"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import { person } from "@/lib/data"
import { useLanguage } from "@/contexts/language-context"

export default function ContactSection({}: Record<string, never> = {}) {
  const { language, t } = useLanguage()

  return (
    <Card className="border-neutral-800 bg-neutral-900/60 text-neutral-200">
      <CardContent className="grid gap-6 p-6 sm:grid-cols-2">
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-neutral-100">
            {language === "es" ? "¿Hablamos?" : "Let's talk?"}
          </h3>
          <p className="mt-2 text-neutral-300">
            {language === "es"
              ? "Estoy abierto a roles full‑time y proyectos freelance. Escríbeme y coordinamos una llamada."
              : "I'm open to full-time roles and freelance projects. Write to me and let's schedule a call."}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Button asChild className="bg-white/10 text-neutral-100 hover:bg-white/20">
              <a href={`mailto:${person.email}`} aria-label={t("contact.email")}>
                <Mail className="mr-2 h-4 w-4" />
                {"Email"}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-neutral-800 bg-neutral-900 text-neutral-200 hover:border-neutral-700 hover:bg-neutral-800 hover:text-white"
            >
              <a href={person.linkedin} target="_blank" rel="noreferrer" aria-label={t("contact.linkedin")}>
                <Linkedin className="mr-2 h-4 w-4" />
                {"LinkedIn"}
              </a>
            </Button>
            <Button asChild variant="ghost" className="text-neutral-300 hover:text-white">
              <a href={person.github} target="_blank" rel="noreferrer" aria-label={t("contact.github")}>
                <Github className="mr-2 h-4 w-4" />
                {"GitHub"}
              </a>
            </Button>
          </div>
        </div>
        <div className="rounded-md border border-neutral-800 bg-neutral-950/60 p-4">
          <div className="flex items-center gap-2 text-neutral-200">
            <MapPin className="h-4 w-4" />
            <p className="text-sm font-medium">{person.location}</p>
          </div>
          <img
            src="/abstract-tucuman-map.png"
            alt={language === "es" ? "Mapa abstracto de Tucumán" : "Abstract map of Tucumán"}
            className="mt-4 w-full rounded-md ring-1 ring-neutral-800"
          />
        </div>
      </CardContent>
    </Card>
  )
}
