"use client"

import AboutSection from "@/components/sections/about-section"
import ContactSection from "@/components/sections/contact-section"
import HeroSection from "@/components/sections/hero-section"
import ProjectsSection from "@/components/sections/projects-section"
import SkillsSection from "@/components/sections/skills-section"
import { ScrollTop } from "@/components/ui/scroll-top"
import LightRays from "@/components/react-bits/LightRays"

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <div className="h-screen overflow-y-scroll snap-y snap-proximity scroll-smooth">
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <LightRays
            raysOrigin="top-center"
            raysColor="#00ffff"
            raysSpeed={1.5}
            lightSpread={2.5}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          />
        </div>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>
      <ScrollTop />
    </div>
  )
}