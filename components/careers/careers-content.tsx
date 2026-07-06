"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  Heart,
  TrendingUp,
  Users,
  Award,
  Coffee,
  GraduationCap,
} from "lucide-react"

const benefits = [
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Clear career paths and opportunities for advancement",
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description: "Training programs and skill development initiatives",
  },
  {
    icon: Heart,
    title: "Health Insurance",
    description: "Comprehensive health coverage for you and family",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Work with talented professionals in a supportive environment",
  },
  {
    icon: Award,
    title: "Performance Rewards",
    description: "Competitive compensation and performance bonuses",
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    description: "Flexible work arrangements and paid time off",
  },
]

const openPositions = [
  {
    title: "Senior Procurement Manager",
    department: "Procurement",
    location: "New Delhi",
    type: "Full-time",
    experience: "8-12 years",
    description:
      "Lead procurement initiatives for government and enterprise clients.",
  },
  {
    title: "Business Development Executive",
    department: "Sales",
    location: "Mumbai",
    type: "Full-time",
    experience: "3-5 years",
    description:
      "Drive business growth through new client acquisition and partnerships.",
  },
  {
    title: "Full Stack Developer",
    department: "Technology",
    location: "Bangalore",
    type: "Full-time",
    experience: "4-6 years",
    description:
      "Build and maintain web applications using modern technologies.",
  },
  {
    title: "Supply Chain Analyst",
    department: "Operations",
    location: "Hyderabad",
    type: "Full-time",
    experience: "2-4 years",
    description:
      "Analyze and optimize supply chain processes for clients.",
  },
  {
    title: "Government Relations Officer",
    department: "Government Affairs",
    location: "New Delhi",
    type: "Full-time",
    experience: "5-8 years",
    description:
      "Manage relationships with government departments and GeM operations.",
  },
]

export function CareersContent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground text-center mb-4">
            Why Work <span className="text-primary">With Us</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            We invest in our people and create an environment where talent
            thrives and careers flourish.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold font-heading text-foreground mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Open Positions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground text-center mb-4">
            Open <span className="text-primary">Positions</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Explore current opportunities and find the role that matches your
            skills and aspirations.
          </p>

          <div className="space-y-4">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold font-heading text-foreground group-hover:text-primary transition-colors">
                        {position.title}
                      </h3>
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {position.department}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-3">
                      {position.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {position.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        {position.experience}
                      </span>
                    </div>
                  </div>
                  <Button
                    asChild
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Link href="/contact">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12 p-8 rounded-xl bg-muted/50 border border-border"
          >
            <h3 className="text-xl font-semibold font-heading text-foreground mb-2">
              Don&apos;t see the right role?
            </h3>
            <p className="text-muted-foreground mb-6">
              We&apos;re always looking for talented individuals. Send us your
              resume and we&apos;ll keep you in mind for future opportunities.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Link href="/contact">
                Send Your Resume
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
