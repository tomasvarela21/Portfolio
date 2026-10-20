"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import { freelanceExperience, translations } from "@/lib/data"

export default function AboutSection() {
  const { language, t } = useLanguage()

  return (
    <Card className="border-border bg-card/80 text-card-foreground">
      <CardContent className="grid gap-6 p-6 md:grid-cols-2">
        <div>
          <h3 className="text-xl font-semibold text-foreground">{t("about.profile")}</h3>
          <p className="mt-2 text-muted-foreground">{translations[language].person.about}</p>
          <div className="mt-4 rounded-md border border-border bg-muted/40 p-4">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{t("about.objectives")}: </span>
              {translations[language].person.objectives}
            </p>
          </div>
          <div className="mt-4 rounded-md border border-[#17485a]/25 bg-card p-4 shadow-sm dark:border-cyan-200/20">
            <p className="text-xs font-bold uppercase text-[#17485a] dark:text-cyan-200">
              {language === "es" ? "Trabajo actual" : "Current Work"}
            </p>
            <p className="mt-2 font-medium text-foreground">{freelanceExperience[language].title}</p>
            <p className="text-sm text-muted-foreground">
              {freelanceExperience[language].period} · {freelanceExperience[language].location}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{freelanceExperience[language].description}</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              {freelanceExperience[language].highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-foreground">{t("about.education")}</h3>
            <ul className="mt-2 space-y-3">
              {translations[language].education.map((e, index) => (
                <li key={index}>
                  <p className="font-medium text-foreground">{e.program}</p>
                  <p className="text-sm text-muted-foreground">
                    {e.institution} • {e.status} • {e.period}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground">{t("about.languages")}</h3>
            <ul className="mt-2 space-y-3">
              {translations[language].languages.map((l) => (
                <li key={l.language}>
                  <p className="font-medium text-foreground">{l.language}</p>
                  <p className="text-sm text-muted-foreground">{l.level}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
