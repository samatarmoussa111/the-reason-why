"use client";
import { HeroSection } from "@/components/hero-section";
import { BookFeaturesSection } from "@/components/book-features-section";
import { AboutAuthorSection } from "@/components/about-author-section";
import { WhyMatterSection } from "@/components/why-matter-section";
import { AchievementsSection } from "@/components/achievements-section";
import { FinalCtaSection } from "@/components/final-cta-section";
import { BooksPreviewSection } from "@/components/books-preview-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <BooksPreviewSection />
        <BookFeaturesSection />
        <AboutAuthorSection />
        <WhyMatterSection />
        <AchievementsSection />
        <FinalCtaSection />
      </main>
    </div>
  );
}
