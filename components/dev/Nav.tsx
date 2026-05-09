import Link from 'next/link';
import { WA_URL } from './whatsapp';

export default function Nav() {
  return (
    <nav className="dev-nav">
      <div className="wrap nav-inner">
        <Link href="/" className="nav-brand" style={{ textDecoration: 'none' }}>
          <span>
            <span className="prompt-user">~</span>/<span className="prompt-path">ready-coworking-bhilwara</span>
          </span>
          <span className="caret"></span>
        </Link>
        <div className="nav-menu">
          <a href="#facilities">facilities</a>
          <a href="#pricing">pricing</a>
          <a href="#faq">faq</a>
          <a href="#visit">visit</a>
        </div>
        <a className="nav-cta" href={WA_URL} target="_blank" rel="noopener noreferrer">
          <span className="dot"></span>
          WhatsApp host
        </a>
      </div>
    </nav>
  );
}
