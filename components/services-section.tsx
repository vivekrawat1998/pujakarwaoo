import { Fullscreen } from "lucide-react"
import Image from "next/image"

export function ServicesSection() {
  const services = [
    { text: "किसी भी प्रकार की पूजा बुक करें" },
    { text: "प्रसाद ऑर्डर करें" },
    { text: "भंडारे का आयोजन करवाएं" },
    { text: "पूजा का सामान ऑर्डर करें" },
    { text: "पंडित जी से बात करें" },
    { text: "चारों धाम की यात्रा करें" },
  ]

  return (
    <div>
      {/* Header Section */}
      <div className="bg-[#B84C25] grid place-items-center h-[15vh] md:h-[12vh] lg:h-[10vh] border-t-4 border-[#FFB800]">
        <div className="container mx-auto items-center px-4">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-white">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center justify-center space-x-3 text-center"
              >
                <h1 className="text-sm md:text-base lg:text-lg font-medium">
                  {service.text}
                </h1>
                <Image
                  src="/om.png"
                  alt="Puja Karwado Logo"
                  width={26}
                  height={27}
                  className=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full-Width Border */}
      <Image
        src="/border.png"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
        alt="Border Image"
      />
    </div>
  )
}
