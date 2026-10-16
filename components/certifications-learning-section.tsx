"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, ChevronDown, Download, ExternalLink } from "lucide-react"
import { translations, type Training } from "@/lib/data"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export default function CertificationsLearning() {
  const { language, t } = useLanguage()
  const trainingGroups = translations[language].trainings.reduce<Array<{ category?: string; items: Training[] }>>(
    (groups, training) => {
      const category = training.category?.[language]
      const group = groups.find((entry) => entry.category === category)
      if (group) {
        group.items.push(training)
      } else {
        groups.push({ category, items: [training] })
      }
      return groups
    },
    [],
  )

  return (
    <div>
      <Card className="border-border bg-card/80 text-card-foreground">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Award className="h-5 w-5 text-muted-foreground" />
            {t("cert.additional-training")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-5">
            {trainingGroups.map((group) => (
              <section key={group.category ?? "other"}>
                {group.category ? (
                  <h3 className="mb-3 text-sm font-semibold text-foreground">{group.category}</h3>
                ) : null}
                <ul className="space-y-3">
                  {group.items.map((training) => (
                    <li key={training.title} className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-primary/60" aria-hidden />
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-foreground">{training.title}</p>
                        <p className="text-sm text-muted-foreground">{training.provider}</p>
                        {training.details ? (
                          <p className="mt-1 text-sm text-muted-foreground">{training.details}</p>
                        ) : null}
                        {training.certificate ? (
                          <details className="group mt-3">
                            <summary className="inline-flex cursor-pointer list-none items-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring [&::-webkit-details-marker]:hidden">
                              <Award className="h-4 w-4" aria-hidden />
                              <span className="group-open:hidden">{t("cert.view")}</span>
                              <span className="hidden group-open:inline">{t("cert.hide")}</span>
                              <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" aria-hidden />
                            </summary>
                            <div className="mt-3 space-y-3">
                              <a
                                href={training.certificate.href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`${t("cert.open")}: ${training.title}`}
                                className="block overflow-hidden rounded-md border border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                              >
                                <Image
                                  src={training.certificate.preview}
                                  alt={`${t("cert.view")}: ${training.title} — Tomás Varela`}
                                  width={training.certificate.width}
                                  height={training.certificate.height}
                                  sizes="(max-width: 1024px) 100vw, 50vw"
                                  className="h-auto w-full"
                                />
                              </a>
                              <div className="flex flex-wrap gap-2">
                                <Button asChild variant="outline" size="sm">
                                  <a href={training.certificate.href} target="_blank" rel="noreferrer">
                                    <ExternalLink aria-hidden />
                                    {t("cert.open")}
                                  </a>
                                </Button>
                                <Button asChild variant="outline" size="sm">
                                  <a href={training.certificate.href} download>
                                    <Download aria-hidden />
                                    {t("cert.download")}
                                  </a>
                                </Button>
                              </div>
                            </div>
                          </details>
                        ) : null}
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </CardContent>
      </Card>

    </div>
  )
}
