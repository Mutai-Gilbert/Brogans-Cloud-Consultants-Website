import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

// Define interfaces for component props
interface SuccessStoryProps {
  title: string;
  company: string;
  description: string;
  quote: string;
  person: string;
  role: string;
  image: string;
  reverse?: boolean;
}

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
}

export default function SuccessStories() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="/brogansexpertise.png" 
            alt="Success background" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Success Stories</h1>
          <p className="text-xl max-w-3xl mx-auto">
            See how we've helped Kenyan businesses transform their operations with cloud technology
          </p>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-24">
            <SuccessStory
              title="FinTech Innovator Accelerates Growth with Cloud Migration"
              company="Global Finance Solutions"
              description="Global Finance Solutions, a leading Kenyan fintech company, decided to reach out to Brogans Cloud Consultants to help them migrate their legacy systems to the cloud. Our team implemented a phased migration strategy that minimized disruption while maximizing performance gains."
              quote="The migration was much faster than we anticipated and we had no interruptions to our business processes. Since the migration, we have experienced increased efficiencies and overall improvement in user experience."
              person="Sarah Johnson"
              role="CTO, Global Finance Solutions"
              image="/brogansexpertise.png"
            />

            <SuccessStory
              title="Healthcare Provider Enhances Patient Care with AI Integration"
              company="MediCare Plus"
              description="MediCare Plus, a healthcare provider based in Nairobi, partnered with Brogans Cloud Consultants to implement AI-powered solutions to improve patient care and operational efficiency. We developed custom AI models that analyze patient data to predict health trends and optimize resource allocation."
              quote="Brogans Cloud Consultants helped us leverage AI to analyze patient data and predict potential health issues before they become serious. This has significantly improved our preventive care capabilities and patient outcomes."
              person="Dr. Michael Chen"
              role="Medical Director, MediCare Plus"
              image="/brogans.jpg"
              reverse
            />

            <SuccessStory
              title="Retail Chain Optimizes Operations with Multi-Cloud Strategy"
              company="Urban Retail Group"
              description="Urban Retail Group, a major retail chain in East Africa, worked with Brogans Cloud Consultants to develop and implement a multi-cloud strategy that optimized their operations and reduced costs. Our solution provided the flexibility to leverage different cloud providers for specific workloads."
              quote="The team at Brogans Cloud Consultants helped us navigate the complexities of a multi-cloud environment. Their expertise allowed us to leverage the strengths of different cloud providers while maintaining a unified management approach."
              person="Robert Martinez"
              role="VP of IT, Urban Retail Group"
              image="/brogansexpertise.png"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">What Our Clients Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Working with Brogans Cloud Consultants has been a game-changer for our business. Their expertise in cloud technologies helped us modernize our infrastructure and improve our overall performance."
              name="Jennifer Lee"
              role="CEO, TechStart Inc."
            />
            <TestimonialCard
              quote="The team at Brogans Cloud Consultants provided exceptional support during our cloud migration. Their attention to detail and proactive approach ensured a smooth transition with minimal disruption."
              name="David Wilson"
              role="IT Director, Manufacturing Solutions"
            />
            <TestimonialCard
              quote="Brogans Cloud Consultants helped us implement a robust security framework for our cloud environment. Their expertise in cloud security has given us peace of mind knowing our data is protected."
              name="Amanda Rodriguez"
              role="CISO, SecureBank"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to become our next success story?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Contact us today to discuss how we can help you achieve your cloud goals in Kenya.
          </p>
          <Button 
            asChild 
            size="lg"
            className="bg-white hover:bg-gray-100 text-blue-900 font-medium text-lg px-8 py-6 rounded-full shadow-lg transform transition-transform hover:scale-105"
          >
            <Link href="/contact">
              <span className="flex items-center gap-2">
                <ArrowRight size={16} /> Get in Touch
              </span>
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function SuccessStory({ title, company, description, quote, person, role, image, reverse = false }: SuccessStoryProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 ${reverse ? "md:flex md:flex-row-reverse" : ""}`}>
      <div className="flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">{title}</h2>
        <h3 className="text-xl text-blue-600 mb-6">{company}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        <blockquote className="border-l-4 border-blue-500 pl-4 italic mb-6 text-gray-700">"{quote}"</blockquote>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-100 rounded-full overflow-hidden">
            <Image
              src="/brogansfounder.jpg"
              alt={person}
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-bold text-gray-900">{person}</p>
            <p className="text-gray-600 text-sm">{role}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-xl">
          <Image
            src={image}
            alt={company}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  )
}

function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full">
      <CardContent className="p-8 h-full flex flex-col">
        <div className="text-5xl text-blue-500 mb-4">"</div>
        <p className="text-gray-700 mb-6 italic flex-grow">{quote}</p>
        <div className="flex items-center gap-3 mt-auto">
          <div className="w-10 h-10 rounded-full bg-blue-100 overflow-hidden">
            <Image 
              src="/brogansfounder.jpg" 
              alt={name} 
              width={40} 
              height={40}
              className="w-full h-full object-cover" 
            />
          </div>
          <div>
            <p className="font-bold text-gray-900">{name}</p>
            <p className="text-gray-600 text-sm">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

