import type { Metadata } from "next"
import Navigation from "@/app/components/navigation"
import Footer from "@/app/components/footer"
import ContactHero from "@/app/components/contact-hero"
import ContactForm from "@/app/components/contact-form"
import ContactInfo from "@/app/components/contact-info"
import ContactMap from "@/app/components/contact-map"

export const metadata: Metadata = {
  title: "Kontak Kami - TechSolution Indonesia | Konsultasi Gratis Software Development",
  description:
    "Hubungi TechSolution Indonesia untuk konsultasi gratis pengembangan website, aplikasi mobile, dan sistem enterprise. Tim ahli siap membantu transformasi digital bisnis Anda.",
  keywords: [
    "kontak techsolution indonesia",
    "konsultasi software development",
    "hubungi software house jakarta",
    "konsultasi gratis website",
    "konsultasi aplikasi mobile",
    "kontak developer indonesia",
    "alamat techsolution jakarta",
    "nomor telepon software house",
    "email techsolution indonesia",
    "konsultasi it gratis",
  ],
  openGraph: {
    title: "Kontak Kami - TechSolution Indonesia | Konsultasi Gratis",
    description:
      "Hubungi TechSolution Indonesia untuk konsultasi gratis pengembangan software. Tim ahli siap membantu transformasi digital bisnis Anda.",
    url: "https://techsolution-indonesia.vercel.app/kontak",
    images: [
      {
        url: "/contact-us-techsolution-og.jpg",
        width: 1200,
        height: 630,
        alt: "Kontak TechSolution Indonesia - Konsultasi Gratis Software Development",
      },
    ],
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ContactHero />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <ContactForm />
        <ContactInfo />
      </div>
      <ContactMap />
      <Footer />
    </main>
  )
}
