import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import WhatsAppButton from "../components/WhatsAppButton"
import "./globals.css"

export const metadata: Metadata = {
  title: "CoWorking Bhilwara - Premium Workspace for Professionals",
  description:
    "Premium coworking space for computer professionals in Bhilwara, Rajasthan. Modern facilities, high-speed internet, and productive environment. Flexible pricing from ₹200/day.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <Suspense fallback={null}>{children}</Suspense>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
