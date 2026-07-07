import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card.jsx';
import Button from '../../components/Button.jsx';
import '../../styles/Home.css'; // Estilos dedicados para la landing

export default function Inicio() {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">
      {/* 1. HERO SECTION */}
      <section className="home-hero">
        <div className="hero-content">
          <h1>Aliméntate con Ritmo, Vive sin Complicaciones ⚡</h1>
          <p>
            Bienvenido a <strong>nutri.trakatelas</strong>. Aquí no creemos en las dietas extremas ni en pasar hambre. 
            Te damos las herramientas necesarias para que aprendas a calcular tus macros, rompas con los mitos 
            de la vieja escuela y disfrutes de recetas brutales que impulsan tus objetivos.
          </p>
          <Button className="btn-calculator" onClick={() => navigate('/calculadora')}>
            ¡Calcular mis Macros Ahora! 📊
          </Button>
        </div>
      </section>

      {/* 2. SECCIÓN DE SECCIONES (FEATURES) */}
      <section className="home-features">
        <h2>Lleva tu Nutrición al Siguiente Nivel 🍏</h2>
        <p className="features-subtitle">Explora todo lo que tenemos preparado para ti en un par de clics.</p>
        
        <div className="features-grid">
          <Card className="recipe-card" onClick={() => navigate('/calculadora')}>
            <div className="recipe-card-content">
              <h3>📊 Calculadora de Macros</h3>
              <p>Introduce tu peso, altura y metas para obtener tus requerimientos calóricos exactos en segundos de forma personalizada.</p>
              <span className="home-link-text">Ir a la calculadora &rarr;</span>
            </div>
          </Card>

          <Card className="recipe-card" onClick={() => navigate('/recetas')}>
            <div className="recipe-card-content">
              <h3>🥗 Recetario Saludable</h3>
              <p>Platos pensados para el día a día. Desglosados con proteínas, grasas y carbohidratos exactos para que nunca pierdas el hilo.</p>
              <span className="home-link-text">Ver recetas &rarr;</span>
            </div>
          </Card>

          <Card className="recipe-card" onClick={() => navigate('/mitos')}>
            <div className="recipe-card-content">
              <h3>🔥 Mitos Desmentidos</h3>
              <p>¿El pan engorda de noche? ¿Saltarse el desayuno destruye tu metabolismo? Destronamos las mentiras de la nutrición tradicional.</p>
              <span className="home-link-text">Descubrir mitos &rarr;</span>
            </div>
          </Card>
        </div>
      </section>

      {/* 3. SECCIÓN DE ENFOQUE */}
      <section className="home-philosophy">
        <div className="philosophy-card">
          <h3>La Regla de Oro: Enfoque y Autenticidad 🧘‍♂️</h3>
          <p>
            La disciplina no se trata de restringirte, sino de dominar tus decisiones diarias. 
            Aprender a gestionar lo que entra en tu cuerpo te da un control absoluto sobre tu energía y rendimiento, 
            ya sea entrenando pesado o manteniendo el ritmo en tu rutina diaria. ¡Haz que el proceso trabaje para ti!
          </p>
        </div>
      </section>
    </div>
  );
}