"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Target, Users, Clock, Award, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const promises = [
  {
    icon: Target,
    title: "Transparent Communication",
    description:
      "Clear, honest communication at every stage. No hidden costs, no surprises. You will always know exactly where your project stands.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description:
      "A single point of contact for all your needs. Quick responses and proactive updates ensure you are never left waiting.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "We understand that timelines matter. Our processes are designed to meet deadlines without compromising on quality.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description:
      "Every product and service undergoes rigorous quality checks before delivery. Your satisfaction is our benchmark.",
  },
]

const startingPrinciples = [
  "Full compliance with all government procurement regulations",
  "Competitive and transparent pricing structures",
  "Thorough vendor vetting and quality control",
  "Detailed documentation for every transaction",
  "Regular progress updates and reporting",
  "Post-delivery support and assistance",
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Our Promise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mt-2 mb-4">
            What You Can <span className="text-primary">Expect From Us</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            While we are new to the market, our commitment to excellence and professional standards is unwavering. Here is our promise to every client.
          </p>
        </motion.div>

        {/* Promises Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {promises.map((promise, index) => (
            <motion.div
              key={promise.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                  <promise.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold font-heading text-foreground mb-2">
                    {promise.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {promise.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Operating Principles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-primary/5 rounded-2xl p-8 md:p-12 border border-primary/10"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold font-heading text-foreground mb-4">
                Our Operating Principles
              </h3>
              <p className="text-muted-foreground mb-6">
                From day one, we have established clear principles that guide every interaction and transaction. These are not aspirations — they are our minimum standards.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="/contact">Start a Conversation</Link>
              </Button>
            </div>
            <div className="grid gap-3">
              {startingPrinciples.map((principle, index) => (
                <motion.div
                  key={principle}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{principle}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
