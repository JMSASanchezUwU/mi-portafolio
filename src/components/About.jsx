import React from 'react';
import { motion } from 'framer-motion';
import miFoto from '../assets/mi-foto.jpg'; // Asegúrate de tener una foto en la carpeta assets

const About = () => {
  return (
    <motion.section
      id="about"
      className="about"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="about-content">
        <div className="about-image">
          <img src={miFoto} alt="Mi foto" />
        </div>
        <div className="about-text">
          <h2>Sobre Mí</h2>
          <p>
            Soy un estudiante de <strong>Ingeniería en Gestión y Desarrollo de Software</strong> en la <strong>Universidad Tecnológica del Norte de Guanajuato</strong>. Durante mi formación académica y experiencia laboral, he trabajado con tecnologías como <strong>React</strong>, <strong>Angular</strong>, <strong>.NET</strong>, y he desarrollado aplicaciones utilizando lenguajes como <strong>C#</strong>, <strong>Java</strong>, <strong>JavaScript</strong>, <strong>TypeScript</strong>, <strong>Python</strong> y <strong>Dart</strong>.
          </p>
          <p>
            Mi enfoque siempre ha sido crear soluciones eficientes, escalables y fáciles de mantener, tanto en el desarrollo frontend como backend.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;