import Link from 'next/link'
export function Footer() {
  return (
    <>
      <div className="flex justify-evenly h-64 items-center bg-secondary p-2">
        <div className="flex flex-col gap-2 max-w-64">
          <p className="text-2xl md:text-4xl">⚡</p>
          <p className="text-sm md:text-lg">
            We are a full-service electrical contractor in Brooklyn, NY. Our
            certified electricians deliver reliable, safe, and efficient
            solutions.
          </p>
          <h3 className="text-2xl md:text-3xl text-primary">(917) 123-4567</h3>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl md:text-2xl text-yellow-400">Quick Links</h3>
          <Link href="/services" className="text-sm md:text-lg">
            Services
          </Link>
          <Link href="/contact" className="text-sm md:text-lg">
            Contact
          </Link>
          <Link href="/blog" className="text-sm md:text-lg">
            Blog
          </Link>
          <Link href="/about" className="text-sm md:text-lg">
            About Us
          </Link>
        </div>
        <div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl md:text-2xl text-yellow-400">Services</h3>
            <Link href="/services" className="text-sm md:text-lg">
              Services
            </Link>
            <Link href="/contact" className="text-sm md:text-lg">
              Contact
            </Link>
            <Link href="/blog" className="text-sm md:text-lg">
              Blog
            </Link>
            <Link href="/about" className="text-sm md:text-lg">
              About Us
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-2 md:py-8 bg-secondary">
        <p className="text-sm md:text-lg">
          <span className="px-1">&#169;</span>
          2025 Magnolia Electrical
        </p>
      </div>
    </>
  )
}
