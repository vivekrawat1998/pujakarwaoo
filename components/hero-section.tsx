import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

export function HeroSection() {
  return (
    <div className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center pt-20">
      {/* Background Image with Fire/Havan */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("/placeholder.svg?height=1080&width=1920")',
          backgroundColor: "#B84C25",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 text-[#FFD700]">
          Divinity, Right at Your Doorstep
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl mb-8 sm:mb-12 font-medium text-white">वैदिक संस्कृति वैदिक संस्कार</h2>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row max-w-3xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="flex items-center px-4 py-3 sm:py-0 border-b sm:border-b-0 sm:border-r border-gray-200">
            <MapPin className="h-5 w-5 text-gray-500 shrink-0" />
            <span className="ml-2 text-gray-700 whitespace-nowrap">Search Location</span>
          </div>
          <Input
            type="text"
            placeholder="Search for Puja, Havan, Jaap, Path"
            className="flex-1 border-0 focus-visible:ring-0 text-base"
          />
          <Button className="rounded-none px-8 py-6 bg-[#FFB800] hover:bg-[#e6a600] text-black font-medium text-lg w-full sm:w-auto">
            Search
          </Button>
        </div>
      </div>
    </div>
  )
}

