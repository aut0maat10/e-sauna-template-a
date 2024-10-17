import { ModeToggle } from '@/components/mode-toggle'
import { HeroFull } from '@/components/hero-full'
import { ValueProposition } from '@/components/value-proposition'
import { ServicesSection } from '@/components/services-section'
// import { Button } from '@/components/ui/button'
// import content from '@/lib/content.json'

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <HeroFull />
      <ValueProposition />
      <ServicesSection />
      {/* <ModeToggle /> */}
    </div>
  )
}
