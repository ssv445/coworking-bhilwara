import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Nav from "../components/dev/Nav"
import Footer from "../components/dev/Footer"
import "./globals.css"

export const metadata: Metadata = {
  title: "Ready CoWork Bhilwara — for developers",
  description:
    "A 32-seat coworking floor in Bhilwara for computer professionals. Reserved desk, gigabit cable, 8h UPS, hot RO water. ₹3,000/month, no lock-in.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-theme="github" data-density="roomy">
      <body className="antialiased">
        <Nav />
        <Suspense fallback={null}>{children}</Suspense>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
