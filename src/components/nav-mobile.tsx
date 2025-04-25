'use client'

import * as React from 'react'
import Link from 'next/link'
import { ModeToggle } from './mode-toggle'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'

const servicesSubMenu = [
  {
    title: 'Electrical Repairs',
    href: '/services/electrical-repairs',
  },
  {
    title: 'Installations & Upgrades',
    href: '/services/installations',
  },
  {
    title: 'Emergency Services',
    href: '/services/emergency-services',
  },
  {
    title: 'Residential Services',
    href: '/services/residential-services',
  },
  {
    title: 'Commercial Services',
    href: '/services/commercial-services',
  },
  {
    title: 'Inspections & Maintenance',
    href: '/services/inspections-and-maintenance',
  },
]

export function NavMobile() {
  return (
    <div className="flex justify-between items-center py-4 px-4">
      {/* Logo */}
      <Link href="/" className="text-4xl">
        ⚡
      </Link>

      {/* Hamburger Menu with Sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <button
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
            aria-label="Toggle Menu"
          >
            <HamburgerMenuIcon className="h-6 w-6" />
          </button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64">
          <SheetHeader>
            <SheetTitle className="text-2xl">Menu</SheetTitle>
          </SheetHeader>
          <nav className="mt-4 space-y-4">
            {/* About Link */}
            <Link href="/about" className="block text-lg hover:underline">
              About Us
            </Link>

            {/* Services with Sub-Menu */}
            <div>
              <p className="text-lg font-semibold">Services</p>
              <ul className="ml-4 mt-2 space-y-2">
                {servicesSubMenu.map(service => (
                  <li key={service.title}>
                    <Link href={service.href} className="block hover:underline">
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Link */}
            <Link href="/contact" className="block text-lg hover:underline">
              Contact
            </Link>

            {/* Call Us Button */}
            <Button className="w-full mt-4" asChild>
              <a href="tel:+123456789">Call Us</a>
            </Button>

            {/* Mode Toggle */}
            <div className="mt-4">
              <ModeToggle />
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}
