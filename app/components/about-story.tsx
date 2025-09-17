import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, Trophy, Target } from "lucide-react"

export default function AboutStory() {
  const milestones = [
    {
      year: "2016",
      title: "Berdirinya TechSolution",
      description: "Dimulai dengan visi menjadi software house terdepan di Indonesia",
      icon: Calendar,
    },
    {
      year: "2018",
      title: "Tim Berkembang",
      description: "Ekspansi tim dengan 20+ developer dan designer berpengalaman",
      icon: Users,
    },
    {
      year: "2020",
      title: "Pencapaian 100 Proyek",
      description: "Berhasil menyelesaikan 100+ proyek dengan tingkat kepuasan tinggi",
      icon: Trophy,
    },
    {
      year: "2024",
      title: "Ekspansi Layanan",
      description: "Menambah layanan AI/ML dan cloud solutions untuk transformasi digital",
      icon: Target,
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            Perjalanan <span className="text-accent">TechSolution</span> Indonesia
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Dari startup kecil hingga menjadi software house terpercaya, inilah perjalanan kami dalam membangun
            ekosistem teknologi Indonesia yang lebih baik.
          </p>
        </div>

        {/* Story Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Visi & Misi Kami</h3>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-accent mb-2">Visi</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Menjadi software house terdepan di Indonesia yang menghadirkan solusi teknologi inovatif untuk
                  mendorong transformasi digital bisnis lokal menuju kelas dunia.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-accent mb-2">Misi</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span>Mengembangkan solusi software berkualitas tinggi dengan teknologi terdepan</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span>Memberikan layanan konsultasi IT yang komprehensif dan terpercaya</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span>Membangun ekosistem teknologi yang mendukung pertumbuhan bisnis Indonesia</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Mengapa Memilih Kami?</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-muted/50 rounded-lg">
                <div className="font-semibold mb-2">Pengalaman Terbukti</div>
                <div className="text-sm text-muted-foreground">8+ tahun melayani berbagai industri</div>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <div className="font-semibold mb-2">Tim Ahli</div>
                <div className="text-sm text-muted-foreground">Developer bersertifikat internasional</div>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <div className="font-semibold mb-2">Teknologi Terdepan</div>
                <div className="text-sm text-muted-foreground">Selalu menggunakan tech stack terbaru</div>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <div className="font-semibold mb-2">Support 24/7</div>
                <div className="text-sm text-muted-foreground">Dukungan teknis sepanjang waktu</div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-center">Milestone Perjalanan Kami</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="pt-6 space-y-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="text-2xl font-bold text-accent">{milestone.year}</div>
                    <div className="font-semibold">{milestone.title}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{milestone.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
