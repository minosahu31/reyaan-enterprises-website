import type { Metadata } from "next"
import { AboutHero } from "@/components/about/about-hero"
import { MissionVision } from "@/components/about/mission-vision"
import { CoreValues } from "@/components/about/core-values"
import { Leadership } from "@/components/about/leadership"
import { CompanyStory } from "@/components/about/company-story"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Reyaan Enterprises - our mission, vision, values, and the team behind our success in procurement and technology solutions.",
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionVision />
      <CoreValues />
      <CompanyStory />
      <Leadership />
      <CTASection />
    </>
  )
}
