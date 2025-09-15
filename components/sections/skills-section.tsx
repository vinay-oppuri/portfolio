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
    <section id="skills" className="py-24 sm:py-32">
      <div className="container max-w-screen-lg mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
            My Tech Stack
          </h2>
          <p className="mt-3 text-base md:text-lg text-muted-foreground">
            Technologies I use to build powerful and modern web applications.
          </p>
        </motion.div>

        <motion.ul
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.05 }}
        >
          {skillsData.map((skill, index) => (
            <motion.li key={index} variants={cardVariants}>
              <Card className="h-full hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                <CardHeader className="flex flex-row items-center gap-4">
                  <skill.icon className="size-3 md:size-5 text-primary" />
                  <CardTitle className="text-xs md:text-sm font-semibold">
                    {skill.name}
                  </CardTitle>
                </CardHeader>
              </Card>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}