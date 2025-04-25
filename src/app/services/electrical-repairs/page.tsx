import React from 'react'
import { Zap, ShieldCheck, Wrench, Plug, AlertTriangle } from 'lucide-react'
import { ServiceCard } from '@/components/service-card'

const ElectricalRepairs: React.FC = () => {
  return (
    <div className="container md:mx-auto md:px-4 py-6 flex flex-col justify-center items-center">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">Electrical Repairs</h1>
        <p className="mx-auto max-w-5xl text-lg text-muted-foreground">
          From faulty wiring to circuit breaker issues, our experienced
          electricians are here to provide reliable and efficient repair
          services. We ensure your safety and restore functionality to your
          electrical systems.
        </p>
      </div>
      <div className="relative w-full max-w-4xl h-96 mb-12">
        <img
          src="/wires.jpeg"
          alt="Electrical repair services"
          className="rounded-lg shadow-lg object-cover w-full h-full"
        />
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <ServiceCard
          icon={Zap}
          title="Faulty Wiring"
          description="Repair and replacement of damaged or outdated wiring"
          features={[
            'Comprehensive diagnostics',
            'Safe and efficient repairs',
            'Code-compliant solutions',
            'Preventative maintenance',
          ]}
        />

        <ServiceCard
          icon={ShieldCheck}
          title="Circuit Breaker Issues"
          description="Troubleshooting and fixing circuit breaker problems"
          features={[
            'Breaker replacement',
            'Overload protection',
            'Short circuit repairs',
            'Panel upgrades',
          ]}
        />

        <ServiceCard
          icon={Wrench}
          title="Outlet & Switch Repairs"
          description="Fixing faulty outlets and switches for safety and convenience"
          features={[
            'Outlet replacement',
            'Switch troubleshooting',
            'GFCI installation',
            'Upgraded designs',
          ]}
        />

        <ServiceCard
          icon={Plug}
          title="Power Restoration"
          description="Restoring power quickly and efficiently"
          features={[
            'Emergency power restoration',
            'Temporary power solutions',
            'Load balancing',
            'Coordination with utility providers',
          ]}
        />

        <ServiceCard
          icon={AlertTriangle}
          title="Emergency Repairs"
          description="24/7 availability for urgent electrical issues"
          features={[
            'Immediate response',
            'On-site troubleshooting',
            'Safety-first approach',
            'Expert repairs',
          ]}
        />
      </div>
    </div>
  )
}

export default ElectricalRepairs
