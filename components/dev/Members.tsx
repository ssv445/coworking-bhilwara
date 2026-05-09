const CHANGES: { lead: string; body: string }[] = [
  {
    lead: 'Pajamas stop feeling normal.',
    body: 'The bike has to leave the gate at nine. So you wear actual clothes. You shower without negotiating with yourself. The week starts looking like a week again.',
  },
  {
    lead: 'Camera on. Mic clean. Every time.',
    body: 'No “one second, not ready yet.” No toddler in the demo. No pressure cooker on the customer call. The team sees a colleague — not a corner of your bedroom.',
  },
  {
    lead: 'Your family quietly starts calling it work.',
    body: 'You leave at nine. You come back at seven. That looks like a job, so it gets treated like one. The question “what do you actually do all day” stops being a question.',
  },
  {
    lead: 'The laptop closes at seven.',
    body: 'You can’t carry the desk home. Work ends when you cross the gate. The bedroom goes back to being a bedroom — and the bed stops being your office.',
  },
  {
    lead: 'Lunch is with your people again.',
    body: 'Folks who debate IPL between deploys, who already have an opinion on Cursor vs Claude Code, who send you the same HN thread you were about to send them. You stop translating yourself at the table.',
  },
  {
    lead: 'You start finishing things again.',
    body: 'No “bhaiya ek minute” every fifteen minutes. Two-hour blocks that don’t get sliced by the doorbell, the cook, the courier. The PR that sat open all week ships before lunch.',
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
          None of these need a coworking space. They just don&apos;t happen at home.
        </p>
      </div>
    </section>
  );
}
