import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Brogans Cloud Consultants | Cloud & AI Solutions in Kenya",
  description:
    "Leading cloud and AI consulting firm in Nairobi, Kenya, specializing in cloud migration, infrastructure management, and custom AI solutions for African businesses.",
  keywords: "cloud consulting, AI solutions, Kenya, Nairobi, cloud migration, AWS, Azure, GCP, artificial intelligence",
  generator: 'v0.dev',
  authors: [{ name: "Brogans Cloud Consultants" }],
  creator: "Brogans Cloud Consultants",
  publisher: "Brogans Cloud Consultants",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'