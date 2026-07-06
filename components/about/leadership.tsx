"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Linkedin, Mail } from "lucide-react"

const leaders = [
  {
    name: "Rajesh Sharma",
    role: "Founder & CEO",
    bio: "20+ years of experience in procurement and supply chain management. Former consultant at leading PSUs.",
    initials: "RS",
  },
  {
    name: "Priya Kapoor",
    role: "Chief Operating Officer",
    bio: "Expert in government contracts and GeM operations with extensive experience in public sector projects.",
    initials: "PK",
  },
  {
    name: "Amit Verma",
    role: "Chief Technology Officer",
    bio: "Technology leader with background in enterprise software development and digital transformation.",
    initials: "AV",
  },
  {
    name: "Sunita Reddy",
    role: "Head of Business Development",
    bio: "Strategic growth expert with strong relationships across government and enterprise sectors.",
    initials: "SR",
  },
]

export function Leadership() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mt-2 mb-4">
            Leadership <span className="text-primary">Team</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet the experienced professionals driving Reyaan Enterprises
            forward with vision and dedication.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="relative mb-6 mx-auto w-40 h-40">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <span className="text-4xl font-bold font-heading text-primary-foreground">
                    {leader.initials}
                  </span>
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                    aria-label={`${leader.name} LinkedIn`}
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                    aria-label={`Email ${leader.name}`}
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <h3 className="text-xl font-semibold font-heading text-foreground mb-1">
                {leader.name}
              </h3>
              <p className="text-accent font-medium text-sm mb-3">
                {leader.role}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {leader.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
