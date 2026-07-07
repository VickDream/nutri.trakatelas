import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css'; // Ajusta la ruta a tu archivo CSS del Navbar

export default function Navbar() {
  // Estado para alternar el menú en móviles
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="brand-nutri">nutri.</span>
        <span className="brand-trakatelas">trakatelas</span>
      </div>

      {/* BOTÓN DE HAMBURGUESA: Solo visible en pantallas chicas */}
      <button
        className={`navbar-toggle ${menuAbierto ? 'is-active' : ''}`}
        onClick={() => setMenuAbierto(!menuAbierto)}
        aria-label="Menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* ENLACES DE NAVEGACIÓN */}
      <div className={`navbar-links ${menuAbierto ? 'active' : ''}`}>
        <NavLink to="/" onClick={() => setMenuAbierto(false)}>Inicio</NavLink>
        <NavLink to="/calculadora" onClick={() => setMenuAbierto(false)}>Calculadora</NavLink>
        <NavLink to="/recetas" onClick={() => setMenuAbierto(false)}>Recetas</NavLink>
        <NavLink to="/mitos" onClick={() => setMenuAbierto(false)}>Mitos</NavLink>
      </div>
    </nav>
  );
}