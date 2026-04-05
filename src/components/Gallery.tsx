import React from 'react';

const Gallery: React.FC = () => {
  return (
    <section id="galeria" style={{ backgroundColor: '#f5f5f5', padding: '7rem 2rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ marginBottom: '4rem' }}>
          <p className="eyebrow fade-up">GALERÍA</p>
          <h2
            className="fade-up stagger-1"
            style={{
              fontFamily: "'Bebas Neue', cursive",
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              lineHeight: 1,
              letterSpacing: '0.03em',
              color: '#0a0a0a'
            }}
          >
            En la pista
          </h2>
        </div>
        {/* Asymmetric grid */}
        <div
          id="gallery-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '0.6rem' }}
        >
          <div className="gallery-item fade-up" style={{ gridColumn: '1 / -1' }}>
            <div
              className="placeholder-box"
              style={{ width: '100%', aspectRatio: '16/9', borderRadius: '2px', transition: 'transform 0.5s ease' }}
            >
              [ FOTO ]
            </div>
          </div>
          <div className="gallery-item fade-up stagger-1" style={{ gridColumn: '1 / 5' }}>
            <div
              className="placeholder-box"
              style={{ width: '100%', aspectRatio: '3/4', borderRadius: '2px', transition: 'transform 0.5s ease' }}
            >
              [ FOTO ]
            </div>
          </div>
          {/* Columna Central (Dos fotos en vertical) */}
          <div style={{ gridColumn: '5 / 9', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <div className="gallery-item fade-up stagger-2">
              <div
                className="placeholder-box"
                style={{ width: '100%', aspectRatio: '1/1', borderRadius: '2px', transition: 'transform 0.5s ease' }}
              >
                [ FOTO ]
              </div>
            </div>
            <div className="gallery-item fade-up stagger-2">
              <div
                className="placeholder-box"
                style={{ width: '100%', aspectRatio: '1/1', borderRadius: '2px', transition: 'transform 0.5s ease' }}
              >
                [ FOTO ]
              </div>
            </div>
          </div>
          <div className="gallery-item fade-up stagger-3" style={{ gridColumn: '9 / 13' }}>
            <div
              className="placeholder-box"
              style={{ width: '100%', aspectRatio: '3/4', borderRadius: '2px', transition: 'transform 0.5s ease' }}
            >
              [ FOTO ]
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @media (max-width: 768px) {
          #gallery-grid > * {
            grid-column: 1 / -1 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Gallery;
