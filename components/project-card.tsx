"use client"

import { useEffect, useMemo, useState } from "react"
import { createPortal } from "react-dom"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, ChevronLeft, ChevronRight, X } from "lucide-react"
import Image from "next/image"
import type { Project } from "@/lib/data"
import { useLanguage } from "@/contexts/language-context"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  project: Project
}

const defaultProject: Project = {
  slug: "example",
  title: "Proyecto",
  description: "Descripción",
  impact: "Impacto",
  stack: ["Next.js"],
  images: [
    {
      src: "/placeholder.svg?height=180&width=320&text=Project",
      alt: "Imagen del proyecto",
      width: 1280,
      height: 720,
    },
  ],
  translations: {
    es: { title: "Proyecto", description: "Descripción", impact: "Impacto" },
    en: { title: "Project", description: "Description", impact: "Impact" },
  },
}

export default function ProjectCard({ project = defaultProject }: ProjectCardProps) {
  const { language } = useLanguage()
  const galleryImages = useMemo(() => (project.images?.length ? project.images : defaultProject.images), [project.images])
  const [activeImage, setActiveImage] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const currentImage = galleryImages[activeImage] ?? defaultProject.images[0]

  const localizedCopy = project.translations?.[language] ?? {
    title: project.title,
    description: project.description,
    impact: project.impact,
  }

  useEffect(() => {
    setActiveImage(0)
    setIsModalOpen(false)
  }, [project.slug])

  useEffect(() => {
    if (activeImage >= galleryImages.length) {
      setActiveImage(0)
    }
  }, [galleryImages.length, activeImage])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isModalOpen) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isModalOpen])

  const showCarouselControls = galleryImages.length > 1

  const modalImageWidth = currentImage?.width ?? 1280
  const modalImageHeight = currentImage?.height ?? 720

  const handlePrev = () => {
    setActiveImage((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveImage((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))
  }

  const openActiveImage = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => setIsModalOpen(false)

  return (
    <div className="group relative">
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 blur transition duration-300 group-hover:opacity-100"
        style={{
          background: "linear-gradient(135deg, rgba(34,211,238,0.18), rgba(168,85,247,0.18), rgba(244,114,182,0.16))",
        }}
        aria-hidden
      />
      <Card className="relative h-full overflow-hidden rounded-2xl border-border bg-card/80 text-card-foreground transition will-change-transform group-hover:-translate-y-0.5 group-hover:shadow-xl group-hover:shadow-black/10 dark:group-hover:shadow-black/30">
        <CardHeader className="space-y-2 p-4 sm:p-6">
          <CardTitle className="flex items-start justify-between gap-3 text-foreground text-base sm:text-lg">
            <span className="leading-tight">{localizedCopy.title}</span>
          </CardTitle>
          {project.role ? <p className="text-xs text-muted-foreground">{project.role}</p> : null}
        </CardHeader>
        <CardContent className="space-y-4 p-4 sm:p-6 pt-0">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md ring-1 ring-border">
            <button
              type="button"
              onClick={openActiveImage}
              className="absolute inset-0 z-0 h-full w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label={
                language === "es"
                  ? `Abrir imagen ${activeImage + 1} del proyecto ${localizedCopy.title}`
                  : `Open project image ${activeImage + 1} for ${localizedCopy.title}`
              }
            >
              <Image
                key={`${project.slug}-${activeImage}`}
                src={currentImage?.src || defaultProject.images[0].src}
                alt={currentImage?.alt || defaultProject.images[0].alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </button>
            {showCarouselControls ? (
              <>
                <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-10 flex items-center justify-between px-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label={language === "es" ? "Imagen anterior" : "Previous image"}
                    className="pointer-events-auto inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black/70"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label={language === "es" ? "Imagen siguiente" : "Next image"}
                    className="pointer-events-auto inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black/70"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
                <div className="pointer-events-none absolute bottom-2 right-2 z-10 rounded-full bg-black/60 px-2 py-1 text-[11px] font-medium text-white">
                  {activeImage + 1}/{galleryImages.length}
                </div>
                <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 gap-1">
                  {galleryImages.map((_, idx) => (
                    <button
                      key={`${project.slug}-dot-${idx}`}
                      type="button"
                      aria-label={`${language === "es" ? "Ir a imagen" : "Go to image"} ${idx + 1}`}
                      onClick={() => setActiveImage(idx)}
                      className={cn(
                        "h-1.5 rounded-full bg-white/30 transition",
                        idx === activeImage ? "w-6 bg-white" : "w-3"
                      )}
                    />
                  ))}
                </div>
              </>
            ) : null}
          </div>
          <p className="text-sm text-muted-foreground">{localizedCopy.description}</p>
          <div>
            <p className="text-sm font-medium text-foreground">{language === "es" ? "Impacto" : "Impact"}</p>
            <p className="text-sm text-muted-foreground">{localizedCopy.impact}</p>
          </div>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {project.stack.map((s) => (
              <Badge
                key={s}
                variant="secondary"
                className="border border-border bg-secondary text-secondary-foreground text-xs"
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
                className="flex-1 border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground"
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
                className="flex-1 border-cyan-500/30 bg-cyan-500/10 text-cyan-700 hover:bg-cyan-500/20 dark:text-cyan-300 dark:hover:text-cyan-200"
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
      {isMounted && isModalOpen
        ? createPortal(
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-3 sm:px-6 py-6"
              onClick={closeModal}
            >
              <div
                className="relative w-full max-w-6xl"
                onClick={(event) => {
                  event.stopPropagation()
                }}
              >
                <button
                  type="button"
                  onClick={closeModal}
                  className="absolute -right-3 -top-3 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white shadow-lg shadow-black/40 transition hover:bg-black/90"
                  aria-label={language === "es" ? "Cerrar imagen" : "Close image"}
                >
                  <X className="h-4 w-4" />
                </button>
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/90 p-2 sm:p-4">
                  <Image
                    src={currentImage?.src || defaultProject.images[0].src}
                    alt={currentImage?.alt || defaultProject.images[0].alt}
                    width={modalImageWidth}
                    height={modalImageHeight}
                    sizes="(max-width: 768px) 95vw, (max-width: 1200px) 80vw, 1200px"
                    className="h-auto max-h-[80vh] w-full rounded-xl bg-black/30 object-contain"
                  />
                  {showCarouselControls ? (
                    <>
                      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3 sm:px-5">
                        <button
                          type="button"
                          onClick={handlePrev}
                          aria-label={language === "es" ? "Imagen anterior" : "Previous image"}
                          className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black/80"
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                          type="button"
                          onClick={handleNext}
                          aria-label={language === "es" ? "Imagen siguiente" : "Next image"}
                          className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black/80"
                        >
                          <ChevronRight className="h-5 w-5" />
                        </button>
                      </div>
                      <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white">
                        {activeImage + 1}/{galleryImages.length}
                      </div>
                    </>
                  ) : null}
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </div>
  )
}
