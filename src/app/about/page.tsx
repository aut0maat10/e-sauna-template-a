import Image from 'next/image'

export default function About() {
  return (
    <div className="flex flex-col items-center px-4 py-8 bg-background">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl font-bold text-highlight-secondary mb-4">
          About Us
        </h1>
        <p className="text-lg mb-6">
          At Magnolia Electrical, we are dedicated to providing top-notch
          electrical services with a focus on safety, reliability, and customer
          satisfaction. With years of experience and a team of certified
          electricians, we bring power and innovation to your home or business.
        </p>
      </div>
      <div className="relative w-full max-w-4xl h-96 mb-6">
        <Image
          src="/electricians.jpeg"
          alt="Vintage light bulbs"
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="max-w-4xl text-center">
        <h2 className="text-3xl font-semibold text-highlight-secondary mb-4">
          Why Choose Us?
        </h2>
        <p className="text-lg mb-4">
          We pride ourselves on delivering exceptional service, whether it's a
          small repair or a large-scale installation. Our team is committed to
          staying up-to-date with the latest technologies and industry standards
          to ensure the best results for our clients.
        </p>
        <h3 className="text-2xl mb-4 text-highlight-secondary">
          Trust Magnolia Electrical to light up your world with expertise and
          care. Your satisfaction is our priority.
        </h3>
      </div>
    </div>
  )
}
