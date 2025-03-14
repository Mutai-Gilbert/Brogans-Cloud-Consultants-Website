import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Cloud, Server, Brain } from "lucide-react"

export default function Services() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive cloud and AI solutions tailored to meet the specific needs of your business in Kenya
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-24">
            {/* Cloud Migration */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
                  <Cloud className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Cloud Migration</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Seamlessly migrate your existing applications and data to the cloud, ensuring minimal downtime and
                  data loss. Our expert team will guide you through every step of the migration process.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Assessment and planning of your current infrastructure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Workload prioritization and migration strategy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Data migration with integrity validation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Application refactoring and optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Post-migration support and optimization</span>
                  </li>
                </ul>
                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md shadow-md">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/brogansexpertise.png"
                  alt="Cloud Migration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Cloud Infrastructure Management */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/brogans.png"
                  alt="Cloud Infrastructure Management"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
                  <Server className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Cloud Infrastructure Management</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Optimize your cloud infrastructure for maximum performance, scalability, and cost-effectiveness. Our
                  team of experts ensures that your cloud environment is running smoothly.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Infrastructure as Code (IaC) implementation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Automated provisioning and scaling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Performance monitoring and optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Cost management and optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>24/7 support and incident management</span>
                  </li>
                </ul>
                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md shadow-md">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </div>

            {/* AI Integration */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
                  <Brain className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold mb-4">AI Integration</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Leverage the power of artificial intelligence to automate processes, gain insights, and make
                  data-driven decisions. Our AI solutions are designed to enhance your business operations.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>AI strategy development and roadmap</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Machine learning model development and training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Natural language processing and conversational AI</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>AI-powered analytics and insights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Integration with existing systems and workflows</span>
                  </li>
                </ul>
                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md shadow-md">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image src="/brogansexpertise.png" alt="AI Integration" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Contact us today for a free consultation and discover how our cloud and AI solutions can help you achieve
            your business goals in Kenya.
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

