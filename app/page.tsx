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
      <div className="fixed inset-0 -z-10 w-full h-full pointer-events-none">

        <div className="relative w-full h-[300vh] md:h-[600px]">
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