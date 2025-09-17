import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Award, Clock } from "lucide-react"

export default function AboutStats() {
  const stats = [
    {
      icon: TrendingUp,
      number: "500+",
      label: "Proyek Berhasil",
      description: "Website, aplikasi mobile, dan sistem enterprise",
    },
    {
      icon: Users,
      number: "300+",
      label: "Klien Puas",
      description: "Dari startup hingga perusahaan multinasional",
    },
    {
      icon: Award,
      number: "98%",
      label: "Tingkat Kepuasan",
      description: "Berdasarkan feedback dan review klien",
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Support Teknis",
      description: "Dukungan maintenance dan troubleshooting",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            Pencapaian dalam <span className="text-accent">Angka</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Angka-angka ini merepresentasikan dedikasi dan komitmen kami dalam memberikan layanan terbaik untuk setiap
            klien.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 group">
                <CardContent className="pt-8 pb-6 space-y-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-accent/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-accent">{stat.number}</div>
                    <div className="font-semibold text-lg">{stat.label}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{stat.description}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-background rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-2xl font-bold">Komitmen Kualitas Tinggi</h3>
              <p className="text-muted-foreground leading-relaxed">
                Setiap proyek yang kami kerjakan melalui proses quality assurance yang ketat. Kami menggunakan
                metodologi agile development dan testing automation untuk memastikan hasil yang optimal dan sesuai
                dengan standar industri internasional.
              </p>
            </div>
            <div className="text-center lg:text-right">
              <div className="inline-flex items-center px-6 py-3 bg-accent/10 text-accent rounded-full font-medium">
                ISO 9001:2015 Certified
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
