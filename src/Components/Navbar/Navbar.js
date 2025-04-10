import React, { useState, useEffect } from "react";
import logo from "../../images/logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar({ setIsContactOpen }) {
  console.log("Navbar received setIsContactOpen:", setIsContactOpen);

  const [navBackground, setNavBackground] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      setNavBackground(window.scrollY > 50 ? "#184E47":"transparent")
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <nav
      className="navbar fixed-top navbar-expand-xxl p-3"
      style={{
        backgroundColor: navBackground,
        transition: "background-color 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} style={{ marginTop: "-15px" }} alt="Logo" width="50" height="50" />
          <span id="Name">Traveller's</span>
        </Link>
        <button
          className="navbar-toggler bg-success"
          onClick={()=>{setNavBackground("#184E47")}}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/add-blog">Add Blog</Link></li>
            <li className="nav-item">
              <Link className="nav-link" to="#" onClick={() => setIsContactOpen(true)}>Contact Us</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Login
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/login">Login</Link></li>
                <li><Link className="dropdown-item" to="/signup">Sign up</Link></li>
                <li><Link className="dropdown-item" to="/admin-login">Admin Login</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
