import React from 'react';

const Motorbike: React.FC = () => {
  return (
    <section
      id="moto"
      style={{ backgroundColor: '#f5f5f5', padding: 0, position: 'relative', overflow: 'hidden' }}
    >
      {/* Full-width placeholder */}
      <div id="moto-hero" style={{ position: 'relative', width: '100%', height: '560px' }}>
        <div
          className="placeholder-box"
          style={{ width: '100%', height: '100%', fontSize: '0.8rem', border: 'none' }}
        >
          [ FOTO MOTO PRINCIPAL ]
        </div>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.6) 50%, rgba(10,10,10,0.85) 100%)'
          }}
        >
        </div>

        {/* Specs overlay */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', padding: '2rem' }}>
          <div style={{ maxWidth: '1280px', width: '100%', margin: '0 auto' }}>
            <p className="eyebrow fade-up" style={{ marginBottom: '0.5rem', color: '#6CACE4' }}>LA MÁQUINA</p>
            <h2
              className="fade-up stagger-1"
              style={{
                fontFamily: "'Bebas Neue', cursive",
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                color: '#f5f5f5',
                lineHeight: 1,
                letterSpacing: '0.03em',
                marginBottom: '0.5rem'
              }}
            >
              BMW S 1000 RR
            </h2>
            <p
              className="fade-up stagger-1"
              style={{
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                color: 'rgba(255,255,255,0.6)',
                textTransform: 'uppercase',
                marginBottom: '2.5rem',
                fontWeight: 500
              }}
            >
              Superbike · 4 cilindros en línea · Clase Superbike
            </p>

            <div
              style={{ display: 'grid', gridTemplateColumns: 'repeat(4, auto)', gap: '3.5rem', width: 'fit-content' }}
              id="specs-grid"
            >
              <div className="fade-up stagger-1">
                <p className="stat-number" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#6CACE4' }}>
                  1000<span style={{ fontSize: '0.5em', verticalAlign: 'middle', color: '#FFB81C' }}>cc</span>
                </p>
                <p
                  style={{
                    fontSize: '0.6rem',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.5)',
                    marginTop: '0.25rem',
                    fontWeight: 500
                  }}
                >
                  Cilindrada
                </p>
              </div>
              <div className="fade-up stagger-2">
                <p
                  className="stat-number accent"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#FFB81C' }}
                >
                  210<span style={{ fontSize: '0.5em', verticalAlign: 'middle', color: '#6CACE4' }}>HP</span>
                </p>
                <p
                  style={{
                    fontSize: '0.6rem',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.5)',
                    marginTop: '0.25rem',
                    fontWeight: 500
                  }}
                >
                  Potencia
                </p>
              </div>
              <div className="fade-up stagger-3">
                <p className="stat-number" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#6CACE4' }}>
                  197<span style={{ fontSize: '0.5em', verticalAlign: 'middle', color: '#FFB81C' }}>kg</span>
                </p>
                <p
                  style={{
                    fontSize: '0.6rem',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.5)',
                    marginTop: '0.25rem',
                    fontWeight: 500
                  }}
                >
                  Peso
                </p>
              </div>
              <div className="fade-up stagger-4">
                <p
                  className="stat-number accent"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#FFB81C' }}
                >
                  300<span style={{ fontSize: '0.5em', verticalAlign: 'middle', color: '#6CACE4' }}>+</span>
                </p>
                <p
                  style={{
                    fontSize: '0.6rem',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.5)',
                    marginTop: '0.25rem',
                    fontWeight: 500
                  }}
                >
                  km/h
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 360 Space */}
      <div
        style={{ backgroundColor: '#efefef', padding: '5rem 2rem', borderTop: '1px solid rgba(108,172,228,0.15)' }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <div className="fade-up" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <span style={{ display: 'block', width: '3rem', height: '2px', background: 'linear-gradient(90deg, #6CACE4, #FFB81C)' }}></span>
            <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#6CACE4' }}>VISTA 360°</p>
            <span style={{ display: 'block', width: '3rem', height: '2px', background: 'linear-gradient(90deg, #FFB81C, #6CACE4)' }}></span>
          </div>
          <h3
            className="fade-up stagger-1"
            style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#0a0a0a', marginBottom: '1rem', letterSpacing: '0.03em' }}
          >
            Explora la BMW S 1000 RR
          </h3>
          <p
            className="fade-up stagger-2"
            style={{ fontSize: '0.85rem', color: 'rgba(10,10,10,0.4)', marginBottom: '2.5rem', fontWeight: 300, maxWidth: '400px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}
          >
            Próximamente — experiencia interactiva 360° de nuestra moto de competición
          </p>
          {/* 360 placeholder */}
          <div
            id="moto-360"
            className="placeholder-box fade-up stagger-3"
            style={{ width: '100%', maxWidth: '900px', margin: '0 auto', height: '400px', borderRadius: '4px', border: '1px dashed rgba(108,172,228,0.2)', flexDirection: 'column', gap: '1rem' }}
          >
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ opacity: 0.2 }}>
              <circle cx="24" cy="24" r="20" stroke="#6CACE4" strokeWidth="1.5"></circle>
              <path d="M10 24 Q24 10 38 24 Q24 38 10 24" stroke="#6CACE4" strokeWidth="1.5" fill="none"></path>
              <path d="M24 4 L24 44" stroke="#6CACE4" strokeWidth="1" strokeDasharray="3 3"></path>
            </svg>
            <span style={{ color: 'rgba(108,172,228,0.3)', fontSize: '0.75rem', letterSpacing: '0.18em' }}>[ ESPACIO PARA FOTO 360° ]</span>
          </div>
        </div>
      </div>
      
      <style>{`
        @media (max-width: 768px) {
          #moto-hero { height: 380px !important; }
          #moto-360 { height: 240px !important; }
          #specs-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Motorbike;
