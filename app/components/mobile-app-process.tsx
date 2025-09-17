import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Palette, Code, TestTube, Store, Headphones } from "lucide-react"

export default function MobileAppProcess() {
  const processes = [
    {
      icon: Lightbulb,
      title: "Ideation & Research",
      description: "Analisis mendalam tentang ide, target user, kompetitor, dan market research",
      duration: "3-5 hari",
      deliverables: ["Market Research Report", "User Persona", "Feature Specification", "Technical Architecture"],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Pembuatan wireframe, mockup, dan prototype dengan fokus pada user experience",
      duration: "7-10 hari",
      deliverables: ["Wireframes", "UI/UX Design", "Interactive Prototype", "Design System"],
    },
    {
      icon: Code,
      title: "Development",
      description: "Coding aplikasi dengan teknologi terkini dan best practices mobile development",
      duration: "21-35 hari",
      deliverables: ["Frontend Development", "Backend API", "Database Setup", "Third-party Integrations"],
    },
    {
      icon: TestTube,
      title: "Testing & QA",
      description: "Testing menyeluruh di berbagai device dan OS version untuk memastikan kualitas",
      duration: "5-7 hari",
      deliverables: ["Device Testing", "Performance Testing", "Security Testing", "User Acceptance Testing"],
    },
    {
      icon: Store,
      title: "App Store Deployment",
      description: "Submission ke App Store dan Google Play Store dengan optimasi untuk approval",
      duration: "3-7 hari",
      deliverables: ["App Store Submission", "Google Play Submission", "Store Optimization", "App Approval"],
    },
    {
      icon: Headphones,
      title: "Launch & Support",
      description: "Monitoring post-launch, bug fixes, dan support untuk memastikan aplikasi berjalan optimal",
      duration: "Ongoing",
      deliverables: ["App Monitoring", "Bug Fixes", "Performance Optimization", "Feature Updates"],
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            Proses <span className="text-accent">Development</span> Aplikasi Mobile
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Metodologi pengembangan aplikasi mobile yang proven dan terstruktur untuk memastikan hasil yang berkualitas
            dan sesuai ekspektasi.
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
            <h3 className="text-2xl font-bold">Total Timeline: 6-10 Minggu</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Timeline development dapat bervariasi tergantung kompleksitas aplikasi. Kami berkomitmen untuk
              transparansi penuh dan komunikasi berkala selama proses development.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-2">100%</div>
                <div className="text-sm text-muted-foreground">App Store Approval</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-2">4.8+</div>
                <div className="text-sm text-muted-foreground">Average App Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Post-Launch Support</div>
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
