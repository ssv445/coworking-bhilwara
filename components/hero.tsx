export function Hero() {
  return (
    <section id="home" className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo and Brand */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-card border-2 border-border rounded-lg mb-6">
              <div className="text-center">
                <div className="text-xl font-mono text-primary mb-2">{"<ready/>"}</div>
                <div className="text-sm text-muted-foreground">Coworking Space</div>
              </div>
            </div>

            {/* Keyboard and Mouse Icon */}
            <div className="flex items-center justify-center mb-8">
              <div className="text-6xl">⌨️</div>
              <div className="text-4xl ml-2">🖱️</div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            The Best Office Space in Bhilwara
            <br />
            <span className="text-muted-foreground">to co-work with great peers.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Get a Professional Space for CoWorking in Bhilwara.
            <br />
            Peaceful, Clean, Comfortable and Vetted Colleagues.
            <br />
            {"It's time to dive deep into the work."}
          </p>
        </div>
      </div>
    </section>
  )
}
