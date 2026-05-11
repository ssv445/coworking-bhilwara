const CHANGES: { lead: string; body: string }[] = [
  {
    lead: 'Mornings get a shape again.',
    body: "The bike leaves the gate at nine. There's a reason to be ready by then. The week starts looking like a week — Mondays feel like Mondays, Saturday feels earned.",
  },
  {
    lead: 'Camera on. Mic clean. Every time.',
    body: 'No “one second, not ready yet.” No toddler in the demo. No pressure cooker on the customer call. The team sees a colleague — and you stop apologising for the background.',
  },
  {
    lead: 'Work and home stop sharing the same room.',
    body: 'You leave at nine. You come back at seven. The boundary is a real gate, not a closed door someone keeps opening. The dinner table goes back to being a dinner table.',
  },
  {
    lead: 'The laptop closes at seven.',
    body: "You can't carry the desk home. Work ends when you cross the gate. The bedroom goes back to being a bedroom — and the bed stops being your office.",
  },
  {
    lead: 'Lunch is with your people again.',
    body: 'Folks who debate IPL between deploys, who send you the same HN thread you were about to send them, who get the joke when prod breaks on a Friday evening. You stop translating yourself at the table.',
  },
  {
    lead: 'You start finishing things again.',
    body: "No “bhaiya ek minute” every fifteen minutes. Two-hour blocks that don't get sliced by the doorbell, the cook, the courier. The PR that sat open all week ships before lunch.",
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
          Six things that quietly shift in the first month. The desk doesn&apos;t
          write your code — it just removes the noise that was getting in the way.
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
          And if your home office is already perfect — the lunch table still isn&apos;t in it.
        </p>
      </div>
    </section>
  );
}
