import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '0 2rem'
      }}
    >
      {/* Radial glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 30% 60%, rgba(108,172,228,0.08) 0%, transparent 65%)',
          pointerEvents: 'none'
        }}
      >
      </div>
      {/* Accent line top */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent 0%, #6CACE4 40%, #FFB81C 60%, transparent 100%)'
        }}
      >
      </div>

      <div
        id="hero-grid"
        style={{
          maxWidth: '1280px',
          width: '100%',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center'
        }}
      >
        {/* Text */}
        <div>
          <p
            className="hero-eyebrow"
            style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#6CACE4',
              marginBottom: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}
          >
            <span
              style={{
                display: 'block',
                width: '2.5rem',
                height: '2px',
                background: 'linear-gradient(90deg,#6CACE4,#FFB81C)'
              }}
            ></span>
            ISLE OF MAN TT 2027
          </p>
          <div style={{ margin: '1.5rem 0 2.5rem' }} className="fade-up stagger-1">
            <img
              src="/logo_gaucho_racing.png"
              alt="Gaucho Racing Logo"
              style={{
                width: '100%',
                maxWidth: '400px',
                height: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0 10px 40px rgba(0,0,0,0.05))'
              }}
            />
          </div>
          <p
            className="hero-sub"
            style={{
              fontSize: '0.95rem',
              fontWeight: 300,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(10,10,10,0.5)',
              marginBottom: '0.75rem'
            }}
          >
            Velocidad. Precisión. Pasión.
          </p>
          <p
            className="hero-sub"
            style={{
              fontSize: '0.85rem',
              fontWeight: 400,
              letterSpacing: '0.1em',
              color: '#6CACE4',
              marginBottom: '2.5rem'
            }}
          >
            BMW S 1000 RR — Primer equipo sudamericano en el TT
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }} className="hero-cta">
            <a href="#equipo" className="btn-primary">CONOCE AL EQUIPO</a>
            <a href="#moto" className="btn-ghost">VER LA MOTO</a>
          </div>
        </div>

        {/* Hero image placeholder */}
        <div id="hero-img-wrap" className="hero-img">
          <div className="placeholder-box" style={{ width: '100%', aspectRatio: '16/9', borderRadius: '3px' }}>
            [ FOTO PRINCIPAL ]
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
