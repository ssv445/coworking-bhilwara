import { Header } from "@/components/header"
import { Culture } from "@/components/culture"
import { Contact } from "@/components/contact"

export default function CulturePage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section for Culture */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Our Community Culture</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Join a vibrant community of entrepreneurs, freelancers, and innovators. Experience the collaborative spirit
            that makes Bhilwara's coworking scene thrive.
          </p>
        </div>
      </section>

      <Culture />

      {/* Community Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Collaboration</h3>
              <p className="text-muted-foreground">
                We believe great ideas emerge when diverse minds come together. Our space encourages meaningful
                connections and partnerships.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                From startups to established businesses, we support innovation at every stage. Our environment fosters
                creativity and breakthrough thinking.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Growth</h3>
              <p className="text-muted-foreground">
                Personal and professional development is at our core. We provide resources, mentorship, and
                opportunities for continuous learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events & Activities */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Community Events</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-3">Weekly Networking</h3>
              <p className="text-muted-foreground mb-4">
                Every Friday evening, join fellow members for informal networking sessions. Share ideas, find
                collaborators, and build lasting professional relationships.
              </p>
              <span className="text-primary font-medium">Fridays 6:00 PM</span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-3">Skill Workshops</h3>
              <p className="text-muted-foreground mb-4">
                Monthly workshops covering topics from digital marketing to financial planning. Learn from industry
                experts and enhance your professional skills.
              </p>
              <span className="text-primary font-medium">Monthly Sessions</span>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  )
}
