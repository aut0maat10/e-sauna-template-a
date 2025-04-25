'use client'

import * as React from 'react'
import Link from 'next/link'
import { ModeToggle } from './mode-toggle'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { HamburgerMenuIcon, Cross2Icon } from '@radix-ui/react-icons'

export function NavMobile() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <div className="flex justify-between items-center py-4 px-4">
      {/* Logo */}
      <Link href="/" className="text-4xl">
        ⚡
      </Link>

      {/* Hamburger Menu */}
      <DropdownMenu.Root open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <DropdownMenu.Trigger asChild>
          <button
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <Cross2Icon className="h-6 w-6" />
            ) : (
              <HamburgerMenuIcon className="h-6 w-6" />
            )}
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content
          className="absolute top-16 right-4 bg-white shadow-lg rounded-md w-64 z-50 p-2"
          sideOffset={5}
        >
          <DropdownMenu.Item asChild>
            <Link
              href="/about"
              className="block px-4 py-2 hover:bg-gray-100 rounded-md"
            >
              About Us
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item asChild>
            <Link
              href="/services"
              className="block px-4 py-2 hover:bg-gray-100 rounded-md"
            >
              Services
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item asChild>
            <Link
              href="/contact"
              className="block px-4 py-2 hover:bg-gray-100 rounded-md"
            >
              Contact
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item asChild>
            <div className="px-4 py-2">
              <ModeToggle />
            </div>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  )
}
