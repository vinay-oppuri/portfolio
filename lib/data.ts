// lib/data.ts
import {
  Code,
  Paintbrush,
  Database,
  BrainCircuit,
  Server,
  Cloud,
  Layers,
  Bot,
} from "lucide-react"

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const

export const skillsData = [
  { name: "Next.js", icon: Layers },
  { name: "React", icon: Code },
  { name: "Tailwind CSS", icon: Paintbrush },
  { name: "TypeScript", icon: Code },
  { name: "Node.js", icon: Server },
  { name: "MongoDB", icon: Database },
  { name: "LangChain", icon: Bot },
  { name: "GenAI APIs", icon: BrainCircuit },
  { name: "Vercel / Docker", icon: Cloud },
] as const

export const projectsData = [
  {
    title: "AI-Powered Content Generator",
    description:
      "A full-stack SaaS application that leverages Generative AI to create marketing copy, blog posts, and social media content. Built with Next.js, Stripe for payments, and the OpenAI API.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "OpenAI"],
    imageUrl: "/placeholder.svg", // Replace with your project image, e.g., /project-1.png
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Interactive Data Dashboard",
    description:
      "A dynamic dashboard for visualizing complex datasets. Features real-time data fetching, interactive charts, and customizable reports. Backend powered by Node.js and MongoDB.",
    tags: ["React", "Node.js", "MongoDB", "D3.js", "Express"],
    imageUrl: "/placeholder.svg", // Replace with your project image
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "E-commerce Platform",
    description:
      "A modern e-commerce website with features like product catalog, shopping cart, user authentication, and a complete checkout process. Deployed using Docker on a cloud server.",
    tags: ["Next.js", "MongoDB", "Auth.js", "Docker"],
    imageUrl: "/placeholder.svg", // Replace with your project image
    liveUrl: "#",
    githubUrl: "#",
  },
] as const