import React from 'react';
import jobly from '../images/jobly.jpg';
import Card from 'react-bootstrap/Card';
import "./ProjectCard.css"

const ProjectCard = () => {
  return (
    <Card className="ProjectCard">
    <Card.Img variant="top" src={jobly} />
    <Card.Body>
      <Card.Title>Jobly</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  );
}

export default ProjectCard;