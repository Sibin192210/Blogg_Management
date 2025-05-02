import React, { useEffect, useState } from 'react';
import './ViewAllBlog.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ViewAllBlog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3003/ViewAllBlog") 
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
      });
  }, []);

  return (
    <div className="viewallblog-container" style={{ paddingTop: "90px", backgroundColor: "#f2f2f2" }}>
      <div className="row justify-content-center">
        {blogs.map((blog, index) => (
          <div className="card m-3" style={{ width: "18rem" }} key={index}>
            <img src={`http://localhost:3003/Blogimages/${blog.thumbnailimage}`} className="card-img-top" alt="Thumbnail" />
            <div className="card-body">
              <h5 className="card-title">{blog.mainheading}</h5>
              <p className="card-text">{blog.introduction?.slice(0, 100)}...</p>
              <Link to={`/blog/${blog._id}`} className="btn btn-primary">Read more...</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAllBlog;
