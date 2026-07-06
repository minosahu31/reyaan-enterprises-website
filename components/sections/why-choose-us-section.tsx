"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Shield,
  Clock,
  Award,
  Users,
  Target,
  Handshake,
  Sparkles,
} from "lucide-react"

const reasons = [
  {
    icon: Shield,
    title: "Committed to Excellence",
    description:
      "Fresh perspective and modern approaches backed by unwavering commitment to quality.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "We understand deadlines matter. Our processes are designed for timely execution.",
  },
  {
    icon: Award,
    title: "Quality First",
    description:
      "Stringent quality standards ensuring excellence in every deliverable.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description:
      "Professionals with domain expertise in procurement and technology.",
  },
  {
    icon: Target,
    title: "Result-Oriented",
    description:
      "Focus on delivering measurable outcomes that drive business success.",
  },
  {
    icon: Handshake,
    title: "Client Partnership",
    description:
      "Building long-term relationships through transparency and collaboration.",
  },
]

export function WhyChooseUsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mt-2 mb-6">
              Your Success Is Our{" "}
              <span className="text-primary">Priority</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              At Reyaan Enterprises, we bring fresh energy and modern approaches
              to procurement and technology solutions. As a new enterprise, we
              are driven to prove ourselves through exceptional service,
              transparent dealings, and unwavering commitment to your success.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.slice(0, 4).map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <reason.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-heading text-foreground mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl -z-10" />
            <div className="p-8 lg:p-12">
              <div className="grid gap-6">
                {reasons.slice(4).map((reason, index) => (
                  <motion.div
                    key={reason.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                        <reason.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold font-heading text-foreground mb-1">
                          {reason.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* New Business Highlight */}
                <div className="p-6 bg-primary/5 rounded-xl border border-primary/20 mt-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center">
                      <Sparkles className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold font-heading text-foreground mb-2">
                        New Enterprise Advantage
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Partner with us early and experience the dedication that comes with building our reputation. Your project gets our highest attention.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 text-xs font-medium bg-accent/20 text-accent rounded-full">
                          Personalized Service
                        </span>
                        <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
                          Competitive Rates
                        </span>
                        <span className="px-3 py-1 text-xs font-medium bg-accent/20 text-accent rounded-full">
                          High Priority
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
