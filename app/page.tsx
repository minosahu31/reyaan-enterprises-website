import { HeroSection } from "@/components/sections/hero-section"
import { StatsSection } from "@/components/sections/stats-section"
import { ServicesSection } from "@/components/sections/services-section"
import { IndustriesSection } from "@/components/sections/industries-section"
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section"
import { ProcessSection } from "@/components/sections/process-section"
import { CertificationsSection } from "@/components/sections/certifications-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { CTASection } from "@/components/sections/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <IndustriesSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <CertificationsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
