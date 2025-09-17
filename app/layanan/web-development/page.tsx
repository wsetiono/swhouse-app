import type { Metadata } from "next"
import Navigation from "@/app/components/navigation"
import Footer from "@/app/components/footer"
import WebDevelopmentHero from "@/app/components/web-development-hero"
import WebDevelopmentServices from "@/app/components/web-development-services"
import WebDevelopmentProcess from "@/app/components/web-development-process"
import WebDevelopmentPortfolio from "@/app/components/web-development-portfolio"
import WebDevelopmentPricing from "@/app/components/web-development-pricing"
import CTASection from "@/app/components/cta-section"

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Profesional | Web Development Indonesia - TechSolution",
  description:
    "Jasa pembuatan website profesional, responsif, dan SEO-friendly terbaik di Indonesia. Mulai dari company profile, e-commerce, hingga web aplikasi kompleks dengan harga terjangkau.",
  keywords: [
    "jasa pembuatan website",
    "web development indonesia",
    "website profesional",
    "website responsif",
    "jasa website murah",
    "pembuatan website jakarta",
    "web developer indonesia",
    "website company profile",
    "website e-commerce",
    "jasa web design",
  ],
  openGraph: {
    title: "Jasa Pembuatan Website Profesional | Web Development Indonesia",
    description:
      "Jasa pembuatan website profesional, responsif, dan SEO-friendly terbaik di Indonesia. Harga terjangkau, kualitas premium.",
    url: "https://techsolution-indonesia.vercel.app/layanan/web-development",
    images: [
      {
        url: "/web-development-og.jpg",
        width: 1200,
        height: 630,
        alt: "Jasa Pembuatan Website Profesional TechSolution Indonesia",
      },
    ],
  },
}

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <WebDevelopmentHero />
      <WebDevelopmentServices />
      <WebDevelopmentProcess />
      <WebDevelopmentPortfolio />
      <WebDevelopmentPricing />
      <CTASection />
      <Footer />
    </main>
  )
}
