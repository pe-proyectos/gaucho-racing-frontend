import React from 'react';

const Sponsors: React.FC = () => {
  return (
    <section
      id="sponsors"
      style={{ backgroundColor: '#efefef', padding: '6rem 2rem', borderTop: '1px solid rgba(108,172,228,0.08)' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="eyebrow fade-up" style={{ justifyContent: 'center' }}>
            SPONSORS &amp; PARTNERS
            <span
              style={{ display: 'block', width: '3rem', height: '2px', background: 'linear-gradient(90deg,#FFB81C,#6CACE4)', flexShrink: 0 }}
            ></span>
          </div>
          <h2
            className="fade-up stagger-1"
            style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1, letterSpacing: '0.03em', color: '#0a0a0a' }}
          >
            Quienes hacen posible el sueño
          </h2>
        </div>

        {/* Primarios */}
        <div
          id="content-primarios"
          className="fade-up stagger-1"
          style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '4rem', marginBottom: '5rem' }}
        >
          {/* BMW */}
          <div className="sponsor-item">
            <a
              href="https://www.bmw.com.ar/es/index.html"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}
            >
              <img
                src="/images/bmw_sponsor_primario.webp"
                alt="BMW ARGENTINA"
                style={{ height: '85px', width: 'auto', objectFit: 'contain', transition: 'transform 0.3s ease' }}
                className="hover-scale"
              />
              <span
                style={{ fontSize: '0.75rem', letterSpacing: '0.15em', color: 'rgba(10,10,10,0.8)', textTransform: 'uppercase', fontWeight: 700 }}
              >BMW ARGENTINA</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div 
          className="fade-up"
          style={{ width: '100px', height: '1px', background: 'rgba(108,172,228,0.2)', margin: '0 auto 4rem' }}
        ></div>

        {/* Secundarios */}
        <div
          id="content-secundarios"
          className="fade-up stagger-2"
          style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '3.5rem' }}
        >
          {/* LUMINARI */}
          <div className="sponsor-item">
            <a
              href="https://luminari.agency/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem', textDecoration: 'none' }}
            >
              <img
                src="/images/luminari_sponsor_secundario.png"
                alt="Luminari Agency"
                style={{ height: '45px', width: 'auto', objectFit: 'contain', transition: 'transform 0.3s ease' }}
                className="hover-scale"
              />
              <span
                style={{ fontSize: '0.6rem', letterSpacing: '0.15em', color: 'rgba(10,10,10,0.7)', textTransform: 'uppercase', fontWeight: 700 }}
              >LUMINARI AGENCY</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
