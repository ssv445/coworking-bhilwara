import Window from './Window';
import { WA_URL } from './whatsapp';

export default function VisitCTA() {
  return (
    <section id="visit" className="section">
      <div className="wrap">
        <div className="section-label">visit</div>
        <h2 className="section-title display" style={{ textAlign: 'center' }}>
          ./say_hi
        </h2>
        <p className="section-sub" style={{ marginInline: 'auto', textAlign: 'center' }}>
          Drop the host a WhatsApp. We&apos;ll reply with a time to come by, see the floor, and meet whoever&apos;s around.
          Bring your laptop if you want to test the internet.
        </p>

        <div style={{ maxWidth: 720, marginInline: 'auto' }}>
          <Window title="send.sh" tag="one tap" dense={true}>
            <div className="term-line prompt">
              <span className="u">you</span>:<span className="p">~</span>
              <span className="arr">$</span>
              <span className="cmd">whatsapp shyam --about=cowork</span>
            </div>
            <div className="term-line out" style={{ marginTop: 6 }}>
              <span className="muted">→ opens WhatsApp with a pre-filled message</span>
            </div>
            <div className="term-line out" style={{ marginTop: 14 }}>
              <span className="hi">
                {
                  '"Hey, I am interested to know more about the CoWorking place, 🤔 may I visit the place tomorrow around 4-5 PM?"'
                }
              </span>
            </div>
          </Window>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 12,
              justifyContent: 'center',
              marginTop: 22,
            }}
          >
            <a
              className="dev-btn dev-btn-wa"
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 15, padding: '14px 22px' }}
            >
              <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
                <path d="M16.001 2.5C8.557 2.5 2.5 8.555 2.5 16c0 2.388.625 4.726 1.815 6.788L2.5 29.5l6.853-1.793A13.453 13.453 0 0 0 16 29.5c7.443 0 13.5-6.057 13.5-13.5S23.444 2.5 16.001 2.5Zm0 24.591a11.04 11.04 0 0 1-5.622-1.535l-.403-.24-4.066 1.066 1.082-3.961-.262-.405A11.024 11.024 0 0 1 4.91 16c0-6.118 4.974-11.091 11.091-11.091 6.119 0 11.092 4.973 11.092 11.091 0 6.119-4.973 11.091-11.092 11.091Zm6.082-8.305c-.333-.166-1.97-.971-2.275-1.082-.305-.111-.527-.166-.749.166-.222.333-.86 1.082-1.054 1.304-.194.222-.388.25-.72.083-.333-.166-1.404-.518-2.674-1.65-.988-.882-1.654-1.97-1.848-2.303-.194-.333-.021-.514.146-.679.151-.149.333-.388.5-.582.166-.194.222-.333.333-.555.111-.222.055-.416-.028-.582-.083-.166-.749-1.806-1.026-2.474-.27-.65-.545-.561-.749-.572l-.638-.011a1.226 1.226 0 0 0-.888.416c-.305.333-1.165 1.138-1.165 2.778 0 1.64 1.193 3.224 1.359 3.446.166.222 2.346 3.582 5.685 5.022.794.343 1.413.547 1.896.7.797.254 1.522.218 2.095.132.639-.095 1.97-.804 2.247-1.583.277-.778.277-1.444.194-1.583-.083-.139-.305-.222-.638-.388Z" />
              </svg>
              WhatsApp host · +91 9116011130
            </a>
            <a className="dev-btn" href="tel:+919116011130" style={{ fontSize: 15, padding: '14px 22px' }}>
              or call →
            </a>
          </div>
          <div style={{ textAlign: 'center', marginTop: 14, fontSize: 12, color: 'var(--text-muted)' }}>
            Mon–Sat · usually replies within ~2h.
          </div>
        </div>
      </div>
    </section>
  );
}
