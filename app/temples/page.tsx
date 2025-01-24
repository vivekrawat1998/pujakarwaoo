import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const temples = [
  {
    name: "Shri Balaji Temple",
    location: "Tirupati, Andhra Pradesh",
    image: "/balaji temple.jpg",
    description: "One of the most visited pilgrimage centers in the world, dedicated to Lord Venkateswara.",
  },
  {
    name: "Golden Temple",
    location: "Amritsar, Punjab",
    image: "/golden temple.webp",
    description: "The holiest Gurdwara and the central religious place of Sikhism.",
  },
  {
    name: "Kashi Vishwanath Temple",
    location: "Varanasi, Uttar Pradesh",
    image: "/Kashi_Vishwanath.jpg",
    description: "One of the most famous Hindu temples dedicated to Lord Shiva.",
  },
  {
    name: "Meenakshi Amman Temple",
    location: "Madurai, Tamil Nadu",
    image: "/meenakshimantemple.jpg",
    description: "A historic Hindu temple dedicated to Goddess Meenakshi and Lord Sundareswarar.",
  },
]

export default function TemplesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-grow container mx-auto px-4 py-8 mt-20">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Temples</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {temples.map((temple, index) => (
            <Card key={index} className="overflow-hidden">
              <Image
                src={temple.image || "/placeholder.svg"}
                alt={temple.name}
                width={300}
                height={300}
                className="w-full h-72 object-cover"
              />
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold mb-2">{temple.name}</h2>
                <p className="text-sm text-gray-500 mb-2">{temple.location}</p>
                <p className="text-sm mb-4">{temple.description}</p>
                <Button className="w-full bg-[#B84C25] hover:bg-[#a3431f]">Book Puja</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}

