"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { CheckCircle, Clock, FileCheck, Shield, Building, Rocket, Target } from "lucide-react"

const certifications = [
  {
    icon: FileCheck,
    name: "GST Registration",
    number: "Under Process",
    description:
      "Registration under Goods and Services Tax for compliance with Indian tax regulations.",
    status: "In Progress",
    validUntil: "Expected Soon",
  },
  {
    icon: Building,
    name: "MSME Registration",
    number: "Under Process",
    description:
      "Registration under Ministry of Micro, Small and Medium Enterprises, Government of India.",
    status: "In Progress",
    validUntil: "Expected Soon",
  },
  {
    icon: Shield,
    name: "GeM Seller Registration",
    number: "Planned",
    description:
      "Verified seller registration on Government e-Marketplace for government procurement.",
    status: "Planned",
    validUntil: "Post GST/MSME",
  },
  {
    icon: CheckCircle,
    name: "Trade License",
    number: "Planned",
    description:
      "Trade license from local municipal authority for business operations.",
    status: "Planned",
    validUntil: "In Process",
  },
]

const roadmap = [
  {
    phase: "Phase 1",
    title: "Foundation",
    status: "In Progress",
    items: [
      "Company incorporation completed",
      "GST registration in progress",
      "MSME registration in progress",
      "Bank account setup",
    ],
  },
  {
    phase: "Phase 2",
    title: "Compliance",
    status: "Upcoming",
    items: [
      "Trade license acquisition",
      "GeM seller registration",
      "PAN and TAN verification",
      "Professional tax registration",
    ],
  },
  {
    phase: "Phase 3",
    title: "Certifications",
    status: "Planned",
    items: [
      "ISO 9001:2015 certification",
      "Industry-specific certifications",
      "Quality management system",
      "Vendor empanelment",
    ],
  },
]

const complianceCommitments = [
  {
    title: "Financial Transparency",
    items: [
      "Regular GST filing",
      "Timely tax compliance",
      "Audited financial statements",
      "Clear pricing structures",
    ],
  },
  {
    title: "Legal Adherence",
    items: [
      "Companies Act compliance",
      "Labor law compliance",
      "Contract law adherence",
      "Proper documentation",
    ],
  },
  {
    title: "Quality Standards",
    items: [
      "Product quality checks",
      "Vendor verification",
      "Service delivery standards",
      "Customer satisfaction tracking",
    ],
  },
  {
    title: "Ethical Operations",
    items: [
      "Anti-corruption policies",
      "Fair business practices",
      "Transparent communication",
      "Data protection measures",
    ],
  },
]

export function CertificationsGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Current Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-4">
              <Rocket className="h-4 w-4" />
              <span className="text-sm font-medium">Building Our Foundation</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
              Compliance <span className="text-primary">Status</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              As a new enterprise, we are actively completing all necessary registrations and certifications. Here is our current progress.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                    <cert.icon className="h-6 w-6" />
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      cert.status === "Active"
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        : cert.status === "In Progress"
                        ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {cert.status}
                  </span>
                </div>
                <h3 className="text-lg font-semibold font-heading text-foreground mb-1">
                  {cert.name}
                </h3>
                <p className="text-sm text-accent font-medium mb-3">{cert.number}</p>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {cert.validUntil}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
              Certification <span className="text-primary">Roadmap</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our planned journey to full compliance and certification excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {roadmap.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className={`p-6 rounded-xl border ${
                  phase.status === "In Progress"
                    ? "bg-primary/5 border-primary/30"
                    : "bg-card border-border"
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${
                      phase.status === "In Progress"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <Target className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">
                      {phase.phase}
                    </span>
                    <h3 className="text-lg font-semibold font-heading text-foreground">
                      {phase.title}
                    </h3>
                  </div>
                </div>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                    phase.status === "In Progress"
                      ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {phase.status}
                </span>
                <ul className="space-y-2">
                  {phase.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Compliance Commitments */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground text-center mb-4">
            Our Compliance <span className="text-primary">Commitment</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Regardless of our certification status, we are committed to operating with the highest standards of integrity and compliance.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceCommitments.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="p-6 rounded-xl bg-muted/50 border border-border"
              >
                <h3 className="text-lg font-semibold font-heading text-foreground mb-4">
                  {area.title}
                </h3>
                <ul className="space-y-3">
                  {area.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
