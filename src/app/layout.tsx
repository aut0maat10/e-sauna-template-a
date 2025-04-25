'use client'
import { ThemeProvider } from '@/components/theme-provider'
import { Oswald, Noto_Serif } from 'next/font/google'
import './globals.css'
import { NavMain } from '@/components/nav-main'
import { NavMobile } from '@/components/nav-mobile'
import { Footer } from '@/components/footer'
import { useEffect, useState } from 'react'

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
})

const noto_serif = Noto_Serif({
  subsets: ['latin'],
  variable: '--font-noto-serif',
  display: 'swap',
})

import { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768) // Adjust breakpoint as needed
    }

    handleResize() // Check on initial render
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <html
        lang="en"
        suppressHydrationWarning
        className={`${oswald.variable} ${noto_serif.variable}`}
      >
        <head />
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {isMobile ? <NavMobile /> : <NavMain />}
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
