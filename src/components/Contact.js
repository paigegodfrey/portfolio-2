import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

const Contact = () => {
  return (
    <div className="Contact pt-4">
      <Container className="contact-container">
        <h1>Contact</h1>
        <hr />
        <Link to="Paige_Godfrey_Resume_Jul2021.pdf" target="_blank">
          <i className="fa fa-file fa-lg mx-1"></i>
        </Link>
        <Link to="#" onClick={(e) => {
          window.location = "mailto:paagodfrey@gmail.com";
          e.preventDefault();
        }}>
          <i className="fa fa-envelope fa-lg mx-1"></i>
        </Link>
        <Link to="https://www.linkedin.com/in/paigegodfrey/" target="_blank">
          <i className="fa fa-linkedin fa-lg mx-1"></i>
        </Link>
        <Link to="https://github.com/paigegodfrey" target="_blank">
          <i className="fa fa-github fa-lg mx-1"></i>
        </Link>
      </Container >
    </div>
  );
}

export default Contact;
