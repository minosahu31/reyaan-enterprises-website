"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Landmark,
  Heart,
  GraduationCap,
  Factory,
  ShoppingBag,
  Cpu,
  Building2,
} from "lucide-react"

const industries = [
  {
    icon: Landmark,
    name: "Government",
    description:
      "Serving central and state government departments with procurement, supply chain, and technology solutions.",
    services: [
      "GeM procurement",
      "Tender management",
      "Supply chain",
      "IT solutions",
    ],
    projects: "150+",
  },
  {
    icon: Heart,
    name: "Healthcare",
    description:
      "Supporting hospitals, clinics, and healthcare institutions with medical equipment and supplies.",
    services: [
      "Medical equipment",
      "Hospital supplies",
      "IT infrastructure",
      "Compliance support",
    ],
    projects: "80+",
  },
  {
    icon: GraduationCap,
    name: "Education",
    description:
      "Enabling educational institutions with infrastructure, technology, and procurement services.",
    services: [
      "EdTech solutions",
      "Lab equipment",
      "Furniture supply",
      "IT systems",
    ],
    projects: "100+",
  },
  {
    icon: Factory,
    name: "Manufacturing",
    description:
      "Providing industrial equipment, automation solutions, and supply chain optimization.",
    services: [
      "Industrial equipment",
      "Automation",
      "MRO supplies",
      "Process optimization",
    ],
    projects: "60+",
  },
  {
    icon: ShoppingBag,
    name: "Retail",
    description:
      "Supporting retail businesses with supply chain, inventory, and technology solutions.",
    services: [
      "Supply chain",
      "POS systems",
      "Inventory management",
      "E-commerce",
    ],
    projects: "45+",
  },
  {
    icon: Cpu,
    name: "Technology",
    description:
      "Delivering IT infrastructure, software development, and digital transformation services.",
    services: [
      "Software development",
      "Cloud services",
      "IT infrastructure",
      "Consulting",
    ],
    projects: "90+",
  },
  {
    icon: Building2,
    name: "Public Sector Undertakings",
    description:
      "Partnering with PSUs for procurement, technology, and operational excellence.",
    services: [
      "Bulk procurement",
      "Vendor management",
      "IT solutions",
      "Process consulting",
    ],
    projects: "70+",
  },
]

export function IndustriesGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:bg-primary/10 transition-colors" />

              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <industry.icon className="h-7 w-7" />
              </div>

              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold font-heading text-foreground">
                  {industry.name}
                </h3>
                <span className="text-sm font-semibold text-accent">
                  {industry.projects} Projects
                </span>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {industry.description}
              </p>

              <div className="space-y-2">
                <h4 className="text-sm font-medium text-foreground">
                  Key Services:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {industry.services.map((service) => (
                    <span
                      key={service}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
