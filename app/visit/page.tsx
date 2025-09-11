import { Header } from "@/components/header"
import { Contact } from "@/components/contact"
import { Button } from "@/components/ui/button"

export default function VisitPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section for Visit */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Visit Our Space</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Experience the ready/&gt; coworking difference firsthand. Schedule a tour and see why Bhilwara's
            professionals choose us as their workspace.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Schedule a Tour
          </Button>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Find Us</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Address</h3>
                  <p className="text-muted-foreground">
                    123 Business District
                    <br />
                    Bhilwara, Rajasthan 311001
                    <br />
                    India
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                  <p className="text-muted-foreground">+91 98765 43210</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Email</h3>
                  <p className="text-muted-foreground">hello@readycoworking.com</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Operating Hours</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="font-medium">8:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="font-medium">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="font-medium">10:00 AM - 6:00 PM</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>24/7 Access:</strong> Available for monthly and annual members with keycard access.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Information */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">What to Expect</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👋</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Welcome & Introduction</h3>
              <p className="text-muted-foreground">
                Meet our community manager who will introduce you to the ready/&gt; philosophy and culture.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Facility Tour</h3>
              <p className="text-muted-foreground">
                Explore all our workspaces, meeting rooms, and amenities. See where you'll be most productive.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">☕</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Coffee & Chat</h3>
              <p className="text-muted-foreground">
                Enjoy complimentary refreshments while we discuss membership options and answer your questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Getting Here</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-4">By Car</h3>
              <p className="text-muted-foreground mb-4">
                Located in the heart of Bhilwara's business district with ample parking available. Use GPS coordinates:
                25.3407° N, 74.6306° E
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Free parking for members</li>
                <li>• Visitor parking available</li>
                <li>• Wheelchair accessible entrance</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-4">Public Transport</h3>
              <p className="text-muted-foreground mb-4">
                Easily accessible by local buses and auto-rickshaws. The nearest bus stop is just 2 minutes walk away.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Bus stop: Business District (2 min walk)</li>
                <li>• Railway station: 15 minutes by auto</li>
                <li>• Airport: 45 minutes by taxi</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  )
}
