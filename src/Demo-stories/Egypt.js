import React from 'react'
import "./Egypt.css";
import egypt from "../images/egypt-pyramid.jpg"
import prymid1 from "../images/prymid-1.jpg"
import prymid2 from "../images/prymid-2.jpg"
import prymid3 from "../images/prymid-3.jpg"
import prymid4 from "../images/prymid-4.jpg"
const Egypt = () => {
    return (
        <div>
            <div className='demo-stry-parent'>
                <div className='content-edit'>
                    <h1 className='story-heading'>Pyramids: Echoes of Eternity</h1>
                    <h6>"Pyramids: Stone of Time"</h6>
                    <div className='image-edit'>
                        <img src={egypt} alt="" />
                    </div>
                    <div className='stry-contents-1'>
                        <h2>Introduction</h2>
                        <p>Amidst the golden sands of Egypt, the Pyramids rise like timeless guardians of history, echoing tales from an ancient civilization that continues to mesmerize the world. The Great Pyramids of Giza—Khufu, Khafre, and Menkaure—are among the most iconic man-made structures in human history. Constructed over 4,500 years ago, these colossal tombs were built to honor pharaohs and ensure their journey to the afterlife. Their precise geometry, massive scale, and alignment with celestial bodies suggest an astounding understanding of science and engineering, especially for a civilization that existed millennia ago.</p>
                        <h2>Architectural Marvel of the Ancient World</h2>

                        <p>The Great Pyramid of Giza, the largest of the three, remains one of the most enduring symbols of architectural brilliance.
                            Standing at a staggering 146.6 meters (481 feet) at the time of its completion, it held the title of the tallest
                            man-made structure in the world for over 3,800 years. What makes this feat even more astonishing is that it was
                            constructed over 4,500 years ago, without the aid of modern machinery or advanced tools. The precision with
                            which each of the estimated 2.3 million limestone blocks was placed—some weighing as much as 80 tons—continues
                            to baffle historians and engineers.</p>
                        <p>The pyramid’s alignment with celestial bodies, especially the Orion constellation, hints at the deep astronomical knowledge of
                            the ancient Egyptians. This alignment wasn’t merely decorative—it reflected their religious beliefs and the journey of the pharaoh’s
                            soul into the afterlife. The internal layout, consisting of the King's Chamber, Queen's Chamber, and intricate passageways, showcases
                            remarkable engineering foresight. Despite countless theories, the exact methods used to construct the pyramids remain a topic of debate and admiration,
                            contributing to their eternal mystique.</p>

                    </div>
                    {/* carosuel beggining */}
                    <div className='carosuel-parent'>
                        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={prymid1} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={prymid2} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={prymid3} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={prymid4} className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className='sty-content-2'>
                        <h2>Spiritual Significance and Symbolism</h2>
                        <p>Beyond the bricks and brilliance, the Pyramids served as profound spiritual monuments. For the ancient Egyptians, death wasn’t the
                            end—it was a gateway to another realm. The pyramids were built as elaborate tombs to safeguard the pharaoh's journey to the afterlife.
                            Every angle, corridor, and chamber was designed with symbolic meaning. The pyramid’s shape—broad at the base and pointed at the
                            top—was believed to symbolize the rays of the sun, helping the pharaoh ascend to the heavens and reunite with the gods.</p>
                        <p>Inside, hieroglyphics, carvings, and sacred objects were carefully placed to assist in the afterlife. Many items
                            discovered within burial chambers include food, treasures, clothing, and statues meant to serve the ruler in
                            eternity. The belief was that life continued after death in a more divine form, and so every detail of the pyramid’s
                            construction reflected this spiritual commitment. Even today, visitors often describe the experience of entering a
                            pyramid as humbling—an encounter with both human ambition and sacred mystery.

                        </p>
                        <h2>Traveller’s Tips for Visiting the Pyramids</h2>
                        <p>A visit to the Pyramids of Giza can be an unforgettable experience, especially if you plan it wisely. First and foremost,
                            the best time to visit Egypt is during the cooler months from October to April. The midday heat, especially in summer,
                            can be intense and might take away from your ability to fully enjoy the vast Giza Plateau.</p>
                        <p>Carry bottled water and some cash, as local vendors and camel ride operators may not accept cards. Entry tickets to the complex can be purchased online or at the gate, but if you plan to explore inside the pyramids or the Solar Boat Museum, additional tickets are needed.</p>
                        <p>Hiring a certified local guide can elevate your visit by bringing ancient stories and symbolism to life. Many visitors also recommend taking a camel ride for a panoramic view of the site—it’s touristy, but magical. Just be sure to agree on the price beforehand. Respect the site, avoid climbing the pyramids, and you’ll walk away with memories as grand as the monuments themselves.

                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Egypt