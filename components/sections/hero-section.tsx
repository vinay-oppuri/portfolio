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
      className="
        snap-start h-screen relative isolate flex flex-col items-center justify-center 
        px-4 md:px-8 py-16 text-center overflow-hidden
      "
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="
          absolute -top-48 left-1/2 -translate-x-1/2 
          w-[950px] md:w-[1200px] h-[700px] md:h-[900px]
          bg-[radial-gradient(circle_at_center,theme(colors.primary/35),transparent_70%)]
          blur-2xl md:blur-3xl opacity-40 animate-pulse-slow
        " />

        <div className="
          absolute bottom-0 left-0 
          w-[450px] md:w-[600px] h-[450px] md:h-[600px]
          bg-[radial-gradient(circle_at_center,theme(colors.secondary/30),transparent_70%)]
          blur-2xl md:blur-3xl opacity-40 animate-pulse-slow delay-3000
        " />
      </div>

      {/* Floating Shapes */}
      <motion.div
        className="absolute top-24 right-12 md:right-24 w-24 md:w-32 h-24 md:h-32 bg-primary/10 rounded-full blur-xl"
        animate={{ y: [0, -18, 0], x: [0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-24 left-12 md:left-24 w-20 md:w-24 h-20 md:h-24 bg-secondary/10 rounded-full blur-xl"
        animate={{ y: [0, 14, 0], x: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Content */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerParent}
        className="flex flex-col items-center gap-4 md:gap-6"
      >
        {/* Heading */}
        <motion.h1
          variants={fadeDown}
          className="
            text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight 
            leading-tight drop-shadow-xl
          "
        >
          Hello!
          <div
            className="
              text-transparent bg-clip-text 
              bg-gradient-to-r from-primary via-primary/70 to-secondary 
              animate-gradient-text
            "
          >
            I&apos;m Vinay Reddy
          </div>
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          variants={fadeDown}
          className="text-xl md:text-3xl font-semibold text-muted-foreground drop-shadow-md"
        >
          Full Stack Developer • GenAI Explorer
        </motion.h2>

        {/* About */}
        <motion.p
          variants={fadeDown}
          className="
            max-w-xl md:max-w-2xl text-base md:text-lg 
            mt-2 md:mt-3 
            text-muted-foreground leading-relaxed drop-shadow-sm
            px-2 md:px-8
          "
        >
          I build scalable full-stack applications and explore advanced
          Generative AI systems. Passionate about creating smooth user experiences
          and solving meaningful problems with elegant engineering.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeDown}
          className="mt-4 flex flex-col sm:flex-row justify-center gap-4"
        >
          <a href="/resume.pdf" download>
            <Button
              size="lg"
              className="
                bg-gradient-to-r from-primary to-secondary text-white 
                rounded-full transition-all duration-300 
                hover:scale-110 hover:shadow-primary/40 hover:shadow-2xl 
                px-8 py-6
              "
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
    </motion.section>
  )
}
