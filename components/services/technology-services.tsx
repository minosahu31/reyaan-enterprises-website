"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Code,
  Cloud,
  Smartphone,
  Database,
  Shield,
  Cpu,
  Globe,
  Headphones,
} from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Software Development",
    description:
      "Custom software solutions built with modern technologies and best practices.",
    features: [
      "Web applications",
      "Enterprise software",
      "API development",
      "System integration",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Cloud infrastructure setup, migration, and managed services.",
    features: [
      "AWS/Azure/GCP",
      "Cloud migration",
      "Infrastructure setup",
      "Cost optimization",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android.",
    features: [
      "iOS apps",
      "Android apps",
      "Cross-platform",
      "App maintenance",
    ],
  },
  {
    icon: Database,
    title: "Data Solutions",
    description:
      "Data management, analytics, and business intelligence solutions.",
    features: [
      "Data warehousing",
      "Analytics & BI",
      "Data integration",
      "Reporting systems",
    ],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Security assessment, implementation, and compliance services.",
    features: [
      "Security audit",
      "Vulnerability assessment",
      "Compliance support",
      "Security training",
    ],
  },
  {
    icon: Cpu,
    title: "IT Infrastructure",
    description:
      "Infrastructure planning, deployment, and management services.",
    features: [
      "Network setup",
      "Server management",
      "Virtualization",
      "Disaster recovery",
    ],
  },
  {
    icon: Globe,
    title: "Digital Transformation",
    description:
      "Strategic guidance for digital initiatives and process modernization.",
    features: [
      "Digital strategy",
      "Process automation",
      "Change management",
      "Technology roadmap",
    ],
  },
  {
    icon: Headphones,
    title: "IT Support",
    description:
      "Comprehensive IT support and managed services for your operations.",
    features: [
      "24/7 support",
      "Helpdesk services",
      "Remote assistance",
      "On-site support",
    ],
  },
]

export function TechnologyServices() {
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
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
            Tech <span className="text-primary">Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Modern technology solutions to drive innovation and digital
            transformation for your organization.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold font-heading text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
