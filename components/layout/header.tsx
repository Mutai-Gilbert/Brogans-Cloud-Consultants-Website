"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-sm py-3 shadow-lg" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10 overflow-hidden rounded-full">
            <Image 
              src="/brogans-logo.svg" 
              alt="Brogans Cloud Consultants Logo" 
              width={40} 
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-white text-lg tracking-wide">BROGANS</span>
            <span className="text-white/80 text-xs tracking-wider">CLOUD CONSULTANTS</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-white hover:text-blue-400 transition-colors font-medium">
            Home
          </Link>
          <Link href="/services" className="text-white hover:text-blue-400 transition-colors font-medium">
            Services
          </Link>
          <Link href="/success-stories" className="text-white hover:text-blue-400 transition-colors font-medium">
            Success Stories
          </Link>
          <Link href="/about" className="text-white hover:text-blue-400 transition-colors font-medium">
            About Us
          </Link>
          <Link href="/founder" className="text-white hover:text-blue-400 transition-colors font-medium">
            Founder
          </Link>
          <Link href="/contact" className="text-white hover:text-blue-400 transition-colors font-medium">
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button 
            asChild 
            className="bg-white hover:bg-gray-100 text-blue-900 font-medium text-lg px-8 py-6 rounded-full shadow-lg transform transition-transform hover:scale-105"
          >
            <Link href="/contact">
              <span className="flex items-center gap-2">Book a Consultation</span>
            </Link>
          </Button>
        </div>

        <button 
          className="md:hidden text-white focus:outline-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 text-white py-6 px-4 absolute top-full left-0 right-0 shadow-xl">
          <nav className="flex flex-col gap-4">
            <Link 
              href="/" 
              className="text-white hover:text-blue-400 transition-colors py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className="text-white hover:text-blue-400 transition-colors py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/success-stories" 
              className="text-white hover:text-blue-400 transition-colors py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Success Stories
            </Link>
            <Link 
              href="/about" 
              className="text-white hover:text-blue-400 transition-colors py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              href="/founder" 
              className="text-white hover:text-blue-400 transition-colors py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Founder
            </Link>
            <Link 
              href="/contact" 
              className="text-white hover:text-blue-400 transition-colors py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white w-full mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Link href="/contact">
                <span className="flex items-center justify-center gap-2">Book a Consultation</span>
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

