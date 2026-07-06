import type { Metadata } from "next"
import { PageHero } from "@/components/shared/page-hero"
import { TechnologyServices } from "@/components/services/technology-services"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Technology Services",
  description:
    "Custom software development, cloud solutions, and technical consulting services for modern enterprises.",
}

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        badge="Tech Solutions"
        title="Technology"
        highlight="Services"
        description="Modern technology solutions including custom software development, cloud infrastructure, and digital transformation consulting."
      />
      <TechnologyServices />
      <CTASection />
    </>
  )
}
