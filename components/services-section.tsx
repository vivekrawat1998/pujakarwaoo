export function ServicesSection() {
  const services = [
    {
      text: "किसी भी प्रकार की पूजा बुक करें",
      icon: "ॐ",
    },
    {
      text: "प्रसाद ऑर्डर करें",
      icon: "ॐ",
    },
    {
      text: "बंडोरे का आयोजन करवाएं",
      icon: "ॐ",
    },
    {
      text: "पूजा का सामान ऑर्डर करें",
      icon: "ॐ",
    },
    {
      text: "थाली डाल की सजा करें",
      icon: "ॐ",
    },
  ]

  return (
    <div className="bg-[#B84C25] py-4 sm:py-6 border-t-4 border-[#FFB800] relative">
      <div
        className="absolute top-0 left-0 right-0 h-3 bg-repeat-x"
        style={{
          backgroundImage: 'url("/placeholder.svg?height=12&width=24")',
          backgroundSize: "24px 12px",
        }}
      />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-white">
          {services.map((service, index) => (
            <div key={index} className="flex items-center justify-center sm:justify-start space-x-3">
              <span className="text-[#FFD700] text-2xl">{service.icon}</span>
              <span className="text-sm md:text-base font-medium">{service.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

