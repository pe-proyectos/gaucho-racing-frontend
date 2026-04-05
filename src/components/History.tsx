import React from 'react';

const History: React.FC = () => {
  return (
    <section id="historia" style={{ backgroundColor: '#f5f5f5', padding: '3.5rem 2rem 5rem' }}>
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 0.65fr',
          gap: '4rem',
          alignItems: 'center'
        }}
      >
        <div>
          <p className="eyebrow fade-up">NUESTRA HISTORIA</p>
          <h2
            className="fade-up stagger-1"
            style={{
              fontFamily: "'Bebas Neue', cursive",
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              lineHeight: 1.1,
              letterSpacing: '0.02em',
              color: '#0a0a0a',
              marginBottom: '2rem'
            }}
          >
            DOMANDO A<br /><span style={{ color: '#6CACE4' }}>LA BESTIA</span>
          </h2>
          <div
            className="fade-up stagger-2"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              color: 'rgba(10,10,10,0.7)',
              fontSize: '1rem',
              lineHeight: 1.8,
              fontWeight: 300
            }}
          >
            <p>
              Gaucho Racing nace en 2025 como el resultado de un sueño compartido entre dos amigos,
              unidos por la misma pasión: la velocidad, la adrenalina y el desafío de superarse
              constantemente.
            </p>
            <p>
              El nombre del equipo no es casual. Surge de una idea clara y poderosa: <strong>domar a una bestia</strong>. 
              Así como el gaucho domina a su caballo en la inmensidad del campo, ellos buscan
              dominar la máquina, llevando la moto al límite. En esta historia, la moto es el caballo…
              y el piloto, quien debe aprender a entenderla, respetarla y controlarla.
            </p>
            <p>
              Lo que comenzó como una idea, rápidamente se transformó en un proyecto con identidad
              propia, inspirado en el espíritu del gaucho: valentía, resistencia y determinación
              frente a lo imposible.
            </p>
            <p>
              Desde el primer día, el objetivo fue claro: llegar a competir en una de las carreras más
              exigentes y legendarias del motociclismo mundial, el <strong>Isle of Man TT, en 2027</strong>.
            </p>
            <p>
              No se trata solo de correr, sino de demostrar que con esfuerzo, sacrificio y trabajo en
              equipo, los sueños más grandes pueden hacerse realidad. Cada entrenamiento, cada
              kilómetro y cada desafío forman parte del camino hacia esa meta.
            </p>
            <p>
              Gaucho Racing representa más que un equipo: es una historia de amistad, pasión y coraje.
              Es la prueba de que cuando dos personas creen en lo mismo, pueden empujar los límites
              hasta lo impensado.
            </p>
            <p
              style={{
                fontWeight: 600,
                color: '#0a0a0a',
                marginTop: '1rem',
                borderLeft: '2px solid #6CACE4',
                paddingLeft: '1.5rem',
                fontStyle: 'italic'
              }}
            >
              El objetivo no es solo participar…<br />
              es terminar la carrera más peligrosa del mundo.
            </p>
          </div>
        </div>
        <div className="scale-in stagger-2">
          <div
            id="historia-img"
            className="placeholder-box"
            style={{ width: '100%', height: '520px', borderRadius: '3px' }}
          >
            [ FOTO EQUIPO ]
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
