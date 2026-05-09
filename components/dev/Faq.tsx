'use client';

import { useState, type ReactNode } from 'react';

const FAQ: { q: string; sub: string; a: ReactNode }[] = [
  {
    q: 'who.canJoin',
    sub: `Who's allowed to join?`,
    a: (
      <>
        Computer professionals only — devs, designers, data folks, hardware people, founders building tech. We vet for
        cultural fit. <code>--strict</code>.
      </>
    ),
  },
  {
    q: 'guests.allowed',
    sub: 'Can I bring guests inside?',
    a: (
      <>
        No. The floor is private. You&apos;re welcome to meet friends/guests <em>outside</em> the compound — there&apos;s a
        chai stall a minute away.
      </>
    ),
  },
  {
    q: 'internet.usage',
    sub: `What's the internet usage policy?`,
    a: (
      <>
        Fair use. Stream code, not Netflix. The pipe is shared between 32 desks — please leave the movie
        marathons and personal downloads for home.
      </>
    ),
  },
  {
    q: 'meetings.where',
    sub: 'Where do meetings happen?',
    a: (
      <>
        3 dedicated rooms. Take calls there, not at your desk. Book ad-hoc on the WhatsApp group; it&apos;s usually free.
      </>
    ),
  },
  {
    q: 'parking.available',
    sub: 'Is parking available?',
    a: (
      <>
        Bikes and scooties inside the compound. Cars park on the street — Subhash Nagar is calm, parking&apos;s rarely a
        fight.
      </>
    ),
  },
  {
    q: 'printer.quota',
    sub: 'How much printing is included?',
    a: <>10 pages/month free, then ₹2/page. Just covering toner — no margin in printing.</>,
  },
  {
    q: 'tea.coffee.included',
    sub: 'Is tea and coffee included?',
    a: (
      <>
        Optional, paid, real. We have a kitchen and someone who runs it. Monthly opt-in. The tea is decent, the coffee
        depends on your standards.
      </>
    ),
  },
  {
    q: 'power.outageHandling',
    sub: 'What happens during power cuts?',
    a: (
      <>
        6KV UPS holds the floor for ~8 hours. Desks, lights, wifi, cable — all stay up. AC, microwave, and printer take
        the hit. Long enough that we&apos;ve never lost a workday.
      </>
    ),
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number>(0);
  return (
    <section id="faq" className="section">
      <div className="wrap">
        <div className="section-label">faq</div>
        <h2 className="section-title display">
          The questions you&apos;d ask
          <br />
          <span className="muted">before signing anything.</span>
        </h2>
        <p className="section-sub">
          Real answers, no marketing. Tap one to expand.
        </p>
        <div className="faq-list">
          {FAQ.map((item, i) => (
            <div key={i} className="faq-item" data-open={open === i}>
              <button
                type="button"
                className="faq-q"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                <span className="caret">▶</span>
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
                <span className="tk-fn">{item.q}</span>
                <span className="faq-sub dim" style={{ fontSize: 12, marginLeft: 8 }}>{item.sub}</span>
              </button>
              <div className="faq-a">{item.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
