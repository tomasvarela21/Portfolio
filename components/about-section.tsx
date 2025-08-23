"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/data"

export default function AboutSection({}: Record<string, never> = {}) {
  const { language, t } = useLanguage()

  return (
    <Card className="border-neutral-800 bg-neutral-900/60 text-neutral-200">
      <CardContent className="grid gap-6 p-6 md:grid-cols-2">
        <div>
          <h3 className="text-xl font-semibold text-neutral-100">{t("about.profile")}</h3>
          <p className="mt-2 text-neutral-300">{translations[language].person.profile}</p>
          <div className="mt-4 rounded-md border border-neutral-800 bg-neutral-950/60 p-4">
            <p className="text-sm text-neutral-300">
              <span className="font-medium text-neutral-100">{t("about.objectives")}: </span>
              {translations[language].person.objectives}
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-neutral-100">{t("about.education")}</h3>
          <ul className="mt-2 space-y-3">
            {translations[language].education.map((e, index) => (
              <li key={index}>
                <p className="font-medium text-neutral-100">{e.program}</p>
                <p className="text-sm text-neutral-400">
                  {e.institution} • {e.status}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
