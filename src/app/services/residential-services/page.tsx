import React from 'react'
import { Home, Lightbulb, Plug, ShieldCheck, Wrench } from 'lucide-react'
import { ServiceCard } from '@/components/service-card'
import Image from 'next/image'

const ResidentialServices: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-6 flex flex-col justify-center items-center">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">
          Residential Electrical Services
        </h1>
        <p className="mx-auto max-w-5xl text-lg text-muted-foreground">
          We provide comprehensive electrical solutions for your home, ensuring
          safety, efficiency, and comfort. From wiring to lighting, our team is
          here to power your home with care and expertise.
        </p>
      </div>
      <div className="relative w-full max-w-4xl h-96 mb-12">
        <Image
          src="/wires.jpeg"
          alt="Residential electrical services"
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <ServiceCard
          icon={Home}
          title="Home Wiring"
          description="Safe and efficient wiring solutions for your home"
          features={[
            'New construction wiring',
            'Rewiring for older homes',
            'Code-compliant installations',
            'Troubleshooting and repairs',
          ]}
        />

        <ServiceCard
          icon={Lightbulb}
          title="Lighting Solutions"
          description="Custom lighting installations to brighten your home"
          features={[
            'Indoor and outdoor lighting',
            'Energy-efficient LED upgrades',
            'Smart lighting systems',
            'Accent and decorative lighting',
          ]}
        />

        <ServiceCard
          icon={Plug}
          title="Outlet & Switch Installations"
          description="Convenient and safe outlet and switch installations"
          features={[
            'GFCI outlets',
            'USB charging outlets',
            'Dimmer switches',
            'Smart home integrations',
          ]}
        />

        <ServiceCard
          icon={ShieldCheck}
          title="Electrical Safety"
          description="Ensuring the safety of your home's electrical systems"
          features={[
            'Surge protection',
            'Smoke and carbon monoxide detectors',
            'Grounding and bonding',
            'Electrical inspections',
          ]}
        />

        <ServiceCard
          icon={Wrench}
          title="Appliance Installations"
          description="Professional installation of household appliances"
          features={[
            'Kitchen appliances',
            'HVAC systems',
            'Hot tubs and pools',
            'Home entertainment systems',
          ]}
        />
      </div>
    </div>
  )
}

export default ResidentialServices
