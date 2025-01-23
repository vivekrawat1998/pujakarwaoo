"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const orderSteps = ["Cart Review", "Shipping Details", "Payment", "Order Confirmation"]

export default function DashboardPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [cart, setCart] = useState([
    { id: 1, name: "Puja Thali Set", price: 1999, quantity: 1 },
    { id: 2, name: "Sandalwood Incense Sticks", price: 299, quantity: 2 },
  ])
  const [shippingDetails, setShippingDetails] = useState({
    name: "",
    address: "",
    city: "",
    pincode: "",
    phone: "",
  })
  const router = useRouter()

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    if (!isLoggedIn) {
      router.push("/login")
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    router.push("/")
  }

  const handleNextStep = () => {
    if (currentStep < orderSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Cart Review</h3>
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <span>{item.name}</span>
                <span>
                  ₹{item.price} x {item.quantity}
                </span>
              </div>
            ))}
            <div className="font-bold text-right">
              Total: ₹{cart.reduce((total, item) => total + item.price * item.quantity, 0)}
            </div>
          </div>
        )
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Shipping Details</h3>
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={shippingDetails.name}
                onChange={(e) => setShippingDetails({ ...shippingDetails, name: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                value={shippingDetails.address}
                onChange={(e) => setShippingDetails({ ...shippingDetails, address: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                value={shippingDetails.city}
                onChange={(e) => setShippingDetails({ ...shippingDetails, city: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pincode">Pincode</Label>
              <Input
                id="pincode"
                value={shippingDetails.pincode}
                onChange={(e) => setShippingDetails({ ...shippingDetails, pincode: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                value={shippingDetails.phone}
                onChange={(e) => setShippingDetails({ ...shippingDetails, phone: e.target.value })}
                required
              />
            </div>
          </div>
        )
      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Payment</h3>
            <p>Please select a payment method:</p>
            <div className="space-y-2">
              <Button className="w-full">Pay with UPI</Button>
              <Button className="w-full">Pay with Card</Button>
              <Button className="w-full">Cash on Delivery</Button>
            </div>
          </div>
        )
      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Order Confirmation</h3>
            <p>Thank you for your order! Your order has been placed successfully.</p>
            <p>Order ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
            <Button onClick={() => setCurrentStep(0)} className="w-full">
              Place Another Order
            </Button>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <main className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-grow container mx-auto px-4 py-8 mt-20">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <Button onClick={handleLogout}>Logout</Button>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Order Process</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-8">
              <div className="flex justify-between mb-4">
                {orderSteps.map((step, index) => (
                  <div
                    key={index}
                    className={`text-sm font-medium ${index <= currentStep ? "text-[#B84C25]" : "text-gray-400"}`}
                  >
                    {step}
                  </div>
                ))}
              </div>
              <div className="relative">
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2"></div>
                <div
                  className="absolute top-1/2 left-0 h-1 bg-[#B84C25] -translate-y-1/2 transition-all duration-300"
                  style={{ width: `${(currentStep / (orderSteps.length - 1)) * 100}%` }}
                ></div>
                <div className="relative flex justify-between">
                  {orderSteps.map((_, index) => (
                    <div
                      key={index}
                      className={`w-6 h-6 rounded-full ${index <= currentStep ? "bg-[#B84C25]" : "bg-gray-200"}`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
            {renderStepContent()}
            <div className="mt-8 flex justify-between">
              <Button onClick={handlePreviousStep} disabled={currentStep === 0} variant="outline">
                Previous
              </Button>
              <Button
                onClick={handleNextStep}
                disabled={currentStep === orderSteps.length - 1}
                className="bg-[#B84C25] hover:bg-[#a3431f]"
              >
                {currentStep === orderSteps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </main>
  )
}

