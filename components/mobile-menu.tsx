"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function MobileMenu() {
  const [open, setOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true")
  }, [])

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-8">
          <Link href="/" onClick={() => setOpen(false)} className="text-lg font-medium hover:text-[#B84C25]">
            Home
          </Link>
          <Link href="/temples" onClick={() => setOpen(false)} className="text-lg font-medium hover:text-[#B84C25]">
            Temples
          </Link>
          <Link href="/products" onClick={() => setOpen(false)} className="text-lg font-medium hover:text-[#B84C25]">
            Products
          </Link>
          <Link href="/membership" onClick={() => setOpen(false)} className="text-lg font-medium hover:text-[#B84C25]">
            Membership
          </Link>
          <Link href="/book-puja" onClick={() => setOpen(false)} className="text-lg font-medium hover:text-[#B84C25]">
            Book Puja
          </Link>
          {isLoggedIn && (
            <Link href="/dashboard" onClick={() => setOpen(false)} className="text-lg font-medium hover:text-[#B84C25]">
              Dashboard
            </Link>
          )}
          {isLoggedIn ? (
            <Button
              onClick={() => {
                localStorage.removeItem("isLoggedIn")
                setIsLoggedIn(false)
                setOpen(false)
              }}
              className="bg-[#B84C25] hover:bg-[#a3431f] text-white"
            >
              Logout
            </Button>
          ) : (
            <Link href="/login" onClick={() => setOpen(false)} className="text-lg font-medium hover:text-[#B84C25]">
              Login/Register
            </Link>
          )}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

