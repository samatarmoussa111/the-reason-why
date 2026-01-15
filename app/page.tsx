import { HeroSection } from "@/components/hero-section"
import { BookOverviewSection } from "@/components/book-overview-section"
import { BookFeaturesSection } from "@/components/book-features-section"
import { AboutAuthorSection } from "@/components/about-author-section"
import { WhyMatterSection } from "@/components/why-matter-section"
import { AchievementsSection } from "@/components/achievements-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <BookOverviewSection />
        <BookFeaturesSection />
        <AboutAuthorSection />
        <WhyMatterSection />
        <AchievementsSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  )
}
