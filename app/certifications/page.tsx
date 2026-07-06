import type { Metadata } from "next"
import { PageHero } from "@/components/shared/page-hero"
import { CertificationsGrid } from "@/components/certifications/certifications-grid"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Certifications & Compliance",
  description:
    "View our certifications including GST, MSME, GeM registration, and compliance standards ensuring trust and quality.",
}

export default function CertificationsPage() {
  return (
    <>
      <PageHero
        badge="Trust & Quality"
        title="Certifications &"
        highlight="Compliance"
        description="We are building our compliance foundation with all necessary registrations and certifications. Transparency is our commitment from day one."
      />
      <CertificationsGrid />
      <CTASection />
    </>
  )
}
