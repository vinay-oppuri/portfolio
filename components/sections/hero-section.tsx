"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

const FADE_DOWN_ANIMATION_VARIANTS: Variants = {
  hidden: { opacity: 0, y: -10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    },
  },
}
export default function HeroSection() {
  return (
    <section
      id="home"
      className="container max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-12 px-4 py-20 md:py-32 mt-12"
    >
      {/* Left Column (Text Content) */}
      <motion.div
        className="flex flex-col items-center md:items-start text-center md:text-left"
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
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-tight"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          Hello!
          <div className="text-primary">
            I&apos;m Vinay Reddy
          </div>
        </motion.h1>

        <motion.h2
          className="mt-4 text-xl md:text-2xl font-semibold text-muted-foreground"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          Full Stack Developer | GenAI Explorer
        </motion.h2>

        <motion.p
          className="mt-6 max-w-xl text-muted-foreground leading-relaxed"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          I craft scalable full-stack applications and explore the frontiers of
          Generative AI. Passionate about building delightful user experiences
          and solving real-world problems with elegant code.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col md:flex-row justify-center md:justify-start gap-4"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <a href="/resume.pdf" download>
            <Button size="lg" className="transition-all duration-200 hover:scale-103">
              Download Resume <ArrowDown className="size-4" />
            </Button>
          </a>
          <Link href="#contact">
            <Button size="lg" variant="outline" className="transition-all duration-200 hover:scale-103">
              Contact Me
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Right Column (Image) */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 p-1.5 flex items-center justify-center">
          <div className="relative w-full h-full rounded-full overflow-hidden bg-background">
            <Image
              src="/profile.jpg"
              alt="w"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 192px, 256px"
              priority
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}