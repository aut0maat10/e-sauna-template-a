import { HeroFull } from '@/components/hero-full'
import { ValueProposition } from '@/components/value-proposition'
import { ServicesSection } from '@/components/services-section'
import ReviewCarousel from '@/components/review-carousel'

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <HeroFull />
      <ValueProposition />
      <ServicesSection />
      <ReviewCarousel />
    </div>
  )
}
