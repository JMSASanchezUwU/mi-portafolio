import React from 'react';
import { FaReact, FaAngular, FaNodeJs, FaJava, FaPython, FaDatabase } from 'react-icons/fa';
import { SiDotnet, SiFlutter, SiTypescript, SiSpringboot } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { icon: <FaReact />, name: 'React' },
    { icon: <FaAngular />, name: 'Angular' },
    { icon: <SiDotnet />, name: '.NET' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <FaJava />, name: 'Java' },
    { icon: <SiSpringboot />, name: 'Spring Boot' },
    { icon: <SiTypescript />, name: 'TypeScript' },
    { icon: <FaPython />, name: 'Python' },
    { icon: <SiFlutter />, name: 'Flutter' },
    { icon: <FaDatabase />, name: 'Bases de Datos' },
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2>Habilidades Técnicas</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;