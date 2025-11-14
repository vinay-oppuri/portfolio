"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { navLinks } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import Image from "next/image"
import useSound from "use-sound"
import GlassSurface from "../react-bits/GlassSurface"

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
      >
        {theme === "dark" ? (<Sun className="size-4 text-yellow-400" />) : (<Moon className="size-4 text-blue-600" />)}
      </Button>
    )
  }

  return (
    <header className="fixed z-50 top-2 left-2 right-2 md:top-0 md:left-0 md:right-0 px-0 md:px-20 md:py-2">
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

        {/* DESKTOP NAV */}
        <GlassSurface
          width="auto"
          height={52}
          borderRadius={26}
          opacity={0.65}
          brightness={80}
          displace={6}
          distortionScale={-120}
          redOffset={12}
          greenOffset={20}
          blueOffset={28}
          mixBlendMode="screen"
          className="hidden md:flex"
        >
          <div className="flex items-center px-6 py-3 gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-foreground hover:border-b-2"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </GlassSurface>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-2">
          <GlassSurface
            width={120}
            height={40}
            borderRadius={26}
            opacity={0.65}
            brightness={80}
            displace={6}
            distortionScale={-120}
            redOffset={12}
            greenOffset={20}
            blueOffset={28}
            mixBlendMode="screen"
          >
            <div className="flex items-center gap-3 px-5 py-2">
              <Link href="https://www.linkedin.com/in/vinay-reddy-9aa439295" target="_blank">
                <FaLinkedin className="size-5 text-muted-foreground hover:text-primary" />
              </Link>
              <Link href="https://github.com/vinay-oppuri" target="_blank">
                <FaGithub className="size-5 text-muted-foreground hover:text-primary" />
              </Link>
              <Link href="https://instagram.com/_v1nzy" target="_blank">
                <FaInstagram className="size-5 text-muted-foreground hover:text-primary" />
              </Link>
            </div>
          </GlassSurface>

          {/* THEME TOGGLE */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}