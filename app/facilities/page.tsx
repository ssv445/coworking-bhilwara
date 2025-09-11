import { Header } from "@/components/header"
import { Facilities } from "@/components/facilities"
import { Contact } from "@/components/contact"

export default function FacilitiesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section for Facilities */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">World-Class Facilities</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Everything you need to work productively and comfortably. Our coworking space in Bhilwara is equipped with
            modern amenities designed for today's professionals.
          </p>
        </div>
      </section>

      <Facilities />

      {/* Additional Facilities Details */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Premium Workspace Experience</h2>
              <p className="text-muted-foreground mb-6">
                Our facilities are carefully curated to provide the perfect environment for productivity, collaboration,
                and growth. From high-speed internet to comfortable seating, every detail matters.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  24/7 Access to workspace
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Dedicated parking space
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Professional reception services
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Mail handling and forwarding
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <img
                src="/modern-office-plants-workspace.jpg"
                alt="Modern workspace with plants"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  )
}
