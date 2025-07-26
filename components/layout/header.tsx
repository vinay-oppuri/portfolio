// components/layout/header.tsx
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { Moon, Sun, Menu, X } from "lucide-react"
import { navLinks } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import Image from "next/image"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  const toggleMenu = () => setIsOpen(!isOpen)

  if (!mounted) return null

  const ThemeToggle = () => {
    return (
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (<Sun className="size-4 text-yellow-400"/>) : (<Moon className="size-4 text-blue-600"/>)}
      </Button>
    )
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-xs px-0 md:px-20 md:py-2">
        <div className="container h-16 max-w-screen-2xl mx-auto flex items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center text-xl font-bold">
            <Image src='./light-logo.svg' alt="Logo" width={100} height={100} className="dark:hidden h-20 md:h-25 w-20 md:w-25"/>
            <Image src='./dark-logo.svg' alt="Logo" width={100} height={100} className="not-dark:hidden h-20 md:h-25 w-20 md:w-25"/>
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
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-16 z-40 bg-background/95 backdrop-blur-lg md:hidden"
          >
            <nav className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-lg font-semibold text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center justify-between text-lg font-semibold text-muted-foreground hover:text-primary transition-colors">
                Theme | <ThemeToggle />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}