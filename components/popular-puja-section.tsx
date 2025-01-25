import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface PujaCard {
  title: string
  image: string
  priceRange: {
    min: number
    max: number
  }
  hasViewDetails?: boolean
}

const pujaCards: PujaCard[] = [
  {
    title: "Annaprashan Puja",
    image:
      "/anparash.jpg",
    priceRange: {
      min: 3100,
      max: 10100,
    },
    hasViewDetails: true,
  },
  {
    title: "Maha Mrityunjaya Jaap",
    image:
      "/maha-mrityunjay jaap.avif",
    priceRange: {
      min: 21000,
      max: 28000,
    },
    hasViewDetails: true,
  },
  {
    title: "Ark Vivah For Male",
    image:
      "/ark-vivah.webp",
    priceRange: {
      min: 5100,
      max: 12100,
    },
    hasViewDetails: true,
  },
  {
    title: "Kumbh or Vishnu Vivah For Female",
    image:
      "/kumbh-vivah-for-female.png",
    priceRange: {
      min: 5100,
      max: 12100,
    },
    hasViewDetails: true,
  },
]



export function PopularPujaSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Popular Puja</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pujaCards.map((card, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src={card.image}
                    alt="Diyabati"
                    width={0}
                    height={0}
                    className=" w-full h-[33vh]"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{card.title}</h3>
                  <p className="text-gray-600">
                    ₹{card.priceRange.min.toLocaleString()} – ₹{card.priceRange.max.toLocaleString()}
                  </p>
                  {card.hasViewDetails && (
                    <Button className="mt-4 w-full bg-[#B84C25] hover:bg-[#a3431f] text-white">View details</Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

