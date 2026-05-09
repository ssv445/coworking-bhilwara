// Photo placeholder — drop /public/images/host/shyam.jpg and flip HAS_PHOTO.
const HAS_PHOTO = false;

const FACTS: { k: string; v: string }[] = [
  { k: 'role', v: 'host · full-stack dev · founder, Ready Bytes' },
  { k: 'in_bhilwara_since', v: '2001 (B.E. CS, MLV Bhilwara · still here)' },
  { k: 'years_shipping', v: '20+ · started at Cadence, Infosys before that' },
  { k: 'currently_building', v: 'ReelAbilities (USA), LinkStorm (Spain) · remote, from this floor' },
  { k: 'past_exits', v: 'PayPlans → StackIdeas (2017) · ExchangeRateIQ (2017)' },
  { k: 'open_source', v: 'Stack Overflow 10k+ · GitHub @ssv445 · NPM @readybytes' },
  { k: 'sits_in_seat', v: '14 · same chair as everyone else' },
  { k: 'replies_in', v: 'usually under 2 hours, Mon–Sat' },
];

const SHIPPED: { name: string; note: string; href?: string }[] = [
  { name: 'PayPlans', note: '#1 Joomla payment plugin · 150K+ installs · acquired 2017', href: 'https://stackideas.com/blog/we-have-acquired-payplans-from-readybytes' },
  { name: 'EcoMitram', note: '1.2M installs · volunteer architect since 2021', href: 'https://ecomitram.app' },
  { name: 'ExchangeRateIQ', note: 'remittance comparison · acquired 2018' },
  { name: 'ReelAbilities', note: 'multi-tenant film festival platform · Next.js 15 · ongoing', href: 'https://reelabilities.org' },
  { name: 'LinkStorm', note: 'AI internal-link SEO · co-founded 2023', href: 'https://linkstorm.io' },
];

export default function Founder() {
  return (
    <section id="host" className="section">
      <div className="wrap">
        <div className="section-label">host</div>
        <h2 className="section-title display">
          Built by someone who sits
          <br />
          <span className="muted">at the next desk.</span>
        </h2>
        <p className="section-sub">
          The floor isn&apos;t run by a landlord. It&apos;s run by a working developer
          who&apos;s been shipping from Bhilwara since 2009 — and who needed this place
          for himself first.
        </p>

        <div className="host-card">
          <div className="host-portrait">
            {HAS_PHOTO ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src="/images/host/shyam.jpg" alt="Shyam Verma — host of Ready CoWork Bhilwara" />
            ) : (
              <div className="host-portrait-fallback" aria-hidden="true">
                <span className="host-initial">S</span>
                <span className="dim host-portrait-cap">// portrait pending</span>
              </div>
            )}
          </div>

          <div className="host-body">
            <h3 className="host-name">Shyam Verma</h3>
            <p className="host-line">
              Born and schooled in Bhilwara. B.E. Computer Science from MLV in 2005.
              Did time at Infosys and Cadence Design Systems on the formal-verifier
              team — then came back here in 2009 and started Ready Bytes from a
              one-room office because there was no quiet place to ship code from.
            </p>
            <p className="host-line">
              Built and sold two SaaS products since: PayPlans (the #1 Joomla payment
              plugin, 150K+ installs, acquired by StackIdeas) and ExchangeRateIQ.
              Currently shipping for ReelAbilities (USA) and LinkStorm (Spain) —
              both remote, both from a desk on this floor. Volunteer architect on
              EcoMitram, which crossed 1.2M installs.
            </p>
            <p className="host-line">
              Ready CoWork started in 2019 as the room I needed for myself. Six
              years later, 13 of us share it — and I&apos;m still on it most weekdays,
              writing TypeScript at the same kind of desk you&apos;d get. I vet every
              member personally. That&apos;s why the lunch table is what it is. If you
              walk in for a visit, I&apos;ll be the one showing you around.
            </p>

            <dl className="host-facts">
              {FACTS.map((f) => (
                <div key={f.k} className="host-fact">
                  <dt className="host-fact-k">{f.k}</dt>
                  <dd className="host-fact-v">{f.v}</dd>
                </div>
              ))}
            </dl>

            <div className="host-shipped">
              <div className="host-shipped-label">
                <span className="accent">$</span> ls -1 shipped/
              </div>
              <ul className="host-shipped-list">
                {SHIPPED.map((s) => (
                  <li key={s.name} className="host-shipped-item">
                    <span className="host-shipped-name">{s.name}</span>
                    <span className="host-shipped-note">{s.note}</span>
                    {s.href && (
                      <a
                        className="host-shipped-link"
                        href={s.href}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        ↗
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <p className="host-line dim host-more">
              More: <a href="https://shyamverma.com" target="_blank" rel="noreferrer noopener">shyamverma.com</a>
              {' · '}
              <a href="https://github.com/ssv445" target="_blank" rel="noreferrer noopener">github</a>
              {' · '}
              <a href="https://www.linkedin.com/in/ssv445" target="_blank" rel="noreferrer noopener">linkedin</a>
              {' · '}
              <a href="https://stackoverflow.com/users/46605/shyam-verma" target="_blank" rel="noreferrer noopener">stack overflow</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
