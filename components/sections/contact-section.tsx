"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Copy, Mail } from "lucide-react"
import { toast } from "sonner"

export default function ContactSection() {
  const email = "oppurivinay25@gmail.com"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email)
    toast.success("Email copied to clipboard!")
  }

  return (
    <section id="contact" className="snap-start h-screen relative px-8 md:px-0 py-28 sm:py-36 overflow-hidden">
      {/* Background Aurora Layers */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[800px] bg-[radial-gradient(circle_at_center,theme(colors.primary/30),transparent_70%)] blur-3xl opacity-40 animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,theme(colors.secondary/25),transparent_70%)] blur-3xl opacity-40 animate-pulse-slow delay-2000" />
      </div>

      {/* Floating decorative blobs */}
      <motion.div
        className="absolute top-24 right-20 w-28 h-28 bg-primary/10 rounded-full blur-xl -z-10"
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-24 left-20 w-24 h-24 bg-secondary/10 rounded-full blur-xl -z-10"
        animate={{ y: [0, 18, 0], x: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="container max-w-screen-md mx-auto px-4 text-center relative bg-white/5 dark:bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl rounded-3xl p-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-primary via-primary/70 to-secondary bg-clip-text text-transparent drop-shadow-md">
          Get In Touch
        </h2>

        <p className="text-sm md:text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed drop-shadow-sm">
          I&apos;m currently open to new opportunities and collaborations. Reach out if you have a project in mind or just want to connect!
        </p>

        {/* Contact Options */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={`mailto:${email}`} className="w-full sm:w-auto">
            <Button
              className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary text-white rounded-full shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:scale-[1.07] px-6 py-6 flex items-center gap-2"
            >
              <Mail className="size-4" /> Say Hello
            </Button>
          </a>

          <Button
            variant="outline"
            onClick={copyToClipboard}
            className="w-full sm:w-auto rounded-full border-white/20 backdrop-blur-md text-primary hover:border-primary/50 shadow-md hover:shadow-primary/20 transition-all duration-300 hover:scale-[1.07] px-6 py-6 flex items-center gap-2"
          >
            <Copy className="size-4" /> Copy Email
          </Button>
        </div>
      </motion.div>
    </section>
  )
}