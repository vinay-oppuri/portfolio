"use client"

import LightRays from "@/components/LightRays"
import AboutSection from "@/components/sections/about-section"
import ContactSection from "@/components/sections/contact-section"
import HeroSection from "@/components/sections/hero-section"
import ProjectsSection from "@/components/sections/projects-section"
import SkillsSection from "@/components/sections/skills-section"
import { ScrollTop } from "@/components/ui/scroll-top"

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#A46CFF"
          raysSpeed={0.9}
          lightSpread={1.6}
          rayLength={1.3}
          followMouse={true}
          mouseInfluence={0.06}
          noiseAmount={0.06}
          distortion={0.03}
        />
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