import React from 'react';
import Card from 'react-bootstrap/Card';
import "./ProjectCard.css"

const ProjectCard = (title, text, img) => {
  return (
    <Card className="ProjectCard">
    <Card.Img variant="top" src={img} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {text}
      </Card.Text>
    </Card.Body>
  </Card>
  );
}

export default ProjectCard;