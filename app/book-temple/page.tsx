"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CalendarIcon } from "lucide-react"

export default function BookTemplePuja() {
  const searchParams = useSearchParams()
  const selectedTemple = searchParams.get("temple") 

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    temple: selectedTemple || "",
    pujaType: "",
    date: "",
    additionalRequests: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form Data Submitted:", formData)
  }

  return (
    <main className="min-h-screen flex flex-col">
      <NavBar />

      <div className="flex-grow container mx-auto px-4 py-8 mt-20">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Book Your Puja Now</h1>
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-center">Puja Booking Form</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <Label htmlFor="temple">Temple</Label>
                <Input
                  id="temple"
                  name="temple"
                  type="text"
                  value={formData.temple}
                  readOnly
                  className="cursor-not-allowed bg-gray-100"
                />
              </div>

              <div>
                <Label htmlFor="pujaType">Type of Puja</Label>
                <Input
                  id="pujaType"
                  name="pujaType"
                  type="text"
                  placeholder="E.g., Archana, Abhishekam, etc."
                  value={formData.pujaType}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <Label htmlFor="date">Date</Label>
                <div className="relative">
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                  <CalendarIcon className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
                </div>
              </div>

              <div>
                <Label htmlFor="additionalRequests">Additional Requests</Label>
                <Textarea
                  id="additionalRequests"
                  name="additionalRequests"
                  placeholder="Enter any additional requests or instructions"
                  value={formData.additionalRequests}
                  onChange={handleChange}
                />
              </div>

              <Button type="submit" className="w-full bg-[#B84C25] hover:bg-[#a3431f]">
                Submit Booking
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </main>
  )
}
