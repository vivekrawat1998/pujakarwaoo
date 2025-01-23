import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const membershipPlans = [
  {
    name: "Basic",
    price: 999,
    duration: "per year",
    features: ["Access to online puja booking", "Monthly e-newsletter", "5% discount on puja products"],
  },
  {
    name: "Premium",
    price: 2499,
    duration: "per year",
    features: [
      "All Basic features",
      "Priority puja booking",
      "Quarterly consultation with pandits",
      "10% discount on puja products",
      "Exclusive access to special events",
    ],
  },
  {
    name: "Divine",
    price: 4999,
    duration: "per year",
    features: [
      "All Premium features",
      "VIP puja booking with flexible scheduling",
      "Monthly consultation with senior pandits",
      "20% discount on puja products",
      "Personalized puja recommendations",
      "Complimentary prasad delivery",
    ],
  },
]

export default function MembershipPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-grow container mx-auto px-4 py-8 mt-20">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Membership Plans</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {membershipPlans.map((plan, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">{plan.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <p className="text-3xl font-bold text-center mb-4">
                  ₹{plan.price} <span className="text-sm font-normal">{plan.duration}</span>
                </p>
                <ul className="space-y-2 mb-6 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-[#B84C25] hover:bg-[#a3431f]">Subscribe Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}

