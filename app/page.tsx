"use client"

import Footer from "@/components/layout/footer"
import Header from "@/components/layout/header"
import AboutSection from "@/components/sections/about-section"
import ContactSection from "@/components/sections/contact-section"
import HeroSection from "@/components/sections/hero-section"
import ProjectsSection from "@/components/sections/projects-section"
import SkillsSection from "@/components/sections/skills-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
    </div>
  )
}