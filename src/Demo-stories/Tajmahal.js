import React from 'react'
import "./Tajmahal.css";
import tajamahal from "../images/Tajmahal.jpg"
import taj1 from "../images/Taj-1.jpg"
import taj2 from "../images/Taj-2.jpg"
import taj3 from "../images/Taj-3.jpg"
const Tajmahal = () => {
  return (
    <div>
      <div className='demo-stry-parent'>
        <div className='content-edit'>
        <h1 className='story-heading'>The Timeless Beauty of the Taj Mahal</h1>
        <h6>"Taj Mahal: Love in Stone"</h6>
        <div className='image-edit'>
          <img src={tajamahal} alt="" />
        </div>
        <div className='stry-contents-1'>
          <h2>Introduction</h2>
          <p>Rising like a vision from the banks of the Yamuna River, the Taj Mahal stands not only as a masterpiece of Mughal architecture but as a monument to love that has captured hearts around the world. Located in Agra, India, this white marble mausoleum is more than just a
            tourist destination—it's a story carved in stone.</p>
          <h2>Taj Mahal: Love in Stone</h2>
          <p>The Taj Mahal isn’t just an architectural wonder—it’s a monument born out of deep love and heartbreak. Commissioned by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal, who passed away giving birth to their 14th child, the structure immortalizes a story that transcends time. Located in Agra, India, the Taj Mahal took over 20 years and around 20,000 artisans to complete.

            Its design is more than beautiful; it’s symbolic. The perfect symmetry, the meticulous carvings, and the way light dances on the white marble at different times of day—it’s all a poetic tribute. Whether bathed in the soft pink of dawn or glowing golden at sunset, the monument feels alive. Visitors often describe their experience not in architectural terms, but in emotions—peace, awe, and reverence. It’s no surprise that UNESCO declared it a World Heritage Site and millions continue to be drawn to it year after year.</p>

        </div>
        {/* carosuel beggining */}
        <div className='carosuel-parent'>
          <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={taj1}className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={taj2} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={taj3} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="..." className="d-block w-100" alt="..." />
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
          <h2>Traveller’s Advice to Visit</h2>
          <p>When planning a visit to the majestic Taj Mahal, timing and preparation can truly elevate your experience. Seasoned travelers recommend visiting during the cooler months between October and March, when the weather is pleasant and the skies are clearer—perfect for viewing the white marble structure in its full glory. Arrive early in the morning, ideally before sunrise, to witness the Taj bathed in soft golden light and to avoid the heavy crowds that build up as the day progresses.</p>
          <p>Make sure to purchase your tickets online in advance to skip long queues. Wear comfortable shoes, as you’ll walk a lot, and keep a water bottle handy. Note that large bags, food, and drones are prohibited inside the complex, so travel light. Hiring a government-approved guide or using an audio tour can add great depth to your visit, revealing fascinating historical facts and architectural insights that might otherwise be missed.</p>
          <h2>The Emotion of a Visit</h2>
          <p>Visiting the Taj Mahal is not just about ticking off a landmark on your travel list—it’s an experience that touches the soul. As you approach the grand entrance and see the Taj Mahal perfectly framed by the gateway arch, it’s hard not to feel a lump in your throat. It’s beautiful in photos, but far more magical in person.</p>
          <p>The serenity of the Yamuna River flowing behind it, the quietness in the air despite the crowd, and the echo of footsteps in its marble halls create a timeless atmosphere. Even the hustle outside the gates fades away once you're inside. The monument commands silence, not by rule but by emotion.</p>
          <p>For couples, it’s a romantic pilgrimage. For photographers, it’s a dream. For history lovers, it's a chance to walk through centuries. And for everyone, it’s a reminder that love can leave behind a legacy stronger than stone.</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Tajmahal