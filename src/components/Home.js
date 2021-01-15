import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import titleIMG from '../images/titleIMG.png';
import "./Home.css";

const Home = () => {
  return (
    <div id="hero" className="d-flex align-items-center">
      <Container className="hero-container">
        <Row>
          <Col lg={7} className="title-text">
            <h1>Paige Godfrey</h1>
            <h2>Not your average software engineer</h2>
          </Col>
          <Col lg={5}>
            <img className="title-img" src={titleIMG} alt="geometric pic" />
          </Col>
        </Row>          
      </Container>
    </div >
  );
}

export default Home;
