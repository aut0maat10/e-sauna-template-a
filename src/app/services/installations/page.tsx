import React from 'react'
import { Lightbulb, Plug, Wrench, Zap, ShieldCheck } from 'lucide-react'
import { ServiceCard } from '@/components/service-card'
import Image from 'next/image'

const InstallationsAndUpgrades: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-6 flex flex-col justify-center items-center">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">Installations & Upgrades</h1>
        <p className="mx-auto max-w-5xl text-lg text-muted-foreground">
          Whether you need new lighting, electrical panel upgrades, or other
          installations, our team provides seamless and efficient solutions
          tailored to your needs. We ensure safety and quality in every project.
        </p>
      </div>
      <div className="relative w-full max-w-4xl h-96 mb-12">
        <Image
          src="/wires.jpeg"
          alt="Electrical installations and upgrades"
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <ServiceCard
          icon={Lightbulb}
          title="Lighting Installations"
          description="Modern and energy-efficient lighting solutions"
          features={[
            'LED lighting upgrades',
            'Custom lighting designs',
            'Outdoor and security lighting',
            'Smart lighting systems',
          ]}
        />

        <ServiceCard
          icon={Plug}
          title="Electrical Panel Upgrades"
          description="Upgrading panels for improved safety and capacity"
          features={[
            'Breaker panel replacements',
            'Increased power capacity',
            'Code-compliant installations',
            'Surge protection systems',
          ]}
        />

        <ServiceCard
          icon={Wrench}
          title="Appliance Installations"
          description="Safe and professional appliance installations"
          features={[
            'Kitchen and laundry appliances',
            'HVAC system wiring',
            'Hot tub and pool equipment',
            'Smart home devices',
          ]}
        />

        <ServiceCard
          icon={Zap}
          title="EV Charger Installations"
          description="Convenient and reliable electric vehicle charging solutions"
          features={[
            'Home EV chargers',
            'Commercial charging stations',
            'Fast-charging systems',
            'Load management solutions',
          ]}
        />

        <ServiceCard
          icon={ShieldCheck}
          title="Safety Upgrades"
          description="Enhancing electrical safety for your home or business"
          features={[
            'GFCI and AFCI installations',
            'Surge protection systems',
            'Smoke and carbon monoxide detectors',
            'Grounding and bonding improvements',
          ]}
        />
      </div>
    </div>
  )
}

export default InstallationsAndUpgrades
