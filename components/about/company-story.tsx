"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const milestones = [
  {
    year: "2008",
    title: "Company Founded",
    description:
      "Reyaan Enterprises was established with a vision to provide quality procurement services.",
  },
  {
    year: "2012",
    title: "Government Contracts",
    description:
      "Secured first major government contract and expanded into public sector services.",
  },
  {
    year: "2016",
    title: "Technology Division",
    description:
      "Launched technology services division to offer comprehensive business solutions.",
  },
  {
    year: "2019",
    title: "GeM Registration",
    description:
      "Became a verified seller on Government e-Marketplace, expanding government reach.",
  },
  {
    year: "2022",
    title: "Pan-India Operations",
    description:
      "Expanded operations across India with regional offices and partnerships.",
  },
  {
    year: "2024",
    title: "Digital Transformation",
    description:
      "Launched advanced digital solutions and cloud services for enterprise clients.",
  },
]

export function CompanyStory() {
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
            Our Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mt-2 mb-4">
            Company <span className="text-primary">Story</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From a small procurement consultancy to a comprehensive business
            solutions provider - our journey of growth and excellence.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-center gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 z-10" />

              {/* Content */}
              <div
                className={`flex-1 ml-12 md:ml-0 ${
                  index % 2 === 0
                    ? "md:pr-12 md:text-right"
                    : "md:pl-12 md:text-left"
                }`}
              >
                <div className="p-6 rounded-xl bg-card border border-border shadow-sm">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-3">
                    {milestone.year}
                  </span>
                  <h3 className="text-xl font-semibold font-heading text-foreground mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>

              {/* Spacer for opposite side */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
