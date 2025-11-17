import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutSection() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.98, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.5 }}
      id="about"
      className="min-h-screen overflow-hidden flex items-center justify-center px-4 md:px-6"
    >
      {/* Content Container */}
      <motion.div
        className="container max-w-3xl mx-auto px-4 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold tracking-tight mb-8bg-gradient-to-r from-primary via-primary/70 to-secondary bg-clip-text text-transparent drop-shadow-md"
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* Glass Card */}
        <motion.div
          className="mx-auto bg-white/5 dark:bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 hover:shadow-primary/20 hover:border-primary/20 transition-all"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          {/* Profile Image */}
          <div
            className="w-36 md:w-40 h-36 md:h-40 rounded-2xl overflow-hidden shadow-xl ring-2 ring-white/20 md:order-2 flex-shrink-0">
            <Image
              src="/profile.jpg"
              alt="profile"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Paragraph */}
          <p className="text-xs md:text-lg text-muted-foreground leading-relaxed drop-shadow-sm text-left md:order-1">
            I&apos;m a dedicated software developer based in India, focused on building
            modern, high-performance full-stack applications. I love working with
            technologies like Next.js, Tailwind CSS, and TypeScript — blending great
            design with powerful engineering.

            <br /><br />

            I’m also deeply involved in exploring Generative AI and practical
            integrations of tools like LangChain to create smarter, more capable
            interactive systems.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
