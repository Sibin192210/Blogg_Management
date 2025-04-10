import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import "./Homepage.css";
import homepageVideo from "../../images/Homepage-vid.mp4";
import tajamahal from "../../images/Tajmahal.jpg"
import antartica from "../../images/antartica.jpg"
import egypt from "../../images/egypt-pyramid.jpg"
import greatwall from "../../images/greatwall.jpg"
import manali from "../../images/manali.jpg"
import boating from "../../images/mountain-boating.jpg"
import men from "../../images/tour.png"
import photographer from "../../images/photographer.png"
import guide from "../../images/tour-guide.png"
import camera from "../../images/camera-kid.png"
import writer from "../../images/writing.png"

function Homepage({ setShowNavbarFooter }) {
  useEffect(() => {
    setShowNavbarFooter(true);
  }, [setShowNavbarFooter]);
  return (
    <div>

      <div className="videocontent">

        <video src={homepageVideo} autoPlay loop muted></video>

        <div className="content">
          <h1>EXPLORE. DREAM. DISCOVER</h1>
          <p>This is a world travel blog featuring beautiful destination, new experience and hidden places around the globe.</p>
          <button>Explore more</button>
        </div>

      </div>
      {/* site small intro */}
      <div className="siteoverview-parent">
        <div className="overview-image">
          <img src={photographer} alt="image" />
        </div>
        <div className="overview-content">
          <h1>Your Travel Experience, Your Blog!</h1>
          <p>
            Share your unique journeys, tips, and travel experiences with a global
            community. Our platform makes it easy to create, customize, and publish
            beautiful travel blogs that inspire, inform, and connect fellow adventurers
            around the world.
          </p>
          <p>Already a User?</p>
          <Link to="/Login">
            <button className="btn btn-success">Sign in</button>
          </Link>
        </div>
      </div>
      {/* for blog guide adding cards */}
      <div className="blog-guideparent">
        <div className="guide-contents">
          <h1>Why Just Read About It?</h1>
          <p>Pack Your Bags and Make it a Reality!- Your Next Adeventure Starts Here</p>
        </div>
        <div className="card-container">
          <div className="card" style={{ width: "18rem" }}>
            <img src={tajamahal} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Taj Mahal</h5>
              <p> A Timeless Symbol of Love and Architecture</p>
              <Link to="/Tajmahal">
                <a className="btn btn-primary">Read more...</a>
              </Link>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img src={egypt} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">The Pyramids of Egypt</h5>
              <p>Unraveling the Mysteries of the Ancient World</p>
              <Link to="/Egypt">
                <a className="btn btn-primary">Read more...</a>
              </Link>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img src={greatwall} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">The Great Wall of China</h5>
              <p>A Monument of Strength and Legacy</p>
              <Link to="/Chinawall">
                <button className="btn btn-primary">Read more...</button>
              </Link>            
           </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img src={antartica} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Antarctica</h5>
              <p>Exploring the Frozen Wilderness of the Earth</p>
              <Link to="/Antartica">
                <a className="btn btn-primary">Read more...</a>
              </Link>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img src={boating} className="card-img-top" alt="image not found" />
            <div className="card-body">
              <h5 className="card-title">Mountain Lake Boating</h5>
              <p>A Serene Escape into Nature’s Beauty</p>
              <Link to="/Boating">
                <a className="btn btn-primary">Read more...</a>
              </Link>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img src={manali} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Manali</h5>
              <p>A Himalayan Paradise for Nature Lovers and Adventurers</p>
              <a href="#" className="btn btn-primary">Read more...</a>
            </div>
          </div>

        </div>

        {/* Homepage Signup */}
        <div className="homepage-signup">
          <div className="sign-background">
            <div className="homepagesignup-contents">
              <h1>Start Your Journey: Become a Travel Blogger with Us</h1>
              <h4>Sign up to become a blogger and utilize our services...</h4>
              <Link to="/signup">
                <button className="btn btn-success">Sign up</button>
              </Link>
              <p className="editp">See our privacy policy</p>
              <p>This site is protected by ReCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
            </div>
            <div className="homepagesignup-pic">
              <img src={men} alt="Signup Visual" />
            </div>
          </div>
        </div>

        {/* bill board */}
        <div className="board-heading">
          <h1>Traveller's Blog-Vision</h1>
        </div>
        <div className="billboard-parent">
          <div className="board-edit">
            <img src={guide} alt="" />
            <h2>Explore World..</h2>
            <p>"Discover hidden gems, vibrant cities, scenic trails, and cultural wonders across the globe."</p>
          </div>
          <div className="board-edit">
            <img src={camera} alt="" />
            <h2>Capture it..</h2>
            <p>"Embrace the journey, snap memories, freeze emotions, and relive every breathtaking moment through your lens."</p>
          </div>
          <div className="board-edit">
            <img src={writer} alt="" />
            <h2>Write With Us</h2>
            <p>"Share your stories, inspire travelers, and become part of our global journey through words."

              Want a version that sounds more casual, adventurous, or community-driven?</p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Homepage;
