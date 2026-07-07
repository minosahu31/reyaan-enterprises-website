"use client"

import * as React from "react"
import Image from "next/image";
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Services",
    href: "#",
    children: [
      { name: "Procurement & Supply Solutions", href: "/services/procurement" },
      { name: "Government & GeM Solutions", href: "/services/gem" },
      { name: "Technology Services", href: "/services/technology" },
    ],
  },
  { name: "Industries", href: "/industries" },
  { name: "Projects", href: "/projects" },
  { name: "Certifications", href: "/certifications" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between gap-8">

          {/* Logo */}
          {/* <Link href="/" className="flex items-center">
            <Image
              src={isScrolled ? "/logo1-blue.png" : "/logo1-white.png"}
              alt="Reyaan Enterprises"
              width={250}
              height={80}
              priority
              className="h-14 w-auto sm:h-16 lg:h-16"
            />
          </Link> */}
          <div className="flex items-center">
            <div className="block sm:hidden">
              <Image
                src={isScrolled ? "/logo-mobile-blue.png" : "/logo-mobile-white.png"}
                alt="Reyaan Enterprises"
                width={40}
                height={40}
                className="w-20 h-20 object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <Image
              src={isScrolled ? "/logo1-blue.png" : "/logo1-white.png"}
              width={250}
              height={80}
              alt="Reyaan Enterprises"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-4">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative z-[9999]"
                onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.children ? (
                  <button
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-md",
                      "hover:text-primary hover:bg-primary/5",
                      isActive(item.href)
                        ? "text-accent font-semibold"
                        : isScrolled
                            ? "text-foreground hover:text-primary"
                            : "text-white hover:text-accent"
                    )}
                  >
                    {item.name}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "px-4 py-2 text-sm font-medium transition-colors rounded-md block",
                      "hover:text-primary hover:bg-primary/5",
                      isActive(item.href)
                        ? "text-accent font-semibold"
                        : isScrolled
                            ? "text-foreground hover:text-primary"
                            : "text-white hover:text-accent"
                    )}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && openDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-1 w-64 bg-card rounded-lg shadow-xl border border-border overflow-hidden z-[9999]"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className={cn(
                            "block px-4 py-3 text-sm transition-colors",
                            "hover:bg-primary/5 hover:text-primary",
                            isActive(child.href)
                              ? "text-accent font-semibold"
                              : isScrolled
                                  ? "text-foreground hover:text-primary"
                                  : "text-white hover:text-accent"
                          )}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={cn(
                  "hidden sm:flex",
                  isScrolled
                    ? "text-foreground hover:bg-primary/5"
                    : "text-white hover:bg-white/10"
                )}
                >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
                <span className="sr-only">Toggle theme</span>
              </Button>
            )}

            {/* CTA Button */}
            <Button
              asChild
              className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Link href="/contact">Request Quote</Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    isScrolled
                      ? "text-foreground"
                      : "text-white"
                  )}
                >
                <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between pb-6 border-b border-border">
                    <span className="text-xl font-bold font-heading text-primary">
                      Menu
                    </span>
                  </div>
                  <nav className="flex-1 py-6">
                    <ul className="space-y-2">
                      {navigation.map((item) => (
                        <li key={item.name}>
                          {item.children ? (
                            <div className="space-y-2">
                              <span className="block px-4 py-2 text-sm font-medium text-foreground/60">
                                {item.name}
                              </span>
                              <ul className="pl-4 space-y-1">
                                {item.children.map((child) => (
                                  <li key={child.name}>
                                    <Link
                                      href={child.href}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className={cn(
                                        "block px-4 py-2 text-sm rounded-md transition-colors",
                                        "hover:bg-primary/5 hover:text-primary",
                                        isActive(child.href)
                                          ? "text-primary bg-primary/5"
                                          : "text-foreground/80"
                                      )}
                                    >
                                      {child.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ) : (
                            <Link
                              href={item.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className={cn(
                                "block px-4 py-2 text-sm font-medium rounded-md transition-colors",
                                "hover:bg-primary/5 hover:text-primary",
                                isActive(item.href)
                                  ? "text-primary bg-primary/5"
                                  : "text-foreground/80"
                              )}
                            >
                              {item.name}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <div className="pt-6 border-t border-border space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-foreground/60">Theme</span>
                      {mounted && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            setTheme(theme === "dark" ? "light" : "dark")
                          }
                        >
                          {theme === "dark" ? (
                            <>
                              <Sun className="h-4 w-4 mr-2" /> Light
                            </>
                          ) : (
                            <>
                              <Moon className="h-4 w-4 mr-2" /> Dark
                            </>
                          )}
                        </Button>
                      )}
                    </div>
                    <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Link
                        href="/contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Request Quote
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
