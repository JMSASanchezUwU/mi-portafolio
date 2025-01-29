import React from 'react';
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#home"><FaHome /> Inicio</a></li>
        <li><a href="#about"><FaUser /> Sobre Mí</a></li>
        <li><a href="#projects"><FaProjectDiagram /> Proyectos</a></li>
        <li><a href="#contact"><FaEnvelope /> Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;