import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { Gallery } from '@/components/sections/Gallery'
import { DIYTeaser } from '@/components/sections/DIYTeaser'
import { Contact } from '@/components/sections/Contact'

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden bg-[#f5f5f5]">
        <Hero />
        <Services />
        <Gallery />
        <DIYTeaser />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
