// components/sections/projects-section.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { projectsData } from "@/lib/data"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-32 bg-secondary/30">
      <div className="container max-w-screen-xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            A selection of projects that showcase my skills and passion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-5 md:p-0">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden hover:scale-103 transition-all duration-300">
                <CardHeader>
                  <div className="relative aspect-video w-full mb-4">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
                <CardFooter className="flex-col items-start gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 mt-2">
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      className="flex items-center gap-1 text-sm text-primary hover:underline"
                    >
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </Link>
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      className="flex items-center gap-1 text-sm text-primary hover:underline"
                    >
                      <Github className="h-4 w-4" /> Source Code
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}