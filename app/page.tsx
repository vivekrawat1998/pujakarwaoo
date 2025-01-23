import { NavBar } from "@/components/nav-bar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { PopularPujaSection } from "@/components/popular-puja-section"
import { UpcomingPoojaSection } from "@/components/upcoming-pooja-section"
import { ReviewsSection } from "@/components/reviews-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <HeroSection />
      <ServicesSection />
      <PopularPujaSection />
      <UpcomingPoojaSection />
      <ReviewsSection />
      <Footer />
    </main>
  )
}

