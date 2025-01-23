import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { BadgeCheck } from "lucide-react"

interface PanditCard {
  name: string
  location: string
  experience: number
  image: string
}

const pandits: PanditCard[] = [
  {
    name: "Daleep Kumar Sharma",
    location: "Salasar",
    experience: 15,
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Acharya Ramjas Dwivedi",
    location: "Prayagraj",
    experience: 15,
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Pandit Ravi Sharma",
    location: "Mehandipur Balaji",
    experience: 6,
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Pandit Ashish Bhatt",
    location: "Haridwar",
    experience: 5,
    image: "/placeholder.svg?height=400&width=400",
  },
]

export function UpcomingPoojaSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upcoming Pooja on our temples</h2>
          <div className="flex justify-center">
            <Image
              src="/placeholder.svg?height=20&width=100"
              alt="Decorative Line"
              width={100}
              height={20}
              className="h-5 object-contain"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pandits.map((pandit, index) => (
            <Card key={index} className="overflow-hidden group">
              <CardContent className="p-0 relative">
                <div className="relative aspect-square">
                  <Image
                    src={pandit.image || "/placeholder.svg"}
                    alt={pandit.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-semibold">{pandit.name}</h3>
                    <BadgeCheck className="h-5 w-5 text-blue-400" />
                  </div>
                  <p className="text-sm opacity-90">
                    {pandit.location} • Exp : {pandit.experience} years
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

