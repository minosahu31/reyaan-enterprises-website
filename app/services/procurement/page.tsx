import type { Metadata } from "next"
import { PageHero } from "@/components/shared/page-hero"
import { ProcurementServices } from "@/components/services/procurement-services"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Procurement & Supply Solutions",
  description:
    "Comprehensive procurement, supply chain management, and vendor solutions for government and enterprise clients across India.",
}

export default function ProcurementPage() {
  return (
    <>
      <PageHero
        badge="Our Services"
        title="Procurement & Supply"
        highlight="Solutions"
        description="End-to-end procurement and supply chain management services designed to optimize costs, improve efficiency, and ensure timely delivery."
      />
      <ProcurementServices />
      <CTASection />
    </>
  )
}
