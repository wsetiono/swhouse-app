import type { Metadata } from "next"
import Navigation from "@/app/components/navigation"
import Footer from "@/app/components/footer"
import MobileAppHero from "@/app/components/mobile-app-hero"
import MobileAppServices from "@/app/components/mobile-app-services"
import MobileAppProcess from "@/app/components/mobile-app-process"
import MobileAppPortfolio from "@/app/components/mobile-app-portfolio"
import MobileAppPricing from "@/app/components/mobile-app-pricing"
import CTASection from "@/app/components/cta-section"

export const metadata: Metadata = {
  title: "Jasa Pembuatan Aplikasi Mobile Android & iOS | Mobile App Development Indonesia - TechSolution",
  description:
    "Jasa pembuatan aplikasi mobile Android dan iOS profesional terbaik di Indonesia. Native app development dengan performa optimal dan user experience terbaik.",
  keywords: [
    "jasa pembuatan aplikasi mobile",
    "mobile app development indonesia",
    "aplikasi android ios",
    "jasa aplikasi mobile",
    "pembuatan aplikasi jakarta",
    "mobile developer indonesia",
    "aplikasi mobile profesional",
    "native app development",
    "cross platform app",
    "jasa app mobile murah",
  ],
  openGraph: {
    title: "Jasa Pembuatan Aplikasi Mobile Android & iOS | Mobile App Development Indonesia",
    description:
      "Jasa pembuatan aplikasi mobile Android dan iOS profesional terbaik di Indonesia. Native development dengan performa optimal.",
    url: "https://techsolution-indonesia.vercel.app/layanan/mobile-app",
    images: [
      {
        url: "/mobile-app-development-og.jpg",
        width: 1200,
        height: 630,
        alt: "Jasa Pembuatan Aplikasi Mobile TechSolution Indonesia",
      },
    ],
  },
}

export default function MobileAppPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <MobileAppHero />
      <MobileAppServices />
      <MobileAppProcess />
      <MobileAppPortfolio />
      <MobileAppPricing />
      <CTASection />
      <Footer />
    </main>
  )
}
