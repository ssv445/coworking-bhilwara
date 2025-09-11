import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="w-full bg-white border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link href="/" className="text-2xl font-mono text-primary">
              {"<ready/>"}
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/facilities" className="text-foreground hover:text-primary transition-colors">
              Facilities
            </Link>
            <Link href="/culture" className="text-foreground hover:text-primary transition-colors">
              Culture
            </Link>
            <Link href="/pricing" className="text-foreground hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link href="/visit" className="text-foreground hover:text-primary transition-colors">
              Visit
            </Link>
            <Link href="/workplace" className="text-foreground hover:text-primary transition-colors">
              Workplace
            </Link>
          </div>

          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Get Started</Button>
        </nav>
      </div>
    </header>
  )
}
