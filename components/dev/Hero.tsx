export default function Hero() {
  return (
    <section className="hero" data-variant="minimal">
      <div className="wrap">
        <div className="hero-minimal">
          <h1 className="hero-headline display">
            Technology. Tribe. Vibes.
            <br />
            <span className="hl-accent">Co-work to break the loop.</span>
          </h1>
          <p className="hero-sub">
            A desk with your name on it. Neighbors who code for a living. A meeting room when
            you need one. A laptop that closes at seven and stays here till morning.{' '}
            <strong>₹3,000/month. No contract.</strong>
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
