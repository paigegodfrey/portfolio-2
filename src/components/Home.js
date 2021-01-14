import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import rainbowIMG from '../images/rainbowIMG.png';
import "./Home.css";

const Home = () => {
  return (
    <div className='bg'>
      <Container fluid='lg' className="intro-container">
        <Row>
          <Col className="flex-item1">
            <div className="header">PAIGE GODFREY</div>
            <div className="sub-header">
              Not your average software engineer
          </div>
          </Col>
          <Col className="flex-item2">
            <img src={rainbowIMG} alt="geometric art" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
