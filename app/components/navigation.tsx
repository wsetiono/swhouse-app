"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Code, Smartphone, Users, Mail, Home, BookOpen } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Beranda", icon: Home },
    { href: "/layanan/web-development", label: "Web Development", icon: Code },
    { href: "/layanan/mobile-app", label: "Mobile App", icon: Smartphone },
    { href: "/blog", label: "Blog", icon: BookOpen },
    { href: "/tentang-kami", label: "Tentang Kami", icon: Users },
    { href: "/kontak", label: "Kontak", icon: Mail },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-accent-foreground" />
            </div>
            <span className="font-bold text-xl text-foreground">TechSolution</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="bg-accent hover:bg-accent/90">
              <Link href="/kontak">Konsultasi Gratis</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card rounded-lg mt-2 border border-border">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center space-x-3 px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
              <div className="px-3 py-2">
                <Button asChild className="w-full bg-accent hover:bg-accent/90">
                  <Link href="/kontak" onClick={() => setIsOpen(false)}>
                    Konsultasi Gratis
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
