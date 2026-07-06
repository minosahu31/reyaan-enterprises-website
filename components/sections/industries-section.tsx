"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import {
  Building2,
  Heart,
  GraduationCap,
  Factory,
  ShoppingBag,
  Cpu,
  Landmark,
  ArrowRight,
} from "lucide-react"

const industries = [
  {
    icon: Landmark,
    name: "Government",
    description: "Public sector projects and GeM contracts",
  },
  {
    icon: Heart,
    name: "Healthcare",
    description: "Medical equipment and supplies",
  },
  {
    icon: GraduationCap,
    name: "Education",
    description: "Educational institutions and EdTech",
  },
  {
    icon: Factory,
    name: "Manufacturing",
    description: "Industrial equipment and automation",
  },
  {
    icon: ShoppingBag,
    name: "Retail",
    description: "Retail supply chain solutions",
  },
  {
    icon: Cpu,
    name: "Technology",
    description: "IT infrastructure and software",
  },
  {
    icon: Building2,
    name: "Public Sector",
    description: "PSU and government enterprises",
  },
]

export function IndustriesSection() {
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
            Industries We Serve
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mt-2 mb-4">
            Expertise Across <span className="text-primary">Sectors</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We bring specialized knowledge and solutions tailored to the unique
            challenges of each industry we serve.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <industry.icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold font-heading text-foreground mb-2">
                {industry.name}
              </h3>
              <p className="text-sm text-muted-foreground">{industry.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/industries"
            className="inline-flex items-center text-primary font-medium hover:text-accent transition-colors group"
          >
            Explore All Industries
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
