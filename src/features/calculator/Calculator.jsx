import { useState } from 'react';
import { calcularTMB, calcularCaloriasTotales, calcularMacros } from './calculatorUtils.js';

// Importación de tus componentes atómicos limpios
import Card from '../../components/Card.jsx';
import Input from '../../components/Input.jsx';
import Button from '../../components/Button.jsx';

import '../../styles/Calculator.css'; // Tu CSS real

export default function Calculator() {
  const [genero, setGenero] = useState('Hombre');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [edad, setEdad] = useState('');
  const [actividad, setActividad] = useState('1.375');
  const [objetivo, setObjetivo] = useState('mantenimiento');
  const [resultados, setResultados] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!peso || !altura || !edad) {
      alert('Por favor, completa todos los campos esenciales.');
      return;
    }

    const p = parseFloat(peso);
    const a = parseFloat(altura);
    const ed = parseInt(edad);
    const gen = genero.toLowerCase();

    // Match exacto con los strings que esperan tus factores en utils
    const mapaActividad = {
      "1.2": "sedentario",
      "1.375": "ligero",
      "1.55": "moderado",
      "1.725": "activo",
      "1.9": "muyActivo"
    };
    const nivelActividadString = mapaActividad[actividad] || "sedentario";

    const tmb = calcularTMB(p, a, ed, gen);
    let caloriasObjetivo = calcularCaloriasTotales(tmb, nivelActividadString);

    if (objetivo === 'perder') {
      caloriasObjetivo = Math.round(caloriasObjetivo - 350);
    } else if (objetivo === 'ganar') {
      caloriasObjetivo = Math.round(caloriasObjetivo + 350);
    }

    const macros = calcularMacros(caloriasObjetivo);

    setResultados({
      caloriasObjetivo,
      macros
    });
  };

  return (
    <div className="calculator-wrapper">
      <div className="calculator-header">
        <h2>Calculadora de Calorías y Macros 📊</h2>
        <p>Averigua tus requerimientos energéticos diarios al instante con el ritmo de nutri.trakatelas.</p>
      </div>

      {/* Contenedor principal que maneja las dos columnas en Escritorio */}
      <div className="calculator-container">

        {/* Formulario Izquierdo */}
        <form onSubmit={handleSubmit} className="calculator-form">

          <div className="form-group">
            <label>Género</label>
            <select value={genero} onChange={(e) => setGenero(e.target.value)}>
              <option value="Hombre">Hombre</option>
              <option value="Mujer">Mujer</option>
            </select>
          </div>

          {/* Vinculamos tu componente Input pasándole tu clase 'form-group' */}
          <Input
            label="Peso (kg)"
            type="number"
            placeholder="Ej: 75"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            className="form-group"
            required
          />

          <Input
            label="Altura (cm)"
            type="number"
            placeholder="Ej: 175"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            className="form-group"
            required
          />

          <Input
            label="Edad (años)"
            type="number"
            placeholder="Ej: 26"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
            className="form-group"
            required
          />

          <div className="form-group">
            <label>Nivel de Actividad</label>
            <select value={actividad} onChange={(e) => setActividad(e.target.value)}>
              <option value="1.2">Sedentario (Poco o nada de ejercicio)</option>
              <option value="1.375">Ligero (Ejercicio 1-3 días a la semana)</option>
              <option value="1.55">Moderado (Ejercicio 3-5 días a la semana)</option>
              <option value="1.725">Fuerte (Ejercicio 6-7 días a la semana)</option>
              <option value="1.9">Muy Fuerte (Atletas, trabajo físico pesado)</option>
            </select>
          </div>

          <div className="form-group">
            <label>Tu Objetivo</label>
            <select value={objetivo} onChange={(e) => setObjetivo(e.target.value)}>
              <option value="perder">Perder Grasa (Déficit Calórico)</option>
              <option value="mantenimiento">Mantener Peso</option>
              <option value="ganar">Ganar Masa Muscular (Superávit Calórico)</option>
            </select>
          </div>

          {/* Vinculamos tu componente Button con tu clase de estilo */}
          <Button type="submit" className="btn-calculator">
            Calcular Requerimientos ⚡
          </Button>
        </form>

        {/* Columna Derecha de Resultados */}
        <div className="calculator-results">
          {!resultados ? (
            <div className="results-placeholder">
              <p>Introduce tus datos y haz clic en calcular para ver tu plan personalizado de macros. 🦦</p>
            </div>
          ) : (
            /* Vinculamos tu Card global con tu clase estilizada de respuesta */
            <Card className="results-card">
              <h3>Tus Requerimientos Estimados</h3>

              <div className="calories-badge">
                {resultados.caloriasObjetivo} <span>kcal/día</span>
              </div>

              <div className="macros-grid">
                <div className="macro-item protein">
                  <span>Proteínas</span>
                  <strong>{resultados.macros.proteinas}g</strong>
                </div>
                <div className="macro-item carbs">
                  <span>Carbohidratos</span>
                  <strong>{resultados.macros.carbohidratos}g</strong>
                </div>
                <div className="macro-item fat">
                  <span>Grasas</span>
                  <strong>{resultados.macros.grasas}g</strong>
                </div>
              </div>
            </Card>
          )}
        </div>

      </div>
    </div>
  );
}