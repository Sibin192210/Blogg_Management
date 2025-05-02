import React, { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Navbar.css";
import { FaRegUserCircle } from "react-icons/fa";

function Navbar({ setIsContactOpen }) {
  const [navBackground, setNavBackground] = useState("transparent");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const [navsize, setNavSize] = useState("14px");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const solidPages = ["/Tajmahal", "/Egypt", "/Chinawall", "/Antartica", "/Boating", "/Addblog","/ViewAllBlog","/ViewOneBlog"];
  const isSolidPage = solidPages.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 || isSolidPage) {
        setNavBackground("#184E47");
        setNavSize("4px");
      } else {
        setNavBackground("transparent");
        setNavSize("14px");
      }
    };

    // Check if the user is logged in when the component mounts
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token); // If there's a token, the user is logged in

    // Set initial background based on route without waiting for scroll
    if (isSolidPage) {
      setNavBackground("#184E47");
      setNavSize("4px");
    } else {
      handleScroll();
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", () => setIsMobile(window.innerWidth < 992));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", () => setIsMobile(window.innerWidth < 992));
    };
  }, [isSolidPage]);

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Clear the login token from localStorage
    setIsLoggedIn(false); // Update the login state
    navigate("/"); // Redirect to home or login page
  };

  return (
    <nav
      className="navbar fixed-top navbar-expand-xxl"
      style={{
        backgroundColor: navBackground,
        padding: navsize,
        transition: "all 0.4s ease",
      }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} style={{ marginTop: "-15px" }} alt="Logo" width="50" height="50" />
          <span id="Name">Traveller's</span>
        </Link>
        <button
          className="navbar-toggler bg-success"
          onClick={() => { setNavBackground("#184E47"); }}
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
            <li className="nav-item"><Link className="nav-link" to="/Addblog">Add Blog</Link></li>
            <li className="nav-item">
              <Link className="nav-link" to="#" onClick={() => setIsContactOpen(true)}>Contact Us</Link>
            </li>
            <li className="nav-item dropdown">
              {isLoggedIn ? (
                <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <FaRegUserCircle  className="usercircleedit"/>
                </Link>
              ) : (
                <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Login
                </Link>
              )}
              <ul className="dropdown-menu">
                {!isLoggedIn && (
                  <>
                    <li><Link className="dropdown-item" to="/login">Login</Link></li>
                    <li><Link className="dropdown-item" to="/signup">Sign up</Link></li>
                    <li><Link className="dropdown-item" to="/Adminlogin">Admin Login</Link></li>
                  </>
                )}
                {isLoggedIn && (
                  <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
                )}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
