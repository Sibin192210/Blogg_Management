import React from 'react'
import "./Chinawall.css";
import greatwall from "../images/greatwall.jpg"
import chin1 from "../images/chin1.jpg"
import chin2 from "../images/chin2.jpg"
import chin3 from "../images/chin3.jpg"
import chin4 from "../images/chin4.jpg"
const Chinawall = () => {
    return (
        <div>
            <div className='demo-stry-parent'>
                <div className='content-edit'>
                    <h1 className='story-heading'>Great Wall of China Majesty</h1>
                    <h6>"Endless Wall Through Time"</h6>
                    <div className='image-edit'>
                        <img src={greatwall} alt="" />
                    </div>
                    <div className='stry-contents-1'>
                        <h2>Introduction</h2>
                        <p>Spanning thousands of miles across diverse landscapes, the Great Wall of China is not just a colossal
                            architectural feat—it’s a symbol of endurance, resilience, and imperial power. Built to protect ancient
                            Chinese states and empires from invading forces, this man-made marvel winds across mountains, deserts,
                            and grasslands like a dragon sleeping beneath the earth. Its roots trace back over two millennia, beginning
                            during the 7th century BC, with many sections consolidated and rebuilt during the Ming Dynasty. Today,
                            it stands as one of the most iconic landmarks in the world, drawing millions of travelers eager to witness its
                            grandeur firsthand. Whether one visits the popular sections like Badaling or ventures to the rugged
                            and untouched Jiankou stretch, the Wall offers breathtaking views and a profound sense of history.
                            As you walk along its ancient stones,
                            it's impossible not to reflect on the human effort, sacrifice, and determination it represents.</p>

                        <h2>History in Stone</h2>
                        <p>The story of the Great Wall is one of evolution and ambition. While its construction began in fragments under various states during the Warring States period, it wasn’t until the reign of Qin Shi Huang—the first Emperor of China—that a unified effort was undertaken. His vision: a singular, fortified barrier to protect the nascent empire. This early version was primarily built using tamped earth, not the stone and brick seen today. Over centuries, dynasties added to it, most notably the Ming Dynasty, which reconstructed vast sections using stronger materials and built watchtowers, barracks, and signal beacons. The Wall served multiple purposes—defense, border control, and even trade regulation. It was a lifeline for military communication, using smoke and fire signals to alert of enemy advances. The Wall wasn’t impenetrable, but it delayed invasions and served as a psychological deterrent.
                            More than a barrier, it became a symbol of unity and China's strength.</p>
                        <p>Centuries later, the Ming Dynasty (1368–1644) took the Wall to an unprecedented level. With a renewed threat from Mongol forces, the Ming rulers reconstructed the Wall using bricks, stone, and tiles—making it both stronger and more permanent. This version featured massive watchtowers for surveillance, beacon towers for messaging, and garrison stations that supported troops stationed along its expanse. These structures weren’t just military installations; they were mini-settlements, complete with storage, housing, and wells.
                            The ingenuity behind this infrastructure shows how the Wall functioned more as a fortified border zone than just a fence.</p>

                    </div>
                    {/* carosuel beggining */}
                    <div className='carosuel-parent'>
                        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={chin1} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={chin2} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={chin3} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={chin4} className="d-block w-100" alt="..." />
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
                        <h2>Traveler’s Tips</h2>
                        <p>Exploring the Great Wall is both awe-inspiring and physically demanding, depending on the section you choose.
                            For a first-time visitor, Badaling is the most accessible and well-restored area, complete with handrails and cable cars.
                            However, it’s also the most crowded. For those seeking a raw, authentic experience, Mutianyu offers a balance between scenic
                            beauty and serenity. Jiankou and Simatai, though rugged and partially unrestored
                            are ideal for experienced hikers and photographers looking for dramatic landscapes.
                        </p>
                        <p>Visit in spring or autumn for the best weather—clear skies and mild temperatures. Wear comfortable,
                            sturdy shoes, and bring water, snacks, and sun protection. Most importantly, pace yourself. The steep steps and altitude can be exhausting
                            even for the fit. Hiring a guide can enhance your understanding of the Wall’s history and nearby cultural sites. Lastly, remember to respect
                            the site:
                            stick to marked paths, avoid graffiti, and carry out any trash
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chinawall