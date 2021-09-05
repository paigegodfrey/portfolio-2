import React from "react";
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
  return (
    <div>
      <div id="nav-style">
        <nav className="Navigation navbar navbar-expand">
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
    </div>
  )
}

export default Navigation;
