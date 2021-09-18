import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import Card from 'react-bootstrap/Card';
import "./ProjectCard.css"

const ProjectCard = project => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  let { title, description, technologies, techDetail, img, link, github } = project.project;

  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Card>
          <Modal.Header closeButton>
            <Modal.Title>
              <h2 className="text-center">{title}</h2>
            </Modal.Title>
          </Modal.Header>
          <Card.Body className="modal-card-body">
            <img
              style={{ maxWidth: "100%" }}
              src={img}
              alt={`pic of ${title}`}
              className="m-0 modal-pic"
            />
            <p className="mt-4">{description}</p>
            <p className="mt-4">{techDetail}</p>
            {title !== "JumpOffCampus" &&
              <p>
                Launch the <a href={link} target="_blank" rel="noreferrer">live demo</a> or
                see the code on <a href={github} target="_blank" rel="noreferrer">github</a>.
              </p>
            }
          </Card.Body>
        </Card>
      </Modal>

      <Card onClick={handleShow} className="ProjectCard">
        <Card.Img variant="top" src={img} />
        <Card.Body className="card-body">
          <Card.Title>
            <h3 className="card-title">
              {title}
            </h3>
          </Card.Title>
          <Card.Text className="project-technologies">
            {technologies}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default ProjectCard;