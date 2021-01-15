import React from 'react';
import rubixCube from '../images/rubixCube.png';
import "./Home.css";

const Home = () => {
  return (
    <div id="hero" className="d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="title col-lg-8">
            <h1>Paige Godfrey</h1>
            <h2>Not your average software engineer</h2>
          </div>
          <div className="col-lg-4">
            <img className="title-img" src={rubixCube} alt="rubix cube" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
