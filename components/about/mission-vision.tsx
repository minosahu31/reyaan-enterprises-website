"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Target, Eye } from "lucide-react"

export function MissionVision() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
            className="relative p-8 lg:p-12 rounded-2xl bg-card border border-border"
          >
            <div className="absolute top-0 left-0 w-24 h-24 bg-primary/5 rounded-br-full" />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary mb-6">
                <Target className="h-8 w-8" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold font-heading text-foreground mb-4">
                Our Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To deliver exceptional procurement, supply chain, and technology
                solutions that empower organizations to achieve operational
                excellence. We are committed to building lasting partnerships
                through integrity, innovation, and unwavering dedication to
                client success.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative p-8 lg:p-12 rounded-2xl bg-primary text-primary-foreground"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full" />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-white/10 text-accent mb-6">
                <Eye className="h-8 w-8" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold font-heading text-primary-foreground mb-4">
                Our Vision
              </h2>
              <p className="text-primary-foreground/80 leading-relaxed">
                To be India&apos;s most trusted partner for procurement and
                technology solutions, recognized for our commitment to quality,
                compliance, and customer satisfaction. We aspire to set industry
                benchmarks in government and enterprise services.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
