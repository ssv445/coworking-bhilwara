import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { GoogleAnalytics } from "@next/third-parties/google"
import { Suspense } from "react"
import Nav from "../components/dev/Nav"
import Footer from "../components/dev/Footer"
import VisitModal from "../components/dev/VisitModal"
import { ADDRESS, BRAND, CONTACT, HOURS, REVIEWS, SITE, SOCIAL } from "../lib/business"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${BRAND.name} — quiet floor for developers`,
    template: `%s | ${BRAND.name}`,
  },
  description: `${BRAND.name} — a ${BRAND.seats}-seat coworking floor in Subhash Nagar for computer professionals. Reserved desk, high-speed internet, 8h UPS, comfortable chairs, no disturbance. ₹3,000/month, no lock-in.`,
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    type: "website",
    siteName: BRAND.name,
    locale: "en_IN",
    alternateLocale: ["hi_IN"],
  },
}

const DAY_NAME: Record<string, string> = {
  Mon: "Monday",
  Tue: "Tuesday",
  Wed: "Wednesday",
  Thu: "Thursday",
  Fri: "Friday",
  Sat: "Saturday",
  Sun: "Sunday",
}

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE.url}/#business`,
  name: BRAND.name,
  alternateName: [BRAND.nameHindi, BRAND.shortName],
  description: `Coworking space in ${ADDRESS.city} for computer professionals. Reserved desks, high-speed internet, 8h UPS, comfortable chairs, no disturbance — an ideal place to work.`,
  url: SITE.url,
  telephone: CONTACT.phoneIntl,
  email: CONTACT.email,
  image: `${SITE.url}/images/homepage/logo-hero.png`,
  logo: `${SITE.url}/images/homepage/logo-header.png`,
  priceRange: "₹300–₹3000",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI, Bank Transfer",
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS.street,
    addressLocality: ADDRESS.city,
    addressRegion: ADDRESS.region,
    postalCode: ADDRESS.postalCode,
    addressCountry: ADDRESS.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: ADDRESS.geo.latitude,
    longitude: ADDRESS.geo.longitude,
  },
  hasMap: SOCIAL.maps,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: HOURS.daysOpen.map((d) => DAY_NAME[d]),
      opens: HOURS.opens,
      closes: HOURS.closes,
    },
  ],
  sameAs: [SOCIAL.facebook, SOCIAL.maps],
  aggregateRating: {
    "@type": "AggregateRating",
    ...REVIEWS,
  },
  foundingDate: String(BRAND.foundedYear),
  numberOfEmployees: { "@type": "QuantitativeValue", value: 1 },
  amenityFeature: [
    "High-speed internet",
    "8-hour UPS power backup",
    "Air conditioning",
    "Meeting rooms",
    "Bike parking",
    "CCTV security",
    "RO water",
    "Personal locker",
  ].map((name) => ({
    "@type": "LocationFeatureSpecification",
    name,
    value: true,
  })),
  knowsLanguage: ["en", "hi"],
  areaServed: { "@type": "City", name: ADDRESS.city },
  additionalType: "https://schema.org/CoworkingSpace",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-theme="github" data-density="roomy">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Nav />
        <Suspense fallback={null}>{children}</Suspense>
        <Footer />
        <VisitModal />
        <Analytics />
      </body>
      <GoogleAnalytics gaId="G-WBH7QE7M6Q" />
    </html>
  )
}
