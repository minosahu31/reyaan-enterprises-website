"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { CheckCircle, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const certifications = [
  {
    name: "GST Registration",
    description: "Tax compliance registration",
    status: "In Progress",
  },
  {
    name: "MSME Registration",
    description: "Ministry of MSME certification",
    status: "In Progress",
  },
  {
    name: "GeM Registration",
    description: "Government e-Marketplace seller",
    status: "Planned",
  },
  {
    name: "Trade License",
    description: "Commercial operations license",
    status: "Planned",
  },
]

export function CertificationsSection() {
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
            Building Trust
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mt-2 mb-4">
            Our Compliance <span className="text-primary">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            As a new enterprise, we are actively completing all necessary registrations and certifications. We believe in transparency about our progress.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-4 px-6 py-4 bg-card rounded-lg border border-border shadow-sm min-w-[280px]"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  cert.status === "In Progress"
                    ? "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {cert.status === "In Progress" ? (
                  <Clock className="h-5 w-5" />
                ) : (
                  <CheckCircle className="h-5 w-5" />
                )}
              </div>
              <div>
                <h3 className="font-semibold font-heading text-foreground">
                  {cert.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {cert.description}
                </p>
              </div>
              <span
                className={`ml-auto text-xs font-medium px-2 py-1 rounded ${
                  cert.status === "In Progress"
                    ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {cert.status}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Button asChild variant="outline">
            <Link
              href="/some-page"
              className="inline-flex items-center gap-2"
            >
              <span>View Full Compliance Roadmap</span>
              <ArrowRight className="h-4 w-4 shrink-0" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
