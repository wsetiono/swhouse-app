import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, ShoppingBag, Heart, BookOpen } from "lucide-react"

export default function MobileAppPortfolio() {
  const portfolios = [
    {
      title: "FoodieGo - Food Delivery App",
      category: "On-Demand Service",
      description: "Aplikasi food delivery dengan real-time tracking dan multiple payment options",
      image: "https://images.unsplash.com/photo-1601972602288-3be527b4f18a?w=400&h=300&fit=crop",
      technologies: ["React Native", "Node.js", "MongoDB", "Socket.io"],
      icon: ShoppingBag,
      results: ["50K+ downloads", "4.7 App Store rating", "30% faster delivery"],
      platforms: ["iOS", "Android"],
    },
    {
      title: "HealthTracker - Fitness App",
      category: "Health & Fitness",
      description: "Aplikasi fitness tracking dengan AI personal trainer dan nutrition guide",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      technologies: ["Flutter", "Firebase", "TensorFlow", "HealthKit"],
      icon: Heart,
      results: ["100K+ active users", "4.8 Google Play rating", "85% user retention"],
      platforms: ["iOS", "Android"],
    },
    {
      title: "EduLearn - E-Learning Platform",
      category: "Education",
      description: "Platform pembelajaran online dengan video streaming dan interactive quiz",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=300&fit=crop",
      technologies: ["Native iOS", "Native Android", "AWS", "WebRTC"],
      icon: BookOpen,
      results: ["25K+ students", "95% completion rate", "4.9 average rating"],
      platforms: ["iOS", "Android"],
    },
  ]

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            Portfolio <span className="text-accent">Aplikasi Mobile</span> Kami
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Lihat beberapa aplikasi mobile yang telah kami kembangkan dan dampak positif yang dihasilkan untuk bisnis
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
                    alt={`Portfolio ${portfolio.title} - Aplikasi mobile yang dikembangkan oleh TechSolution Indonesia`}
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

                  {/* Platforms */}
                  <div className="flex space-x-2">
                    {portfolio.platforms.map((platform, platformIndex) => (
                      <span
                        key={platformIndex}
                        className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md font-medium"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>

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
