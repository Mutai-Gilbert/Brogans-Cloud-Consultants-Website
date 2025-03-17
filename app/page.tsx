import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ServiceCard } from "@/components/service-card"
import { Cloud, Server, Code, Shield, Brain, Zap, MapPin, Phone, Mail } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Hero Image */}
        <div className="absolute inset-0">
          <Image
            src="/brogans.jpg"
            alt="Modern office space in Nairobi"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Innovating Your Business with AI & Cloud
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
              Empowering Kenyan businesses with cutting-edge cloud technologies and AI solutions for the digital age!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white hover:bg-gray-100 text-blue-900 font-medium text-lg px-8 py-6 rounded-full shadow-lg transform transition-transform hover:scale-105"
              >
                <Link href="/contact">Book a Free Consultation</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-white hover:bg-gray-100 text-blue-900 font-medium text-lg px-8 py-6 rounded-full shadow-lg transform transition-transform hover:scale-105"
              >
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Kenya Location Badge */}
        <div className="absolute bottom-8 left-8 z-20 bg-white/10 backdrop-blur-md rounded-full py-2 px-4 text-white flex items-center gap-2">
          <MapPin className="w-5 h-5 text-blue-400" />
          <span>Nairobi, Moi Avenue, Westlands, Kenya</span>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of cloud and AI services tailored to meet the specific needs of your
              business in Kenya and across East Africa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Cloud className="w-10 h-10" />}
              title="Cloud Migration"
              description="Seamlessly transition your operations to the cloud for enhanced efficiency and scalability with minimal downtime and data loss."
            />
            <ServiceCard
              icon={<Server className="w-10 h-10" />}
              title="Cloud Infrastructure Management"
              description="Optimize your cloud infrastructure for maximum performance, scalability, and cost-effectiveness with our expert management."
            />
            <ServiceCard
              icon={<Code className="w-10 h-10" />}
              title="Cloud Application Development"
              description="Develop custom cloud applications tailored to your unique business requirements using modern architectures and best practices."
            />
            <ServiceCard
              icon={<Shield className="w-10 h-10" />}
              title="Cloud Security"
              description="Protect your sensitive data and applications with our robust security solutions, ensuring compliance and peace of mind."
            />
            <ServiceCard
              icon={<Brain className="w-10 h-10" />}
              title="AI Integration"
              description="Leverage the power of artificial intelligence to automate processes, gain insights, and make data-driven decisions for your Kenyan business."
            />
            <ServiceCard
              icon={<Zap className="w-10 h-10" />}
              title="AI Agents"
              description="Custom built AI agents to automate and improve your business operations, enhancing productivity and customer experience in the African market."
            />
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Expertise</h2>
              <p className="text-xl text-gray-600 mb-8">
                Our team of experienced cloud experts has in-depth knowledge of all major cloud platforms, including
                AWS, Azure, and GCP. We stay up-to-date with the latest cloud technologies and best practices to serve businesses in Kenya and beyond.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Cloud className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Cloud Platforms</h3>
                    <p className="text-gray-600">Expertise in AWS, Azure, Google Cloud, and multi-cloud environments optimized for African businesses</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">AI & Machine Learning</h3>
                    <p className="text-gray-600">
                      Implementation of AI solutions, machine learning models, and data analytics tailored for the Kenyan market
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Security & Compliance</h3>
                    <p className="text-gray-600">
                      Ensuring your cloud infrastructure meets the highest security standards and local regulatory requirements
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl">
              <Image src="/brogansexpertise.png" alt="Cloud expertise" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Contact us today for a free consultation and discover how our cloud and AI solutions can help you achieve
            your business goals in Kenya's competitive market.
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

      {/* Contact Info Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Our Location</h3>
              <p className="text-gray-600">Moi Avenue, Westlands</p>
              <p className="text-gray-600">Nairobi, Kenya</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-gray-600">+254 703 252 051</p>
              <p className="text-gray-600">Mon-Fri, 8am-6pm EAT</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-600">info@broganscloud.co.ke</p>
              <p className="text-gray-600">support@broganscloud.co.ke</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

