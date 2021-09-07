import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import "./About.css";

const About = () => {
  return (
    <div className="About pt-4 pb-4">
      <Container className="about-container">
        <h1>About Me</h1>
        <hr />
        <p>
          After graduating from Cal Poly San Luis Obispo, I spent 6 years
          working for Chevron in various corporate/manufacturing finance 
          positions, entering through the company’s Finance Leadership 
          Development Program.
        </p>
        <p>
          My experience with budget stewardship and project management helped 
          develop my business acumen, but I found myself most interested in 
          developing a technical craft. After months of soul-searching, attending 
          meetups, and talking with folks in industry, I decided to pursue a 
          career in software engineering. At the beginning of 2020, I enrolled 
          at Rithm School — a 16-week, full-time program focused on React, Node, 
          Python, PostgreSQL, and data structures.
        </p>
        <p>
          After interning at JumpOffCampus and teaching computer science students
          at CodePath, I feel comfortable contributing to large codebases and 
          working with a variety of tech stacks. Please refer to my 
          <Link to="Paige_Godfrey_Resume_Jul2021.pdf" target="_blank"> resume </Link> 
          for additional details on my skills and experience.
        </p>
        <h2>Hobbies</h2>
        <p>
          When I'm not coding I like to stay physically active! I grew up doing 
          Tae Kwon Do, earning my Second-Degree Black Belt before leaving for 
          college. Moving up and down the West Coast with Chevron made it difficult to
          maintain a rank-based sport, so I've since taken up weightlifting and yoga.
        </p>
      </Container >
    </div>
  );
}

export default About;
