import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/sections/hero'
import { SocialProof } from '@/components/sections/social-proof'
import { Problem } from '@/components/sections/problem'
import { Method } from '@/components/sections/method'
import { Process } from '@/components/sections/process'
import { Cases } from '@/components/sections/cases'
import { Testimonials } from '@/components/sections/testimonials'
import { About } from '@/components/sections/about'
import { Pricing } from '@/components/sections/pricing'
import { Faq } from '@/components/sections/faq'
import { FinalCta } from '@/components/sections/final-cta'
import { Footer } from '@/components/sections/footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Problem />
        <Method />
        <Process />
        <Cases />
        <Testimonials />
        <About />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
