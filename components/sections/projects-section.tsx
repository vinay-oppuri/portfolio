"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"
import { projectsData } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { useEffect } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
}

export default function ProjectsSection() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  // Sync dots with carousel state
  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section id="projects" className="py-24 sm:py-32 bg-secondary/30">
      <div className="container max-w-screen-xl mx-auto px-8 md:px-4">
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

        <Carousel
          setApi={setApi}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {projectsData.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-xl border-2 overflow-hidden flex flex-col h-full hover:scale-[0.99] transition-all duration-300"
                >
                  <div className="relative aspect-video w-full text-primary">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover p-4"
                    />
                  </div>

                  <div className="p-4 flex flex-col flex-grow gap-2">
                    <h3 className="text-base md:text-lg font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tags.map((tag, i) => (
                        <Badge key={i} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 mt-4">
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        className="flex items-center gap-1 text-xs md:text-sm text-primary hover:underline"
                      >
                        <ExternalLink className="h-4 w-4" /> Live Demo
                      </Link>
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        className="flex items-center gap-1 text-xs md:text-sm text-primary hover:underline"
                      >
                        <Github className="h-4 w-4" /> Source Code
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

        <div className="flex justify-center mt-6 gap-2 md:hidden">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              className={`h-2 w-2 rounded-full transition-all ${
                current === i ? "bg-primary w-4" : "bg-muted"
              }`}
              onClick={() => api?.scrollTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
