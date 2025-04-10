import React from 'react'
import "./Antartica.css";
import antartica from "../images/antartica.jpg"
import ice1 from "../images/ice-1.jpg"
import ice2 from "../images/ice-2.jpg"
import ice3 from "../images/ice-3.jpg"
import ice4 from "../images/ice-4.jpg"
const Antartica = () => {
    return (
        <div>
            <div className='demo-stry-parent'>
                <div className='content-edit'>
                    <h1 className='story-heading'>Frozen Frontier of Earth</h1>
                    <h6>"Antarctica: Land of Extremes"</h6>
                    <div className='image-edit'>
                        <img src={antartica} alt="" />
                    </div>
                    <div className='stry-contents-1'>
                        <h2>Introduction</h2>
                        <p>Antarctica—the southernmost continent—is a vast, icy expanse that holds many of Earth’s most profound mysteries.
                            Covering more than 14 million square kilometers, this frozen world is the coldest, driest, and windiest place
                            on the planet. Despite its harsh climate, Antarctica captivates scientists, adventurers, and nature lovers alike.
                            It’s the only continent without a native human population, preserved under an international treaty as a haven for
                            scientific research and environmental protection. Beneath its seemingly desolate surface lies a realm teeming
                            with geological history, rare wildlife, and changing ice landscapes that are key indicators of global climate
                            health. Whether it's the sight of emperor penguins marching across the snow or the towering icebergs drifting
                            silently, Antarctica offers an awe-inspiring perspective on Earth’s natural beauty and fragility.</p>

                        <h2>History Carved in Ice</h2>
                        <p>Long before human eyes ever gazed upon its icy shores, Antarctica existed in isolation—its story written not in books,
                            but in the layers of ice and rock that scientists continue to study. While early theories about a southern landmass
                            date back to ancient Greece, it wasn’t until 1820 that Antarctica was officially discovered by explorers from Russia,
                            Britain, and the United States. For much of history, it remained untouched and enigmatic, its interior unexplored.
                        </p>
                        <p>The 20th century ushered in a golden age of exploration, with legendary figures like Ernest Shackleton and Roald
                            Amundsen risking everything to traverse the hostile terrain. These expeditions revealed not only the continent’s
                            unforgiving nature but also its remarkable geological and climatological significance. Antarctica is a living time
                            capsule—its ice sheets contain air bubbles and sediments dating back hundreds of thousands of years, providing
                            scientists with invaluable insight into Earth’s climatic past. Today, Antarctica is a hub for international research
                            and remains one of the few truly wild places left on Earth.

                        </p>
                    </div>
                    {/* carosuel beggining */}
                    <div className='carosuel-parent'>
                        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={ice1} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={ice2} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={ice3} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={ice4} className="d-block w-100" alt="..." />
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
                        <h2>Traveller’s Tips for Visiting Antarctica
</h2>
                        <p>
                        Visiting Antarctica is not like any other travel experience—it’s a once-in-a-lifetime expedition that requires 
                        serious planning and a spirit of adventure. First, travel is typically only possible during the austral summer, 
                        from November to March, when temperatures are less severe and daylight lasts nearly 24 hours. Most visitors arrive
                         via cruise expeditions departing from southern Argentina or New Zealand, with strict environmental guidelines in place
                          to protect the fragile ecosystem.
                        </p>
                        <p>
                        Pack thermal layers, waterproof boots, and heavy-duty outerwear; weather conditions can shift rapidly. Binoculars and
                         a good camera are must-haves, especially for spotting whales, seals, and vast colonies of penguins. It’s important to
                          mentally prepare for disconnection, as there’s limited to no internet, allowing travelers to truly immerse themselves
                           in nature. Most importantly, choose tour operators that are part of the International Association of Antarctica Tour
                            Operators (IAATO) to ensure responsible and safe travel practices. This icy wonderland may be remote, but it leaves
                             an imprint that lasts a lifetime.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Antartica