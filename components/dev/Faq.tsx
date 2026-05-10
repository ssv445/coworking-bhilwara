'use client';

import { useState, type ReactNode } from 'react';

const FAQ: { q: string; sub: string; a: ReactNode }[] = [
  {
    q: 'who.canJoin',
    sub: `Who's allowed to join?`,
    a: (
      <>
        Computer professionals only — devs, designers, data folks, hardware people, founders building tech. The bar is
        about how you work in the office: quiet focus, respectful calls, headphones on, no guest traffic. Seniority
        doesn&apos;t matter — 1–2yr juniors are welcome and most members started at that point in their career.
      </>
    ),
  },
  {
    q: 'invoice.gst',
    sub: 'Can I get a GST invoice for reimbursement?',
    a: (
      <>
        Yes — monthly invoice in your company&apos;s name. Message the host with your GSTIN before your first month and
        the invoice format gets confirmed up front. Most members use it for employer reimbursement.
      </>
    ),
  },
  {
    q: 'guests.allowed',
    sub: 'Can I bring guests inside?',
    a: (
      <>
        No. The office is private. You&apos;re welcome to meet friends/guests <em>outside</em> the compound — there&apos;s a
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
        3 dedicated rooms. Take calls there, not at your desk. No booking system — peek in, if it&apos;s free it&apos;s
        yours. With 32 desks and 13 of us regular, all three rooms taken at once is rare.
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
        Tea is complimentary — real chai, brewed in the kitchen, included in your seat. Coffee is optional, monthly
        opt-in (the coffee depends on your standards).
      </>
    ),
  },
  {
    q: 'power.outageHandling',
    sub: 'What happens during power cuts?',
    a: (
      <>
        6KV UPS holds the office for ~8 hours. Desks, lights, wifi, cable — all stay up. AC, microwave, and printer take
        the hit. Long enough that we&apos;ve never lost a workday.
      </>
    ),
  },
  {
    q: 'trial.dayPass',
    sub: 'Can I try a day before committing?',
    a: (
      <>
        Yes. Message the host, walk in for a working day — your bike, your laptop, our wifi and chair. No charge for
        the first day. If it fits, you pick: monthly seat (₹3,000), week pass (₹1,000), or drop in by the day (₹300).
        If it doesn&apos;t, no awkward conversation.
      </>
    ),
  },
  {
    q: 'summer.heatHandling',
    sub: 'How does the office handle Bhilwara summers?',
    a: (
      <>
        AC pre-cooled by 9am so you don&apos;t walk in to a furnace. Covered bike parking — your seat doesn&apos;t
        scorch through the lunch break. Cold RO water on tap. May–June is the most-loved months at the office, not the
        most dreaded.
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
