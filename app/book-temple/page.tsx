"use client";
import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon } from "lucide-react";

const DynamicFooter = dynamic(() => import('@/components/footer').then(mod => mod.Footer), { ssr: false });
const DynamicNavBar = dynamic(() => import('@/components/nav-bar').then(mod => mod.NavBar), { ssr: false });

export default function BookTemplePuja() {
  const searchParams = useSearchParams();
  const selectedTemple = searchParams.get("temple");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    temple: selectedTemple || "",
    pujaType: "",
    date: "",
    additionalRequests: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Suspense fallback={<div>Loading NavBar...</div>}>
        <DynamicNavBar />
      </Suspense>

      <div className="flex-grow container mx-auto px-4 py-8 mt-20">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Book Your Puja Now</h1>
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-center">Puja Booking Form</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Form Fields */}
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
                  aria-label="Full Name"
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
                  aria-label="Email"
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
                  aria-label="Phone Number"
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
                  aria-label="Temple"
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
                  aria-label="Type of Puja"
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
                    aria-label="Puja Date"
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
                  aria-label="Additional Requests"
                />
              </div>

              <Button type="submit" className="w-full bg-[#B84C25] hover:bg-[#a3431f]">
                Submit Booking
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <Suspense fallback={<div>Loading footer...</div>}>
        <DynamicFooter />
      </Suspense>
    </main>
  );
}
