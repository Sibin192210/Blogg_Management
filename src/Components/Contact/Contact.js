import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { CIcon } from "@coreui/icons-react";
import { cilClock,cilPhone,cilLocationPin,cilEnvelopeClosed} from "@coreui/icons";
import instalogo from "../../images/instalogo.png";
import facebooklogo from "../../images/facebooklogo.png";
import twitterlogo from "../../images/twitterlogo.png";

function Contact({ isOpen, setIsContactOpen }) {
  return (
    <div className={`contactpage ${isOpen ? "active" : ""}`}>
      <button
        className="close-btn"
        onClick={() => setIsContactOpen(false)}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          color: "white",
          backgroundColor: "transparent",
          border: "none",
          padding: "5px 10px",
          cursor: "pointer",
          fontSize: "30px",
          fontWeight: "bold",
        }}
      >
        X
      </button>
      <div>
        <Link className="navbar-brand" id="brand" to="/">
          <img
            src={logo}
            style={{ marginTop: "-15px" }}
            alt="Logo"
            width="50"
            height="50"
          />
          <span id="Name">Traveller's</span>
        </Link>
      </div>
      <div>
        <h3 className="heading">Get In Touch</h3>
        <p>
          We love people, places, travel and adventures. It will be our absolute
          pleasure to talk to you, exchange ideas, discuss plans and journey
          together. You’re most welcome to call us anytime 🙂
        </p>
      </div>
      <div>
        <h3 className="heading">Contact Info</h3>
        <ul>
          <li className="contactdetails ">
            <CIcon className="contacticon" icon={cilLocationPin} />
            <a href="https://maps.app.goo.gl/s98hhqRXy93BHBrJ6">Kanyakumari - 629163, Tamil Nadu, India</a>
          </li>
          <li className="contactdetails">
            <CIcon className="contacticon" icon={cilPhone} />
            <a href="tel:+919687767705">+91 9687767705</a>
          </li>
          <li className="contactdetails">
            <CIcon className="contacticon" icon={cilEnvelopeClosed} />
            <a href="mailto:sibisibin001@gmail.com">sibisibin001@gmail.com</a>
          </li>
          <li className="contactdetails">
            <CIcon className="contacticon" icon={cilClock} />
            All Days : 08.00 AM to 08.00 PM
          </li>
        </ul>
      </div>
      <div>
        <div className="media">
          <a href="https://www.instagram.com/">
            <img className="medialogo" src={instalogo} alt="" />
          </a>
          <a href="https://www.facebook.com/">
            <img className="medialogo" src={facebooklogo} alt="" />
          </a>
          <a href="https://x.com/?lang=en">
            <img className="medialogo" src={twitterlogo} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
