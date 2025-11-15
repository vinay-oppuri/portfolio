import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutSection() {
  return (
    <section
      id="about"
      className="snap-start h-screen relative overflow-hidden flex items-center justify-center px-4"
    >
      {/* Background Aurora + Glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[radial-gradient(circle_at_center,theme(colors.primary/25),transparent_70%)] blur-3xl opacity-40 animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,theme(colors.secondary/25),transparent_70%)] blur-3xl opacity-40 animate-pulse-slow delay-2000" />
      </div>

      {/* Floating decorative blob */}
      <motion.div
        className="absolute top-20 right-24 w-32 h-32 bg-primary/10 rounded-full blur-xl -z-10"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="container max-w-screen-md mx-auto px-6 text-center relative"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary via-primary/70 to-secondary bg-clip-text text-transparent drop-shadow-md"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* Glass Card */}
        <motion.div
          className="mx-auto bg-white/5 dark:bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start transition-all hover:shadow-primary/20 hover:border-primary/20 gap-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <div className="w-40 h-40 rounded-2xl overflow-hidden shadow-2xl ring-2 ring-white/20 md:order-2">
            <Image
              src="/profile.jpg"
              alt="profile"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed drop-shadow-sm md:order-1 text-left">
            I&apos;m a dedicated software developer based in India, specializing in
            building (and occasionally designing) exceptional digital
            experiences. My focus is on creating responsive, high-performance
            full-stack applications with modern tools like Next.js and Tailwind
            CSS. I&apos;m also deeply interested in the practical applications of
            Generative AI, integrating tools like LangChain to build smarter,
            more capable software.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
