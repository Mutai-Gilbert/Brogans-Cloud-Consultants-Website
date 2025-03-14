import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Award, Users, Globe } from "lucide-react"

export default function About() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/brogansexpertise.png"
            alt="Brogans Cloud Expertise"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-6">Transforming African Businesses Through Technology</h1>
            <p className="text-xl text-white/90 mb-8">
              At Brogans Cloud Consultants, we're passionate about leveraging cloud technology and AI to drive
              innovation and growth across Kenya and East Africa.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white hover:bg-gray-100 text-blue-900 font-medium text-lg px-8 py-6 rounded-full shadow-lg transform transition-transform hover:scale-105"
            >
              <Link href="/contact">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in Nairobi, Brogans Cloud Consultants has grown to become a leading technology
                consulting firm in Kenya. We specialize in helping businesses harness the power of cloud computing and
                artificial intelligence to achieve their goals.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our team of certified experts brings extensive experience with major cloud platforms including AWS,
                Azure, and Google Cloud Platform. We're committed to delivering innovative solutions that drive real
                business value.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-600">Clients Served</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-gray-600">Cloud Experts</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-gray-600">Support Available</div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To empower African businesses with cutting-edge cloud and AI solutions that drive growth, efficiency,
                  and innovation.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be the leading cloud and AI consulting firm in East Africa, known for excellence, innovation, and
                  transformative solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Certified Expertise</h3>
              <p className="text-gray-600">
                Our team holds certifications from AWS, Azure, and Google Cloud Platform, ensuring expert guidance for
                your cloud journey.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Local Understanding</h3>
              <p className="text-gray-600">
                Based in Kenya, we understand the unique challenges and opportunities in the African market.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Global Standards</h3>
              <p className="text-gray-600">
                We deliver solutions that meet international standards while addressing local needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-10">
            Let's discuss how our cloud and AI solutions can help your business thrive in the digital age.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white hover:bg-gray-100 text-blue-900 font-medium text-lg px-8 py-6 rounded-full shadow-lg transform transition-transform hover:scale-105"
          >
            <Link href="/contact">Book a Free Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}

