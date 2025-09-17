import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star, Zap } from "lucide-react"

export default function WebDevelopmentPricing() {
  const pricingPlans = [
    {
      name: "Starter",
      price: "3.500.000",
      description: "Perfect untuk bisnis kecil dan startup yang baru memulai",
      popular: false,
      features: [
        "Company Profile Website",
        "5 Halaman (Home, About, Services, Portfolio, Contact)",
        "Responsive Design",
        "Basic SEO Optimization",
        "Contact Form",
        "Google Maps Integration",
        "Free Hosting 1 Tahun",
        "Free Domain .com/.id",
        "SSL Certificate",
        "Basic Analytics",
        "3x Revisi Design",
        "1 Bulan Support",
      ],
    },
    {
      name: "Professional",
      price: "8.500.000",
      description: "Ideal untuk bisnis menengah yang ingin meningkatkan online presence",
      popular: true,
      features: [
        "E-Commerce Website",
        "Unlimited Halaman",
        "Advanced Responsive Design",
        "Advanced SEO Optimization",
        "Product Management System",
        "Payment Gateway Integration",
        "Inventory Management",
        "Order Tracking System",
        "Admin Dashboard",
        "Free Hosting 1 Tahun",
        "Free Domain .com/.id",
        "SSL Certificate",
        "Advanced Analytics",
        "Unlimited Revisi Design",
        "3 Bulan Support",
        "Training Penggunaan",
      ],
    },
    {
      name: "Enterprise",
      price: "15.000.000",
      description: "Solusi lengkap untuk perusahaan besar dengan kebutuhan kompleks",
      popular: false,
      features: [
        "Custom Web Application",
        "Unlimited Halaman & Features",
        "Premium Responsive Design",
        "Enterprise SEO Optimization",
        "Custom Features Development",
        "API Integration",
        "User Management System",
        "Advanced Admin Dashboard",
        "Reporting & Analytics",
        "Database Optimization",
        "Free Hosting 1 Tahun",
        "Free Domain .com/.id",
        "SSL Certificate",
        "Advanced Security",
        "Unlimited Revisi",
        "6 Bulan Support",
        "Dedicated Project Manager",
        "Training & Documentation",
      ],
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            Paket <span className="text-accent">Harga</span> Website
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Pilih paket yang sesuai dengan kebutuhan dan budget bisnis Anda. Semua paket sudah termasuk hosting, domain,
            dan support.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
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
                    <span>Pilih Paket Ini</span>
                    {plan.popular && <Zap className="w-4 h-4" />}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-muted/50 rounded-2xl p-8 lg:p-12">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold">Semua Paket Termasuk Garansi & Support</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-2">1 Tahun</div>
                <div className="text-muted-foreground">Garansi Penuh</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-2">99.9%</div>
                <div className="text-muted-foreground">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-2">24/7</div>
                <div className="text-muted-foreground">Technical Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-2">100%</div>
                <div className="text-muted-foreground">Money Back</div>
              </div>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Tidak puas dengan hasil? Kami berikan garansi uang kembali 100% dalam 30 hari pertama. Kepuasan Anda
              adalah prioritas utama kami.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
