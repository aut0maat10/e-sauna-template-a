import Image from 'next/image'
import { Button } from './ui/button'
import { EnvelopeOpenIcon, MobileIcon } from '@radix-ui/react-icons'
// import { ContactForm } from './contact-form'
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from '@/components/ui/card'
export function HeroFull() {
  return (
    <div className="h-[70vh] w-full relative">
      <Image
        src="/hero.jpeg"
        alt={'Luxury house interior'}
        className="object-cover -z-10"
        loading="lazy"
        fill={true}
      />
      <div className="absolute inset-0 bg-black opacity-35 z-0"></div>
      <div className="flex justify-center items-center gap-8 w-full h-full">
        <div className="flex flex-col justify-center items-center text-center w-1/2 h-1/3">
          <h2 className="text-7xl font-semibold text-yellow-400 z-0">
            Your Reliable Brooklyn Electricians
          </h2>
          {/* <p className="self-start text-5xl font-bold text-secondary">
            Since 1998
          </p> */}
          <div className="flex gap-4 p-8 z-50">
            <Button variant={'destructive'}>
              <MobileIcon className="mr-2 h-4 w-4" />
              Call Us Now
            </Button>
            <Button variant={'outline'}>
              <EnvelopeOpenIcon className="mr-2 h-4 w-4" />
              Get a Free Quote
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
