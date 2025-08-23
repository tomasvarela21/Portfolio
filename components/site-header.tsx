"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Github, Linkedin, Mail, Menu } from "lucide-react"
import { person } from "@/lib/data"
import { useLanguage } from "@/contexts/language-context"
import LanguageToggle from "@/components/language-toggle"
import ThemeToggle from "@/components/theme-toggle"

export default function SiteHeader({}: Record<string, never> = {}) {
  const [open, setOpen] = useState(false)
  const { t } = useLanguage()

  const nav = [
    { href: "#presentacion", label: t("nav.presentacion") },
    { href: "#tecnologias", label: t("nav.tecnologias") },
    { href: "#proyectos", label: t("nav.proyectos") },
    { href: "#sobre-mi", label: t("nav.sobre-mi") },
    { href: "#certificados", label: t("nav.certificados") },
    { href: "#contacto", label: t("nav.contacto") },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-900 bg-neutral-950/70 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 dark:border-neutral-900 dark:bg-neutral-950/70 light:border-neutral-200 light:bg-white/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link
          href="#presentacion"
          className="font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-400 dark:from-neutral-200 dark:to-neutral-400 light:from-neutral-800 light:to-neutral-600"
          aria-label="Ir a Presentación"
        >
          {"tomas.dev"}
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegación principal">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-neutral-300 transition hover:bg-neutral-900 hover:text-white dark:text-neutral-300 dark:hover:bg-neutral-900 dark:hover:text-white light:text-neutral-700 light:hover:bg-neutral-100 light:hover:text-neutral-900"
            >
              {item.label}
            </Link>
          ))}
          <div className="ml-2 flex items-center gap-1">
            <ThemeToggle />
            <LanguageToggle />
            <a
              href={person.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-md p-2 text-neutral-300 transition hover:bg-neutral-900 hover:text-white dark:text-neutral-300 dark:hover:bg-neutral-900 dark:hover:text-white light:text-neutral-700 light:hover:bg-neutral-100 light:hover:text-neutral-900"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={person.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-md p-2 text-neutral-300 transition hover:bg-neutral-900 hover:text-white dark:text-neutral-300 dark:hover:bg-neutral-900 dark:hover:text-white light:text-neutral-700 light:hover:bg-neutral-100 light:hover:text-neutral-900"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${person.email}`}
              aria-label="Email"
              className="rounded-md p-2 text-neutral-300 transition hover:bg-neutral-900 hover:text-white dark:text-neutral-300 dark:hover:bg-neutral-900 dark:hover:text-white light:text-neutral-700 light:hover:bg-neutral-100 light:hover:text-neutral-900"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </nav>

        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                aria-label="Abrir menú"
                className="border-neutral-800 bg-neutral-900 text-neutral-200 hover:bg-neutral-800 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800 light:border-neutral-300 light:bg-white light:text-neutral-800 light:hover:bg-neutral-100"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-80 border-neutral-800 bg-neutral-950 text-neutral-200 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-200 light:border-neutral-200 light:bg-white light:text-neutral-800"
            >
              <SheetHeader>
                <SheetTitle className="text-left text-neutral-100 dark:text-neutral-100 light:text-neutral-900">
                  {"tomas.dev"}
                </SheetTitle>
              </SheetHeader>
              <div className="mt-4 flex flex-col gap-1">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-2 text-sm font-medium text-neutral-300 transition hover:bg-neutral-900 hover:text-white dark:text-neutral-300 dark:hover:bg-neutral-900 dark:hover:text-white light:text-neutral-700 light:hover:bg-neutral-100 light:hover:text-neutral-900"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="mt-2 flex items-center gap-2">
                  <ThemeToggle />
                  <LanguageToggle />
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="rounded-md p-2 text-neutral-300 transition hover:bg-neutral-900 hover:text-white dark:text-neutral-300 dark:hover:bg-neutral-900 dark:hover:text-white light:text-neutral-700 light:hover:bg-neutral-100 light:hover:text-neutral-900"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={person.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="rounded-md p-2 text-neutral-300 transition hover:bg-neutral-900 hover:text-white dark:text-neutral-300 dark:hover:bg-neutral-900 dark:hover:text-white light:text-neutral-700 light:hover:bg-neutral-100 light:hover:text-neutral-900"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={`mailto:${person.email}`}
                    aria-label="Email"
                    className="rounded-md p-2 text-neutral-300 transition hover:bg-neutral-900 hover:text-white dark:text-neutral-300 dark:hover:bg-neutral-900 dark:hover:text-white light:text-neutral-700 light:hover:bg-neutral-100 light:hover:text-neutral-900"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
