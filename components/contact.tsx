import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-muted/50 to-background relative overflow-hidden">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url('/modern-office-plants-workspace.jpg')`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">CONTACT US</h2>
          <p className="text-lg text-muted-foreground mb-2">No. 8/82 Aravalli Apartment Bhilwara,</p>
          <p className="text-lg text-muted-foreground">Rajasthan, India - 311001, India</p>
        </div>

        <div className="max-w-md mx-auto">
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <Input placeholder="Name" className="bg-background/80 backdrop-blur-sm" />
              <Input placeholder="Subject" className="bg-background/80 backdrop-blur-sm" />
            </div>

            <Input type="email" placeholder="Email" className="bg-background/80 backdrop-blur-sm" />

            <Textarea placeholder="Message" rows={4} className="bg-background/80 backdrop-blur-sm" />

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
