"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { projectsData } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 },
}

export default function ProjectsSection() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())
    api.on("select", () => setCurrent(api.selectedScrollSnap()))
  }, [api])

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.98, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.5 }}
      id="projects"
      className="min-h-screen overflow-hidden flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-screen-xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary via-primary/70 to-secondary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="mt-3 text-base md:text-lg text-muted-foreground">
            A selection of projects that showcase my skills and passion.
          </p>
        </motion.div>

        {/* Carousel */}
        <Carousel setApi={setApi} className="w-full max-w-5xl mx-auto">
          <CarouselContent className="p-0 md:p-6">
            {projectsData.map((project, index) => (
              <CarouselItem key={index} className="h-100 md:h-110 lg:h-[480px] md:basis-1/2 lg:basis-1/3">
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 dark:bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-primary/30 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 flex flex-col h-full "
                >
                  {/* Image */}
                  <div className="relative w-full aspect-[4/2]">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover rounded-t-2xl"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 md:p-5 flex flex-col justify-between h-full">
                    {/* TOP */}
                    <div>
                      <h3 className="text-base md:text-lg font-semibold mb-2 text-primary">
                        {project.title}
                      </h3>

                      <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-3">
                        {project.tags.map((tag, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="px-2 py-1 text-[8px] md:text-[10px] rounded-md"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* BOTTOM — ALWAYS VISIBLE */}
                    <div className="flex items-center gap-4 mt-4 pt-3 border-t border-white/10">
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        className="flex items-center gap-1 text-xs md:text-sm text-primary hover:underline"
                      >
                        <ExternalLink className="h-3 w-3 md:h-4 md:w-4" />
                        Live Demo
                      </Link>

                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        className="flex items-center gap-1 text-xs md:text-sm text-primary hover:underline"
                      >
                        <Github className="h-3 w-3 md:h-4 md:w-4" />
                        Source Code
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        {/* Mobile Dots */}
        <div className="flex justify-center mt-6 gap-2 md:hidden">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              className={`h-2 w-2 rounded-full transition-all ${current === i ? "bg-primary w-4" : "bg-muted"}`}
              onClick={() => api?.scrollTo(i)}
            />
          ))}
        </div>
      </div>
    </motion.section>
  )
}
