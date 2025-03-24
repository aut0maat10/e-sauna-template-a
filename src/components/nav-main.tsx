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
        <span className="text-4xl">⚡</span>
      </div>
      <div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Service Area</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="text-xl flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        {/* <Icons.logo className="h-6 w-6" /> */}
                        <div className="mb-2 mt-4 text-lg font-medium">
                          shadcn/ui
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Beautifully designed components built with Radix UI
                          and Tailwind CSS.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/docs" title="Introduction" className="">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </ListItem>
                  <ListItem href="/docs/installation" title="Installation">
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Typography"
                  >
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </ul>
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
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
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
