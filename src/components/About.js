import React from 'react';
import Container from 'react-bootstrap/Container';
import resume from "../files/Paige_Godfrey_Resume_Developer_Advocate.pdf";
import "./About.css";

const About = () => {
  return (
    <div className="About pt-4 pb-4">
      <Container className="about-container">
        <h1>About Me</h1>
        <hr />
        <p>
          I’ve always been drawn to the power and beauty of technical disciplines.
        </p>
        <p>
          Growing up, I studied Tae Kwon Do, earning my Second-Degree Black Belt 
          after 6 years of training.
        </p>
        <p>
          In college, I received my bachelor's degree in Finance and Economics, 
          graduating Summa Cum Laude from Cal Poly San Luis Obispo.
        </p>
        <p>
          During my 6 year finance career, I worked as a Financial Analyst, 
          Project Manager, and Training Coordinator at Chevron, entering through 
          the company's Finance Leadership Development Program.
        </p>
        <p>
          After years of Excel modeling, I decided to take on a new technical craft,
          leveling up from spreadsheets to software.
        </p>
        <p>
          I taught myself some Javascript and enrolled at Rithm School — a 16-week, 
          full-time software engineering program focused on React, Node, Express, Python, 
          PostgreSQL, and data structures.
        </p>
        <p>
          Since graduating from Rithm, I've interned at JumpOffCampus, built 
          personal projects, and worked as a Teaching Assistant at CodePath's 
          software engineering program. (Refer to my
          <a className="resume" href={resume} target="_blank" rel="noreferrer"> resume </a>
          for more details.)
        </p>
        <p>
          I'm very eager to continue growing as a Software Engineer and am currently 
          looking for opportunities in frontend development and developer advocacy. 
        </p>
      </Container >
    </div>
  );
}

export default About;
