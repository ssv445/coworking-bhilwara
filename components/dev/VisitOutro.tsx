export default function VisitOutro() {
  return (
    <section id="visit-outro" className="section">
      <div className="wrap" style={{ textAlign: 'center', maxWidth: 640 }}>
        <div className="section-label">visit</div>
        <h2 className="section-title display">
          Ready to see the office?
        </h2>
        <p className="section-sub" style={{ marginInline: 'auto' }}>
          One short message. Pick a day, walk in, work a full day on us — same desk,
          same wifi, same chair. No charge for the trial.
        </p>
        <a className="dev-btn dev-btn-primary" href="#visit" style={{ fontSize: 15, padding: '14px 22px' }}>
          Say hi to the host
          <span aria-hidden="true">→</span>
        </a>
        <p className="dim" style={{ marginTop: 14, fontSize: 12 }}>
          A short form · host replies within ~2 hours, Mon–Sat.
        </p>
      </div>
    </section>
  );
}
