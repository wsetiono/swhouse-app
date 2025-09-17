import { Card, CardContent } from "@/components/ui/card"
import { Award, Clock, Users, Lightbulb, Target, Handshake } from "lucide-react"

export default function WhyChooseUsSection() {
  const reasons = [
    {
      icon: Award,
      title: "Kualitas Terjamin",
      description: "Setiap project dikerjakan dengan standar kualitas tinggi dan testing menyeluruh sebelum delivery",
    },
    {
      icon: Clock,
      title: "Tepat Waktu",
      description: "Komitmen penuh untuk menyelesaikan project sesuai timeline yang telah disepakati bersama",
    },
    {
      icon: Users,
      title: "Tim Berpengalaman",
      description: "Developer senior dengan pengalaman 5+ tahun di berbagai industri dan teknologi terkini",
    },
    {
      icon: Lightbulb,
      title: "Solusi Inovatif",
      description: "Pendekatan kreatif dan teknologi terdepan untuk memberikan solusi terbaik bagi bisnis Anda",
    },
    {
      icon: Target,
      title: "Fokus pada ROI",
      description: "Setiap fitur dirancang untuk memberikan return on investment maksimal bagi bisnis klien",
    },
    {
      icon: Handshake,
      title: "Partnership Jangka Panjang",
      description: "Kami tidak hanya vendor, tapi partner strategis untuk pertumbuhan digital bisnis Anda",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            Mengapa Memilih <span className="text-accent">TechSolution</span>?
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Lebih dari 150 perusahaan telah mempercayakan transformasi digital mereka kepada kami. Inilah alasan mengapa
            mereka memilih TechSolution sebagai partner teknologi utama.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border">
                <CardContent className="pt-6 space-y-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">{reason.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-muted/50 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Project Berhasil</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Klien Puas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">99%</div>
              <div className="text-muted-foreground">Tingkat Kepuasan</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
