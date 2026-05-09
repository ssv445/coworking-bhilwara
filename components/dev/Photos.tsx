const PHOTOS: { src: string; alt: string; caption: string; tall?: boolean }[] = [
  {
    src: '/images/facilities-page/energetic-environment.jpg',
    alt: 'Members at their desks — laptops, monitors, headphones, "Make Something People Want" poster',
    caption: 'a Wednesday afternoon at the floor',
    tall: true,
  },
  {
    src: '/images/facilities-page/structured-cabling.jpg',
    alt: 'Cisco network rack with structured cabling',
    caption: 'gigabit · Cat6 to every desk · not wifi-only',
  },
  {
    src: '/images/facilities-page/ups.png',
    alt: '6KV UPS unit with battery bank',
    caption: '6KV UPS · 8h runtime · power cuts don’t end your workday',
  },
  {
    src: '/images/facilities-page/locker.jpg',
    alt: 'Personal lockers numbered 23 and 24 with keys',
    caption: 'your locker · stop carrying the monitor home',
  },
  {
    src: '/images/facilities-page/library.jpg',
    alt: 'Bookshelf with mixed Hindi and English titles, programming books',
    caption: 'the shared shelf · Linux, HTML5, Manorma, 50 Shades — yes, all of it',
    tall: true,
  },
  {
    src: '/images/facilities-page/parking.jpg',
    alt: 'Bike parking inside the compound, greenery around',
    caption: 'inside the gate · bikes safe · plants real',
  },
];

export default function Photos() {
  return (
    <section id="photos" className="section">
      <div className="wrap">
        <div className="section-label">photos</div>
        <h2 className="section-title display">
          What you&apos;ll see
          <br />
          <span className="muted">when you walk in.</span>
        </h2>
        <p className="section-sub">
          Real shots of the floor. No stock, no glow-up.
        </p>

        <div className="photo-grid">
          {PHOTOS.map((p) => (
            <figure key={p.src} className={`photo-card${p.tall ? ' tall' : ''}`}>
              <div className="photo-frame">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.src} alt={p.alt} loading="lazy" />
              </div>
              <figcaption>{p.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
