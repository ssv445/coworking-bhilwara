export default function Hero() {
  return (
    <section className="hero" data-variant="minimal">
      <div className="wrap">
        <div className="hero-minimal">
          <h1 className="hero-headline display">
            A reason to leave the house{' '}
            <span className="hl-accent">in the morning.</span>
          </h1>
          <p className="hero-sub">
            Out the door by nine. The bike ride to <strong>67 East Extension</strong>. A desk with
            your name on it. Neighbors who code for a living. Laptop closes at 7 — you go home
            a person, not a screen. <strong>₹3,000/month. No contract.</strong>
          </p>
          <div className="hero-ctas">
            <a className="dev-btn dev-btn-primary" href="#visit">
              Visit the floor this week
              <span aria-hidden="true">→</span>
            </a>
            <a className="dev-btn" href="#photos">see inside →</a>
          </div>
          <div className="hero-meta">
            <span><strong>19</strong>/32 seats free</span>
            <span><strong>67</strong> East Extension, Bhilwara</span>
            <span>Open <strong>Mon–Sat</strong></span>
            <span>Since <strong>2019</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
}
