import React from 'react';
import Container from 'react-bootstrap/Container';
import resume from "../files/Paige_Godfrey_Resume_March_2022.pdf";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="Contact pt-4">
      <Container className="contact-container">
        <h1>Contact</h1>
        <hr />
        <p>Please email me at paagodfrey@gmail.com or connect with me via the links below</p>
        <a href="mailto:paagodfrey@gmail.com">
          <i className="fa fa-envelope fa-lg mx-1"></i>
        </a>
        <a href={resume} target="_blank" rel="noreferrer">
          <i className="fa fa-file fa-lg mx-1"></i>
        </a>
        <a href="https://www.linkedin.com/in/paigegodfrey/" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin-in fa-lg mx-1"></i>
        </a>
        <a href="https://github.com/paigegodfrey" target="_blank" rel="noreferrer">
          <i className="fab fa-github fa-lg mx-1"></i>
        </a>
      </Container >
    </div>
  );
}

export default Contact;
