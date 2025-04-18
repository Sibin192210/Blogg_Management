import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar({ setIsContactOpen }) {
  const [navBackground, setNavBackground] = useState("transparent");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const [navsize, setnavsize] = useState("14px")

  const location = useLocation();
  const solidPages = ["/Tajmahal","/Egypt","/Chinawall","/Antartica","/Boating"]; 
  const isSolidPage = solidPages.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavBackground("#184E47");
        setnavsize("4px")
      } else {
        setnavsize("14px")
        setNavBackground("transparent");
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    handleScroll(); // set initial background
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isSolidPage]);

  return (
    <nav
      className="navbar fixed-top navbar-expand-xxl"
      style={{
        backgroundColor: navBackground,
        padding: navsize,
        transition: "all 0.4s ease", // smoother resize + color change
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
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
          style={{
            backgroundColor: isMobile ? "#184E47" : "transparent",
            transition: "background-color 0.5s ease-in-out",
            padding: isMobile ? "10px" : "0",
            borderRadius: isMobile ? "5px" : "0",
          }}
        >
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Aboutus">About Us</Link></li>
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
                <li><Link className="dropdown-item" to="/Adminlogin">Admin Login</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
