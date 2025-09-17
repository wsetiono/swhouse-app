import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Budi Santoso",
      position: "CEO, PT Maju Bersama",
      company: "E-Commerce Fashion",
      content:
        "TechSolution berhasil mengembangkan website e-commerce kami yang meningkatkan penjualan online hingga 300% dalam 6 bulan. Tim mereka sangat profesional dan responsif.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=60&h=60&fit=crop&crop=face",
    },
    {
      name: "Sari Dewi",
      position: "Founder, Healthy Food Co",
      company: "Food & Beverage",
      content:
        "Aplikasi mobile yang dibuat TechSolution membantu kami mengelola delivery order dengan lebih efisien. Customer satisfaction meningkat drastis!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=60&h=60&fit=crop&crop=face",
    },
    {
      name: "Ahmad Rahman",
      position: "Marketing Director, Edu Plus",
      company: "Education Technology",
      content:
        "Platform e-learning yang dikembangkan sangat user-friendly dan stabil. Siswa kami bisa belajar dengan nyaman dan engagement meningkat 250%.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=60&h=60&fit=crop&crop=face",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            Apa Kata <span className="text-accent">Klien</span> Kami?
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Kepuasan klien adalah prioritas utama kami. Berikut testimoni dari beberapa klien yang telah merasakan
            dampak positif dari solusi digital yang kami berikan.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6 space-y-6">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-accent/20">
                  <Quote className="w-8 h-8" />
                </div>

                {/* Rating */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4 pt-4 border-t border-border">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={`Foto ${testimonial.name}`}
                    width={60}
                    height={60}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                    <div className="text-xs text-accent">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-8">Dipercaya oleh perusahaan terkemuka di Indonesia</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {["PT Maju Bersama", "Healthy Food Co", "Edu Plus", "Digital Solutions Inc"].map((company, index) => (
              <div key={index} className="text-center">
                <div className="text-lg font-semibold text-muted-foreground">{company}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
