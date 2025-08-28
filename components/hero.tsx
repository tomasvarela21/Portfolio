"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import { person, translations } from "@/lib/data"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export default function Hero() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [spotlightEnabled, setSpotlightEnabled] = useState(true)
  const { language, t } = useLanguage()

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
      className="relative overflow-hidden bg-neutral-950"
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
            "radial-gradient(900px 450px at 10% 0%, rgba(255,255,255,0.05), transparent 60%), radial-gradient(700px 350px at 100% 100%, rgba(255,255,255,0.05), transparent 60%)",
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
          <Badge variant="outline" className="mb-4 border-neutral-800 bg-green-500/60 text-neutral-300">
            {language === "es" ? "Disponible para oportunidades" : "Available for opportunities"}
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-100">
            {t("hero.greeting")}
            <span className="bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
              {person.name.split(" ")[0]}
            </span>
          </h1>
          <p className="mt-2 text-base sm:text-lg text-neutral-300">{translations[language].person.title}</p>
          <p className="mt-4 max-w-2xl text-sm sm:text-base text-neutral-400 mx-auto md:mx-0">
            {t("hero.description")}
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-2">
            <Button
              asChild
              variant="outline"
              className="w-full sm:w-auto border-neutral-800 bg-neutral-900 text-neutral-200 hover:border-neutral-700 hover:bg-neutral-800 hover:text-white"
            >
              <a href={person.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin className="mr-2 h-4 w-4" />
                {"LinkedIn"}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-full sm:w-auto border-neutral-800 bg-neutral-900 text-neutral-200 hover:border-neutral-700 hover:bg-neutral-800 hover:text-white"
            >
              <a href={person.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github className="mr-2 h-4 w-4" />
                {"GitHub"}
              </a>
            </Button>
            <Button asChild className="w-full sm:w-auto bg-white/10 text-neutral-100 hover:bg-white/20">
              <a href={`mailto:${person.email}`} aria-label="Enviar email">
                <Mail className="mr-2 h-4 w-4" />
                {"Email"}
              </a>
            </Button>
          </div>

          <div className="mt-3 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="w-full sm:w-auto border-neutral-700 bg-neutral-800/50 text-neutral-300 hover:border-neutral-600 hover:bg-neutral-700/70 hover:text-neutral-200"
            >
              <a
                href="/Tomas_Varela_CV_es.pdf"
                download
                aria-label={language === "es" ? "Descargar CV en Español" : "Download CV in Spanish"}
              >
                <Download className="mr-2 h-3 w-3" />
                {language === "es" ? "CV Español" : "CV Spanish"}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="w-full sm:w-auto border-neutral-700 bg-neutral-800/50 text-neutral-300 hover:border-neutral-600 hover:bg-neutral-700/70 hover:text-neutral-200"
            >
              <a
                href="/Tomas_Varela_CV_En.docx"
                download
                aria-label={language === "es" ? "Descargar CV en Inglés" : "Download CV in English"}
              >
                <Download className="mr-2 h-3 w-3" />
                {language === "es" ? "CV Inglés" : "CV English"}
              </a>
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-2">
            {["Next.js", "React", "Node.js", "TypeScript", "MySQL", "Firebase", "Tailwind CSS"].map((s) => (
              <span
                key={s}
                className="rounded-full border border-neutral-800 bg-neutral-900/60 px-2.5 sm:px-3 py-1 text-xs sm:text-sm text-neutral-300"
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
            alt="Foto de Tomás Varela sonriendo sobre un puente"
            width={208}
            height={208}
            className="relative mx-auto aspect-square h-40 w-40 sm:h-52 sm:w-52 rounded-full border border-neutral-800 object-cover object-center shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]"
            priority
          />
        </div>
      </div>

      <style jsx>{`
        .dot-grid {
          background-image: radial-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1.2px);
          background-size: 16px 16px;
          background-position: 0 0;
          animation: gridPan 26s linear infinite;
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