"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Code2, Database, Layers, Rocket, Workflow, Wrench, Network, Shapes } from "lucide-react"
import Image from "next/image"
import { stackIcons, technicalSkillGroups, technologyIcons } from "@/lib/data"
import { useLanguage } from "@/contexts/language-context"

const groupIcons = {
  languages: Code2,
  frontend: Layers,
  backend: Code2,
  data: Database,
  tools: Wrench,
  methods: Workflow,
  additional: BookOpen,
}

const skillIcons: Record<string, typeof Code2> = {
  SQL: Database,
  "REST APIs": Network,
  "APIs REST": Network,
  Scrum: Workflow,
  UML: Shapes,
}

interface TechCardProps {
  title: string
  icon: typeof Code2
  items: readonly string[]
}

function TechCard({ title, icon: Icon, items }: TechCardProps) {
  return (
    <Card className="border-border bg-card/80 text-card-foreground transition hover:shadow-lg hover:shadow-black/10 dark:hover:shadow-black/30">
      <CardHeader className="pb-2 px-3 sm:px-6 pt-3 sm:pt-6">
        <CardTitle className="flex items-center gap-2 text-foreground text-xs sm:text-sm">
          <Icon className="h-4 w-4 text-muted-foreground" aria-hidden />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0 px-3 sm:px-6 pb-3 sm:pb-6">
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {items.map((item) => {
            const source = technologyIcons[item]
            const SkillIcon = skillIcons[item] ?? Code2
            return (
              <div key={item} className="group flex min-w-0 flex-col items-center gap-2 p-1.5 transition-transform hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white p-1.5 transition-transform group-hover:scale-110">
                  {source ? (
                    <Image src={source} alt="" width={36} height={36} className="h-9 w-9 object-contain" />
                  ) : (
                    <SkillIcon className="h-9 w-9 text-slate-700" aria-hidden />
                  )}
                </div>
                <span className="text-center text-xs font-medium leading-snug text-muted-foreground group-hover:text-foreground">
                  {item}
                </span>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}

export default function TechnologiesSection() {
  const { language, t } = useLanguage()

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
      {technicalSkillGroups.map((group) => (
        <TechCard
          key={group.id}
          title={group.label[language]}
          icon={groupIcons[group.id]}
          items={group.items.map((item) => item === "REST APIs" && language === "es" ? "APIs REST" : item)}
        />
      ))}
      <TechCard
        title={t("tech.learning")}
        icon={Rocket}
        items={stackIcons.learning.map((tech) => tech.label)}
      />
    </div>
  )
}
