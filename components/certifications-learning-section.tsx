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
      <Card className="border-neutral-800 bg-neutral-900/60 text-neutral-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-neutral-100">
            <Award className="h-5 w-5 text-neutral-300" />
            {t("cert.additional-training")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {translations[language].trainings.map((training, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-neutral-500" aria-hidden />
                <div>
                  <p className="font-medium text-neutral-100">{training.title}</p>
                  <p className="text-sm text-neutral-400">{training.provider}</p>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="border-neutral-800 bg-neutral-900/60 text-neutral-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-neutral-100">
            <Rocket className="h-5 w-5 text-neutral-300" />
            {t("tech.learning")}
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {stackIcons.learning.map((tech) => (
            <div
              key={tech.label}
              className="flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-950/60 p-2"
            >
              <Image 
                src={tech.src || "/placeholder.svg"} 
                alt={`${tech.label} logo`} 
                width={24}
                height={24}
                className="h-6 w-6 object-contain" 
              />
              <span className="text-sm text-neutral-300">{tech.label}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}