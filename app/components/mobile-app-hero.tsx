import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Smartphone, Download, Star } from "lucide-react"

export default function MobileAppHero() {
  return (
    <section className="relative bg-gradient-to-br from-background via-background to-muted py-20 lg:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Breadcrumb */}
            <nav className="text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground">
                Beranda
              </Link>{" "}
              / <span className="text-foreground">Mobile App Development</span>
            </nav>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                <span className="text-foreground">Jasa Pembuatan</span> <span className="text-accent">Aplikasi</span>{" "}
                <span className="text-foreground">Mobile</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-2xl">
                Wujudkan ide bisnis Anda menjadi aplikasi mobile Android dan iOS yang powerful, user-friendly, dan siap
                bersaing di App Store & Google Play Store.
              </p>
            </div>

            {/* Key benefits */}
            <div className="space-y-3">
              {[
                "Native Android & iOS development",
                "Cross-platform dengan React Native/Flutter",
                "App Store & Google Play Store ready",
                "Push notifications & offline capability",
                "Payment gateway & in-app purchases",
                "Real-time data sync & cloud integration",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/kontak" className="flex items-center space-x-2">
                  <span>Konsultasi Gratis</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#portfolio">Lihat Portfolio</Link>
              </Button>
            </div>

            {/* Quick stats */}
            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <Smartphone className="w-5 h-5 text-accent" />
                <span className="text-sm text-muted-foreground">50+ Apps Launched</span>
              </div>
              <div className="flex items-center space-x-2">
                <Download className="w-5 h-5 text-accent" />
                <span className="text-sm text-muted-foreground">100K+ Downloads</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-accent" />
                <span className="text-sm text-muted-foreground">4.8+ Rating</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=600&fit=crop"
                alt="Showcase aplikasi mobile Android dan iOS yang dikembangkan oleh TechSolution Indonesia"
                width={600}
                height={600}
                className="w-full h-auto rounded-2xl shadow-2xl"
                priority
              />
            </div>
            {/* Floating app store badges */}
            <div className="absolute -top-4 -left-4 bg-card border border-border rounded-lg p-4 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">App Store Ready</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-lg p-4 shadow-lg">
              <div className="text-sm">
                <div className="font-medium">Google Play</div>
                <div className="text-accent font-bold">Approved</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
