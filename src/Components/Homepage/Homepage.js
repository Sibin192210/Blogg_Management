import React from "react";
import "./Homepage.css";
import bodycard from "../../images/bodycard.jpg";
import homepageVideo from "../../images/Homepage-vid.mp4";
import Navbar from "../Navbar/Navbar";
import background from "../../images/background2.jpg";
function Homepage() {
  return (
    <div>
      <Navbar />

      <div className="videocontent">
        
          <video src={homepageVideo}  autoPlay loop muted></video>

          <div className="content">
          <h1>EXPLORE. DREAM. DISCOVER</h1>
          <p>This is a world travel blog featuring beautiful destination, new experience and hidden places around the globe.</p>
          <button>Explore more</button>
        </div>
        
      </div>

      
      <div className="ff" style={{ backgroundImage: `url(${background})` }}>
          <div className="container">
            <div className="cards card-bg-none mb-3">
              <div className="card-body">
                <img src={bodycard} class="rounded float-start" alt="..." />

                <h3 className="card-title" id="bodytitle">
                  Delhi tours with love
                </h3>
                <p className="card-text">
                  Delhi is the capital of India and one of the most historic
                  cities on earth. The city is dotted with monuments stretching
                  back hundreds and even thousands of years. Delhi is also the
                  cultural and culinary capital of India, great for shopping,
                  dining, and sightseeing. And it’s a very green city,
                  criss-crossed by wide, leafy boulevards. Personally, I think
                  Delhi is a glorious city. As well as being my
                  home-away-from-home, I also find it inspiring and endlessly
                  fascinating. Like Rome, Delhi is an eternal city.We want to
                  change that with our I Love Delhi Tours – based on our own
                  fondness for the city.
                </p>
              </div>
            </div>

            <div id="loadmore">
              <a class="btn" type="button" disabled>
                <span
                  class="spinner-grow spinner-grow-sm"
                  aria-hidden="true"
                ></span>
                <span role="status">Load more...</span>
              </a>
            </div>
          </div>

          <div className="py-5" id="whyspecial">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 col-xs-12">
                  <div className="selection-title title-full w-100">
                    <h2>Why we are special?</h2>
                    <p>
                      Our experts strive for the very best in every single trip
                      we design for you wherever you chose to travel, making it
                      extraordinarily awesome!
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12 col-xs-12" id="experience">
                  <div className="row">
                    <div
                      className="col-lg-6 col-md-6 col-sm-6 "
                      id="experienceb"
                    >
                      <div className="counter-item d-flex align-items-center">
                        <div
                          className="counter-icon bg-primary text-white d-flex align-items-center justify-content-center rounded-circle"
                          style={{ width: "50px", height: "50px" }}
                        ></div>
                        <div className="counter-content text-left ms-3">
                          <h3 className="mb-0">25+</h3>
                          <p className="mb-0">Countries</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6 ">
                      <div className="counter-item d-flex align-items-center">
                        <div
                          className="counter-icon bg-primary text-white d-flex align-items-center justify-content-center rounded-circle"
                          style={{ width: "50px", height: "50px" }}
                        ></div>
                        <div className="counter-content text-left ms-3">
                          <h3 className="mb-0">100+</h3>
                          <p className="mb-0">Tours</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6 ">
                      <div className="counter-item d-flex align-items-center">
                        <div
                          className="counter-icon bg-primary text-white d-flex align-items-center justify-content-center rounded-circle"
                          style={{ width: "50px", height: "50px" }}
                        ></div>
                        <div className="counter-content text-left ms-3">
                          <h3 className="mb-0">50+</h3>
                          <p className="mb-0">Guides</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6 ">
                      <div className="counter-item d-flex align-items-center">
                        <div
                          className="counter-icon bg-primary text-white d-flex align-items-center justify-content-center rounded-circle"
                          style={{ width: "50px", height: "50px" }}
                        ></div>
                        <div className="counter-content text-left ms-3">
                          <h3 className="mb-0">1M+</h3>
                          <p className="mb-0">Happy Customer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Homepage;
