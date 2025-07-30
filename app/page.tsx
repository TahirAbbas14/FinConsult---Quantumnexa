import Navigation from "@/components/navigation"
import HeroSection from "@/components/sections/hero"
import AboutSection from "@/components/sections/about"
import ServicesSection from "@/components/sections/services"
import TestimonialsSection from "@/components/sections/testimonials"
import ProcessSection from "@/components/sections/process"
import ResourceSection from "@/components/sections/resource"
import ContactSection from "@/components/sections/contact"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <ProcessSection />
        <ResourceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
