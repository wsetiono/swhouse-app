import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Smartphone, ShoppingBag, Gamepad2, Heart, BookOpen, Car } from "lucide-react"

export default function MobileAppServices() {
  const services = [
    {
      icon: ShoppingBag,
      title: "E-Commerce Mobile App",
      description: "Aplikasi toko online dengan fitur lengkap untuk meningkatkan penjualan mobile commerce",
      features: ["Product Catalog", "Shopping Cart", "Payment Gateway", "Order Tracking", "Push Notifications"],
      price: "Mulai dari Rp 25.000.000",
    },
    {
      icon: Heart,
      title: "Healthcare & Fitness App",
      description: "Aplikasi kesehatan dan fitness dengan tracking, appointment, dan telemedicine features",
      features: ["Health Tracking", "Appointment Booking", "Telemedicine", "Fitness Programs", "Medical Records"],
      price: "Mulai dari Rp 35.000.000",
    },
    {
      icon: BookOpen,
      title: "Education & E-Learning App",
      description: "Platform pembelajaran online dengan video streaming, quiz, dan progress tracking",
      features: ["Video Streaming", "Interactive Quiz", "Progress Tracking", "Offline Content", "Certificates"],
      price: "Mulai dari Rp 30.000.000",
    },
    {
      icon: Car,
      title: "On-Demand Service App",
      description: "Aplikasi layanan on-demand seperti ride-hailing, food delivery, atau home services",
      features: ["Real-time Tracking", "Payment Integration", "Rating System", "Chat Feature", "Admin Dashboard"],
      price: "Mulai dari Rp 40.000.000",
    },
    {
      icon: Gamepad2,
      title: "Gaming & Entertainment App",
      description: "Aplikasi game dan entertainment dengan multiplayer, leaderboard, dan monetization",
      features: ["Multiplayer Support", "Leaderboards", "In-app Purchases", "Social Features", "Analytics"],
      price: "Mulai dari Rp 45.000.000",
    },
    {
      icon: Smartphone,
      title: "Business & Productivity App",
      description: "Aplikasi bisnis untuk meningkatkan produktivitas tim dan manajemen workflow",
      features: ["Task Management", "Team Collaboration", "File Sharing", "Time Tracking", "Reporting"],
      price: "Mulai dari Rp 28.000.000",
    },
  ]

  const platforms = [
    {
      name: "Native Android",
      description: "Kotlin/Java development untuk performa optimal di Android",
      benefits: ["Best Performance", "Full Android Features", "Material Design", "Google Play Optimized"],
    },
    {
      name: "Native iOS",
      description: "Swift/Objective-C development untuk ekosistem Apple",
      benefits: ["Best Performance", "Full iOS Features", "Human Interface Guidelines", "App Store Optimized"],
    },
    {
      name: "Cross-Platform",
      description: "React Native/Flutter untuk development yang efisien",
      benefits: ["Cost Effective", "Faster Development", "Single Codebase", "Good Performance"],
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            Jenis <span className="text-accent">Aplikasi Mobile</span> yang Kami Buat
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Dari aplikasi e-commerce hingga game mobile, kami siap mengembangkan berbagai jenis aplikasi sesuai
            kebutuhan bisnis dan industri Anda.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border h-full">
                <CardHeader className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-sm leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-border">
                    <div className="text-lg font-bold text-accent">{service.price}</div>
                    <div className="text-xs text-muted-foreground mt-1">*Harga dapat disesuaikan dengan kebutuhan</div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Platform Options */}
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h3 className="text-2xl lg:text-3xl font-bold">Platform Development</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Pilih platform yang sesuai dengan target audience dan budget Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6 space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold">{platform.name}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{platform.description}</p>
                  </div>
                  <div className="space-y-2">
                    {platform.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center justify-center space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
