import Link from 'next/link'
export function Footer() {
  return (
    <>
      <div className="flex justify-evenly h-64 items-center bg-secondary">
        <div className="flex flex-col gap-2 max-w-64">
          <p className="text-4xl">⚡</p>
          <p>
            We are a full-service electrical contractor in Brooklyn, NY. Our
            certified electricians deliver reliable, safe, and efficient
            solutions.
          </p>
          <h3 className="text-3xl text-primary">(917) 123-4567</h3>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl text-yellow-400">Quick Links</h3>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About Us</Link>
        </div>
        <div>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl text-yellow-400">Services</h3>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about">About Us</Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-8 bg-secondary">
        <p>2024 Magnolia Electrical</p>
      </div>
    </>
  )
}
