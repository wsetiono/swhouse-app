import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, Calendar } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Main CTA */}
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">
              Siap Mengembangkan Bisnis Anda ke Level Selanjutnya?
            </h2>
            <p className="text-xl text-accent-foreground/90 text-pretty leading-relaxed">
              Jangan biarkan kompetitor Anda unggul di dunia digital. Mulai transformasi digital bisnis Anda hari ini
              dengan konsultasi gratis bersama tim expert kami.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-accent hover:bg-white/90 font-semibold"
            >
              <Link href="/kontak" className="flex items-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span>Konsultasi Gratis Sekarang</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent"
            >
              <Link href="/tentang-kami" className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Jadwalkan Meeting</span>
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-accent-foreground/80">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span>Konsultasi 100% Gratis</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span>No Hidden Cost</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span>Garansi Kepuasan</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
