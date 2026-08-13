"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/data"

export default function AboutSection() {
  const { language, t } = useLanguage()

  return (
    <Card className="border-border bg-card/80 text-card-foreground">
      <CardContent className="grid gap-6 p-6 md:grid-cols-2">
        <div>
          <h3 className="text-xl font-semibold text-foreground">{t("about.profile")}</h3>
          <p className="mt-2 text-muted-foreground">{translations[language].person.profile}</p>
          <div className="mt-4 rounded-md border border-border bg-muted/40 p-4">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{t("about.objectives")}: </span>
              {translations[language].person.objectives}
            </p>
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
                    {e.institution} • {e.status}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground">{language === "es" ? "Idiomas" : "Languages"}</h3>
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
