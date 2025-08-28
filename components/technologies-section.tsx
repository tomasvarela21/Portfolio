"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Database, Wrench, Rocket } from "lucide-react"
import Image from "next/image"
import { stackIcons } from "@/lib/data"
import { useLanguage } from "@/contexts/language-context"

interface TileProps {
  label: string
  src: string
}

const defaultTileProps: TileProps = {
  label: "Tech",
  src: "/tech/example.png",
}

function Tile({ label, src }: TileProps = defaultTileProps) {
  return (
    <div className="group flex flex-col items-center justify-center gap-1.5 p-1.5 sm:gap-2 sm:p-2 transition will-change-transform hover:-translate-y-1">
      <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center transition-all duration-300 group-hover:scale-110">
        <div className="relative h-10 w-10 sm:h-12 sm:w-12">
          <Image
            src={src || "/placeholder.svg"}
            alt={`${label} logo`}
            fill
            sizes="48px"
            className="object-contain drop-shadow-lg"
          />
        </div>
      </div>
      <span className="text-[9px] sm:text-[10px] font-medium text-neutral-400 transition-colors group-hover:text-neutral-200 text-center leading-tight">
        {label}
      </span>
    </div>
  )
}

interface TechCardProps {
  title: string
  icon: React.ReactNode
  items: readonly { label: string; src: string }[]
}

const defaultTechCardProps: TechCardProps = {
  title: "Título",
  icon: <Code2 className="h-5 w-5" />,
  items: [{ label: "Item", src: "/tech/example.png" }],
}

function TechCard({ title, icon, items }: TechCardProps = defaultTechCardProps) {
  return (
    <Card className="border-neutral-800 bg-neutral-900/60 text-neutral-200 transition hover:shadow-lg hover:shadow-black/30">
      <CardHeader className="pb-2 px-3 sm:px-6 pt-3 sm:pt-6">
        <CardTitle className="flex items-center gap-2 text-neutral-100 text-xs sm:text-sm">
          <div className="h-3 w-3 sm:h-4 sm:w-4 text-neutral-300">
            {icon}
          </div>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0 px-3 sm:px-6 pb-3 sm:pb-6">
        <div className="grid grid-cols-3 gap-1 sm:gap-2 place-items-center">
          {items.map((t) => (
            <Tile key={t.label} label={t.label} src={t.src} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default function TechnologiesSection() {
  const { t } = useLanguage()

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
        <TechCard
          title={t("tech.frontend")}
          icon={<Code2 className="h-4 w-4 text-neutral-300" />}
          items={stackIcons.frontend}
        />
        <TechCard
          title={t("tech.backend")}
          icon={<Database className="h-4 w-4 text-neutral-300" />}
          items={stackIcons.backend}
        />
      </div>

      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
        <TechCard
          title={t("tech.tools")}
          icon={<Wrench className="h-4 w-4 text-neutral-300" />}
          items={stackIcons.tools}
        />
        <TechCard
          title={t("tech.learning")}
          icon={<Rocket className="h-4 w-4 text-neutral-300" />}
          items={stackIcons.learning}
        />
      </div>
    </div>
  )
}