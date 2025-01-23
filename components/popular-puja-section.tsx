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
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-19%20at%206.45.53%20AM-w9YGxtYWMU1Oyp323d5tJdLKGV9pbP.png",
    priceRange: {
      min: 3100,
      max: 10100,
    },
  },
  {
    title: "Maha Mrityunjaya Jaap",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-19%20at%206.45.53%20AM-w9YGxtYWMU1Oyp323d5tJdLKGV9pbP.png",
    priceRange: {
      min: 21000,
      max: 28000,
    },
  },
  {
    title: "Ark Vivah For Male",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-19%20at%206.45.53%20AM-w9YGxtYWMU1Oyp323d5tJdLKGV9pbP.png",
    priceRange: {
      min: 5100,
      max: 12100,
    },
    hasViewDetails: true,
  },
  {
    title: "Kumbh or Vishnu Vivah For Female",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-19%20at%206.45.53%20AM-w9YGxtYWMU1Oyp323d5tJdLKGV9pbP.png",
    priceRange: {
      min: 5100,
      max: 12100,
    },
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
                  <Image src="/placeholder.svg" alt={card.title} width={300} height={300} className="w-full h-auto" />
                  <Image
                    src="/placeholder.svg"
                    alt="Diyabati"
                    width={100}
                    height={30}
                    className="absolute top-4 left-4 h-8 w-auto"
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

