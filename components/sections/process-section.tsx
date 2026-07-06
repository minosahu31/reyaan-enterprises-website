"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Search,
  FileText,
  Handshake,
  Truck,
  CheckCircle,
} from "lucide-react"

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery",
    description:
      "We analyze your requirements and understand your business needs.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Planning",
    description:
      "Detailed proposal with timeline, resources, and cost breakdown.",
  },
  {
    icon: Handshake,
    step: "03",
    title: "Agreement",
    description:
      "Transparent contracts with clear deliverables and milestones.",
  },
  {
    icon: Truck,
    step: "04",
    title: "Execution",
    description:
      "Professional implementation with regular progress updates.",
  },
  {
    icon: CheckCircle,
    step: "05",
    title: "Delivery",
    description:
      "Quality assurance and timely delivery with documentation.",
  },
]

export function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-foreground mt-2 mb-4">
            How We <span className="text-accent">Work</span>
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            A streamlined approach ensuring transparency and efficiency at every
            step of our engagement.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-primary-foreground/20 -translate-y-1/2" />

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center"
              >
                {/* Step number badge */}
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 rounded-full bg-primary-foreground/10 flex items-center justify-center border-2 border-primary-foreground/20 relative z-10">
                    <step.icon className="h-8 w-8 text-accent" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-xl font-semibold font-heading text-primary-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
