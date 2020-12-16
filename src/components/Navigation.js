import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
  return (
    <div>
      <Navbar expand="sm" variant="light" id="nav-style">
        <Navbar.Brand href="/" id="nav-brand">PAIGE</Navbar.Brand>
        <Navbar.Toggle aria-controls="navigation" />
        <Navbar.Collapse id="navigation" className="justify-content-end">
          <Nav>
            <Nav.Item>
              <NavLink className="pr-3" exact to="/">Projects</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink className="pr-3" to="/about">About</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/contact">Contact</NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Navigation;
