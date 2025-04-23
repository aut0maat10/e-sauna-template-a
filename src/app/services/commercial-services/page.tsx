import { Building2, Factory, Server, ShieldCheck, Zap } from 'lucide-react'
import { ServiceCard } from '@/components/service-card'
import Image from 'next/image'

export default function CommercialServices() {
  return (
    <div className="container mx-auto px-4 py-6 flex flex-col justify-center items-center">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">
          Commercial Electrical Services
        </h1>
        <p className="mx-auto max-w-5xl text-lg text-muted-foreground">
          Comprehensive electrical solutions for businesses of all sizes. From
          office buildings to industrial facilities, we ensure your operations
          run smoothly with reliable electrical systems.
        </p>
      </div>
      <div className="relative w-full max-w-4xl h-96 mb-12">
        <Image
          src="/wires.jpeg"
          alt="Vintage light bulbs"
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <ServiceCard
          icon={Building2}
          title="Office Buildings"
          description="Complete electrical systems for modern office spaces"
          features={[
            'Energy-efficient lighting systems',
            'Power distribution solutions',
            'Network cabling infrastructure',
            'Emergency backup systems',
          ]}
        />

        <ServiceCard
          icon={Factory}
          title="Industrial Facilities"
          description="Heavy-duty electrical installations for manufacturing"
          features={[
            'Industrial power systems',
            'Machine installations',
            'Safety compliance systems',
            'Power factor correction',
          ]}
        />

        <ServiceCard
          icon={Server}
          title="Data Centers"
          description="Reliable power solutions for critical infrastructure"
          features={[
            'Uninterrupted power supply',
            'Cooling system integration',
            'Power monitoring systems',
            'Redundant power systems',
          ]}
        />
      </div>
    </div>
  )
}
