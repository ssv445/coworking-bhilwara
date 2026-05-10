// Photo placeholder — drop /public/images/host/shyam.jpg and flip HAS_PHOTO.
const HAS_PHOTO = true;

const FACTS: { k: string; v: string }[] = [
  { k: 'role', v: 'host · still writing code most days' },
  { k: 'sits_in_seat', v: '14 · same chair you’d get' },
  { k: 'vets_every_member', v: 'personally · quiet work, no guest traffic' },
  { k: 'replies_in', v: 'usually under 2 hours, Mon–Sat' },
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
          who needed this place for himself first — and who&apos;s on it most days,
          shipping code at the same kind of desk you&apos;d get.
        </p>

        <div className="host-card">
          <div className="host-portrait">
            {HAS_PHOTO ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src="/images/host/shyam.jpg" alt="Shyam — host of Ready CoWork Bhilwara" />
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
              Bhilwara native. Started this floor in 2019 because there was nowhere
              quiet in town to ship from. Six years later, 13 of us share it — and
              I&apos;m still on it most weekdays, writing TypeScript at the same kind
              of desk you&apos;d get.
            </p>
            <p className="host-line">
              I vet every member personally. That&apos;s why the lunch table is what
              it is. If you walk in for a visit, I&apos;ll be the one showing you
              around — and probably the one who replies to your message before you
              reach the gate.
            </p>

            <dl className="host-facts">
              {FACTS.map((f) => (
                <div key={f.k} className="host-fact">
                  <dt className="host-fact-k">{f.k}</dt>
                  <dd className="host-fact-v">{f.v}</dd>
                </div>
              ))}
            </dl>

            <p className="host-line dim host-more">
              More about my work: <a href="https://shyamverma.com" target="_blank" rel="noreferrer noopener">shyamverma.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
