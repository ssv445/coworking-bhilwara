import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Facilities } from "@/components/facilities"
import { Culture } from "@/components/culture"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Facilities />
      <Culture />
      <Contact />
    </main>
  )
}
