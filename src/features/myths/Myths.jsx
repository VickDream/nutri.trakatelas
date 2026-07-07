import { useState } from 'react';
import myths from './mythData.json';

// 1. IMPORTAMOS TU NUEVO COMPONENTES ATÓMICO
import Card from '../../components/Card.jsx';

import '../../styles/Myths.css'; // Mantenemos tus estilos responsivos unificados

export default function Myths() {
  // Guardamos el ID de la tarjeta que se clickea/toca en móviles
  const [tarjetaVolteada, setTarjetaVolteada] = useState(null);

  const handleCardClick = (id) => {
    // Si la tarjeta ya estaba volteada, la cerramos (null), si no, la abrimos
    setTarjetaVolteada(tarjetaVolteada === id ? null : id);
  };

  return (
    <div className="myths-wrapper">
      <div className="myths-header">
        <h2>Mitos vs Realidades de la Nutrición 💡</h2>
        <p>Pasa el mouse o toca las tarjetas para romper los mitos más comunes de la alimentación con ciencia.</p>
      </div>

      <div className="myths-container">
        {myths.map((item) => (
          /* 2. REEMPLAZAMOS EL DIV CONTENEDOR EXTERNO CON TU COMPONENTE CARD */
          <Card
            key={item.id}
            /* Se añade la clase 'flipped' si coincide el ID para activar la rotación */
            className={`flip-card ${tarjetaVolteada === item.id ? 'flipped' : ''}`}
            onClick={() => handleCardClick(item.id)}
          >
            <div className="flip-card-inner">

              {/* CARA FRONTAL: EL MITO */}
              <div className="flip-card-front">
                <div className="card-badge myth-title">MITO ❌</div>
                <p className="myth-text">{item.myth}</p>
                <span className="card-hint">Descubrir verdad 🔄</span>
              </div>

              {/* CARA TRASERA: LA REALIDAD */}
              <div className="flip-card-back">
                <div className="card-badge reality-title">REALIDAD ✅</div>
                <p className="reality-text">{item.reality}</p>
                <p className="fact-text">{item.fact}</p>
              </div>

            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}