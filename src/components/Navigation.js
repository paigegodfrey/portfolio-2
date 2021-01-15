import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
  return (
    <div>
      <Navbar expand="md" variant="dark" id="nav-style">
        <Navbar.Brand href="/" id="nav-brand">PG</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
          <Nav.Item>
              <NavLink className="home pr-3" exact to="/">Home</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink className="about pr-3" exact to="/about">About</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink className="projects pr-3" exact to="/projects">Projects</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink className="contact" exact to="/contact">Contact</NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Navigation;
