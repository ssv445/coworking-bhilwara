import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="dev-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <Logo size={32} />
              <strong>Ready CoWork Bhilwara</strong>
            </div>
            <p className="addr">
              67, EAST EXTENSION,
              <br />
              SUBHASH NAGAR, BHILWARA,
              <br />
              RAJASTHAN, INDIA · 311001
              <br />
              <a
                href="https://maps.google.com/?q=67+EAST+EXTENSION+SUBHASH+NAGAR+BHILWARA+RAJASTHAN+311001"
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
              <li><a href="tel:+919116011130">+91 9116011130</a></li>
              <li>
                <a href="mailto:shyam+coworking@readybytes.in">
                  shyam+coworking@
                  <br />
                  readybytes.in
                </a>
              </li>
              <li>
                <a href="https://wa.me/919116011130" target="_blank" rel="noopener noreferrer">
                  WhatsApp →
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4>system</h4>
            <ul style={{ color: 'var(--text-muted)' }}>
              <li><span className="dim">version</span> 8.2.0</li>
              <li><span className="dim">since</span> 2019</li>
              <li><span className="dim">seats</span> 32</li>
              <li><span className="dim">hours</span> Mon–Sat 9–9</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© Ready CoWork Bhilwara · all rights reserved</span>
          <span>built for techies, by techies · v8.2.0</span>
        </div>
      </div>
    </footer>
  );
}
