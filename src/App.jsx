import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import Navbar from './layouts/Navbar.jsx';
import './App.css'; // Estructura general

// Importaciones Reales de Features
import Home from './features/home/Home.jsx'; // <--- Ubicación recomendada
import Calculator from './features/calculator/Calculator.jsx';
import Recipes from './features/recipes/Recipes.jsx';
import Myths from './features/myths/Myths.jsx';

// Contenedor estructural limpio
function LayoutEstructural() {
  return (
    <div className="layout-wrapper">
      <Navbar />
      <main className="layout-content">
        <Outlet />
      </main>
      <footer className="layout-footer">
        <p>&copy; {new Date().getFullYear()} nutri.trakatelas. Con todo el ritmo.</p>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutEstructural />}>
          {/* Aquí se monta por defecto al entrar a la raíz del sitio */}
          <Route index element={<Home />} />
          <Route path="calculadora" element={<Calculator />} />
          <Route path="recetas" element={<Recipes />} />
          <Route path="mitos" element={<Myths />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}