"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

// Fade-down variant
const fadeDown: Variants = {
  hidden: { opacity: 0, y: -14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 16 },
  },
}

// Parent stagger
const staggerParent: Variants = {
  show: {
    transition: { staggerChildren: 0.15 },
  },
}

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.98, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.5 }}
      id="home"
      className="min-h-screen isolate flex flex-col items-center justify-center px-4 md:px-8 py-16 text-center overflow-hidden"
    >
      {/* Main Content */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerParent}
        className="flex flex-col items-center gap-4 md:gap-6"
      >
        {/* Heading */}
        <motion.h1 variants={fadeDown} className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-xl">
          Hello!
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/70 to-secondary animate-gradient-text">
            I&apos;m Vinay Reddy
          </div>
        </motion.h1>

        {/* Subtitle */}
        <motion.h2 variants={fadeDown} className="text-xl md:text-3xl font-semibold text-muted-foreground drop-shadow-md">
          Full Stack Developer • GenAI Explorer
        </motion.h2>

        {/* About */}
        <motion.p variants={fadeDown} className="max-w-xl md:max-w-2xl text-base md:text-lg mt-2 md:mt-3 text-muted-foreground leading-relaxed drop-shadow-sm px-2 md:px-8">
          I build scalable full-stack applications and explore advanced
          Generative AI systems. Passionate about creating smooth user experiences
          and solving meaningful problems with elegant engineering.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={fadeDown} className="mt-4 flex flex-col sm:flex-row justify-center gap-4">
          <a href="/resume.pdf" download>
            <Button
              size="lg"
              className="w-60 bg-gradient-to-r from-primary to-secondary text-white font-mono rounded-full transition-all duration-300 hover:scale-110 hover:shadow-primary/40 hover:shadow-2xl py-6"
            >
              Download Resume <ArrowDown className="size-4" />
            </Button>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 flex flex-col items-center gap-1 text-muted-foreground/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="size-6" />
        </motion.div>
        <span className="text-xs">scroll</span>
      </motion.div>
    </motion.section>
  )
}
