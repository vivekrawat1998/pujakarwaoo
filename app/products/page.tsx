"use client"

import { useRouter } from "next/navigation"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const products = [
  {
    name: "Puja Thali Set",
    price: 1999,
    image: "/placeholder.svg?height=300&width=300",
    description: "Complete set for all your puja needs, including brass thali, bell, and diya.",
  },
  {
    name: "Sandalwood Incense Sticks",
    price: 299,
    image: "/placeholder.svg?height=300&width=300",
    description: "Premium quality sandalwood incense sticks for a calming aroma during prayers.",
  },
  {
    name: "Rudraksha Mala",
    price: 799,
    image: "/placeholder.svg?height=300&width=300",
    description: "108 bead Rudraksha mala for meditation and spiritual practices.",
  },
  {
    name: "Brass Diya",
    price: 499,
    image: "/placeholder.svg?height=300&width=300",
    description: "Intricately designed brass diya for auspicious lighting during pujas.",
  },
]

export default function ProductsPage() {
  const router = useRouter()

  const handleAddToCart = () => {
    router.push("/login")
  }

  return (
    <main className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-grow container mx-auto px-4 py-8 mt-20">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Puja Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                <p className="text-sm mb-2">{product.description}</p>
                <p className="text-lg font-bold mb-4">₹{product.price}</p>
                <Button className="w-full bg-[#B84C25] hover:bg-[#a3431f]" onClick={handleAddToCart}>
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}

