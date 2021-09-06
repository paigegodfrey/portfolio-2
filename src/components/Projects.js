import React from 'react';
import Container from 'react-bootstrap/Container';
import projectList from "./projectList";
import ProjectCard from './ProjectCard';
import "./Projects.css";

const Projects = () => {

  console.log(projectList);

  return (
    <div className="Projects pt-4">
      <Container className="projects-container">
        <h1>Projects</h1>
        <hr />
        <div className="projects-list pt-2 pb-2">
          {projectList.map((p) => (
            <ProjectCard project={p} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Projects;
