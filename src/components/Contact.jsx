import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import Swal from 'sweetalert2'; // Importa SweetAlert

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_epgy0f7',
        'template_v675u3b', 
        form.current,
        'wY_x0X10FGHl3MN44'
      )
      .then(() => {
        // Alerta de éxito con SweetAlert
        Swal.fire({
          title: '¡Éxito!',
          text: 'Mensaje enviado correctamente 🚀',
          icon: 'success',
          confirmButtonText: 'Genial',
          confirmButtonColor: '#6C63FF', // Color morado de tu paleta
          backdrop: 'rgba(26, 26, 46, 0.9)' // Fondo oscuro
        });
        form.current.reset(); // Limpia el formulario
      })
      .catch(() => {
        // Alerta de error con SweetAlert
        Swal.fire({
          title: 'Error',
          text: 'No se pudo enviar el mensaje 😢',
          icon: 'error',
          confirmButtonText: 'Intentar de nuevo',
          confirmButtonColor: '#FF6584', // Color rosa de tu paleta
          backdrop: 'rgba(26, 26, 46, 0.9)'
        });
      });
  };

  return (
    <motion.section
      id="contact"
      className="contact"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div 
        className="contact-card"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <h2>Contáctame</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Nombre" required />
          <input type="email" name="user_email" placeholder="Correo Electrónico" required />
          <textarea name="message" placeholder="Mensaje" rows="5" required></textarea>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enviar Mensaje
          </motion.button>
        </form>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/josé-manuel-sánchez-arredondo-97b8042b4" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="https://github.com/JMSASanchezUwU" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon" />
          </a>
          <a href="mailto:jmsa.sanchez0203@outlook.com">
            <FaEnvelope className="social-icon" />
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;