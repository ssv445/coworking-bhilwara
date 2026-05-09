export default function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="wrap">
        <div className="section-label">pricing</div>
        <h2 className="section-title display">One number. No fine print.</h2>
        <p className="section-sub">
          ₹3,000/month · ~₹100/day · cheaper than two cafe lunches. Covers everything below.
          Tea&apos;s extra (it&apos;s real tea). No contract, no lock-in — pay for the month,
          walk away anytime.
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

        </div>
      </div>
    </section>
  );
}
