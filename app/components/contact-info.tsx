import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Globe } from "lucide-react"
import Link from "next/link"

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Telepon & WhatsApp",
      details: ["+62 21 1234 5678", "+62 812 3456 7890"],
      description: "Hubungi langsung untuk konsultasi cepat",
      action: "tel:+622112345678",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["hello@techsolution.id", "info@techsolution.id"],
      description: "Kirim detail proyek via email",
      action: "mailto:hello@techsolution.id",
    },
    {
      icon: MapPin,
      title: "Alamat Kantor",
      details: ["Jl. Sudirman No. 123", "Jakarta Selatan 12190"],
      description: "Kunjungi kantor untuk meeting langsung",
      action: "#",
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      details: ["Senin - Jumat: 09:00 - 18:00", "Sabtu: 09:00 - 15:00"],
      description: "Support 24/7 untuk klien premium",
      action: "#",
    },
  ]

  const socialMedia = [
    { name: "LinkedIn", url: "#", icon: "linkedin" },
    { name: "Instagram", url: "#", icon: "instagram" },
    { name: "Facebook", url: "#", icon: "facebook" },
    { name: "Twitter", url: "#", icon: "twitter" },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold">Informasi Kontak</h2>
            <p className="text-muted-foreground">Berbagai cara untuk menghubungi tim TechSolution Indonesia</p>
          </div>

          {/* Contact Methods */}
          <div className="space-y-4">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <h3 className="font-semibold">{method.title}</h3>
                        <div className="space-y-1">
                          {method.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="text-sm font-medium">
                              {method.action.startsWith("tel:") || method.action.startsWith("mailto:") ? (
                                <Link href={method.action} className="text-accent hover:underline">
                                  {detail}
                                </Link>
                              ) : (
                                detail
                              )}
                            </div>
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* FAQ Section */}
          <Card>
            <CardContent className="pt-6 space-y-4">
              <h3 className="font-semibold text-lg">Pertanyaan Umum</h3>
              <div className="space-y-4">
                <div>
                  <div className="font-medium text-sm mb-1">Berapa lama waktu respon konsultasi?</div>
                  <div className="text-sm text-muted-foreground">
                    Kami merespon dalam 2-4 jam kerja untuk konsultasi awal.
                  </div>
                </div>
                <div>
                  <div className="font-medium text-sm mb-1">Apakah konsultasi benar-benar gratis?</div>
                  <div className="text-sm text-muted-foreground">
                    Ya, konsultasi awal dan estimasi proyek sepenuhnya gratis tanpa komitmen.
                  </div>
                </div>
                <div>
                  <div className="font-medium text-sm mb-1">Bisakah meeting secara online?</div>
                  <div className="text-sm text-muted-foreground">
                    Tentu! Kami menyediakan konsultasi via Zoom, Google Meet, atau platform lainnya.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Media */}
          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <h3 className="font-semibold">Ikuti Kami</h3>
                <div className="flex justify-center space-x-4">
                  {socialMedia.map((social, index) => (
                    <Link
                      key={index}
                      href={social.url}
                      className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent/20 transition-colors"
                    >
                      <Globe className="w-5 h-5 text-accent" />
                    </Link>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Dapatkan update terbaru tentang teknologi dan tips bisnis digital
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
