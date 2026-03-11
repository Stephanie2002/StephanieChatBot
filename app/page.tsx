import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { BooksSection } from "@/components/books-section"
import { AuthorsSection } from "@/components/authors-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <BooksSection />
        <AuthorsSection />
      </main>
      <Footer />
    </div>
  )
}
