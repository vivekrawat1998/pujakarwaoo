import Image from "next/image"
import { Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#2C1810] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-19%20at%206.46.21%20AM-JuXIGAZkYJWyB8tka6JVmttIoqlyKc.png"
            alt="Puja Karwado Logo"
            width={150}
            height={60}
            className="mb-8"
          />

          <p className="text-gray-300 mb-12 leading-relaxed">
            BookMyParsad has brought religious services to the masses in India by connecting devotees, pundits, and
            temples. Partnering with over 50 renowned temples, we provide exclusive pujas and offerings services
            performed by expert pandits and share videos of the completed puja rituals.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-3">
              <div className="bg-[#B84C25] p-2 rounded-full">
                <Mail className="h-5 w-5" />
              </div>
              <span>Bookmyparsad@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-[#B84C25] p-2 rounded-full">
                <Phone className="h-5 w-5" />
              </div>
              <div className="flex items-center gap-3">
                <span>+91 91 9874875876</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

