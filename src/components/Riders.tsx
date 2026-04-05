import React from 'react';

interface RiderProps {
  number: string;
  role: string;
  experience: string;
  staggerClass: string;
  accentColor: string;
}

const RiderCard: React.FC<RiderProps> = ({ number, role, experience, staggerClass, accentColor }) => (
  <div className={`rider-card fade-up ${staggerClass}`}>
    <div className="placeholder-box" style={{ width: '100%', aspectRatio: '1/1' }}>[ FOTO PILOTO ]</div>
    <div style={{ padding: '1.5rem' }}>
      <h3
        style={{
          fontFamily: "'Bebas Neue', cursive",
          fontSize: '1.6rem',
          letterSpacing: '0.05em',
          color: '#0a0a0a',
          marginBottom: '0.3rem'
        }}
      >
        {number}
      </h3>
      <p
        style={{
          fontSize: '0.7rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: accentColor,
          fontWeight: 600,
          marginBottom: '0.85rem'
        }}
      >
        {role}
      </p>
      <p
        style={{
          fontSize: '0.85rem',
          color: 'rgba(10,10,10,0.45)',
          lineHeight: '1.65',
          fontWeight: 300
        }}
      >
        {experience}
      </p>
    </div>
  </div>
);

const Riders: React.FC = () => {
  const riders = [
    {
      number: "PILOTO #1",
      role: "Piloto Principal",
      experience: "15 años de experiencia. 3 campeonatos nacionales. El alma del equipo.",
      staggerClass: "stagger-1",
      accentColor: "#6CACE4"
    },
    {
      number: "PILOTO #2",
      role: "Piloto de Apertura",
      experience: "Especialista en trazadas técnicas. Debut internacional en Macau 2023.",
      staggerClass: "stagger-2",
      accentColor: "#FFB81C"
    },
    {
      number: "PILOTO #3",
      role: "Piloto de Reserva",
      experience: "El más joven del equipo. Talento natural con hambre de victoria.",
      staggerClass: "stagger-3",
      accentColor: "#6CACE4"
    }
  ];

  return (
    <section id="equipo" style={{ backgroundColor: '#efefef', padding: '7rem 2rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <div className="eyebrow fade-up" style={{ justifyContent: 'center' }}>
            NUESTROS PILOTOS
            <span
              style={{
                display: 'block',
                width: '3rem',
                height: '2px',
                background: 'linear-gradient(90deg,#FFB81C,#6CACE4)',
                flexShrink: 0
              }}
            ></span>
          </div>
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
            Los hombres detrás de la moto
          </h2>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem'
          }}
          id="riders-grid"
        >
          {riders.map((rider, idx) => (
            <RiderCard key={idx} {...rider} />
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          #riders-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Riders;
