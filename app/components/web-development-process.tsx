import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, Palette, Code, TestTube, Rocket, Headphones } from "lucide-react"

export default function WebDevelopmentProcess() {
  const processes = [
    {
      icon: MessageSquare,
      title: "Konsultasi & Analisis",
      description: "Diskusi mendalam tentang kebutuhan, target audience, dan goals bisnis Anda",
      duration: "1-2 hari",
      deliverables: ["Requirements Document", "Project Timeline", "Cost Estimation"],
    },
    {
      icon: Palette,
      title: "Design & Wireframe",
      description: "Pembuatan mockup dan wireframe sesuai dengan brand identity dan user experience terbaik",
      duration: "3-5 hari",
      deliverables: ["UI/UX Design", "Wireframe", "Style Guide"],
    },
    {
      icon: Code,
      title: "Development",
      description: "Coding website dengan teknologi terkini dan best practices untuk performa optimal",
      duration: "7-14 hari",
      deliverables: ["Frontend Development", "Backend Development", "Database Setup"],
    },
    {
      icon: TestTube,
      title: "Testing & QA",
      description: "Testing menyeluruh di berbagai device dan browser untuk memastikan kualitas sempurna",
      duration: "2-3 hari",
      deliverables: ["Cross-browser Testing", "Mobile Responsiveness", "Performance Testing"],
    },
    {
      icon: Rocket,
      title: "Launch & Deployment",
      description: "Deploy website ke server production dengan konfigurasi optimal dan monitoring",
      duration: "1 hari",
      deliverables: ["Live Website", "SSL Certificate", "Analytics Setup"],
    },
    {
      icon: Headphones,
      title: "Support & Maintenance",
      description: "Dukungan teknis berkelanjutan dan maintenance untuk menjaga performa website",
      duration: "Ongoing",
      deliverables: ["24/7 Support", "Regular Updates", "Performance Monitoring"],
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            Proses <span className="text-accent">Development</span> Kami
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Metodologi pengembangan yang terstruktur dan transparan untuk memastikan hasil yang sesuai ekspektasi dan
            tepat waktu.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden lg:block" />

          <div className="space-y-8">
            {processes.map((process, index) => {
              const Icon = process.icon
              return (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-accent rounded-full border-4 border-background hidden lg:block" />

                  <Card className="lg:ml-16 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="pt-6">
                      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                        {/* Process Info */}
                        <div className="lg:col-span-2 space-y-4">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                              <Icon className="w-6 h-6 text-accent" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold">{process.title}</h3>
                              <div className="text-sm text-accent font-medium">{process.duration}</div>
                            </div>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">{process.description}</p>
                        </div>

                        {/* Deliverables */}
                        <div className="lg:col-span-2">
                          <div className="space-y-3">
                            <h4 className="font-semibold text-sm text-foreground">Deliverables:</h4>
                            <div className="space-y-2">
                              {process.deliverables.map((deliverable, deliverableIndex) => (
                                <div key={deliverableIndex} className="flex items-center space-x-2">
                                  <div className="w-2 h-2 bg-accent rounded-full" />
                                  <span className="text-sm text-muted-foreground">{deliverable}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>

        {/* Process Summary */}
        <div className="mt-16 bg-muted/50 rounded-2xl p-8 lg:p-12">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold">Total Timeline: 14-25 Hari Kerja</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Timeline dapat disesuaikan dengan kompleksitas project. Kami berkomitmen untuk transparansi penuh dalam
              setiap tahap development dan memberikan update progress secara berkala.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-2">100%</div>
                <div className="text-sm text-muted-foreground">On-Time Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Communication</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-2">∞</div>
                <div className="text-sm text-muted-foreground">Revisions Until Perfect</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
