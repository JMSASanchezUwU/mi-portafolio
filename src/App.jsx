import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';  // <-- Asegúrate de importar Skills
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Skills />  {/* Sección de habilidades agregada aquí */}
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;