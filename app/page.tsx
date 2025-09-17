import Navigation from "./components/navigation"
import Footer from "./components/footer"
import HeroSection from "./components/hero-section"
import ServicesSection from "./components/services-section"
import WhyChooseUsSection from "./components/why-choose-use-section"
import TestimonialsSection from "./components/testimonials-section"
import CTASection from "./components/cta-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
