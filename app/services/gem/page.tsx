import type { Metadata } from "next"
import { PageHero } from "@/components/shared/page-hero"
import { GemServices } from "@/components/services/gem-services"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Government & GeM Solutions",
  description:
    "Expert assistance in government tenders, GeM registration, and public sector contract management across India.",
}

export default function GemPage() {
  return (
    <>
      <PageHero
        badge="Government Solutions"
        title="Government & GeM"
        highlight="Solutions"
        description="Expert assistance in navigating government procurement processes, GeM registration, tender management, and public sector compliance."
      />
      <GemServices />
      <CTASection />
    </>
  )
}
