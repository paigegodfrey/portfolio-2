import React from 'react';
import diamondArt from '../images/diamondArt.png';
import "./Home.css";

const Home = () => {
  return (
    <div id="hero" className="d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="title-text col-lg-7">
            <h1>Paige Godfrey</h1>
            <h2>Not your average software engineer</h2>
          </div>
          <div className="col-lg-5">
            <img className="title-img" src={diamondArt} alt="geometric pic" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
