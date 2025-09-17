import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, ShoppingCart, Building, Briefcase, Users, Smartphone } from "lucide-react"

export default function WebDevelopmentServices() {
  const services = [
    {
      icon: Building,
      title: "Company Profile Website",
      description: "Website profesional untuk membangun kredibilitas dan kepercayaan pelanggan terhadap bisnis Anda",
      features: ["Desain profesional & modern", "Halaman About, Services, Contact", "Gallery & Portfolio", "SEO Ready"],
      price: "Mulai dari Rp 3.500.000",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Website",
      description: "Toko online lengkap dengan sistem pembayaran, manajemen produk, dan dashboard admin",
      features: ["Payment Gateway Integration", "Inventory Management", "Order Tracking", "Admin Dashboard"],
      price: "Mulai dari Rp 8.500.000",
    },
    {
      icon: Briefcase,
      title: "Business Web Application",
      description: "Aplikasi web custom untuk kebutuhan bisnis spesifik dengan fitur-fitur yang disesuaikan",
      features: ["Custom Features", "User Management", "Reporting System", "API Integration"],
      price: "Mulai dari Rp 15.000.000",
    },
    {
      icon: Users,
      title: "Portal & Community Website",
      description: "Platform komunitas atau portal berita dengan sistem membership dan content management",
      features: ["User Registration", "Content Management", "Comment System", "Social Features"],
      price: "Mulai dari Rp 12.000.000",
    },
    {
      icon: Globe,
      title: "Landing Page",
      description: "Halaman landing yang dioptimalkan untuk konversi maksimal dan campaign marketing",
      features: ["Conversion Optimized", "A/B Testing Ready", "Analytics Integration", "Fast Loading"],
      price: "Mulai dari Rp 2.000.000",
    },
    {
      icon: Smartphone,
      title: "Progressive Web App (PWA)",
      description: "Website dengan pengalaman seperti aplikasi mobile, bisa diinstall dan bekerja offline",
      features: ["App-like Experience", "Offline Capability", "Push Notifications", "Installable"],
      price: "Mulai dari Rp 10.000.000",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            Jenis <span className="text-accent">Website</span> yang Kami Buat
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Dari company profile sederhana hingga aplikasi web kompleks, kami siap mewujudkan kebutuhan digital bisnis
            Anda dengan solusi yang tepat sasaran.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border h-full">
                <CardHeader className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-sm leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-border">
                    <div className="text-lg font-bold text-accent">{service.price}</div>
                    <div className="text-xs text-muted-foreground mt-1">*Harga dapat disesuaikan dengan kebutuhan</div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-card border border-border rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Semua Paket Sudah Termasuk:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="space-y-2">
                <div className="font-semibold text-accent">Technical</div>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Responsive Design</li>
                  <li>• SEO Optimization</li>
                  <li>• SSL Certificate</li>
                  <li>• Google Analytics</li>
                </ul>
              </div>
              <div className="space-y-2">
                <div className="font-semibold text-accent">Support</div>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Free Hosting 1 Tahun</li>
                  <li>• Free Domain .com/.id</li>
                  <li>• Training Penggunaan</li>
                  <li>• Technical Support</li>
                </ul>
              </div>
              <div className="space-y-2">
                <div className="font-semibold text-accent">Guarantee</div>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Garansi 1 Tahun</li>
                  <li>• Free Minor Updates</li>
                  <li>• Money Back Guarantee</li>
                  <li>• 99.9% Uptime SLA</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
