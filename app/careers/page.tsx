import type { Metadata } from "next"
import { PageHero } from "@/components/shared/page-hero"
import { CareersContent } from "@/components/careers/careers-content"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Reyaan Enterprises and be part of a dynamic team driving excellence in procurement, supply chain, and technology solutions.",
}

export default function CareersPage() {
  return (
    <>
      <PageHero
        badge="Join Our Team"
        title="Build Your Career"
        highlight="With Us"
        description="Join a dynamic team of professionals dedicated to delivering excellence. We offer growth opportunities, competitive benefits, and a collaborative work environment."
      />
      <CareersContent />
      <CTASection />
    </>
  )
}
