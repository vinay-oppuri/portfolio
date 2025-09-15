"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Copy } from "lucide-react"
import { toast } from "sonner"

export default function ContactSection() {
  const email = "oppurivinay25@gmail.com"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email)
    toast.success("Email copied to clipboard!")
  }

  return (
    <section id="contact" className="py-24 sm:py-32">
      <motion.div
        className="container max-w-screen-md mx-auto px-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
          Get In Touch
        </h2>
        <p className="text-sm md:text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          I&apos;m currently open to new opportunities and collaborations. Feel free to reach out if you have a project in mind or just want to connect!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={`mailto:${email}`}>
            <Button
              className="shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-103"
            >
              Say Hello
            </Button>
          </a>
          <Button variant="outline" onClick={copyToClipboard} className="text-sm shadow-lg shadow-primary/10 transition-all duration-300 hover:scale-103">
            <Copy className="size-3 md:size-4" /> Copy Email
          </Button>
        </div>
      </motion.div>
    </section>
  )
}