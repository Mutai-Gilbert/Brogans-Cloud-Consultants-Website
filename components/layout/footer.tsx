import Link from "next/link"
import Image from "next/image"
import { Linkedin, Twitter, Facebook, Mail, Phone, MapPin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
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
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted partner for cloud solutions and AI integration in Kenya, empowering businesses with cutting-edge
              technologies tailored for the African market.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/cloud-migration" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Cloud Migration
                </Link>
              </li>
              <li>
                <Link
                  href="/services/infrastructure-management"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Infrastructure Management
                </Link>
              </li>
              <li>
                <Link
                  href="/services/application-development"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Application Development
                </Link>
              </li>
              <li>
                <Link href="/services/cloud-security" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Cloud Security
                </Link>
              </li>
              <li>
                <Link href="/services/ai-integration" className="text-gray-400 hover:text-blue-400 transition-colors">
                  AI Integration
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/founder" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Founder
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-blue-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400">info@broganscloud.co.ke</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-blue-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400">+254 703 252 051</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-blue-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  Moi Avenue, Westlands
                  <br />
                  Nairobi, Kenya
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500">
          <p>© {new Date().getFullYear()} Brogans Cloud Consultants. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-blue-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

