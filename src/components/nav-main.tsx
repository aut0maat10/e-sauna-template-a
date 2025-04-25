'use client'

import * as React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import content from '@/lib/content.json'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { ModeToggle } from './mode-toggle'

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Electrical Repairs',
    href: '/services/electrical-repairs',
    description:
      'From faulty wiring to circuit breaker issues, our experienced electricians can handle any electrical repair, ensuring your peace of mind.',
  },
  {
    title: 'Installations',
    href: '/services/installations',
    description:
      'Need new lighting, ceiling fans, or electrical panel upgrades? We provide seamless installations for homes and businesses of all sizes.',
  },
  {
    title: 'Emergency Services',
    href: '/services/emergency-services',
    description:
      'Experiencing an electrical emergency? Our team is available 24/7 to handle urgent issues and get you back up and running quickly.',
  },
  {
    title: 'Commercial Services',
    href: '/services/commercial-services',
    description:
      'We provide tailored electrical solutions for businesses, including office wiring, lighting design, and energy-efficient upgrades.',
  },
  {
    title: 'Residential Services',
    href: '/services/residential-services',
    description:
      'We offer comprehensive electrical services for homes, including wiring, lighting installations, and energy-efficient solutions to enhance your living space.',
  },
  {
    title: 'Inspections and Maintenance',
    href: '/services/inspections-and-maintenance',
    description:
      'Ensure your electrical systems are up to code with our thorough inspection and maintenance services to prevent issues before they start.',
  },
]

export function NavMain() {
  return (
    <div className="container w-full flex flex-wrap justify-between py-8 px-4 max-w-6xl m-auto">
      <div>
        <Link href="/" className="text-4xl">
          ⚡
        </Link>
      </div>
      <div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/about"
                className={navigationMenuTriggerStyle()}
              >
                About Us
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Service Area</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="p-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119039.8479035373!2d-73.935242!3d40.6976701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250b5d1b1b1b1%3A0x8c8e8e8e8e8e8e8e!2sNew%20York%20City%20Metropolitan%20Area!5e0!3m2!1sen!2sus!4v1611810193437!5m2!1sen!2sus"
                    width="400"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-md shadow-md"
                  ></iframe>
                  <p className="mt-2 text-sm text-muted-foreground">
                    We service customers in the Tri-State area. Please contact
                    us for details.
                  </p>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] z-50">
                  {components.map(component => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/contact"
                className={navigationMenuTriggerStyle()}
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex gap-8">
        <ModeToggle />
        <Button>{content.nav.ctatext}</Button>
      </div>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
