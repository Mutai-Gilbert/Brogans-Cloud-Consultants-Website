import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden rounded-xl">
      <CardContent className="p-8 relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
        <div className="text-blue-600 mb-6 transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-700 transition-colors">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <Link
          href={`/services/${title.toLowerCase().replace(/\s+/g, "-")}`}
          className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors group"
        >
          Learn more <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </CardContent>
    </Card>
  )
}

