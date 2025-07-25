// components/sections/contact-section.tsx
"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Copy } from "lucide-react"

export default function ContactSection() {
  const email = "vinay.reddy@example.com" // Replace with your email

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email)
    // Add a toast notification for better UX, e.g., using react-hot-toast
    alert("Email copied to clipboard!")
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
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Get In Touch
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          I&apos;m currently open to new opportunities and collaborations. Feel free to reach out if you have a project in mind or just want to connect!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={`mailto:${email}`}>
            <Button size="lg">Say Hello</Button>
          </a>
          <Button size="lg" variant="outline" onClick={copyToClipboard}>
            <Copy className="mr-2 h-4 w-4" /> Copy Email
          </Button>
        </div>
      </motion.div>
    </section>
  )
}