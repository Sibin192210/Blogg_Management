import React from "react";
import "./Footer.css";
import logo from "../../images/logo.png";
import instalogo from "../../images/instalogo.png";
import facebooklogo from "../../images/facebooklogo.png";
import twitterlogo from "../../images/twitterlogo.png";
import { Link } from "react-router-dom";

function Footer({ setIsContactOpen }) {
  //automatically asining the current date
  const d = new Date();
  let year = d.getFullYear();
  return (
    <div className="footerparent">
      <div className="container footer-container">
        {/* Footer Brand and Description */}
        <div className="footercontent1">
          <Link className="navbar-brand" to="/">
            <img src={logo} className="footer-logo" alt="Logo" />
            <span id="brandname">Traveller's</span>
          </Link>
          <div className="contentdata" style={{marginTop:"20px"}}>
            Explore breathtaking destinations with our travel blog! Get expert
            tips, hidden gems, and unforgettable experiences for your next
            adventure.
          </div>
        </div>

        {/* Office Address and Contact Info */}
        <div className="footercontent2">
          <ul>
            <li className="footertitle">Office</li>
            <li>
              <a
                className="footercontactdetails"
                href="https://maps.app.goo.gl/s98hhqRXy93BHBrJ6"
              >
                ITPL Road, Whitefield, Bangalore, Karnataka, PIN 560066, India
              </a>
            </li>
            <li>
              <a className="footercontactdetails" href="mailto:sibisibin001@gmail.com">
                sibisibin001@gmail.com
              </a>
            </li>
            <li>
              <a className="footercontactdetails" href="tel:+919687767705">
                +91 9687767705
              </a>
            </li>
          </ul>
        </div>

        {/* Footer Navigation Links */}
        <div className="footercontent3">
          <ul>
            <li className="footertitle">Links</li>
            <li>
              <Link className="footerlink" to="/">Home</Link>
            </li>
            <li>
              <Link className="footerlink" to="/about">About Us</Link>
            </li>
            <li>
              <Link className="footerlink" to="/add-blog">Add Blog</Link>
            </li>
            <li>
              <Link
                className="footerlink"
                to="#"
                onClick={() => setIsContactOpen && setIsContactOpen(true)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footercontent4">
          <div className="footertitle">Follow Us</div>
          <div className="social-icons">
            <a href="https://www.instagram.com/">
              <img src={instalogo} alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/">
              <img src={facebooklogo} alt="Facebook" />
            </a>
            <a href="https://x.com/?lang=en">
              <img src={twitterlogo} alt="Twitter" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">Easy Turbo ©{year} All Rights Reserved</div>
    </div>
  );
}

export default Footer;
