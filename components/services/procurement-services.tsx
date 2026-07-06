"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  ShoppingCart,
  Truck,
  Users,
  ClipboardCheck,
  BarChart3,
  Package,
  Settings,
  Shield,
} from "lucide-react"

const services = [
  {
    icon: ShoppingCart,
    title: "Strategic Sourcing",
    description:
      "Identify and engage with the best suppliers through systematic evaluation and negotiation processes.",
    features: [
      "Market analysis",
      "Supplier evaluation",
      "Contract negotiation",
      "Cost optimization",
    ],
  },
  {
    icon: Users,
    title: "Vendor Management",
    description:
      "Comprehensive vendor lifecycle management from onboarding to performance evaluation.",
    features: [
      "Vendor registration",
      "Performance tracking",
      "Relationship management",
      "Risk assessment",
    ],
  },
  {
    icon: Truck,
    title: "Supply Chain Management",
    description:
      "End-to-end supply chain optimization ensuring seamless flow of goods and services.",
    features: [
      "Logistics planning",
      "Inventory management",
      "Distribution optimization",
      "Demand forecasting",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Procurement Consulting",
    description:
      "Expert guidance on procurement strategies, policies, and best practices.",
    features: [
      "Process assessment",
      "Strategy development",
      "Policy formulation",
      "Compliance advisory",
    ],
  },
  {
    icon: BarChart3,
    title: "Spend Analytics",
    description:
      "Data-driven insights into spending patterns to identify savings opportunities.",
    features: [
      "Spend analysis",
      "Category management",
      "Savings identification",
      "Reporting dashboards",
    ],
  },
  {
    icon: Package,
    title: "Inventory Solutions",
    description:
      "Optimize inventory levels to balance carrying costs with service requirements.",
    features: [
      "Stock optimization",
      "Reorder planning",
      "Warehouse management",
      "Just-in-time delivery",
    ],
  },
  {
    icon: Settings,
    title: "Process Automation",
    description:
      "Streamline procurement processes through digital solutions and automation.",
    features: [
      "Workflow automation",
      "E-procurement",
      "Digital approvals",
      "System integration",
    ],
  },
  {
    icon: Shield,
    title: "Compliance & Risk",
    description:
      "Ensure procurement activities meet regulatory requirements and manage supplier risks.",
    features: [
      "Regulatory compliance",
      "Risk management",
      "Audit support",
      "Documentation",
    ],
  },
]

export function ProcurementServices() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
            Our <span className="text-primary">Offerings</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive procurement and supply chain solutions tailored to
            your organizational needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold font-heading text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
