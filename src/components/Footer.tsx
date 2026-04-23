import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">
            <svg viewBox="0 0 520 200" xmlns="http://www.w3.org/2000/svg" style={{ height: '60px', width: 'auto', filter: 'drop-shadow(0 0 8px rgba(212,175,55,.3))' }}>
              <defs>
                <linearGradient id="fg1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#D4AF37' }} />
                  <stop offset="50%" style={{ stopColor: '#FFC107' }} />
                  <stop offset="100%" style={{ stopColor: '#B8860B' }} />
                </linearGradient>
                <linearGradient id="fg2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#B8860B' }} />
                  <stop offset="50%" style={{ stopColor: '#D4AF37' }} />
                  <stop offset="100%" style={{ stopColor: '#B8860B' }} />
                </linearGradient>
              </defs>
              <rect x="6" y="6" width="508" height="188" fill="none" stroke="url(#fg2)" strokeWidth="1" rx="2" opacity="0.5" />
              <rect x="24" y="20" width="52" height="18" rx="2" fill="none" stroke="#C62828" strokeWidth="1" />
              <text x="50" y="32.5" fontFamily="Georgia,serif" fontSize="8.5" fontWeight="bold" fill="#C62828" textAnchor="middle" letterSpacing="1">HALAL</text>
              <g transform="translate(218,14)">
                <polygon points="42,0 50,16 58,4 54,20 30,20 26,4 34,16" fill="url(#fg1)" opacity="0.9" />
                <rect x="26" y="18" width="32" height="4" rx="1" fill="url(#fg1)" />
                <circle cx="42" cy="3" r="2.5" fill="#FFF8E1" opacity="0.8" />
              </g>
              <line x1="30" y1="48" x2="490" y2="48" stroke="url(#fg2)" strokeWidth="0.7" opacity="0.35" />
              <text x="260" y="100" fontFamily="Georgia,'Times New Roman',serif" fontSize="52" fontWeight="700" fill="url(#fg1)" textAnchor="middle" letterSpacing="10">FOOD</text>
              <text x="260" y="140" fontFamily="Georgia,'Times New Roman',serif" fontSize="38" fontWeight="400" fill="#FFF8E1" textAnchor="middle" letterSpacing="16">PALACE</text>
              <line x1="30" y1="152" x2="490" y2="152" stroke="url(#fg2)" strokeWidth="0.7" opacity="0.35" />
              <text x="260" y="167" fontFamily="Georgia,'Times New Roman',serif" fontSize="10" fill="#8D6E63" textAnchor="middle" letterSpacing="4">FAMILY  RESTAURANT</text>
              <text x="260" y="182" fontFamily="Georgia,'Times New Roman',serif" fontSize="9" fontStyle="italic" fill="#D4AF37" textAnchor="middle" opacity="0.8" letterSpacing="1">— The Real Taste of Malabar —</text>
            </svg>
          </div>
          <div className="footer-tagline">"A warm premium food experience using golden luxury tones — reflecting rich Indian hospitality since 1998."</div>
        </div>
        <div className="footer-cols">
          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#menu">Full Menu</a></li>
              <li><a href="#reservations">Reservations</a></li>
              <li><a href="#">Private Dining</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><span>12, Palace Road, MG Road</span></li>
              <li><span>Bengaluru – 560001</span></li>
              <li><span>+91 80 4567 8900</span></li>
              <li><span>dine@foodpalaces.in</span></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Hours</h4>
            <ul>
              <li><span>Mon–Fri: 12 PM – 11 PM</span></li>
              <li><span>Sat–Sun: 11 AM – 11:30 PM</span></li>
              <li><span>Kitchen closes 30 min</span></li>
              <li><span>before closing time</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copy">
          © 2025 Food Palaces. All rights reserved. | Bengaluru, India | <Link to="/admin" style={{ color: 'var(--gold)', textDecoration: 'none' }}>Admin</Link>
        </div>
      </div>
    </footer>
  );
}
