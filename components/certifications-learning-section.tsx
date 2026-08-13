"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Rocket } from "lucide-react"
import { stackIcons, translations } from "@/lib/data"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export default function CertificationsLearning() {
  const { language, t } = useLanguage()

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card className="border-border bg-card/80 text-card-foreground">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Award className="h-5 w-5 text-muted-foreground" />
            {t("cert.additional-training")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {translations[language].trainings.map((training, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary/60" aria-hidden />
                <div>
                  <p className="font-medium text-foreground">{training.title}</p>
                  <p className="text-sm text-muted-foreground">{training.provider}</p>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="border-border bg-card/80 text-card-foreground">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Rocket className="h-5 w-5 text-muted-foreground" />
            {t("tech.learning")}
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {stackIcons.learning.map((tech) => (
            <div
              key={tech.label}
              className="flex items-center gap-2 rounded-md border border-border bg-muted/40 p-2"
            >
              <Image 
                src={tech.src || "/placeholder.svg"} 
                alt={`${tech.label} logo`} 
                width={24}
                height={24}
                className="h-6 w-6 object-contain" 
              />
              <span className="text-sm text-muted-foreground">{tech.label}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
