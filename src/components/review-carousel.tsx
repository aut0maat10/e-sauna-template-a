'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useState } from 'react'
import RatingReview from './rating-review'
import testimonials from '@/lib/testimonials'
export default function ReviewCarousel() {
  const [rating, setRating] = useState(5)
  return (
    <div className="flex items-center p-28 gap-4 w-full container">
      <div className="mr-12">
        <h3 className="text-5xl text-yellow-500">
          What our customers
          <br />
          say about us
        </h3>
      </div>
      <div className="flex w-full">
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-5xl"
        >
          <CarouselContent className="flex">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/3 flex">
                <Card className="flex flex-col h-full">
                  <CardHeader>
                    <CardTitle>
                      <div>
                        <RatingReview rating={rating} setRating={setRating} />
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p>{testimonial.feedback}</p>
                  </CardContent>
                  <CardFooter>
                    <p>- {testimonial.customer}</p>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  )
}
