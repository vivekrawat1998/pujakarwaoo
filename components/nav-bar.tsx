"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MobileMenu } from "@/components/mobile-menu"

export function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true")
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-4">
            <MobileMenu />
            <Link href="/" className="flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-19%20at%206.45.37%20AM(1)-lTTZkb3bl2IN2oDo0N1RVEjRnqk7pD.png"
                alt="Puja Karwado Logo"
                width={108}
                height={40}
                className="object-contain"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-800 hover:text-[#B84C25]">
              Home
            </Link>
            <Link href="/temples" className="text-gray-800 hover:text-[#B84C25]">
              Temples
            </Link>
            <Link href="/products" className="text-gray-800 hover:text-[#B84C25]">
              Products
            </Link>
            <Link href="/membership" className="text-gray-800 hover:text-[#B84C25]">
              Membership
            </Link>
            <Link href="/book-puja" className="text-gray-800 hover:text-[#B84C25]">
              Book Puja
            </Link>
            {isLoggedIn && (
              <Link href="/dashboard" className="text-gray-800 hover:text-[#B84C25]">
                Dashboard
              </Link>
            )}
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            {isLoggedIn ? (
              <Button
                variant="default"
                className="bg-[#B84C25] hover:bg-[#a3431f] text-white rounded-md px-3 sm:px-6 text-sm"
                onClick={() => {
                  localStorage.removeItem("isLoggedIn")
                  setIsLoggedIn(false)
                }}
              >
                Logout
              </Button>
            ) : (
              <>
                <Button
                  variant="default"
                  className="bg-[#B84C25] hover:bg-[#a3431f] text-white rounded-md px-3 sm:px-6 text-sm"
                >
                  <Link href="/become-pandit">Be a Pandit</Link>
                </Button>
                <Button variant="ghost" className="text-gray-800 hover:text-[#B84C25] text-sm hidden sm:inline-flex">
                  <Link href="/login">Login/Register</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

