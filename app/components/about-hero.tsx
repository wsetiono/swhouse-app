import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutHero() {
  return (
    <section className="pt-24 pb-20 bg-gradient-to-br from-background via-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                Dipercaya 500+ Perusahaan Indonesia
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-balance leading-tight">
                Membangun <span className="text-accent">Solusi Digital</span> Terbaik untuk Indonesia
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Sejak 2016, TechSolution Indonesia telah menjadi mitra terpercaya dalam transformasi digital bisnis.
                Kami menghadirkan solusi teknologi inovatif yang membantu perusahaan Indonesia berkembang di era
                digital.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/kontak">Konsultasi Gratis</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/portfolio">Lihat Portfolio</Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">8+</div>
                <div className="text-sm text-muted-foreground">Tahun Pengalaman</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Proyek Selesai</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">98%</div>
                <div className="text-sm text-muted-foreground">Kepuasan Klien</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=500&fit=crop"
                alt="Tim TechSolution Indonesia di kantor Jakarta - Software house terpercaya"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-xl p-6 shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-accent font-bold text-lg">TS</span>
                </div>
                <div>
                  <div className="font-semibold">TechSolution Indonesia</div>
                  <div className="text-sm text-muted-foreground">Est. 2016</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
