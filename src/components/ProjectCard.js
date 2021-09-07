import React from 'react';
import Card from 'react-bootstrap/Card';
import "./ProjectCard.css"

const ProjectCard = project => {
  let { img } = project.project;

  return (
    <Card className="ProjectCard" style={{border: "none"}}>
    <Card.Img className="card-img" variant="top" src={img} />
    {/* <Card.Body className="card-body">
      <h2>{title}</h2>
      <Card.Text className="card-text">
        {technologies}
      </Card.Text>
    </Card.Body> */}
  </Card>
  );
}

export default ProjectCard;