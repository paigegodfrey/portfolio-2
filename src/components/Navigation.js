import React from "react";
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
  return (
    <div id="nav-style">
      <nav className="Navigation navbar navbar-expand-md">
        <Link className="navbar-brand" id="nav-brand" to="/">
          PG
        </Link>
        <ul className="navbar-nav ml-auto" id="basic-navbar-nav">
          <li className="nav-item mr-2">
            <NavLink className="projects nav-link" to="/projects">
              Projects
            </NavLink>
          </li>
          <li className="nav-item mr-2">
            <NavLink className="about nav-link" to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-item mr-2">
            <NavLink className="contact nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>

    /* <Navbar expand="md" variant="dark" id="nav-style">
      <Navbar.Brand exact to="/" id="nav-brand">PG</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="text-right justify-content-end">
        <Nav>
          <Nav.Item>
            <NavLink className="projects p-2" exact to="/projects">Projects</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink className="about p-2" exact to="/about">About</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink className="contact p-2" exact to="/contact">Contact</NavLink>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar> */
  )
}

export default Navigation;
