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
      className="text-muted-foreground hover:bg-accent hover:text-accent-foreground"
    >
      <Globe className="h-4 w-4 mr-2" />
      {language === "es" ? "EN" : "ES"}
    </Button>
  )
}
