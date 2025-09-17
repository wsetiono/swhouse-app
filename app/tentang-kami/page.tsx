import type { Metadata } from "next"
import Navigation from "@/app/components/navigation"
import Footer from "@/app/components/footer"
import AboutHero from "@/app/components/about-hero"
import AboutStory from "@/app/components/about-story"
import AboutTeam from "@/app/components/about-team"
import AboutValues from "@/app/components/about-values"
import AboutStats from "@/app/components/about-stats"
import CTASection from "@/app/components/cta-section"

export const metadata: Metadata = {
  title: "Tentang Kami - TechSolution Indonesia | Software House Terpercaya Jakarta",
  description:
    "Kenali lebih dekat TechSolution Indonesia, software house terpercaya dengan pengalaman 8+ tahun melayani bisnis Indonesia. Tim ahli, teknologi terdepan, hasil berkualitas.",
  keywords: [
    "tentang techsolution indonesia",
    "software house jakarta",
    "perusahaan software indonesia",
    "tim developer indonesia",
    "sejarah techsolution",
    "visi misi software house",
    "pengalaman software development",
    "tim ahli teknologi",
    "perusahaan it terpercaya",
    "software house profesional",
  ],
  openGraph: {
    title: "Tentang Kami - TechSolution Indonesia | Software House Terpercaya",
    description:
      "Kenali lebih dekat TechSolution Indonesia, software house terpercaya dengan pengalaman 8+ tahun melayani bisnis Indonesia.",
    url: "https://techsolution-indonesia.vercel.app/tentang-kami",
    images: [
      {
        url: "/about-us-techsolution-og.jpg",
        width: 1200,
        height: 630,
        alt: "Tentang Kami TechSolution Indonesia - Software House Terpercaya",
      },
    ],
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <AboutHero />
      <AboutStory />
      <AboutStats />
      <AboutValues />
      <AboutTeam />
      <CTASection />
      <Footer />
    </main>
  )
}
