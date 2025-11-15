"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

// Animation variants
const FADE_DOWN_ANIMATION_VARIANTS: Variants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 14,
    },
  },
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="snap-start h-screen relative isolate mx-auto flex flex-col items-center justify-center gap-8 px-4 py-20 text-center overflow-hidden"
    >
      {/* Aurora + Glow Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[900px] bg-[radial-gradient(circle_at_center,theme(colors.primary/30),transparent_70%)] blur-3xl opacity-40 animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,theme(colors.secondary/30),transparent_70%)] blur-3xl opacity-40 animate-pulse-slow delay-3000" />
      </div>

      {/* Floating subtle shapes */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-xl"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-28 left-20 w-24 h-24 bg-secondary/10 rounded-full blur-xl"
        animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main animated content */}
      <motion.div
        className="flex flex-col items-center gap-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-tight drop-shadow-xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          Hello!
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/70 to-secondary animate-gradient-text">
            I&apos;m Vinay Reddy
          </div>
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-muted-foreground drop-shadow-md"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          Full Stack Developer | GenAI Explorer
        </motion.h2>

        {/* About para */}
        <motion.p
          className="mt-2 max-w-2xl text-muted-foreground leading-relaxed md:px-10 text-lg drop-shadow-sm"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          I craft scalable full-stack applications and explore the frontiers of
          Generative AI. Passionate about building delightful user experiences
          and solving real-world problems with elegant code.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-4 flex flex-col sm:flex-row justify-center gap-4"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <a href="/resume.pdf" download>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary text-white rounded-full transition-all duration-300 hover:scale-110 hover:shadow-primary/40 hover:shadow-2xl px-8 py-6"
            >
              Download Resume <ArrowDown className="size-4 ml-2" />
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
    </section>
  )
}
