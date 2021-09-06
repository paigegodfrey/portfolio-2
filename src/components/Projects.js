import React from 'react';
import Container from 'react-bootstrap/Container';
import ProjectCard from './ProjectCard';
import "./Projects.css";

const Projects = () => {
  return (
    <div className="Projects pt-4">
      <Container className="projects-container">
        <h1>Projects</h1>
        <hr />
        <div className="projects-list pt-2">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </Container>
    </div>
  );
}

export default Projects;
