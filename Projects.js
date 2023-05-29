import React from 'react';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: 'Проект 1',
      description: 'Опис проекту 1',
      technologies: 'React, CSS, HTML',
      link: 'https://link.to/project1',
    },
    {
      id: 2,
      title: 'Проект 2',
      description: 'Опис проекту 2',
      technologies: 'Vue.js, SCSS, JavaScript',
      link: 'https://link.to/project2',
    },
  ];

  return (
    <div>
      <h2>Проекти</h2>
      {projectsData.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div>
      <img src="https://link.to/project-screenshot" alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p>{project.technologies}</p>
      <a href={project.link}>Деталі</a>
    </div>
  );
};

export default Projects;
