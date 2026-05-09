const PHOTOS: { src: string; alt: string; caption: string; tall?: boolean }[] = [
  {
    src: '/images/facilities-page/energetic-environment.jpg',
    alt: 'The floor mid-morning — most desks taken, quiet hum',
    caption: 'mid-morning · most seats taken · quiet hum',
    tall: true,
  },
  {
    src: '/images/facilities-page/desk.jpg',
    alt: 'A reserved desk with monitor and chair',
    caption: 'one of 32 reserved desks',
  },
  {
    src: '/images/facilities-page/meeting-rooms.jpg',
    alt: 'Meeting room with table and chairs',
    caption: 'one of 3 meeting rooms',
  },
  {
    src: '/images/facilities-page/brainstorm-boards.jpg',
    alt: 'Whiteboards for messy thinking',
    caption: '6 whiteboards · for messy thinking',
  },
  {
    src: '/images/facilities-page/library.jpg',
    alt: 'Library nook on the floor',
    caption: 'a quiet corner to read',
    tall: true,
  },
  {
    src: '/images/facilities-page/parking.jpg',
    alt: 'Bike parking inside the compound',
    caption: 'bikes inside · cars roadside',
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
