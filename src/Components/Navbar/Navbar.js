import React from "react";
import logo from "../../images/logo.png";
import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-xxl p-3">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" width="50" height="50" />
        </a>
        <a className="navbar-brand" id="Name" href="#">
          Travellers
        </a>
        <button
          className="navbar-toggler bg-success"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse text-center navbar-collapse ms-auto" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Add Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>     
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Login
              </a>
              <ul className="dropdown-menu">
              <li>
                  <Link className="dropdown-item" to='/Login'>
                    Login
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to='/Signup'>
                    Sign up
                  </Link>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                  Admin login
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
