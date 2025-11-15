"use client"

import { motion } from "framer-motion"
import { skillsData } from "@/lib/data"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="snap-start h-screen relative overflow-hidden flex items-center justify-center"
    >
      {/* Aurora Gradient Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-[radial-gradient(circle_at_center,theme(colors.primary/25),transparent_70%)] blur-3xl opacity-40 animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,theme(colors.secondary/25),transparent_70%)] blur-3xl opacity-40 animate-pulse-slow delay-2000" />
      </div>

      {/* Floating Decorative Blobs */}
      <motion.div
        className="absolute top-32 right-20 w-28 h-28 bg-primary/10 rounded-full blur-xl -z-10"
        animate={{ y: [0, -20, 0], x: [0, 12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 left-16 w-24 h-24 bg-secondary/10 rounded-full blur-xl -z-10"
        animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container max-w-screen-lg mx-auto px-4">
        {/* Heading */}
        <motion.div
          className="text-center mb-16 bg-primary/10 backdrop-blur-xs py-4 rounded-2xl border border-primary/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold py-2 tracking-tight bg-gradient-to-r from-primary via-primary/70 to-secondary bg-clip-text text-transparent">
            My Tech Stack
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            Technologies I use to build powerful and modern web applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.ul
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.06 }}
        >
          {skillsData.map((skill, index) => (
            <motion.li key={index} variants={cardVariants}>
              <Card className="h-20 group bg-white/5 dark:bg-white/5 backdrop-blur-xl border border-white/10 hover:border-primary/40 shadow-lg hover:shadow-primary/20 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03]">
                <div className="flex h-full flex-row items-center gap-4 px-4">
                  <div className="flex items-center justify-center p-3 rounded-xl bg-primary/10 text-primary shadow-inner group-hover:bg-primary/20 transition-all">
                    <skill.icon className="size-5" />
                  </div>
                  <p className="text-sm md:text-base font-semibold">{skill.name}</p>
                </div>
              </Card>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}