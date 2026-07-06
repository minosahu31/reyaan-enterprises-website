import type { Metadata } from "next"
import { PageHero } from "@/components/shared/page-hero"
import { IndustriesGrid } from "@/components/industries/industries-grid"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Industries Served",
  description:
    "Reyaan Enterprises serves multiple industries including Government, Healthcare, Education, Manufacturing, Retail, Technology, and Public Sector.",
}

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        badge="Our Expertise"
        title="Industries We"
        highlight="Serve"
        description="We bring specialized knowledge and tailored solutions to diverse industries, understanding the unique challenges and requirements of each sector."
      />
      <IndustriesGrid />
      <CTASection />
    </>
  )
}
