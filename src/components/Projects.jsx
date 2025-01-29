import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const projects = [
  {
    id: 1,
    title: 'Biblioteca Digital',
    description: 'Plataforma que permite a los usuarios gestionar préstamos de libros y a los administradores realizar un CRUD completo de libros y préstamos. Integra APIs de noticias, YouTube y streaming.',
    technologies: ['Angular', 'Firebase', 'Node.js', 'Express', 'APIs externas'],
    url: 'https://bibliotecagalaxy.web.app/libros',
  },
  {
    id: 2,
    title: 'E-commerce con PayPal',
    description: 'Sistema de comercio electrónico que permite a los usuarios comprar productos y pagar con PayPal. Los administradores gestionan proveedores y aprueban compras.',
    technologies: ['Angular', 'Node.js', 'Express', 'MongoDB', 'PayPal API'],
    url: null,
  },
  {
    id: 3,
    title: 'CRUD de Administración de Usuarios',
    description: 'Sistema de administración de usuarios con funcionalidades CRUD. Permite gestionar usuarios de manera eficiente, con validaciones y roles de acceso.',
    technologies: ['Angular', 'Node.js', 'Express', 'MongoDB' , 'MySql'],
    url: null,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Proyectos Destacados</h2>
      <Carousel showThumbs={false}>
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Ver Proyecto
              </a>
            )}
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Projects;