import React from 'react';
import Card from 'react-bootstrap/Card';
import "./ProjectCard.css"

const ProjectCard = project => {
  let {title, img, technologies} = project.project;
  console.log(img);

  return (
    <Card className="ProjectCard">
    <Card.Img className="card-img" variant="top" src={img} />
    <Card.Body className="card-body">
      <h2>{title}</h2>
      <Card.Text className="card-text">
        {technologies}
      </Card.Text>
    </Card.Body>
  </Card>
  );
}

export default ProjectCard;