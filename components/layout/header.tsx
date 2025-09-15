"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { navLinks, BottomNavLinks } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const ThemeToggle = () => {
    return (
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (<Sun className="size-4 text-yellow-400" />) : (<Moon className="size-4 text-blue-600" />)}
      </Button>
    )
  }

  return (
    <header className="fixed z-50 top-2 right-2 left-2 bg-background/80 backdrop-blur-xs px-0 md:px-20 md:py-2 rounded-full md:rounded-none not-md:border-2 overflow-hidden">
      <div className="container h-16 max-w-screen-2xl mx-auto flex items-center justify-between px-4">
        <Link href="/" className="flex items-center text-xl font-bold px-2">
          <Image src='./light-logo.svg' alt="Logo" width={100} height={100} className="dark:hidden h-17 md:h-25 w-17 md:w-25" />
          <Image src='./dark-logo.svg' alt="Logo" width={100} height={100} className="not-dark:hidden h-17 md:h-25 w-17 md:w-25" />
          <span className="text-xl md:text-3xl text-orange-500">.AI</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center border-2 rounded-lg px-6 py-3 gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-foreground hover:border-b-2"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <div className="flex items-center gap-3 border-2 rounded-full px-4 py-2">
            <Link href="https://www.linkedin.com/in/vinay-reddy-9aa439295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" aria-label="LinkedIn">
              <FaLinkedin className="size-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="https://github.com/vinay-oppuri" target="_blank" aria-label="GitHub">
              <FaGithub className="size-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="https://instagram.com/_v1nzy" target="_blank" aria-label="Instagram">
              <FaInstagram className="size-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </div>
          <div className="flex">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}