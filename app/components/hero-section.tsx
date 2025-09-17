import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Star } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-background via-background to-muted py-20 lg:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Trust indicators */}
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-muted-foreground ml-2">5.0 dari 200+ klien</span>
              </div>
              <div className="h-4 w-px bg-border" />
              <span className="text-muted-foreground">Terpercaya sejak 2020</span>
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                <span className="text-foreground">Solusi Digital</span> <span className="text-accent">Terpercaya</span>{" "}
                <span className="text-foreground">untuk Bisnis Anda</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-2xl">
                Kami mengkhususkan diri dalam pembuatan website profesional dan aplikasi mobile Android/iOS yang
                membantu bisnis Anda berkembang di era digital.
              </p>
            </div>

            {/* Key benefits */}
            <div className="space-y-3">
              {[
                "Website responsif dan SEO-friendly",
                "Aplikasi mobile native Android & iOS",
                "Dukungan teknis 24/7 setelah launch",
                "Garansi 1 tahun untuk semua project",
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
                <Link href="/tentang-kami">Lihat Portfolio</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold text-primary">200+</div>
                <div className="text-sm text-muted-foreground">Project Selesai</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold text-primary">150+</div>
                <div className="text-sm text-muted-foreground">Klien Puas</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold text-primary">4+</div>
                <div className="text-sm text-muted-foreground">Tahun Pengalaman</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop&crop=faces"
                alt="Tim developer TechSolution Indonesia sedang bekerja mengembangkan website dan aplikasi mobile"
                width={600}
                height={600}
                className="w-full h-auto rounded-2xl shadow-2xl"
                priority
                loading="eager"
              />
            </div>
            {/* Floating cards */}
            <div className="absolute -top-4 -left-4 bg-card border border-border rounded-lg p-4 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Website Live</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-lg p-4 shadow-lg">
              <div className="text-sm">
                <div className="font-medium">Mobile App</div>
                <div className="text-muted-foreground">Ready to Deploy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
