import { ModeToggle } from '@/components/mode-toggle'
import { NavMain } from '@/components/nav-main'
import { HeroFull } from '@/components/hero-full'
import { ValueProposition } from '@/components/value-proposition'
// import { Button } from '@/components/ui/button'
// import content from '@/lib/content.json'

export default function Home() {
  return (
    <div className="w-full">
      <NavMain />
      <HeroFull />
      <ValueProposition />
      {/* <ModeToggle /> */}
    </div>
  )
}
