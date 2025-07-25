// components/sections/about-section.tsx
import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-secondary/30">
      <motion.div
        className="container max-w-screen-md mx-auto px-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          About Me
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          I&apos;m a dedicated software developer based in India, specializing in building (and occasionally designing) exceptional digital experiences. My focus is on creating responsive, high-performance full-stack applications with modern tools like Next.js and Tailwind CSS. I&apos;m also deeply interested in the practical applications of Generative AI, integrating tools like LangChain to build smarter, more capable software.
        </p>
      </motion.div>
    </section>
  )
}