import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from './ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import Image from 'next/image'

type CardProps = React.ComponentProps<typeof Card>

const servicesCards = [
  {
    title: 'Electrical Repairs',
    icon: '🛠️',
    description:
      'From faulty wiring to circuit breaker issues, our experienced electricians can handle any electrical repair, ensuring your peace of mind.',
    cta: 'Learn More',
    link: '/services/electrical-repairs',
  },
  {
    title: 'Installations & Upgrades',
    icon: '⚡',
    description:
      'Need new lighting, ceiling fans, or electrical panel upgrades? We provide seamless installations for homes and businesses of all sizes.',
    cta: 'Learn More',
    link: '/services/installations-and-upgrades',
  },
  {
    title: 'Emergency Services',
    icon: '🚨',
    description:
      'Experiencing an electrical emergency? Our team is available 24/7 to handle urgent issues and get you back up and running quickly.',
    cta: 'Get Help Now',
    link: '/services/emergency-services',
  },
  {
    title: 'Residential Services',
    icon: '🏠',
    description:
      'We offer comprehensive electrical solutions for your home, including wiring, lighting, and energy-efficient upgrades tailored to your needs.',
    cta: 'Learn More',
    link: '/services/residential-services',
  },
  {
    title: 'Commercial Services',
    icon: '🏢',
    description:
      'We provide tailored electrical solutions for businesses, including office wiring, lighting design, and energy-efficient upgrades.',
    cta: 'Learn More',
    link: '/services/commercial-services',
  },
  {
    title: 'Inspections & Maintenance',
    icon: '🔍',
    description:
      'Ensure your electrical systems are up to code with our thorough inspection and maintenance services to prevent issues before they start.',
    cta: 'Schedule an Inspection',
    link: '/services/inspections-and-maintenance',
  },
]

export function ServicesSection({ className, ...props }: CardProps) {
  return (
    <div className="container flex flex-col items-center">
      <div className="flex flex-col lg:flex-row items-start max-w-6xl p-8">
        <div className="lg:w-1/2 lg:pr-8">
          <h2 className="text-5xl my-8 text-yellow-400">
            Our Electrical Services
          </h2>
          <h3 className="text-3xl text-center lg:text-left">
            Whether you need a quick fix or a full electrical upgrade, we have
            you covered.
            <br />
            <br />
            Explore our core services and see how we can help power your home
            or&nbsp;business.
          </h3>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="/electrician-happy.jpeg"
            alt="Happy electrician at work"
            width={800}
            height={400}
            className="my-8 rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="container flex flex-wrap gap-8 h-full mx-12 px-12 items-center">
          {servicesCards.map(service => (
            <Card
              key={service.title}
              className={cn('w-[380px] basis-full max-w-72')}
              {...props}
            >
              <CardHeader>
                <CardTitle className="text-xl text-highlight-secondary">
                  <span className="mr-2">{service.icon}</span>
                  <br />
                  {service.title}
                </CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
              <CardContent>
                <p>{service.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href={service.link}>{service.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
