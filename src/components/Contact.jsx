import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contacto</h2>
      <form>
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Correo Electrónico" required />
        <textarea placeholder="Mensaje" required></textarea>
        <button type="submit">Enviar</button>
      </form>
      <div className="social-links">
        <a href="www.linkedin.com/in/josé-manuel-sánchez-arredondo-97b8042b4" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/JMSASanchezUwU" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="mailto:jmsa.sanchez0203@outlook.com">
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
};

export default Contact;