"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

// Updated animation variants for a smoother, bouncier feel
const FADE_DOWN_ANIMATION_VARIANTS: Variants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
}

export default function HeroSection() {
  return (
    // Section is now full-screen, centered, and isolated for stacking
    <section
      id="home"
      className="bg-white/2 md:bg-transparent backdrop-blur-2xl md:backdrop-blur-none relative isolate container min-h-screen mx-auto flex flex-col items-center justify-center gap-8 px-4 py-20 text-center"
    >
      {/* Main animation container for staggering children */}
      <motion.div
        className="flex flex-col items-center gap-6"
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
        variants={{
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >


        {/* Text Content */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-tight"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          Hello!
          {/* Gradient Text for Name */}
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-secondary/80 animate-gradient-text">
            I&apos;m Vinay Reddy
          </div>
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-muted-foreground"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          Full Stack Developer | GenAI Explorer
        </motion.h2>

        <motion.p
          className="mt-2 max-w-2xl text-muted-foreground leading-relaxed md:px-25"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          I craft scalable full-stack applications and explore the frontiers of
          Generative AI. Passionate about building delightful user experiences
          and solving real-world problems with elegant code.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-4 flex flex-col justify-center gap-4"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <a href="/resume.pdf" download>
            <Button
              size="lg"
              className="bg-foreground/10 text-white rounded-full transition-all duration-200 hover:scale-105 w-full sm:w-auto py-6"
            >
              Download Resume <ArrowDown className="size-4" />
            </Button>
          </a>
          {/* <Link href="#contact">
            <Button
              size="lg"
              variant="outline"
              className="transition-all duration-200 hover:scale-105 w-full sm:w-auto"
            >
              Contact Me
            </Button>
          </Link> */}
        </motion.div>
      </motion.div>

      {/* Animated Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-10"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          delay: 1.5, // Start after main animation
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ArrowDown className="size-5 text-muted-foreground/50" />
      </motion.div>
    </section>
  )
}