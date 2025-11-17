"use client"

import { motion } from "framer-motion"
import { skillsData } from "@/lib/data"
import { Card } from "@/components/ui/card"

const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 120, damping: 16 },
  },
}

export default function SkillsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.98, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.5 }}
      id="skills"
      className="min-h-screen overflow-hidden flex items-center justify-center px-4 md:px-6"
    >
      <div className="container max-w-screen-lg mx-auto px-2 md:px-4">
        {/* Heading */}
        <motion.div
          className="text-center mb-12 md:mb-16 bg-white/5 dark:bg-white/5 backdrop-blur-md py-4 md:py-6 rounded-2xl border border-white/10 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary via-primary/70 to-secondary bg-clip-text text-transparent">
            My Tech Stack
          </h2>

          <p className="mt-3 md:mt-4 text-base md:text-lg text-muted-foreground">
            The tools and technologies I use to build modern applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.ul
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.05 }}
        >
          {skillsData.map((skill, index) => (
            <motion.li key={index} variants={cardVariants}>
              <Card className="h-16 md:h-24 group bg-white/5 dark:bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg hover:shadow-primary/20 hover:border-primary/30 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03]">
                <div className="flex h-full items-center gap-2 md:gap-4 px-4">
                  <div
                    className="flex items-center justify-center p-3 rounded-xl bg-primary/10 text-primary shadow-inner group-hover:bg-primary/20 transition-all">
                    <skill.icon className="size-3 md:size-6" />
                  </div>

                  <p className="text-xs md:text-base font-semibold tracking-wide">
                    {skill.name}
                  </p>
                </div>
              </Card>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.section>
  )
}
