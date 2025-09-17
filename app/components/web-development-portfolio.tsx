import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Globe, ShoppingCart, Building } from "lucide-react"

export default function WebDevelopmentPortfolio() {
  const portfolios = [
    {
      title: "E-Commerce Fashion Store",
      category: "E-Commerce",
      description: "Platform e-commerce lengkap dengan payment gateway dan inventory management",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
      icon: ShoppingCart,
      results: ["300% increase in online sales", "50% faster checkout process", "99.9% uptime"],
    },
    {
      title: "Corporate Company Profile",
      category: "Company Profile",
      description: "Website profesional untuk perusahaan konstruksi dengan portfolio project",
      image: "https://images.unsplash.com/photo-1566813916511-2701d4c96576?w=400&h=300&fit=crop",
      technologies: ["React", "CMS", "SEO Optimized", "Responsive"],
      icon: Building,
      results: ["#1 Google ranking", "200% more inquiries", "Professional brand image"],
    },
    {
      title: "Restaurant Booking System",
      category: "Web Application",
      description: "Sistem reservasi online dengan manajemen meja dan menu digital",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
      technologies: ["Vue.js", "Node.js", "MongoDB", "Payment Gateway"],
      icon: Globe,
      results: ["80% online bookings", "Reduced wait times", "Better customer experience"],
    },
  ]

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            Portfolio <span className="text-accent">Website</span> Kami
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Lihat beberapa project website yang telah kami kerjakan dan dampak positif yang dihasilkan untuk bisnis
            klien kami.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {portfolios.map((portfolio, index) => {
            const Icon = portfolio.icon
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <Image
                    src={portfolio.image || "/placeholder.svg"}
                    alt={`Portfolio ${portfolio.title} - Website yang dikembangkan oleh TechSolution Indonesia`}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="secondary" size="sm" className="flex items-center space-x-2">
                      <ExternalLink className="w-4 h-4" />
                      <span>Lihat Detail</span>
                    </Button>
                  </div>
                </div>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{portfolio.title}</h3>
                      <div className="text-sm text-accent">{portfolio.category}</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{portfolio.description}</p>

                  {/* Technologies */}
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Technologies:</div>
                    <div className="flex flex-wrap gap-2">
                      {portfolio.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-muted text-xs rounded-md text-muted-foreground">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Results:</div>
                    <div className="space-y-1">
                      {portfolio.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                          <span className="text-xs text-muted-foreground">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/portfolio">Lihat Semua Portfolio</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
