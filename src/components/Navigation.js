import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
  return (
    <div>
      <Navbar expand="sm" variant="light" className="justify-content-end" id="nav-style">
        <Navbar.Toggle aria-controls="navigation" />
        <Navbar.Collapse id="navigation" className="text-center justify-content-end">
          <Nav>
            <Nav.Item>
              <NavLink className="px-2" exact to="/">Projects</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink className="px-2" to="/about">About</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink className="px-2" to="/contact">Contact</NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    </div>
  )
}

export default Navigation;
