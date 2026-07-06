"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Shield,
  Lightbulb,
  Users,
  Award,
  Heart,
  TrendingUp,
} from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We uphold the highest ethical standards in all our dealings, ensuring transparency and honesty.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We continuously seek new and better ways to deliver value and solve complex challenges.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We believe in the power of partnerships and work closely with clients to achieve shared goals.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We strive for excellence in every project, never compromising on quality or performance.",
  },
  {
    icon: Heart,
    title: "Customer Focus",
    description:
      "Our clients are at the heart of everything we do. Their success is our success.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description:
      "We are committed to continuous learning and development, both for our team and our clients.",
  },
]

export function CoreValues() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            What Drives Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mt-2 mb-4">
            Our Core <span className="text-primary">Values</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These principles guide our actions and decisions, shaping our
            culture and defining how we work with clients and partners.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <value.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold font-heading text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
