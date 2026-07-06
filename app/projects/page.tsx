import type { Metadata } from "next"
import { PageHero } from "@/components/shared/page-hero"
import { ProjectsGrid } from "@/components/projects/projects-grid"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Projects & Case Studies",
  description:
    "Explore our portfolio of successful projects and case studies across procurement, supply chain, and technology domains.",
}

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        badge="Our Capabilities"
        title="What We Can"
        highlight="Deliver"
        description="Explore our comprehensive range of services. While our portfolio is growing, our capabilities and commitment to excellence are ready to serve you."
      />
      <ProjectsGrid />
      <CTASection />
    </>
  )
}
