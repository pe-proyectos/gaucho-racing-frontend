import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer
      id="contacto"
      style={{ backgroundColor: '#0a0a0a', padding: '5rem 2rem 2.5rem', position: 'relative' }}
    >
      {/* Accent line top */}
      <div
        style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, #6CACE4 30%, #FFB81C 70%, transparent)' }}
      >
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div
          id="footer-grid"
          style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '5rem', marginBottom: '4.5rem', alignItems: 'start' }}
        >
          {/* Brand */}
          <div>
            <a href="#" style={{ textDecoration: 'none', display: 'block', marginBottom: '2rem' }}>
              <img
                src="/logo_gaucho_racing_footer.png"
                alt="Gaucho Racing Logo"
                style={{ height: '85px', width: 'auto', objectFit: 'contain' }}
              />
            </a>
            <p
              style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', fontWeight: 300, letterSpacing: '0.04em', maxWidth: '300px', lineHeight: 1.75, marginBottom: '1.5rem' }}
            >
              El primer equipo sudamericano en competir en el Isle of Man TT. Conduciendo la <strong
                style={{ color: 'rgba(108,172,228,0.6)', fontWeight: 400 }}>BMW S 1000 RR</strong> con el corazón argentino.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="https://instagram.com/gauchoracing" className="social-link">IG</a>
              <a href="#" className="social-link">FB</a>
              <a href="#" className="social-link">YT</a>
            </div>
          </div>

          {/* Nav + Contact */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }}>
            <div>
              <p
                style={{ fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '1.5rem', fontWeight: 600 }}
              >
                Navegación
              </p>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <a href="#historia" className="footer-link">Historia</a>
                <a href="#equipo" className="footer-link">Equipo</a>
                <a href="#moto" className="footer-link">La Moto</a>
                <a href="#galeria" className="footer-link">Galería</a>
                <a href="#sponsors" className="footer-link">Sponsors</a>
              </nav>
            </div>
            <div>
              <p
                style={{ fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '1.5rem', fontWeight: 600 }}
              >
                Contacto
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <a href="mailto:info@gauchoracing.com" className="footer-link">info@gauchoracing.com</a>
                <a href="https://instagram.com/gauchoracing" className="footer-link">@gauchoracing</a>
                <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.3)', fontWeight: 300 }}>Argentina</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.75rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}
        >
          <p
            style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.05em', fontWeight: 300 }}
          >
            © 2025 Gaucho Racing. Isle of Man TT. Argentina.
          </p>
          <a
            href="https://luminari.agency"
            target="_blank"
            rel="noopener"
            style={{ fontSize: '0.68rem', color: 'rgba(108,172,228,0.4)', letterSpacing: '0.08em', fontWeight: 400, textDecoration: 'none', transition: 'color 0.3s ease', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
          >
            <span
              style={{ width: '5px', height: '5px', background: '#6CACE4', borderRadius: '50%', opacity: 0.5, display: 'inline-block' }}
            ></span>
            Powered by Luminari Agency
          </a>
        </div>
      </div>
      
      <style>{`
        @media (max-width: 1024px) {
          #footer-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
        @media (max-width: 768px) {
          #footer-grid { gap: 2.5rem !important; }
          #footer-nav-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
