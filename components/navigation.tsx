"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export function Navigation() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark")
    setIsDark(isDarkMode)
  }, [])

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark")
    setIsDark(!isDark)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
          {"<Dev />"}
        </a>

        <div className="flex items-center gap-6">
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Sobre Mí
          </a>
          <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Proyectos
          </a>
          <a href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Habilidades
          </a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Contacto
          </a>

          <Button variant="ghost" size="icon" onClick={toggleTheme} className="ml-2">
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </nav>
  )
}
