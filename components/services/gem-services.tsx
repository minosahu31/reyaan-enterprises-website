"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  FileCheck,
  Landmark,
  ClipboardList,
  Award,
  FileText,
  Users,
  BarChart3,
  Shield,
} from "lucide-react"

const services = [
  {
    icon: Landmark,
    title: "GeM Registration",
    description:
      "Complete assistance in registering your business on Government e-Marketplace.",
    features: [
      "Documentation support",
      "Profile optimization",
      "Category mapping",
      "Verification assistance",
    ],
  },
  {
    icon: FileCheck,
    title: "Tender Management",
    description:
      "End-to-end tender management from identification to submission.",
    features: [
      "Tender identification",
      "Bid preparation",
      "Document compilation",
      "Submission support",
    ],
  },
  {
    icon: ClipboardList,
    title: "Bid Preparation",
    description:
      "Professional bid preparation services ensuring compliance and competitiveness.",
    features: [
      "Technical proposals",
      "Financial proposals",
      "Compliance review",
      "Quality documentation",
    ],
  },
  {
    icon: Award,
    title: "Contract Execution",
    description:
      "Support in contract execution and performance management.",
    features: [
      "Contract review",
      "Milestone tracking",
      "Delivery management",
      "Payment processing",
    ],
  },
  {
    icon: FileText,
    title: "Compliance Advisory",
    description:
      "Ensure adherence to government procurement regulations and guidelines.",
    features: [
      "Regulatory guidance",
      "Documentation audit",
      "Process compliance",
      "Legal review",
    ],
  },
  {
    icon: Users,
    title: "Government Relations",
    description:
      "Build and maintain relationships with government departments and PSUs.",
    features: [
      "Department liaison",
      "Relationship building",
      "Communication support",
      "Stakeholder management",
    ],
  },
  {
    icon: BarChart3,
    title: "Market Intelligence",
    description:
      "Stay ahead with insights on government procurement trends and opportunities.",
    features: [
      "Opportunity tracking",
      "Market analysis",
      "Competitor intelligence",
      "Trend forecasting",
    ],
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description:
      "Maintain quality standards required for government contracts.",
    features: [
      "Quality audits",
      "Standard compliance",
      "Inspection support",
      "Documentation",
    ],
  },
]

export function GemServices() {
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
            Government <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive support for government procurement, GeM operations, and
            public sector engagement.
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
