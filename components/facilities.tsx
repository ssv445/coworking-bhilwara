import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const facilities = [
  {
    icon: "💻",
    title: "Awesome Desk",
    description: "Ergonomic workstations designed for productivity",
  },
  {
    icon: "🏢",
    title: "Sound Meeting room",
    description: "Professional meeting spaces with AV equipment",
  },
  {
    icon: "📶",
    title: "High Speed Internet",
    description: "Reliable fiber internet for seamless work",
  },
  {
    icon: "❄️",
    title: "AC Facility",
    description: "Climate-controlled environment year-round",
  },
  {
    icon: "🔒",
    title: "Personal Locker",
    description: "Secure storage for your personal belongings",
  },
  {
    icon: "📱",
    title: "Wi Bran Storming Area",
    description: "Creative spaces for team collaboration",
  },
  {
    icon: "📍",
    title: "Awesome Community",
    description: "Network with like-minded professionals",
  },
  {
    icon: "🔐",
    title: "Complete Security",
    description: "24/7 security and access control",
  },
  {
    icon: "🌿",
    title: "Clean Environment",
    description: "Maintained and sanitized workspace",
  },
  {
    icon: "👥",
    title: "Lush Clean",
    description: "Premium cleaning and maintenance",
  },
  {
    icon: "💧",
    title: "RO Water",
    description: "Pure drinking water available",
  },
  {
    icon: "⚡",
    title: "Solar Energy",
    description: "Eco-friendly power solutions",
  },
]

export function Facilities() {
  return (
    <section id="facilities" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">FACILITIES</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {facilities.map((facility, index) => (
            <Card key={index} className="bg-card hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{facility.icon}</div>
                <h3 className="font-semibold text-card-foreground mb-2">{facility.title}</h3>
                <p className="text-sm text-muted-foreground">{facility.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">Learn More</Button>
        </div>
      </div>
    </section>
  )
}
