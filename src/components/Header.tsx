import { useEffect, useState } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={isScrolled ? 'scrolled' : ''} id="header">
      <div className="logo">
        <svg viewBox="0 0 520 200" xmlns="http://www.w3.org/2000/svg" style={{ height: '60px', width: 'auto' }}>
          <defs>
            <linearGradient id="hg1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#D4AF37' }} />
              <stop offset="50%" style={{ stopColor: '#FFC107' }} />
              <stop offset="100%" style={{ stopColor: '#B8860B' }} />
            </linearGradient>
            <linearGradient id="hg2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#B8860B' }} />
              <stop offset="50%" style={{ stopColor: '#D4AF37' }} />
              <stop offset="100%" style={{ stopColor: '#B8860B' }} />
            </linearGradient>
            <filter id="hglow">
              <feGaussianBlur stdDeviation="2.5" result="cb"></feGaussianBlur>
              <feMerge>
                <feMergeNode in="cb"></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
              </feMerge>
            </filter>
            <filter id="hsglow">
              <feGaussianBlur stdDeviation="1.5" result="cb"></feGaussianBlur>
              <feMerge>
                <feMergeNode in="cb"></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
              </feMerge>
            </filter>
          </defs>
          <rect x="6" y="6" width="508" height="188" fill="none" stroke="url(#hg2)" strokeWidth="1" rx="2" opacity="0.6" />
          <rect x="10" y="10" width="500" height="180" fill="none" stroke="url(#hg2)" strokeWidth="0.4" rx="1" opacity="0.3" />
          <g filter="url(#hsglow)">
            <circle cx="6" cy="6" r="2.5" fill="#D4AF37" opacity="0.8" />
            <line x1="6" y1="22" x2="22" y2="6" stroke="#D4AF37" strokeWidth="1" opacity="0.7" />
            <circle cx="514" cy="6" r="2.5" fill="#D4AF37" opacity="0.8" />
            <line x1="514" y1="22" x2="498" y2="6" stroke="#D4AF37" strokeWidth="1" opacity="0.7" />
            <circle cx="6" cy="194" r="2.5" fill="#D4AF37" opacity="0.8" />
            <line x1="6" y1="178" x2="22" y2="194" stroke="#D4AF37" strokeWidth="1" opacity="0.7" />
            <circle cx="514" cy="194" r="2.5" fill="#D4AF37" opacity="0.8" />
            <line x1="514" y1="178" x2="498" y2="194" stroke="#D4AF37" strokeWidth="1" opacity="0.7" />
          </g>
          <rect x="24" y="20" width="52" height="18" rx="2" fill="none" stroke="#C62828" strokeWidth="1" />
          <text x="50" y="32.5" fontFamily="Georgia,serif" fontSize="8.5" fontWeight="bold" fill="#C62828" textAnchor="middle" letterSpacing="1">HALAL</text>
          <g transform="translate(218,14)" filter="url(#hglow)">
            <polygon points="42,0 50,16 58,4 54,20 30,20 26,4 34,16" fill="url(#hg1)" opacity="0.9" />
            <rect x="26" y="18" width="32" height="4" rx="1" fill="url(#hg1)" />
            <circle cx="30" cy="8" r="2" fill="#FFF8E1" opacity="0.6" />
            <circle cx="42" cy="3" r="2.5" fill="#FFF8E1" opacity="0.8" />
            <circle cx="54" cy="8" r="2" fill="#FFF8E1" opacity="0.6" />
          </g>
          <line x1="30" y1="48" x2="490" y2="48" stroke="url(#hg2)" strokeWidth="0.7" opacity="0.4" />
          <circle cx="260" cy="48" r="3" fill="#D4AF37" opacity="0.7" />
          <circle cx="240" cy="48" r="1.5" fill="#D4AF37" opacity="0.4" />
          <circle cx="280" cy="48" r="1.5" fill="#D4AF37" opacity="0.4" />
          <text x="260" y="100" fontFamily="Georgia,'Times New Roman',serif" fontSize="52" fontWeight="700" fill="url(#hg1)" textAnchor="middle" letterSpacing="10" filter="url(#hglow)">FOOD</text>
          <text x="260" y="140" fontFamily="Georgia,'Times New Roman',serif" fontSize="38" fontWeight="400" fill="#FFF8E1" textAnchor="middle" letterSpacing="16">PALACE</text>
          <line x1="40" y1="120" x2="118" y2="120" stroke="url(#hg2)" strokeWidth="0.8" opacity="0.5" />
          <line x1="402" y1="120" x2="480" y2="120" stroke="url(#hg2)" strokeWidth="0.8" opacity="0.5" />
          <polygon points="122,120 128,116 134,120 128,124" fill="#D4AF37" opacity="0.5" />
          <polygon points="386,120 392,116 398,120 392,124" fill="#D4AF37" opacity="0.5" />
          <line x1="30" y1="152" x2="490" y2="152" stroke="url(#hg2)" strokeWidth="0.7" opacity="0.4" />
          <circle cx="260" cy="152" r="3" fill="#D4AF37" opacity="0.7" />
          <circle cx="240" cy="152" r="1.5" fill="#D4AF37" opacity="0.4" />
          <circle cx="280" cy="152" r="1.5" fill="#D4AF37" opacity="0.4" />
          <text x="260" y="167" fontFamily="Georgia,'Times New Roman',serif" fontSize="10" fill="#8D6E63" textAnchor="middle" letterSpacing="4">FAMILY  RESTAURANT</text>
          <text x="260" y="182" fontFamily="Georgia,'Times New Roman',serif" fontSize="9" fontStyle="italic" fill="#D4AF37" textAnchor="middle" opacity="0.85" letterSpacing="1">— The Real Taste of Malabar —</text>
        </svg>
      </div>
      <nav>
        <a href="#gallery">Gallery</a>
        <a href="#menu">Menu</a>
        <a href="#reservations">Reservations</a>
        <a href="#footer">Contact</a>
      </nav>
      <button className="header-cta" onClick={() => document.getElementById('reservations')?.scrollIntoView({ behavior: 'smooth' })}>
        Reserve Table
      </button>
    </header>
  );
}
