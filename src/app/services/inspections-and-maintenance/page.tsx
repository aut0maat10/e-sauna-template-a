import React from 'react'
import {
  Search,
  ShieldCheck,
  Wrench,
  AlertTriangle,
  ClipboardCheck,
  Image,
} from 'lucide-react'
import { ServiceCard } from '@/components/service-card'

const InspectionsAndMaintenance: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-6 flex flex-col justify-center items-center">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">Inspections & Maintenance</h1>
        <p className="mx-auto max-w-5xl text-lg text-muted-foreground">
          Ensure your electrical systems are safe, efficient, and up to code
          with our thorough inspections and maintenance services. We help
          prevent issues before they arise, saving you time and money.
        </p>
      </div>
      <div className="relative w-full max-w-4xl h-96 mb-12">
        <img
          src="/wires.jpeg"
          alt="Inspections and maintenance services"
          className="rounded-lg shadow-lg object-cover w-full h-full"
        />
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <ServiceCard
          icon={Search}
          title="Electrical Inspections"
          description="Comprehensive inspections to ensure safety and compliance"
          features={[
            'Code compliance checks',
            'Detailed system assessments',
            'Safety hazard identification',
            'Inspection reports',
          ]}
        />

        <ServiceCard
          icon={ShieldCheck}
          title="Preventative Maintenance"
          description="Regular maintenance to prevent costly repairs"
          features={[
            'Scheduled system checks',
            'Component testing',
            'Wiring and panel maintenance',
            'Proactive issue resolution',
          ]}
        />

        <ServiceCard
          icon={Wrench}
          title="System Upgrades"
          description="Upgrading outdated systems for improved performance"
          features={[
            'Panel upgrades',
            'Wiring replacements',
            'Energy-efficient solutions',
            'Smart system integrations',
          ]}
        />

        <ServiceCard
          icon={AlertTriangle}
          title="Emergency Inspections"
          description="Rapid inspections during urgent situations"
          features={[
            'Immediate response',
            'On-site troubleshooting',
            'Safety-first approach',
            'Detailed recommendations',
          ]}
        />

        <ServiceCard
          icon={ClipboardCheck}
          title="Compliance Certifications"
          description="Certifications for residential and commercial properties"
          features={[
            'Electrical safety certifications',
            'Insurance compliance checks',
            'Detailed documentation',
            'Expert consultations',
          ]}
        />
      </div>
    </div>
  )
}

export default InspectionsAndMaintenance
