"use client"

import { useLanguage } from "@/contexts/language-context"

export default function SiteFooter({}: Record<string, never> = {}) {
  const { language, t } = useLanguage()

  return (
    <footer className="border-t border-neutral-900 bg-neutral-950">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-neutral-400">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p>
            {"© "}
            {new Date().getFullYear()}
            {" Tomás Varela. "}
            {language === "es" ? "Todos los derechos reservados." : "All rights reserved."}
          </p>
          <p>{t("footer.text")}</p>
        </div>
      </div>
    </footer>
  )
}
