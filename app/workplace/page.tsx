import { Header } from "@/components/header"
import { Contact } from "@/components/contact"

export default function WorkplacePage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section for Workplace */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Your Ideal Workplace</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover how ready coworking space transforms the way you work. From flexible seating to collaborative
            zones, every corner is designed for productivity and inspiration.
          </p>
        </div>
      </section>

      {/* Workspace Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Workspace Options</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🪑</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Hot Desks</h3>
              <p className="text-muted-foreground mb-4">
                Flexible seating in our open workspace. Perfect for freelancers and remote workers who value variety and
                networking opportunities.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• First-come, first-served basis</li>
                <li>• Access to all common areas</li>
                <li>• Power outlets and ergonomic chairs</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🏢</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Dedicated Desks</h3>
              <p className="text-muted-foreground mb-4">
                Your own permanent desk in our shared workspace. Ideal for professionals who need consistency and
                personal storage space.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Reserved desk with storage</li>
                <li>• Personalize your workspace</li>
                <li>• 24/7 access with keycard</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🚪</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Private Offices</h3>
              <p className="text-muted-foreground mb-4">
                Fully enclosed offices for teams and businesses requiring privacy. Available in various sizes to
                accommodate growing teams.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 2-10 person capacity</li>
                <li>• Lockable and secure</li>
                <li>• Customizable layout</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">📞</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Phone Booths</h3>
              <p className="text-muted-foreground mb-4">
                Soundproof spaces for private calls and video conferences. Book on-demand through our mobile app for
                ultimate convenience.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Soundproof design</li>
                <li>• HD video conferencing setup</li>
                <li>• Easy booking system</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Meeting Rooms</h3>
              <p className="text-muted-foreground mb-4">
                Professional meeting spaces equipped with presentation technology. Perfect for client meetings, team
                collaborations, and workshops.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 4-12 person capacity</li>
                <li>• Smart TV and projectors</li>
                <li>• Whiteboard and flip charts</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🛋️</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Lounge Areas</h3>
              <p className="text-muted-foreground mb-4">
                Comfortable spaces for informal meetings, relaxation, and networking. Equipped with soft seating and
                ambient lighting for a homely feel.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Comfortable sofas and armchairs</li>
                <li>• Coffee tables for laptops</li>
                <li>• Natural lighting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Work Environment */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Designed for Productivity</h2>
              <p className="text-muted-foreground mb-6">
                Our workspace is thoughtfully designed to enhance focus, creativity, and collaboration. Every element,
                from lighting to acoustics, is optimized for professional success.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Ergonomic Design</h3>
                    <p className="text-sm text-muted-foreground">
                      Height-adjustable desks and premium office chairs for all-day comfort.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Natural Light</h3>
                    <p className="text-sm text-muted-foreground">
                      Large windows and skylights create an inspiring, energy-boosting environment.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Climate Control</h3>
                    <p className="text-sm text-muted-foreground">
                      Optimal temperature and air quality maintained throughout the space.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <img
                src="/modern-office-plants-workspace.jpg"
                alt="Modern ergonomic workspace"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Amenities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Technology & Amenities</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-lg">📶</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">High-Speed WiFi</h3>
              <p className="text-sm text-muted-foreground">1Gbps fiber internet with backup connections</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-lg">🖨️</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Printing Services</h3>
              <p className="text-sm text-muted-foreground">Color and B&W printing, scanning, copying</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-lg">☕</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Refreshments</h3>
              <p className="text-sm text-muted-foreground">Unlimited coffee, tea, and healthy snacks</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-lg">🔒</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Security</h3>
              <p className="text-sm text-muted-foreground">24/7 security with keycard access system</p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  )
}
