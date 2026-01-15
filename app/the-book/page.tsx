import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookDetailHero } from "@/components/book-detail-hero"
import { BookChapters } from "@/components/book-chapters"
import { BookTestimonials } from "@/components/book-testimonials"
import { BookCta } from "@/components/book-cta"

export default function TheBookPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <BookDetailHero />
        <BookChapters />
        <BookTestimonials />
        <BookCta />
      </main>
      <Footer />
    </div>
  )
}
