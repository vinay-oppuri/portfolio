"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { navLinks } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { FaGithub } from "react-icons/fa"
import Image from "next/image"
import useSound from "use-sound"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [sound] = useSound("/click.wav")

  const switchTheme = () => {
    sound();
    setTheme(theme === "dark" ? "light" : "dark")
  }

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const ThemeToggle = () => {
    return (
      <Button
        variant="ghost"
        size="icon"
        onClick={switchTheme}
        aria-label="Toggle theme"
        className="rounded-full bg-white/5 dark:bg-white/5 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-primary/20 hover:border-primary/30 transition-all duration-300"
      >
        {theme === "dark" ? (<Sun className="size-4 text-yellow-400" />) : (<Moon className="size-4 text-blue-600" />)}
      </Button>
    )
  }

  return (
    <header className="fixed z-50 top-0 left-0 right-0 px-0 md:px-20 md:py-2 rounded-full md:border-none backdrop-blur-xs md:backdrop-blur-none">
      <div className="container h-16 max-w-screen-2xl mx-auto flex items-center justify-between px-4">
        {/* LOGO */}
        <Link href="/" className="flex items-center text-xl font-bold px-2">
          <Image
            src='/light-logo.svg'
            alt="Logo"
            width={100}
            height={100}
            className="dark:hidden h-17 md:h-25 w-17 md:w-25"
          />
          <Image
            src='/dark-logo.svg'
            alt="Logo"
            width={100}
            height={100}
            className="not-dark:hidden h-17 md:h-25 w-17 md:w-25"
          />
          <span className="text-xl md:text-3xl text-orange-500">.AI</span>
        </Link>


        <nav className="hidden md:flex items-center gap-6 px-8 py-4 rounded-full bg-white/10 dark:bg-white/5 border border-white/20 backdrop-blur-xl shadow-lg shadow-purple-500/10 text-sm font-semibold">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-shadow-amber-100 hover:border-b-2"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-2">
          <Link href="https://github.com/vinay-oppuri" target="_blank" className="flex items-center gap-3 px-5 py-2 bg-white/5 backdrop-blur-md border border-white/10 shadow-lg rounded-full hover:shadow-xl hover:shadow-white/20">
            <span className="font-semibold text-muted-foreground text-md">Github</span>
            <FaGithub className="size-7 text-muted-foreground hover:text-primary" />
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}