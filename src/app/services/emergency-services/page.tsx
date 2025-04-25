import React from 'react'
import { AlertTriangle, Clock, Phone } from 'lucide-react'
import { ServiceCard } from '@/components/service-card'

export default function EmergencyServices() {
  return (
    <div className="container mx-auto px-4 py-6 flex flex-col justify-center items-center">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">
          Emergency Electrical Services
        </h1>
        <p className="mx-auto max-w-5xl text-lg text-muted-foreground">
          When electrical emergencies strike, our team is here to provide fast,
          reliable, and professional assistance. Available 24/7 to ensure your
          safety and restore power quickly.
        </p>
      </div>
      <div className="relative w-full max-w-4xl h-96 mb-12">
        <img
          src="/wires.jpeg"
          alt="Emergency electrical services"
          className="rounded-lg shadow-lg object-cover w-full h-full"
        />
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <ServiceCard
          icon={AlertTriangle}
          title="Power Outages"
          description="Quick response to restore power during outages"
          features={[
            '24/7 availability',
            'Temporary power solutions',
            'Fault diagnosis and repair',
            'Coordination with utility providers',
          ]}
        />

        <ServiceCard
          icon={Clock}
          title="24/7 Emergency Repairs"
          description="Round-the-clock service for urgent electrical issues"
          features={[
            'Immediate response',
            'Expert troubleshooting',
            'On-site repairs',
            'Safety-first approach',
          ]}
        />

        <ServiceCard
          icon={Phone}
          title="Emergency Consultations"
          description="Guidance and support during electrical emergencies"
          features={[
            'Phone support for urgent issues',
            'Advice on safety precautions',
            'Scheduling emergency visits',
            'Coordination with emergency services',
          ]}
        />
      </div>
    </div>
  )
}
