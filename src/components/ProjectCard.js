import React from 'react';
import Card from 'react-bootstrap/Card';
import "./ProjectCard.css"

const ProjectCard = project => {
  let { img } = project.project;

  return (
    <Card className="ProjectCard card" style={{ border: "none" }}>
      <Card.Img className="card-img" variant="top" src={img} />
    </Card>
  );
}

export default ProjectCard;