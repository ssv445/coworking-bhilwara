// TODO: drop real JPGs into /public/images/floor/ matching these filenames,
// then set HAS_PHOTOS = true. Slots show clean placeholders until then.
const HAS_PHOTOS = false;

const PHOTOS: { src: string; alt: string; caption: string; tall?: boolean }[] = [
  {
    src: '/images/floor/wide.jpg',
    alt: 'The floor at 10am — most desks taken, quiet hum',
    caption: '10am · most seats taken · quiet hum',
    tall: true,
  },
  {
    src: '/images/floor/desk.jpg',
    alt: 'A reserved desk with monitor, plant, headphones',
    caption: 'one of 32 reserved desks',
  },
  {
    src: '/images/floor/meeting-room.jpg',
    alt: 'Meeting room with whiteboard and 4 chairs',
    caption: 'one of 3 meeting rooms',
  },
  {
    src: '/images/floor/kitchen.jpg',
    alt: 'Kitchen corner with tea kettle and snacks',
    caption: 'kitchen · tea brewing most afternoons',
  },
  {
    src: '/images/floor/entrance.jpg',
    alt: 'Front gate with the building number',
    caption: '67 East Extension · the gate',
    tall: true,
  },
  {
    src: '/images/floor/parking.jpg',
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
          Real shots of the floor. No stock, no glow-up. The plant in seat 14 is real.
        </p>

        <div className="photo-grid">
          {PHOTOS.map((p) => (
            <figure key={p.src} className={`photo-card${p.tall ? ' tall' : ''}`}>
              <div className="photo-frame">
                {HAS_PHOTOS ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={p.src} alt={p.alt} loading="lazy" />
                ) : (
                  <div className="photo-fallback" aria-label={p.alt}>
                    <span className="dim">{p.caption}</span>
                  </div>
                )}
              </div>
              {HAS_PHOTOS && <figcaption>{p.caption}</figcaption>}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
