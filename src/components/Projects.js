import React from 'react';
import Container from 'react-bootstrap/Container';
import projectList from "./projectList";
import ProjectCard from './ProjectCard';
import "./Projects.css";

const Projects = () => {

  return (
    <div className="Projects pt-4 pb-4">
      <Container className="projects-container">
        <h1>Projects</h1>
        <hr />
        <p>Click on an image to learn more</p>
        <div className="projects-list">
          {projectList.map((p, idx) => (
            <ProjectCard project={p} key={idx} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Projects;
