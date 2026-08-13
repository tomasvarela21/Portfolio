"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light"

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

function getStoredTheme(): Theme {
  const savedTheme = localStorage.getItem("theme") as Theme | null
  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme
  }

  if (document.documentElement.classList.contains("light")) {
    return "light"
  }

  if (document.documentElement.classList.contains("dark")) {
    return "dark"
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark")
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setTheme(getStoredTheme())
    setHasMounted(true)
  }, [])

  useEffect(() => {
    if (!hasMounted) return

    document.documentElement.classList.remove("light", "dark")
    document.documentElement.classList.add(theme)
    document.documentElement.style.colorScheme = theme
    localStorage.setItem("theme", theme)
  }, [hasMounted, theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
