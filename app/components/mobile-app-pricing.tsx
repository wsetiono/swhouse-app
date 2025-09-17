import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star, Zap, Smartphone } from "lucide-react"

export default function MobileAppPricing() {
  const pricingPlans = [
    {
      name: "Basic App",
      price: "25.000.000",
      description: "Perfect untuk startup dan bisnis kecil yang ingin memulai dengan aplikasi sederhana",
      popular: false,
      features: [
        "Single Platform (Android atau iOS)",
        "5-7 Screen/Halaman",
        "Basic UI/UX Design",
        "User Authentication",
        "Basic API Integration",
        "Push Notifications",
        "App Store Submission",
        "Basic Analytics",
        "3 Bulan Support",
        "Source Code",
        "Documentation",
      ],
    },
    {
      name: "Professional App",
      price: "45.000.000",
      description: "Ideal untuk bisnis menengah dengan kebutuhan fitur yang lebih kompleks",
      popular: true,
      features: [
        "Dual Platform (Android + iOS)",
        "10-15 Screen/Halaman",
        "Premium UI/UX Design",
        "Advanced User Management",
        "Multiple API Integrations",
        "Push Notifications",
        "Payment Gateway Integration",
        "Offline Capability",
        "Advanced Analytics",
        "App Store Optimization",
        "6 Bulan Support",
        "Source Code",
        "Complete Documentation",
        "Training Session",
      ],
    },
    {
      name: "Enterprise App",
      price: "75.000.000",
      description: "Solusi lengkap untuk perusahaan besar dengan kebutuhan aplikasi yang kompleks",
      popular: false,
      features: [
        "Dual Platform (Android + iOS)",
        "Unlimited Screens",
        "Custom UI/UX Design",
        "Advanced User Roles",
        "Complex API Integrations",
        "Real-time Features",
        "Advanced Security",
        "Payment Gateway",
        "Admin Dashboard",
        "Advanced Analytics",
        "App Store Optimization",
        "12 Bulan Support",
        "Source Code",
        "Complete Documentation",
        "Training & Consultation",
        "Dedicated Project Manager",
        "Performance Optimization",
      ],
    },
  ]

  const additionalServices = [
    {
      name: "App Store Optimization (ASO)",
      price: "5.000.000",
      description: "Optimasi untuk meningkatkan visibility dan download di App Store",
    },
    {
      name: "App Maintenance (per bulan)",
      price: "2.500.000",
      description: "Maintenance rutin, bug fixes, dan minor updates",
    },
    {
      name: "Feature Addition",
      price: "Mulai 8.000.000",
      description: "Penambahan fitur baru setelah aplikasi live",
    },
    {
      name: "Cross-Platform Migration",
      price: "15.000.000",
      description: "Migrasi dari single platform ke cross-platform",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            Paket <span className="text-accent">Harga</span> Aplikasi Mobile
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Pilih paket yang sesuai dengan kebutuhan dan budget bisnis Anda. Semua paket sudah termasuk App Store
            submission dan support.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative hover:shadow-xl transition-all duration-300 ${
                plan.popular ? "border-accent shadow-lg scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <CardHeader className="text-center space-y-4 pt-8">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-accent">
                    Rp {plan.price}
                    <span className="text-base font-normal text-muted-foreground">/project</span>
                  </div>
                </div>
                <CardDescription className="text-center">{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  asChild
                  className={`w-full ${
                    plan.popular ? "bg-accent hover:bg-accent/90" : "bg-primary hover:bg-primary/90"
                  }`}
                  size="lg"
                >
                  <Link href="/kontak" className="flex items-center justify-center space-x-2">
                    <Smartphone className="w-4 h-4" />
                    <span>Pilih Paket Ini</span>
                    {plan.popular && <Zap className="w-4 h-4" />}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h3 className="text-2xl lg:text-3xl font-bold">Layanan Tambahan</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Tingkatkan aplikasi Anda dengan layanan tambahan yang kami sediakan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6 space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">{service.name}</h4>
                    <div className="text-lg font-bold text-accent">{service.price}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-muted/50 rounded-2xl p-8 lg:p-12">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold">Semua Paket Termasuk Garansi & Support</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-2">100%</div>
                <div className="text-muted-foreground">App Store Approval</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-2">1 Tahun</div>
                <div className="text-muted-foreground">Bug Fix Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-2">24/7</div>
                <div className="text-muted-foreground">Technical Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-2">4.8+</div>
                <div className="text-muted-foreground">Average App Rating</div>
              </div>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Kami berkomitmen untuk memastikan aplikasi Anda sukses di App Store dan Google Play Store. Dengan track
              record 100% approval rate dan support berkelanjutan.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
