import Image from 'next/image'
import { ContactForm } from './contact-form'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
export function Hero() {
  return (
    <div className="h-[70vh] w-full relative">
      <Image
        src="/hero.jpeg"
        alt={'Luxury house interior'}
        // style={{ objectFit: 'cover' }}
        className="object-cover -z-10"
        loading="lazy"
        fill={true}
      />
      <div className="absolute inset-0 bg-black opacity-35 z-0"></div>
      <div className="flex justify-center items-center gap-8 w-full h-full">
        <div className="flex flex-col justify-center items-center w-1/3 h-1/3">
          <h2 className="text-7xl font-semibold text-yellow-400 z-0">
            Your Reliable Brooklyn Electricians
          </h2>
          {/* <p className="self-start text-5xl font-bold text-secondary">
            Since 1998
          </p> */}
        </div>
        <div className="flex flex-col justify-center items-end w-1/3 h-full z-50">
          <Card className="w-3/4">
            <CardHeader>
              <CardTitle>Get in touch!</CardTitle>
              {/* <CardDescription>How can we help you?</CardDescription> */}
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
            <CardFooter>
              <p></p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
