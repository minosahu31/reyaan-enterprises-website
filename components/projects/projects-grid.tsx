"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Briefcase,
  Building2,
  Cpu,
  Package,
  ArrowRight,
  Sparkles,
} from "lucide-react"

const capabilities = [
  {
    icon: Package,
    title: "Procurement & Supply Chain",
    description:
      "End-to-end procurement solutions for industrial supplies, IT hardware, and institutional requirements.",
    services: [
      "Vendor sourcing & evaluation",
      "Order processing & logistics",
      "Quality inspection",
      "Inventory management",
    ],
  },
  {
    icon: Building2,
    title: "Government Contracts (GeM)",
    description:
      "Comprehensive support for GeM registration, bidding, and contract fulfillment.",
    services: [
      "GeM seller registration",
      "Bid preparation & submission",
      "Contract compliance",
      "Documentation support",
    ],
  },
  {
    icon: Cpu,
    title: "Technology Solutions",
    description:
      "Modern IT infrastructure, software solutions, and digital transformation services.",
    services: [
      "IT hardware supply",
      "Network infrastructure",
      "Software licensing",
      "Technical support",
    ],
  },
  {
    icon: Briefcase,
    title: "Enterprise Services",
    description:
      "Tailored solutions for large organizations and institutional clients.",
    services: [
      "Annual maintenance contracts",
      "Bulk procurement",
      "Custom requirements",
      "Dedicated account management",
    ],
  },
]

export function ProjectsGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Coming Soon Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">We are just getting started</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
            Our Project Portfolio is <span className="text-primary">Growing</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            As a new enterprise, we are actively building our portfolio. While our project history is yet to be written, our capabilities are ready to deliver. Here is what we can do for you.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <capability.icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold font-heading text-foreground mb-2">
                    {capability.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </div>
              
              <div className="pl-[4.5rem]">
                <h4 className="text-sm font-medium text-foreground mb-3">
                  What we offer:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {capability.services.map((service) => (
                    <Badge
                      key={service}
                      variant="secondary"
                      className="text-xs font-normal"
                    >
                      {service}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center bg-primary/5 rounded-2xl p-8 md:p-12 border border-primary/10"
        >
          <h3 className="text-2xl md:text-3xl font-bold font-heading text-foreground mb-4">
            Be Our First Success Story
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            We are eager to prove ourselves. Early partners receive our highest attention, best rates, and the dedication that comes with building our reputation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Discuss Your Requirements
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button> */}
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2"
              >
                <span>Discuss Your Requirements</span>
                <ArrowRight className="h-5 w-5 shrink-0" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/services/procurement">Explore Our Services</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
