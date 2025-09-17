import { Card, CardContent } from "@/components/ui/card"
import { Heart, Shield, Lightbulb, Users, Target, Zap } from "lucide-react"

export default function AboutValues() {
  const values = [
    {
      icon: Heart,
      title: "Passion for Excellence",
      description: "Kami bekerja dengan passion dan dedikasi tinggi untuk menghasilkan solusi teknologi terbaik",
    },
    {
      icon: Shield,
      title: "Integrity & Trust",
      description: "Transparansi dan kejujuran adalah fondasi dalam setiap hubungan bisnis dengan klien",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Selalu mengadopsi teknologi terdepan dan metodologi terbaru dalam setiap proyek",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Bekerja sama dengan klien sebagai partner untuk mencapai tujuan bisnis bersama",
    },
    {
      icon: Target,
      title: "Result Oriented",
      description: "Fokus pada hasil yang terukur dan memberikan value nyata untuk bisnis klien",
    },
    {
      icon: Zap,
      title: "Agility & Speed",
      description: "Responsif terhadap perubahan dan mampu deliver solusi dengan timeline yang efisien",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            Nilai-Nilai <span className="text-accent">Perusahaan</span> Kami
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Nilai-nilai fundamental yang menjadi panduan dalam setiap keputusan dan tindakan kami sebagai software house
            profesional.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-accent/20 hover:border-l-accent"
              >
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-semibold text-lg">{value.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Culture Section */}
        <div className="mt-20 bg-muted/50 rounded-2xl p-8 lg:p-12">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold">Budaya Kerja yang Positif</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Kami percaya bahwa lingkungan kerja yang positif dan supportif adalah kunci untuk menghasilkan karya
              terbaik. Tim kami terdiri dari individu-individu yang passionate, kreatif, dan selalu siap untuk belajar
              hal-hal baru.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-2">Work-Life Balance</div>
                <div className="text-sm text-muted-foreground">Keseimbangan kehidupan kerja</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-2">Continuous Learning</div>
                <div className="text-sm text-muted-foreground">Pembelajaran berkelanjutan</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-2">Team Collaboration</div>
                <div className="text-sm text-muted-foreground">Kolaborasi tim yang solid</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-2">Innovation Culture</div>
                <div className="text-sm text-muted-foreground">Budaya inovasi dan kreativitas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
