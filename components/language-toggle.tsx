"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "es" ? "en" : "es")}
      className="text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/50"
    >
      <Globe className="h-4 w-4 mr-2" />
      {language === "es" ? "EN" : "ES"}
    </Button>
  )
}
