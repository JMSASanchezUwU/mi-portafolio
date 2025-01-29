import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const projects = [
  {
    id: 1,
    title: 'Sistema de Gestión de Inventarios',
    description: 'Desarrollé un sistema de inventarios utilizando React y .NET para una empresa local.',
    technologies: ['React', '.NET', 'SQL Server'],
  },
  {
    id: 2,
    title: 'Aplicación Móvil de Tareas',
    description: 'Creé una aplicación móvil multiplataforma para gestión de tareas usando Flutter y Firebase.',
    technologies: ['Flutter', 'Firebase'],
  },
  {
    id: 3,
    title: 'API REST para E-commerce',
    description: 'Implementé una API RESTful utilizando Spring Boot y MongoDB para una plataforma de comercio electrónico.',
    technologies: ['Spring Boot', 'MongoDB'],
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
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Projects;