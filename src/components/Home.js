import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import "./Home.css";

const Home = () => {
  return (
    <div id="hero" className="Home d-flex align-items-center">
      <Container className="hero-container">
        <Row>
          <Col className="title-text-col">
            <h1>Paige Godfrey</h1>
            <h2>Not your average software engineer</h2>
            <div>
              <Link className="btn btn-projects font-weight-bold" to="/projects">
                View my work
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
