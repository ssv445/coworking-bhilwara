import Window from './Window';
import JsonView from './JsonView';

const PACKAGE_JSON = {
  name: 'ready-cowork-bhilwara',
  version: '8.2.0',
  reserved: ['desk', 'chair', 'locker', 'backup-power'],
  shared: ['gigabit-internet', '3 meeting rooms', 'RO water', 'parking', 'CCTV'],
  license: '₹3000/month · no lock-in',
  __comments: {
    reserved: 'yours alone',
    shared: 'common to floor',
  },
};

const FACILITY_TILES: { name: string; mask: string; meta: string; live?: 'available' | 'live' }[] = [
  { name: 'Reserved Desk', mask: 'awesome-desk.svg', meta: '32 seats · your name', live: 'available' },
  { name: 'Personal Locker', mask: 'personal-locker.svg', meta: '1 per seat · key issued' },
  { name: 'Gigabit Internet', mask: 'high-speed-internet.svg', meta: '1Gbps wifi + cat6', live: 'live' },
  { name: '3 Meeting Rooms', mask: 'meeting-room.svg', meta: 'for video calls · book ad-hoc' },
  { name: '6 Brainstorm Boards', mask: 'brainstorming-area.svg', meta: 'whiteboards + markers' },
  { name: 'Powerful AC', mask: 'ac-facility.svg', meta: 'works in May too' },
  { name: 'RO Water', mask: 'clean-environment.svg', meta: 'hot & cold' },
  { name: '6KV UPS', mask: 'solar-energy.svg', meta: '8h backup · printer/AC excluded' },
  { name: 'CCTV + Locked Gate', mask: 'security.svg', meta: 'not a paranoia thing' },
  { name: 'Bike Parking', mask: 'ro-water.svg', meta: 'inside · cars roadside' },
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
          A floor wired for shipping code: a desk that&apos;s yours, a cable that&apos;s gigabit, and a UPS that
          outlasts the grid. Scroll the package or skim the grid.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 32 }}>
          <Window title="package.json" tag="manifest" dense={true}>
            <JsonView data={PACKAGE_JSON} />
          </Window>

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
      </div>
    </section>
  );
}
