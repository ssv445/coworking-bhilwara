import Logo from './Logo';
import PhadBorder from './PhadBorder';
import { BRAND, CONTACT, ADDRESS, HOURS, telHref, waUrl } from '@/lib/business';

const mapsQuery = encodeURIComponent(
  `${ADDRESS.street}, ${ADDRESS.city}, ${ADDRESS.region} ${ADDRESS.postalCode}`,
);

export default function Footer() {
  return (
    <footer className="dev-footer">
      <PhadBorder />
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <Logo size={32} />
              <strong>{BRAND.name}</strong>
            </div>
            <p className="addr">
              {ADDRESS.street},
              <br />
              {ADDRESS.city}, {ADDRESS.region},
              <br />
              India · {ADDRESS.postalCode}
              <br />
              <a
                href={`https://maps.google.com/?q=${mapsQuery}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                view on maps →
              </a>
            </p>
          </div>
          <div>
            <h4>nav</h4>
            <ul>
              <li><a href="#facilities">Facilities</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#visit">Visit</a></li>
            </ul>
          </div>
          <div>
            <h4>contact</h4>
            <ul>
              <li><a href={telHref}>{CONTACT.phoneDisplay}</a></li>
              <li>
                <a href={`mailto:${CONTACT.email}`}>
                  shyam+coworking@
                  <br />
                  readybytes.in
                </a>
              </li>
              <li>
                <a href={waUrl()} target="_blank" rel="noopener noreferrer">
                  WhatsApp →
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4>system</h4>
            <ul style={{ color: 'var(--text-muted)' }}>
              <li><span className="dim">since</span> {BRAND.foundedYear}</li>
              <li><span className="dim">seats</span> {BRAND.seats}</li>
              <li><span className="dim">hours</span> {HOURS.displayShort}</li>
              <li><span className="dim">owned by</span> woman-led business</li>
              <li><span className="dim">plus code</span> {ADDRESS.plusCode}</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {BRAND.name} · all rights reserved</span>
          <span className="phad-attr">
            <span className="dot" aria-hidden="true"></span>
            border inspired by Bhilwara&apos;s Phad scrolls
          </span>
        </div>
      </div>
    </footer>
  );
}
