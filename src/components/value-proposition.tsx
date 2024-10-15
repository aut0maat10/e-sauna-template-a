import { ContactForm } from './contact-form'
import {
  Card,
  CardContent,
  // CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function ValueProposition() {
  return (
    <div className="container flex p-12">
      <div className="flex flex-col w-2/3 px-12">
        <div>
          <h2 className="text-5xl my-4 text-yellow-400">
            Trusted by Brooklyn for Over a Decade
          </h2>
          <h3 className="text-3xl mt-2 mb-8">
            Powering Homes, Offices, and Everything in Between
          </h3>
        </div>
        <p className="text-xl">
          With 10+ years of experience serving Brooklyn, we provide expert
          electrical services for both residential and commercial clients.
          <br />
          <br />
          Whether you need a simple repair, a complex installation, or emergency
          services, our certified electricians deliver reliable, safe, and
          efficient solutions.
          <br />
          <br />
          We are committed to ensuring your electrical systems run smoothly,
          offering honest advice, transparent pricing, and a commitment to
          quality that has made us a trusted name in the community.
        </p>
      </div>
      <div className="flex flex-col justify-center items-end w-1/3 h-full z-50">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-3xl text-yellow-400">
              Get a Free Quote Now!
            </CardTitle>
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
  )
}
