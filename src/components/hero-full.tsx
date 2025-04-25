import { Button } from './ui/button'
import Link from 'next/link'
import { EnvelopeOpenIcon, MobileIcon } from '@radix-ui/react-icons'

export function HeroFull() {
  return (
    <div className="h-[70vh] w-full relative">
      {/* Background Image */}
      <img
        src="/hero.jpeg"
        alt="Luxury house interior"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-35 -z-10"></div>
      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-7xl font-semibold text-highlight max-w-2xl">
          Your Reliable Brooklyn Electricians
        </h2>
        <div className="flex gap-4 mt-8">
          <Button>
            <MobileIcon className="mr-2 h-4 w-4" />
            Call Us Now
          </Button>
          <Link href="/contact">
            <Button className="bg-secondary-foreground dark:bg-secondary">
              <EnvelopeOpenIcon className="mr-2 h-4 w-4" />
              Get a Free Quote
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
