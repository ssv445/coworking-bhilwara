export default function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="wrap">
        <div className="section-label">pricing</div>
        <h2 className="section-title display">One number. No fine print.</h2>
        <p className="section-sub">
          ₹3,000/month for a reserved desk · or come and go (₹300/day · ₹1,000/week).
          No contract, no lock-in. Tea&apos;s complimentary (and it&apos;s real tea).
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
                    shared <span className="dim">{'// common areas'}</span>
                  </span>
                  <span className="dim">10 items</span>
                </div>
                <div className="items">
                  <span className="price-chip">gigabit wifi+cable</span>
                  <span className="price-chip">3 meeting rooms</span>
                  <span className="price-chip">brainstorm boards</span>
                  <span className="price-chip">RO water (hot/cold)</span>
                  <span className="price-chip">tea ☕</span>
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
                  <span className="dim">5 items</span>
                </div>
                <div className="items">
                  <span className="price-chip">coffee</span>
                  <span className="price-chip">monitor</span>
                  <span className="price-chip">kb+mouse</span>
                  <span className="price-chip">10 prints/mo</span>
                  <span className="price-chip">stationery</span>
                </div>
              </div>
            </div>
          </div>

          <div className="price-card price-card-flex">
            <div className="price-headline">
              <span className="num tabnums">300</span>
              <span className="per">/ day · ₹1,000 / week</span>
            </div>
            <div className="price-tag">
              <span className="accent">●</span> drop-in &nbsp;·&nbsp;{' '}
              <span className="accent">●</span> walk in any working day &nbsp;·&nbsp;{' '}
              <span className="accent">●</span> no commitment
            </div>

            <div className="price-flex-body">
              <p className="dim">For when home is mostly fine — but not on Tuesday.</p>
              <ul className="price-flex-list">
                <li>
                  <strong>day pass · ₹300</strong>
                  <span className="dim"> — same desk, wifi, chair, RO water, AC. The lunch table you can&apos;t buy at home.</span>
                </li>
                <li>
                  <strong>week pass · ₹1,000</strong>
                  <span className="dim"> — five days · works out to ₹200/day if you do the math.</span>
                </li>
                <li>
                  <strong>first day free</strong>
                  <span className="dim"> — try before you pay. Message the host, walk in.</span>
                </li>
              </ul>
              <p className="dim price-flex-note">
                If you end up here more than 12 days a month, the ₹3,000 monthly seat
                is the better trade — and it&apos;s reserved for you, same seat every day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
