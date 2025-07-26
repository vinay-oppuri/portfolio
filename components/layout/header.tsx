// components/layout/header.tsx
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu, X, MenuIcon } from "lucide-react"
import { navLinks } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import Image from "next/image"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

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
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-xs px-0 md:px-20 md:py-2">
      <div className="container h-16 max-w-screen-2xl mx-auto flex items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center text-xl font-bold">
          <Image src='./light-logo.svg' alt="Logo" width={100} height={100} className="dark:hidden h-20 md:h-25 w-20 md:w-25" />
          <Image src='./dark-logo.svg' alt="Logo" width={100} height={100} className="not-dark:hidden h-20 md:h-25 w-20 md:w-25" />
          <span className="text-2xl md:text-3xl text-orange-500">.AI</span>
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

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-3 border-2 rounded-full px-4 py-2">
            <Link href="https://linkedin.com/in/yourprofile" target="_blank" aria-label="LinkedIn">
              <FaLinkedin className="size-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="https://github.com/vinay-oppuri" target="_blank" aria-label="GitHub">
              <FaGithub className="size-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="https://instagram.com/_v1nzy" target="_blank" aria-label="Instagram">
              <FaInstagram className="size-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </div>
          <div className="hidden md:flex">
            <ThemeToggle />
          </div>


          <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                {isOpen ? <X className="size-4" /> : <MenuIcon className="size-4" />}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="left" align="start" className="bg-sidebar/80 backdrop-blur-xs text-muted-foreground">
                {navLinks.map((link) => (
                  <Link key={link.label} href={link.href}>
                    <DropdownMenuItem>
                    {link.label}
                    </DropdownMenuItem>
                  </Link>
                ))}
              <DropdownMenuSeparator />
              <DropdownMenuLabel className="flex items-center justify-between"><div>Theme</div><ThemeToggle/></DropdownMenuLabel>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}