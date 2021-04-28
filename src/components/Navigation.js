import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="md" variant="dark" id="nav-style">
        <Link to="/" id="nav-brand">PG</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="text-right justify-content-end">
          <Nav>
            <Nav.Item>
              <Nav.Link className="projects mr-2" eventKey="1" as={NavLink} to="/projects">Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="about mr-2" eventKey="2" as={NavLink} to="/about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="contact mr-2" eventKey="3" as={NavLink} to="/contact">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Navigation;
