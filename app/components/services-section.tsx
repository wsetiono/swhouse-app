import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Smartphone, Globe, Zap, Shield, Headphones } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Website profesional, responsif, dan SEO-friendly untuk semua jenis bisnis",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "CMS Integration"],
      href: "/layanan/web-development",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Aplikasi mobile native untuk Android dan iOS dengan performa optimal",
      features: ["Native Development", "Cross Platform", "App Store Ready", "Push Notifications"],
      href: "/layanan/mobile-app",
    },
  ]

  const additionalServices = [
    {
      icon: Globe,
      title: "E-Commerce Solutions",
      description: "Toko online lengkap dengan sistem pembayaran dan manajemen inventory",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimasi kecepatan website dan aplikasi untuk pengalaman pengguna terbaik",
    },
    {
      icon: Shield,
      title: "Security & Maintenance",
      description: "Keamanan tingkat enterprise dan maintenance berkala untuk semua project",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Dukungan teknis profesional kapan saja Anda membutuhkannya",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            Layanan <span className="text-accent">Unggulan</span> Kami
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Solusi digital komprehensif yang dirancang khusus untuk membantu bisnis Anda berkembang pesat di era digital
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border">
                <CardHeader className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors bg-transparent"
                  >
                    <Link href={service.href}>Pelajari Lebih Lanjut</Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Additional Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalServices.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="text-center hover:shadow-md transition-shadow duration-300">
                <CardContent className="pt-6 space-y-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
