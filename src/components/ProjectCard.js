import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import Card from 'react-bootstrap/Card';
import "./ProjectCard.css"

const ProjectCard = project => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  let { title, description, technologies, img, link, github } = project.project;

  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h2 className="text-center">{title}</h2>
          </Modal.Title>
        </Modal.Header>
        <Card>
          <Card.Body>
            <img
              style={{ maxWidth: "100%" }}
              src={img}
              alt={`pic of ${title}`}
              className="m-0 modal-pic"
            />

            <p className="mt-4">{description}</p>
            <p className="mt-4">{technologies}</p>
            {/* <p className="text-white">
              <b className="light-blue-text">Front end:  </b>
              {project.frontend}
            </p>
            <p className="text-white">
              <b className="light-blue-text">Back end: </b>
              {project.backend}
            </p> */}
            <div className="text-center">
              <a
                target="_blank"
                rel="noreferrer"
                href={github}
              >
                Github
              </a>{" "}
              |{" "}
              <a target="_blank" rel="noreferrer" href={link}>
                Live Demo
              </a>
            </div>
          </Card.Body>
        </Card>
      </Modal>

      <Card onClick={handleShow} className="ProjectCard card-hover" style={{ border: "none" }}>
        <Card.Img className="card-img" variant="top" src={img} />
      </Card>
    </>

  );
}

export default ProjectCard;