import {
  Code,
  Paintbrush,
  Database,
  BrainCircuit,
  Server,
  Cloud,
  Layers,
  Bot,
  HomeIcon,
  UserIcon,
  SettingsIcon,
  FolderIcon,
  MailIcon,
} from "lucide-react"
import { SiVercel } from "react-icons/si"

export const navLinks = [
  { label: "Home", href: "#home", icon: HomeIcon },
  { label: "About", href: "#about", icon: UserIcon },
  { label: "Skills", href: "#skills", icon: SettingsIcon },
  { label: "Projects", href: "#projects", icon: FolderIcon},
  { label: "Contact", href: "#contact", icon: MailIcon },
] as const

export const BottomNavLinks = [
  { label: "About", href: "#about", icon: UserIcon },
  { label: "Skills", href: "#skills", icon: SettingsIcon },
  { label: "Projects", href: "#projects", icon: FolderIcon},
  { label: "Contact", href: "#contact", icon: MailIcon },
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
  { name: "Docker", icon: Cloud },
  { name: "Vercel", icon: SiVercel },
] as const

export const projectsData = [
  {
    title: "AI-Agent Meetings",
    description:
      "MeetAI lets users create AI agents to schedule meetings, generate post-meeting summaries, and answer follow-up questions once meetings are completed.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "TRPC", "GeminiAI", "Inngest", "ShadCN"],
    imageUrl: "/",
    liveUrl: "https://agents-meet-ai.vercel.app/",
    githubUrl: "https://github.com/vinay-oppuri/genai",
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