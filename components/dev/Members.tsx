const CHANGES: { lead: string; body: string }[] = [
  {
    lead: 'You bathe before nine.',
    body: 'When the bike has to leave the gate, showing up to your own life in pajamas stops feeling normal.',
  },
  {
    lead: 'Your family stops asking what you do all day.',
    body: 'You leave at 9. You come back at 7. That looks like a job. They start respecting it. So do you.',
  },
  {
    lead: 'The kids are in school. The Zoom call is not.',
    body: 'No toddler in the standup, no doorbell on the demo, no pressure cooker in the customer call.',
  },
  {
    lead: 'The laptop closes at 7.',
    body: 'You can’t carry the desk home. Work ends when you walk out the gate. The bed stops being your office.',
  },
  {
    lead: 'Lunch is with adults who code for a living.',
    body: 'Not LIC sales, not the relative asking about marriage. Someone who knows what useEffect does, and who will help you debug it.',
  },
  {
    lead: 'You have an address that means something.',
    body: '"67 East Extension, Subhash Nagar" on your invoice. Clients see a workplace. So does the bank, the visa officer, your in-laws.',
  },
];

export default function Members() {
  return (
    <section id="changes" className="section">
      <div className="wrap">
        <div className="section-label">why-leave-home</div>
        <h2 className="section-title display">
          What changes when you stop
          <br />
          <span className="muted">working from home.</span>
        </h2>
        <p className="section-sub">
          Six things that quietly shift in the first month. The desk fixes them
          before the desk fixes anything else.
        </p>

        <ol className="changes-list">
          {CHANGES.map((c, i) => (
            <li key={i} className="change-item">
              <span className="change-num">{String(i + 1).padStart(2, '0')}</span>
              <div className="change-text">
                <h3 className="change-lead">{c.lead}</h3>
                <p className="change-body">{c.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="section-foot dim">
          None of these need a coworking space. They just don&apos;t happen at home.
        </p>
      </div>
    </section>
  );
}
