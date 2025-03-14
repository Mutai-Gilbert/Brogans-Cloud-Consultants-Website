import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Linkedin, Twitter } from "lucide-react"

export default function Founder() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Meet Our Founder</h1>
              <p className="text-xl text-white/80 mb-8">
                Passionate about leveraging technology to transform African businesses
              </p>
              <div className="flex gap-4">
                <Button asChild variant="outline" size="lg" className="bg-white hover:bg-gray-100 text-blue-900 font-medium text-lg px-8 py-6 rounded-full shadow-lg transform transition-transform hover:scale-105">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5 mr-2" />
                    Connect on LinkedIn
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-white hover:bg-gray-100 text-blue-900 font-medium text-lg px-8 py-6 rounded-full shadow-lg transform transition-transform hover:scale-105">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Twitter className="w-5 h-5 mr-2" />
                    Follow on Twitter
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <Image
                  src="/brogansfounder.jpg"
                  alt="Brogans Cloud Consultants Founder"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-blue-50">
        <div className="container mx-auto px-4">
          <blockquote className="max-w-4xl mx-auto text-center">
            <p className="text-3xl font-medium italic text-gray-800 mb-8">
              "I believe in the transformative power of cloud computing and AI to revolutionize businesses across
              Africa. Our mission is to make these technologies accessible and impactful for companies of all sizes."
            </p>
            <footer className="text-gray-600">- Founder, Brogans Cloud Consultants</footer>
          </blockquote>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">About the Founder</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                With over a decade of experience in cloud computing and artificial intelligence, our founder has been at
                the forefront of digital transformation in East Africa. Based in Baricho, Kirinyaga County, Kenya, he
                has worked with businesses of all sizes to implement innovative cloud solutions.
              </p>
              <p>
                His expertise spans major cloud platforms including AWS, Azure, and Google Cloud Platform, with a
                particular focus on helping African businesses leverage these technologies for growth and efficiency.
              </p>
              <p>
                A passionate advocate for technology education in Africa, he regularly speaks at industry events and
                mentors young professionals in the field. His vision is to make Kenya a hub for cloud computing and AI
                innovation in East Africa.
              </p>

              <h3 className="text-2xl font-bold mt-12 mb-6">Expertise</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cloud Architecture and Migration</li>
                <li>Artificial Intelligence and Machine Learning</li>
                <li>Digital Transformation Strategy</li>
                <li>Cloud Security and Compliance</li>
                <li>Enterprise Architecture</li>
              </ul>

              <h3 className="text-2xl font-bold mt-12 mb-6">Certifications</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>AWS Certified Solutions Architect - Professional</li>
                <li>Microsoft Azure Solutions Architect Expert</li>
                <li>Google Cloud Professional Cloud Architect</li>
                <li>Certified Information Systems Security Professional (CISSP)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Build Something Great Together</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-10">
            Ready to start your cloud journey? Get in touch for a personalized consultation.
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

