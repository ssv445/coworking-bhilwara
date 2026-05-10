const FACILITY_TILES: { name: string; mask: string; meta: string; live?: 'available' | 'live' }[] = [
  { name: 'Reserved Desk', mask: 'awesome-desk.svg', meta: 'your name on it · same seat every day', live: 'available' },
  { name: 'Personal Locker', mask: 'personal-locker.svg', meta: 'leave the monitor here · stop carrying a backpack home' },
  { name: 'Gigabit Internet', mask: 'high-speed-internet.svg', meta: 'video calls don\'t freeze · deploys finish fast', live: 'live' },
  { name: '3 Meeting Rooms', mask: 'meeting-room.svg', meta: 'take the call without the doorbell, the dog, or the cooker' },
  { name: '6 Brainstorm Boards', mask: 'brainstorming-area.svg', meta: 'whiteboards · markers · the messy thinking' },
  { name: 'Powerful AC', mask: 'ac-facility.svg', meta: 'May in Bhilwara is no joke · we handle it' },
  { name: 'RO Water', mask: 'clean-environment.svg', meta: 'hot for chai · cold for July' },
  { name: '6KV UPS', mask: 'solar-energy.svg', meta: 'a power cut won\'t cost you a deadline' },
  { name: 'CCTV + Locked Gate', mask: 'security.svg', meta: 'your laptop is safe over lunch' },
  { name: 'Bike Parking', mask: 'ro-water.svg', meta: 'inside the gate · cars roadside' },
];

export default function Facilities() {
  return (
    <section id="facilities" className="section">
      <div className="wrap">
        <div className="section-label">facilities</div>
        <h2 className="section-title display">
          Everything you need.
          <br />
          <span className="muted">Nothing you don&apos;t.</span>
        </h2>
        <p className="section-sub">
          An office wired so the work is the only hard thing about your day.
        </p>

        <div>
          <div
            style={{
              fontSize: 12,
              color: 'var(--text-muted)',
              marginBottom: 14,
              letterSpacing: '0.04em',
            }}
          >
            <span className="accent">$</span> ls -1 facilities/
          </div>
          <div className="facility-grid">
            {FACILITY_TILES.map((t) => (
              <div key={t.name} className="facility-card">
                <span
                  className="icon"
                  style={{
                    WebkitMask: `url(/images/facilities/${t.mask}) center/contain no-repeat`,
                    mask: `url(/images/facilities/${t.mask}) center/contain no-repeat`,
                    background: 'currentColor',
                    color: 'var(--accent)',
                  }}
                ></span>
                <div>
                  <div className="name">{t.name}</div>
                  <div className="meta">{t.meta}</div>
                </div>
                {t.live && (
                  <span className={`badge ${t.live === 'live' ? 'live' : ''}`}>{t.live}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
