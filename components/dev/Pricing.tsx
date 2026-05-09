export default function Pricing() {
  const TAKEN = [0, 1, 2, 4, 5, 7, 9, 10, 12, 15, 17, 19, 22];
  const YOU = 26;
  const seats = Array.from({ length: 32 }, (_, i) => {
    if (TAKEN.includes(i)) return 'taken';
    if (i === YOU) return 'you';
    return 'free';
  });

  return (
    <section id="pricing" className="section">
      <div className="wrap">
        <div className="section-label">pricing</div>
        <h2 className="section-title display">One number. No fine print.</h2>
        <p className="section-sub">
          ₹3,000/month covers everything below. Tea&apos;s extra (it&apos;s real tea). No contract, no
          lock-in — pay for the current month, walk away.
        </p>

        <div className="price-grid">
          <div className="price-card">
            <div className="price-headline">
              <span className="num tabnums">3,000</span>
              <span className="per">/ month · per seat</span>
            </div>
            <div className="price-tag">
              <span className="accent">●</span> no contract &nbsp;·&nbsp;{' '}
              <span className="accent">●</span> no lock-in &nbsp;·&nbsp;{' '}
              <span className="accent">●</span> no hidden fees
            </div>

            <div className="price-rows">
              <div className="price-row">
                <div className="head">
                  <span>
                    reserved <span className="dim">{'// yours alone'}</span>
                  </span>
                  <span className="dim">4 items</span>
                </div>
                <div className="items">
                  <span className="price-chip">desk</span>
                  <span className="price-chip">office chair</span>
                  <span className="price-chip">locker</span>
                  <span className="price-chip">backup power</span>
                </div>
              </div>
              <div className="price-row">
                <div className="head">
                  <span>
                    shared <span className="dim">{'// common floor'}</span>
                  </span>
                  <span className="dim">9 items</span>
                </div>
                <div className="items">
                  <span className="price-chip">gigabit wifi+cable</span>
                  <span className="price-chip">3 meeting rooms</span>
                  <span className="price-chip">brainstorm boards</span>
                  <span className="price-chip">RO water (hot/cold)</span>
                  <span className="price-chip">microwave</span>
                  <span className="price-chip">fridge</span>
                  <span className="price-chip">parking</span>
                  <span className="price-chip">washroom</span>
                  <span className="price-chip">library</span>
                </div>
              </div>
              <div className="price-row">
                <div className="head">
                  <span>
                    value-added <span className="dim">{'// optional'}</span>
                  </span>
                  <span className="dim">6 items</span>
                </div>
                <div className="items">
                  <span className="price-chip">tea ☕</span>
                  <span className="price-chip">coffee</span>
                  <span className="price-chip">monitor</span>
                  <span className="price-chip">kb+mouse</span>
                  <span className="price-chip">10 prints/mo</span>
                  <span className="price-chip">stationery</span>
                </div>
              </div>
            </div>
          </div>

          <div className="seat-meter">
            <h3 className="display">19 of 32 seats open</h3>
            <p className="sub">A live-ish snapshot of the floor. Hover a seat — yours could be the highlighted one.</p>
            <div className="seat-grid" role="img" aria-label="Seat availability map">
              {seats.map((s, i) => (
                <div
                  key={i}
                  className={`seat ${s}`}
                  title={
                    s === 'taken'
                      ? `seat ${i + 1} · taken`
                      : s === 'you'
                        ? `seat ${i + 1} · could be yours`
                        : `seat ${i + 1} · free`
                  }
                ></div>
              ))}
            </div>
            <div className="legend">
              <span>
                <i className="free"></i> free (19)
              </span>
              <span>
                <i className="taken"></i> taken (13)
              </span>
              <span>
                <i className="you"></i> could be yours
              </span>
            </div>
            <div
              style={{
                borderTop: '1px dashed var(--border-strong)',
                marginTop: 22,
                paddingTop: 18,
                fontSize: 12,
                color: 'var(--text-muted)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <span>founded</span>
                <strong className="tabnums">2019</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <span>average tenure</span>
                <strong className="tabnums">14 months</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>avg outage downtime</span>
                <strong className="tabnums">~3 min/mo</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
