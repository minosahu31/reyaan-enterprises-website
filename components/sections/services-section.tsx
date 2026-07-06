"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import {
  ShoppingCart,
  FileCheck,
  Code,
  ArrowRight,
  Truck,
  Users,
  Cloud,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: ShoppingCart,
    title: "Procurement Solutions",
    description:
      "End-to-end procurement management including sourcing, vendor evaluation, and supply chain optimization.",
    href: "/services/procurement",
    features: ["Strategic Sourcing", "Vendor Management", "Cost Optimization"],
  },
  {
    icon: Truck,
    title: "Supply Chain Management",
    description:
      "Comprehensive supply chain solutions ensuring timely delivery and inventory optimization.",
    href: "/services/procurement",
    features: ["Logistics Planning", "Inventory Control", "Distribution"],
  },
  {
    icon: FileCheck,
    title: "Government & GeM Solutions",
    description:
      "Expert assistance in government tenders, GeM registration, and public sector contract management.",
    href: "/services/gem",
    features: ["GeM Registration", "Tender Support", "Compliance"],
  },
  {
    icon: Code,
    title: "Software Development",
    description:
      "Custom software solutions tailored to your business needs with modern technologies.",
    href: "/services/technology",
    features: ["Web Applications", "Mobile Apps", "Enterprise Solutions"],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Cloud migration, infrastructure setup, and managed cloud services for scalable operations.",
    href: "/services/technology",
    features: ["AWS/Azure/GCP", "Migration Services", "Cloud Security"],
  },
  {
    icon: Users,
    title: "Technical Consulting",
    description:
      "Strategic technology consulting to drive digital transformation and business growth.",
    href: "/services/technology",
    features: ["Digital Strategy", "Process Automation", "IT Advisory"],
  },
]

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mt-2 mb-4">
            Comprehensive <span className="text-primary">Business Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From procurement to technology, we provide end-to-end solutions that
            drive efficiency and growth for your organization.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -z-10 group-hover:bg-primary/10 transition-colors" />

              <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <service.icon className="h-7 w-7" />
              </div>

              <h3 className="text-xl font-semibold font-heading text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={service.href}
                className="inline-flex items-center text-primary font-medium hover:text-accent transition-colors group/link"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
        <Button
          asChild
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          <Link
            href="/services/procurement"
            className="inline-flex items-center justify-center gap-2"
          >
            <span>View All Services</span>
            <ArrowRight className="h-5 w-5 shrink-0" />
          </Link>
        </Button>
        </motion.div>
      </div>
    </section>
  )
}
