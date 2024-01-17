import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Card, CardContent } from "@/components/ui/card"

type Props = { children: React.ReactNode, opts?: object }

function AnyCarousel({ children, opts }: Props) {
  return (
    <Carousel className="relative overflow-hidden" opts={opts}>
      <CarouselContent className="flex">
        {React.Children.map(children, (child) => (
          <CarouselItem className="min-w-full flex justify-center items-center">
            <Card>
              <CardContent className='flex aspect-square items-center justify-center p-6'>
                {child}
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute top-1/2 transform -translate-y-1/2 left-4 cursor-pointer" />
      <CarouselNext className="absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer" />
    </Carousel>
  )
}

export default AnyCarousel