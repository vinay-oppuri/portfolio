"use client"

import AboutSection from "@/components/sections/about-section"
import ContactSection from "@/components/sections/contact-section"
import HeroSection from "@/components/sections/hero-section"
import ProjectsSection from "@/components/sections/projects-section"
import SkillsSection from "@/components/sections/skills-section"
import { ScrollTop } from "@/components/ui/scroll-top"
import Orb from "@/components/react-bits/Orb"

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <div className="fixed inset-0 -z-10 w-full h-full pointer-events-none">
        <Orb />
      </div>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <ScrollTop />
    </div>
  )
}