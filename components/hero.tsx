"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download, FileText } from "lucide-react"
import { person, translations } from "@/lib/data"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export default function Hero() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [spotlightEnabled, setSpotlightEnabled] = useState(true)
  const { language, t } = useLanguage()
  const cvDownloads = [
    {
      href: "/Tomas_Varela_CV_es.pdf",
      label: language === "es" ? "CV Español" : "Spanish CV",
      meta: language === "es" ? "PDF actualizado" : "Updated PDF",
      aria: language === "es" ? "Descargar CV en Español" : "Download CV in Spanish",
    },
    {
      href: "/Tomas_Varela_CV_En.pdf",
      label: language === "es" ? "CV Inglés" : "English CV",
      meta: language === "es" ? "PDF actualizado" : "Updated PDF",
      aria: language === "es" ? "Descargar CV en Inglés" : "Download CV in English",
    },
  ]

  useEffect(() => {
    const check = () => {
      const finePointer =
        typeof window !== "undefined" && window.matchMedia && window.matchMedia("(pointer: fine)").matches
      const wideEnough = typeof window !== "undefined" && window.innerWidth >= 768
      setSpotlightEnabled(Boolean(finePointer && wideEnough))
    }
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  return (
    <div
      className="relative overflow-hidden bg-background"
      onMouseMove={(e) => {
        if (!spotlightEnabled) return
        const rect = e.currentTarget.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        setPos({ x, y })
      }}
      style={{
        "--x": `${pos.x}px`,
        "--y": `${pos.y}px`,
      } as React.CSSProperties}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 450px at 10% 0%, color-mix(in oklch, var(--foreground) 7%, transparent), transparent 60%), radial-gradient(700px 350px at 100% 100%, color-mix(in oklch, var(--foreground) 6%, transparent), transparent 60%)",
        }}
        aria-hidden
      />

      <div className="pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(80%_60%_at_50%_40%,black,transparent)]">
        <div className="dot-grid h-full w-full" />
      </div>

      <div
        className="pointer-events-none absolute inset-0 mix-blend-screen transition-opacity duration-300"
        style={{
          opacity: spotlightEnabled ? 1 : 0,
          background:
            "radial-gradient(260px 160px at var(--x) var(--y), rgba(34,211,238,0.14), transparent 60%), radial-gradient(320px 200px at calc(var(--x) + 80px) calc(var(--y) + 60px), rgba(168,85,247,0.16), transparent 65%), radial-gradient(300px 180px at calc(var(--x) - 80px) calc(var(--y) - 60px), rgba(244,114,182,0.12), transparent 65%)",
        }}
        aria-hidden
      />

      <div className="mx-auto grid max-w-6xl items-center gap-6 sm:gap-8 px-4 py-12 sm:py-16 md:py-24 grid-cols-1 md:grid-cols-[1.25fr_0.75fr]">
        <div className="relative text-center md:text-left">
          <Badge variant="outline" className="mb-4 border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300">
            {language === "es" ? "Disponible para oportunidades" : "Open to new opportunities"}
          </Badge>
          <Badge variant="outline" className="mb-4 ml-2 border-cyan-700/25 bg-cyan-700/10 text-cyan-800 dark:text-cyan-200">
            {language === "es" ? "Freelance desde 2025" : "Freelancing since 2025"}
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            {t("hero.greeting")}
            <span className="bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
              {person.name.split(" ")[0]}
            </span>
          </h1>
          <p className="mt-2 text-base sm:text-lg text-muted-foreground">{translations[language].person.title}</p>
          <p className="mt-4 max-w-2xl text-sm sm:text-base text-muted-foreground mx-auto md:mx-0">
            {translations[language].person.profile}
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-2">
            <Button
              asChild
              variant="outline"
              className="w-full sm:w-auto border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground"
            >
              <a href={person.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin className="mr-2 h-4 w-4" />
                {"LinkedIn"}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-full sm:w-auto border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground"
            >
              <a href={person.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github className="mr-2 h-4 w-4" />
                {"GitHub"}
              </a>
            </Button>
            <Button asChild className="w-full sm:w-auto">
              <a href={`mailto:${person.email}`} aria-label={language === "es" ? "Enviar email" : "Send email"}>
                <Mail className="mr-2 h-4 w-4" />
                {"Email"}
              </a>
            </Button>
          </div>

          <div className="mt-4 grid w-full max-w-md grid-cols-1 gap-2 sm:grid-cols-2 md:max-w-lg">
            {cvDownloads.map((cv) => (
              <a
                key={cv.href}
                href={cv.href}
                download
                aria-label={cv.aria}
                className="group relative flex min-h-16 items-center justify-between overflow-hidden rounded-md border border-[#17485a]/25 bg-white px-3.5 py-3 text-left text-[#102f3b] shadow-sm transition hover:-translate-y-0.5 hover:border-[#17485a]/50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17485a]/40 dark:border-cyan-200/20 dark:bg-neutral-950 dark:text-cyan-50 dark:hover:border-cyan-200/40"
              >
                <span className="absolute inset-x-3 top-2 h-px bg-[#17485a]/55 dark:bg-cyan-200/50" aria-hidden />
                <span className="flex items-center gap-3 pt-1">
                  <span className="flex h-8 w-8 items-center justify-center rounded-sm border border-[#17485a]/20 bg-[#17485a]/5 dark:border-cyan-200/20 dark:bg-cyan-200/10">
                    <FileText className="h-4 w-4" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase leading-none tracking-normal">{cv.label}</span>
                    <span className="mt-1 block text-[11px] text-[#51656e] dark:text-cyan-100/70">{cv.meta}</span>
                  </span>
                </span>
                <Download className="h-4 w-4 opacity-65 transition group-hover:translate-y-0.5 group-hover:opacity-100" aria-hidden />
              </a>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-2">
            {["React", "TypeScript", "Node.js", "PostgreSQL", "Python", "Next.js", "Tailwind CSS"].map((s) => (
              <span
                key={s}
                className="rounded-full border border-border bg-card/80 px-2.5 sm:px-3 py-1 text-xs sm:text-sm text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[200px] sm:max-w-xs order-first md:order-last">
          <div
            className="absolute -inset-2 rounded-full blur-2xl"
            style={{
              background:
                "conic-gradient(from 0deg, rgba(34,211,238,0.25), rgba(168,85,247,0.25), rgba(244,114,182,0.25), rgba(34,211,238,0.25))",
            }}
            aria-hidden
          />
          <Image
            src="/images/yo2.jpg"
            alt={language === "es" ? "Foto de Tomás Varela sonriendo sobre un puente" : "Photo of Tomás Varela smiling on a bridge"}
            width={208}
            height={208}
            className="relative mx-auto aspect-square h-40 w-40 sm:h-52 sm:w-52 rounded-full border border-border object-cover object-center shadow-[0_10px_40px_-10px_rgba(0,0,0,0.35)]"
            priority
          />
        </div>
      </div>

      <style jsx>{`
        .dot-grid {
          background-image: radial-gradient(rgba(15, 23, 42, 0.08) 1px, transparent 1.2px);
          background-size: 16px 16px;
          background-position: 0 0;
          animation: gridPan 26s linear infinite;
        }
        :global(.dark) .dot-grid {
          background-image: radial-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1.2px);
        }
        @keyframes gridPan {
          0% { background-position: 0 0; }
          100% { background-position: 256px 256px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .dot-grid { animation: none; }
        }
      `}</style>
    </div>
  )
}
