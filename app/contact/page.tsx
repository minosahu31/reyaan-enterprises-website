import type { Metadata } from "next"
import { PageHero } from "@/components/shared/page-hero"
import { ContactContent } from "@/components/contact/contact-content"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Reyaan Enterprises for procurement, supply chain, and technology solutions. Request a quote or send us an inquiry.",
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Get in Touch"
        title="Contact"
        highlight="Us"
        description="Have questions or need a quote? Our team is ready to help you with your procurement, supply chain, and technology needs."
      />
      <ContactContent />
    </>
  )
}
