import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ViewOneblog.css'; 
import axios from 'axios';

const ViewOneBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3003/getBlog/${id}`)
      .then(res => setBlog(res.data))
      .catch(err => console.error("Error fetching blog:", err));
  }, [id]);

  if (!blog) return <p style={{ textAlign: 'center', paddingTop: '100px' }}>Loading...</p>;

  return (
    <div className='demo-stry-parent'>
      <div className='content-edit'>
        <h1 className='story-heading'>{blog.mainheading}</h1>
        <h6>By {blog.authorname}</h6>

        <div className='image-edit'>
          <img src={`http://localhost:3003/Blogimages/${blog.thumbnailimage}`} alt="Thumbnail" />
        </div>

        <div className='stry-contents-1'>
          <h2>{blog.subheading1}</h2>
          <p>{blog.introduction}</p>

          <h2>{blog.subheading2}</h2>
          <p>{blog.story2}</p>
          <p>{blog.story2a}</p>
        </div>

        <div className='carosuel-parent'>
          <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {[blog.corosal1, blog.corosal2, blog.corosal3].filter(Boolean).map((img, i) => (
                <div className={`carousel-item ${i === 0 ? 'active' : ''}`} key={i}>
                  <img
                    src={`http://localhost:3003/Blogimages/${img}`}
                    className="d-block w-100"
                    alt={`Slide ${i + 1}`}
                  />
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className='sty-content-2'>
          <h2>{blog.subheading3}</h2>
          <p>{blog.story3}</p>

          <h2>{blog.subheading4}</h2>
          <p>{blog.story4}</p>
          <p>{blog.story4a}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewOneBlog;
