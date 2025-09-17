import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactHero() {
  return (
    <section className="pt-24 pb-12 bg-gradient-to-br from-background via-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Header */}
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
              Konsultasi Gratis • Respon Cepat • Tim Profesional
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-balance leading-tight">
              Mari <span className="text-accent">Diskusikan</span> Proyek Anda
            </h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              Siap membantu mewujudkan ide digital Anda? Tim ahli kami siap memberikan konsultasi gratis dan solusi
              terbaik untuk kebutuhan teknologi bisnis Anda.
            </p>
          </div>

          {/* Quick Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-2 p-4 bg-background rounded-lg border border-border">
              <Phone className="w-6 h-6 text-accent" />
              <div className="text-sm font-medium">Telepon</div>
              <div className="text-sm text-muted-foreground">+62 21 1234 5678</div>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 bg-background rounded-lg border border-border">
              <Mail className="w-6 h-6 text-accent" />
              <div className="text-sm font-medium">Email</div>
              <div className="text-sm text-muted-foreground">hello@techsolution.id</div>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 bg-background rounded-lg border border-border">
              <MapPin className="w-6 h-6 text-accent" />
              <div className="text-sm font-medium">Lokasi</div>
              <div className="text-sm text-muted-foreground">Jakarta Selatan</div>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 bg-background rounded-lg border border-border">
              <Clock className="w-6 h-6 text-accent" />
              <div className="text-sm font-medium">Jam Kerja</div>
              <div className="text-sm text-muted-foreground">24/7 Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
