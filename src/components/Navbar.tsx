import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative'
        }}
      >
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <img
            src="/isotipo_guacho_racing.png"
            alt="Gaucho Racing Isotipo"
            style={{ height: '42px', width: 'auto', objectFit: 'contain' }}
          />
        </a>

        <div 
          id="nav-links" 
          className={menuOpen ? 'mobile-open' : ''}
          style={{ 
            display: (menuOpen || typeof window !== 'undefined' && window.innerWidth > 768) ? 'flex' : 'none', 
            gap: '2.5rem', 
            alignItems: 'center',
            ...(menuOpen && {
              position: 'absolute',
              top: '100%',
              left: '0',
              right: '0',
              backgroundColor: 'rgba(8,8,8,0.98)',
              padding: '1.5rem 1.5rem',
              borderBottom: '1px solid rgba(108,172,228,0.1)',
              backdropFilter: 'blur(12px)',
              flexDirection: 'column' as const
            })
          }}
        >
          <a href="#historia" className="nav-link">Historia</a>
          <a href="#equipo" className="nav-link">Equipo</a>
          <a href="#moto" className="nav-link">La Moto</a>
          <a href="#galeria" className="nav-link">Galería</a>
          <a href="#sponsors" className="nav-link">Sponsors</a>
          <a href="#contacto" className="nav-link cta-nav">Contacto</a>
        </div>

        <button
          id="menu-btn"
          aria-label="Menu"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none', // Default, shown via CSS media query
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem'
          }}
          className="menu-toggle-btn"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            stroke="#0a0a0a"
            strokeWidth="1.8"
          >
            <line x1="2" y1="5" x2="20" y2="5"></line>
            <line x1="2" y1="11" x2="20" y2="11"></line>
            <line x1="2" y1="17" x2="20" y2="17"></line>
          </svg>
        </button>
      </div>
      
      <style>{`
        @media (max-width: 768px) {
          .menu-toggle-btn {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
