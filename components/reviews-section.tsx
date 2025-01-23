"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play, Volume2, Maximize2 } from "lucide-react"

interface Review {
  id: number
  name: string
  location: string
  review: string
  avatar: string
  hasVideo?: boolean
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Achutam Nair",
    location: "Bangalore",
    review:
      "So many puja options for all the devotees. Great to get the grace of god from our homes. Most authentic and trustworthy puja service compared to others.",
    avatar: "/placeholder.svg?height=60&width=60",
    hasVideo: true,
  },
  {
    id: 2,
    name: "Ramesh Chandra Bhatt",
    location: "Nagpur",
    review:
      "I really like the whole process of puja at Sri Mandir. Puja is conducted properly and customer support is available throughout the process. I asked questions to Mamta Maam and she resolved my queries. Most genuine and authentic.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    name: "Aperna Mal",
    location: "Puri",
    review:
      "Liked the fact that we can book puja online else we have to travel to get everything done. Felt very nice to hear my name and gotra during the puja of Mahadev. Prasad was also received in time.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 4,
    name: "Shivraj Dobhi",
    location: "Agra",
    review:
      "The entire experience was very satisfying. The pandits are very knowledgeable and perform the puja with complete devotion.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export function ReviewsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reviews.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Reviews & Ratings</h2>
          <p className="text-lg text-gray-600">Read to what our beloved devotees have to say about Sri Mandir.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {reviews.map((review) => (
                  <div key={review.id} className="w-full flex-shrink-0 px-4">
                    <Card className="bg-white shadow-lg">
                      <CardContent className="p-6">
                        {review.hasVideo && (
                          <div className="relative mb-6 rounded-lg overflow-hidden bg-gray-900 aspect-video">
                            <Image
                              src="/placeholder.svg?height=400&width=600"
                              alt="Review Video Thumbnail"
                              width={600}
                              height={400}
                              className="object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between text-white text-sm">
                              <div className="flex items-center gap-4">
                                <Button size="icon" variant="ghost" className="h-8 w-8 text-white">
                                  <Play className="h-4 w-4" />
                                </Button>
                                <span>0:00 / 1:00</span>
                                <Button size="icon" variant="ghost" className="h-8 w-8 text-white">
                                  <Volume2 className="h-4 w-4" />
                                </Button>
                              </div>
                              <Button size="icon" variant="ghost" className="h-8 w-8 text-white">
                                <Maximize2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        )}
                        <p className="text-gray-700 italic mb-6">{review.review}</p>
                        <div className="flex items-center gap-3">
                          <Image
                            src={review.avatar || "/placeholder.svg"}
                            alt={review.name}
                            width={48}
                            height={48}
                            className="rounded-full"
                          />
                          <div>
                            <h3 className="font-semibold text-gray-900">{review.name}</h3>
                            <p className="text-sm text-gray-500">{review.location}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg hover:bg-gray-100"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg hover:bg-gray-100"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-colors ${
                  currentSlide === index ? "bg-[#B84C25]" : "bg-gray-300"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

