import { useState } from 'react';
import recipesData from './recipeData.json';

// Componentes atómicos globales
import Card from '../../components/Card.jsx';
import Button from '../../components/Button.jsx';

import '../../styles/Recipes.css'; // Tu CSS real centralizado

export default function Recipes() {
  const [filtro, setFiltro] = useState('todos');
  const [recetaSeleccionada, setRecetaSeleccionada] = useState(null);

  // Filtrado de recetas según tu JSON
  const recetasFiltradas = filtro === 'todos' 
    ? recipesData 
    : recipesData.filter(receta => receta?.category === filtro);

  return (
    <div className="recipes-wrapper">
      <div className="recipes-header">
        <h2>Recetario Saludable 🥗</h2>
        <p>Platos prácticos y deliciosos con macros completos adaptados a tu ritmo.</p>
      </div>

      {/* BOTONERA DE FILTROS */}
      <div className="recipes-filters">
        {['todos', 'alta-proteina', 'baja-carbs', 'snacks'].map((cat) => (
          <Button
            key={cat}
            className={`btn-filter ${filtro === cat ? 'active' : ''}`}
            onClick={() => setFiltro(cat)}
          >
            {cat.replace('-', ' ').toUpperCase()}
          </Button>
        ))}
      </div>

      {/* REJILLA DE RECETAS */}
      <div className="recipes-grid">
        {recetasFiltradas.map((receta) => (
          <Card 
            key={receta.id} 
            className="recipe-card"
            onClick={() => setRecetaSeleccionada(receta)}
          >
            <span className="recipe-card-badge">⏱️ {receta?.time}</span>
            
            <div className="recipe-card-content">
              <h3>{receta?.title}</h3>
              <p>{receta?.description}</p>
              
              <div className="recipe-macros">
                <span className="macro-badge kcal">🔥 {receta?.calories} kcal</span>
                <span className="macro-badge prot">🍗 P: {receta?.protein}</span>
                <span className="macro-badge carbs">🌾 C: {receta?.carbs}</span>
                <span className="macro-badge fat">🥑 G: {receta?.fat}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* ==========================================
          VENTANA FLOTANTE (MODAL) INTERACTIVA
         ========================================== */}
      {recetaSeleccionada && (
        <div className="modal-overlay" onClick={() => setRecetaSeleccionada(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            
            {/* Botón de cerrar (X) */}
            <button className="modal-close" onClick={() => setRecetaSeleccionada(null)}>
              &times;
            </button>

            <div className="modal-header">
              <h2>{recetaSeleccionada.title}</h2>
              <span className="modal-time">⏱️ Tiempo de preparación: {recetaSeleccionada.time}</span>
            </div>

            {/* Macros dentro del modal */}
            <div className="recipe-macros" style={{ marginBottom: '1.5rem' }}>
              <span className="macro-badge kcal">🔥 {recetaSeleccionada.calories} kcal</span>
              <span className="macro-badge prot">🍗 P: {recetaSeleccionada.protein}</span>
              <span className="macro-badge carbs">🌾 C: {recetaSeleccionada.carbs}</span>
              <span className="macro-badge fat">🥑 G: {recetaSeleccionada.fat}</span>
            </div>

            <hr style={{ border: 'none', borderTop: '1px dashed #eee', marginBottom: '1rem' }} />

            {/* SECCIÓN DE INGREDIENTES */}
            <div className="modal-section">
              <h3>Ingredientes:</h3>
              <ul>
                {recetaSeleccionada.ingredients?.map((ingrediente, idx) => (
                  <li key={idx}>{ingrediente}</li>
                ))}
              </ul>
            </div>

            {/* SECCIÓN DE PREPARACIÓN CORREGIDA (Ya no dice .instructions) */}
            <div className="modal-section">
              <h3>Preparación:</h3>
              <ol>
                {recetaSeleccionada.preparation?.map((paso, idx) => (
                  <li key={idx}>{paso}</li>
                ))}
              </ol>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}