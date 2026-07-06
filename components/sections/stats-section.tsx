"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Target, Handshake, Shield, Zap } from "lucide-react"

const commitments = [
  {
    icon: Target,
    title: "Results-Driven Approach",
    description: "We measure our success by your outcomes, not just deliverables.",
  },
  {
    icon: Handshake,
    title: "Partnership Mindset",
    description: "We work alongside you as an extension of your team.",
  },
  {
    icon: Shield,
    title: "Compliance First",
    description: "Every process adheres to government and industry standards.",
  },
  {
    icon: Zap,
    title: "Agile Execution",
    description: "Quick turnaround without compromising on quality.",
  },
]

export function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Our Commitment
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mt-2 mb-4">
            Why <span className="text-primary">Partner With Us</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            As a new enterprise, we bring fresh energy, modern approaches, and an unwavering commitment to earning your trust through exceptional service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {commitments.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 rounded-xl bg-card shadow-sm border border-border hover:border-primary/30 hover:shadow-md transition-all"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                <item.icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold font-heading text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/5 border border-primary/20">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <p className="text-foreground font-medium">
              Building long-term relationships, one project at a time
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
