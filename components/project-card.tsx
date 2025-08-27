"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import type { Project } from "@/lib/data"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/data"

interface ProjectCardProps {
  project: Project
}

const defaultProject: Project = {
  slug: "example",
  title: "Proyecto",
  description: "Descripción",
  impact: "Impacto",
  stack: ["Next.js"],
  image: { src: "/example-text.png", alt: "Ejemplo" },
}

export default function ProjectCard({ project = defaultProject }: ProjectCardProps) {
  const { language } = useLanguage()

  const projectIndex = project.slug === "alenort-management-system" ? 0 : 2
  const translatedProject = translations[language].projects[projectIndex]

  return (
    <div className="group relative">
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 blur transition duration-300 group-hover:opacity-100"
        style={{
          background: "linear-gradient(135deg, rgba(34,211,238,0.18), rgba(168,85,247,0.18), rgba(244,114,182,0.16))",
        }}
        aria-hidden
      />
      <Card className="relative h-full overflow-hidden rounded-2xl border-neutral-800 bg-neutral-900/60 text-neutral-200 transition will-change-transform group-hover:-translate-y-0.5 group-hover:shadow-xl group-hover:shadow-black/30">
        <CardHeader className="space-y-2 p-4 sm:p-6">
          <CardTitle className="flex items-start justify-between gap-3 text-neutral-100 text-base sm:text-lg">
            <span className="leading-tight">{translatedProject.title}</span>
          </CardTitle>
          {project.role ? <p className="text-xs text-neutral-400">{project.role}</p> : null}
        </CardHeader>
        <CardContent className="space-y-4 p-4 sm:p-6 pt-0">
          <div className="relative aspect-[16/9] w-full rounded-md overflow-hidden ring-1 ring-neutral-800">
            <Image
              src={project.image.src || "/placeholder.svg?height=180&width=320&query=project%20thumbnail"}
              alt={project.image.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
          <p className="text-sm text-neutral-300">{translatedProject.description}</p>
          <div>
            <p className="text-sm font-medium text-neutral-100">{language === "es" ? "Impacto" : "Impact"}</p>
            <p className="text-sm text-neutral-300">{translatedProject.impact}</p>
          </div>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {project.stack.map((s) => (
              <Badge
                key={s}
                variant="secondary"
                className="border border-neutral-800 bg-neutral-900/70 text-neutral-200 text-xs"
              >
                {s}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-4 sm:p-6 pt-0">
          <div className="flex gap-2 w-full">
            {project.github && (
              <Button
                asChild
                variant="outline"
                size="sm"
                className="flex-1 border-neutral-700 bg-neutral-800/50 text-neutral-200 hover:bg-neutral-700 hover:text-white"
              >
                <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  {language === "es" ? "Código" : "Code"}
                </a>
              </Button>
            )}
            {project.external && (
              <Button
                asChild
                variant="outline"
                size="sm"
                className="flex-1 border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 hover:text-cyan-200"
              >
                <a href={project.external} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Demo
                </a>
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}