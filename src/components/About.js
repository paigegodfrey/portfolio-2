import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      ABOUT
      <Link to="#" onClick={(e) => {
         window.location = "mailto:paagodfrey@gmail.com";
         e.preventDefault();
        }
      }>
        <i class="fa fa-envelope fa-lg mx-1"></i>
      </Link>
    </div>
  );
}

export default About;
