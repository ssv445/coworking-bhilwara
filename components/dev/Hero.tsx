import { WA_URL } from './whatsapp';

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
            <a className="dev-btn dev-btn-primary dev-btn-wa" href={WA_URL} target="_blank" rel="noopener noreferrer">
              <svg width="15" height="15" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
                <path d="M16.001 2.5C8.557 2.5 2.5 8.555 2.5 16c0 2.388.625 4.726 1.815 6.788L2.5 29.5l6.853-1.793A13.453 13.453 0 0 0 16 29.5c7.443 0 13.5-6.057 13.5-13.5S23.444 2.5 16.001 2.5Zm0 24.591a11.04 11.04 0 0 1-5.622-1.535l-.403-.24-4.066 1.066 1.082-3.961-.262-.405A11.024 11.024 0 0 1 4.91 16c0-6.118 4.974-11.091 11.091-11.091 6.119 0 11.092 4.973 11.092 11.091 0 6.119-4.973 11.091-11.092 11.091Zm6.082-8.305c-.333-.166-1.97-.971-2.275-1.082-.305-.111-.527-.166-.749.166-.222.333-.86 1.082-1.054 1.304-.194.222-.388.25-.72.083-.333-.166-1.404-.518-2.674-1.65-.988-.882-1.654-1.97-1.848-2.303-.194-.333-.021-.514.146-.679.151-.149.333-.388.5-.582.166-.194.222-.333.333-.555.111-.222.055-.416-.028-.582-.083-.166-.749-1.806-1.026-2.474-.27-.65-.545-.561-.749-.572l-.638-.011a1.226 1.226 0 0 0-.888.416c-.305.333-1.165 1.138-1.165 2.778 0 1.64 1.193 3.224 1.359 3.446.166.222 2.346 3.582 5.685 5.022.794.343 1.413.547 1.896.7.797.254 1.522.218 2.095.132.639-.095 1.97-.804 2.247-1.583.277-.778.277-1.444.194-1.583-.083-.139-.305-.222-.638-.388Z" />
              </svg>
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
