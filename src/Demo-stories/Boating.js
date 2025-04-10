import React from 'react';
import "./Boating.css";
import boating from "../images/mountain-boating.jpg";
import boat1 from "../images/boat-1.jpg";
import boat2 from "../images/boat-2.jpg";
import boat3 from "../images/boat-3.jpg";
import boat4 from "../images/boat-4.jpg";

const Boating = () => {
    return (
        <div>
            <div className='demo-stry-parent'>
                <div className='content-edit'>
                    <h1 className='story-heading'>Mountain Lake Boating</h1>
                    <h6>"Serenity Between Peaks"</h6>
                    <div className='image-edit'>
                        <img src={boating} alt="Mountain Lake Boating" />
                    </div>
                    <div className='stry-contents-1'>
                        <h2>Introduction</h2>
                        <p>There’s something undeniably magical about gliding across a mountain lake, surrounded by snow-dusted peaks and endless sky. Mountain lake boating offers a peaceful escape into nature where the stillness of the water reflects the grandeur of towering cliffs and forests. Whether it's paddling across crystal-clear alpine waters or rowing a wooden boat at dawn, the experience connects you deeply with nature’s rhythm.</p>
                        <p>Popular around the world in regions like the Swiss Alps, the Rockies, and the Himalayas, boating on mountain lakes can range from gentle canoe rides to invigorating kayaking adventures. Each lake has its own unique personality—some are fed by ancient glaciers, while others rest within volcanic craters. No motor hums, no rush—just the soft sound of oars and the echo of birdcalls across the water. It's nature at its most calming, and for many, it becomes a meditative journey as much as a scenic one.</p>

                        <h2>Tranquility on Water</h2>
                        <p>Mountain lake boating isn’t just an outdoor activity—it’s an invitation to slow down and absorb your surroundings with all senses. The air is crisp, often carrying the scent of pine or fresh rain, and the reflections of the surrounding mountains create a breathtaking mirror image across the water’s surface. It’s also a haven for wildlife; don’t be surprised if a deer comes to drink from the shoreline or if an eagle soars above your boat.</p>
                        <p>In many high-altitude lakes, motorized boats are restricted to preserve the ecosystem, which enhances the quietude. This opens up opportunities for rowing, kayaking, and stand-up paddleboarding. Whether you’re with family or going solo, it’s a timeless way to explore secluded coves, tiny islands, or just drift aimlessly. Many mountain towns have boathouses where you can rent equipment, making it accessible for first-timers and seasoned boaters alike. Time spent on these lakes creates moments that linger far beyond the ripples.</p>
                    </div>

                    {/* Carousel Section */}
                    <div className='carosuel-parent'>
                        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={boat1} className="d-block w-100" alt="Boating Scene 1" />
                                </div>
                                <div className="carousel-item">
                                    <img src={boat2} className="d-block w-100" alt="Boating Scene 2" />
                                </div>
                                <div className="carousel-item">
                                    <img src={boat3} className="d-block w-100" alt="Boating Scene 3" />
                                </div>
                                <div className="carousel-item">
                                    <img src={boat4} className="d-block w-100" alt="Boating Scene 4" />
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
                        <h2>Traveller’s Tips for Mountain Boating</h2>
                        <p>Before a setting out on a mountain lake boating trip, there are a few things to keep in mind to ensure a safe and enjoyable adventure. First, check the weather forecast—conditions can change quickly in mountainous regions, and high winds can make boating dangerous. Always wear a life vest, even if you're a strong swimmer, and make sure your boat or kayak is properly equipped with paddles, a bailer, and a whistle.</p>
                        <p>Bring layers of clothing, including a windproof jacket, because temperatures also  can drop unexpectedly, especially in higher elevations. Early mornings are ideal for boating, when waters are calmest and the lake is often cloaked in a magical morning mist. Lastly, respect nature—don’t feed wildlife, avoid disturbing nesting birds, and leave no trace behind. If you’re boating in a national park or protected area, follow all posted regulations. With the right preparation, mountain lake boating becomes more than an outing—it becomes a memory etched in the heart.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Boating;
