"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { translations } from "@/lib/data"
import { useLanguage } from "@/contexts/language-context"

export default function CertificationsLearning() {
  const { language, t } = useLanguage()

  return (
    <Card className="border-border bg-card/80 text-card-foreground">
      <CardContent className="p-6">
        <ul className="space-y-3">
          {translations[language].trainings.map((training) => (
            <li key={training.title} className="flex items-start gap-3">
              <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-primary/60" aria-hidden />
              <div className="min-w-0 flex-1">
                <p className="font-medium text-foreground">
                  {training.url ? (
                    <a
                      href={training.url}
                      target="_blank"
                      rel="noreferrer"
                      className="underline decoration-foreground/30 underline-offset-2 hover:decoration-foreground"
                    >
                      {training.title}
                    </a>
                  ) : (
                    training.title
                  )}
                  {training.titleNote ? (
                    <span className="font-normal text-muted-foreground"> {training.titleNote}</span>
                  ) : null}
                </p>
                <p className="text-sm text-muted-foreground">
                  {training.provider}
                  {training.details ? ` · ${training.details}` : null}
                </p>
                {training.certificate ? (
                  <a
                    href={training.certificate}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-cyan-700 hover:underline dark:text-cyan-300"
                  >
                    {t("cert.view")}
                    <ExternalLink className="h-3 w-3" aria-hidden />
                  </a>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
