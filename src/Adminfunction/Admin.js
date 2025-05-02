import React, { useEffect, useState } from 'react';
import './Admin.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import './AdminDashboard.css'; // Style as needed

const Admin = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get('http://localhost:3003/ViewAllBlog');
      setBlogs(response.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  const deleteBlog = async (id) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        await axios.delete(`http://localhost:3003/deleteBlog/${id}`);
        setBlogs(prev => prev.filter(blog => blog._id !== id));
      } catch (error) {
        console.error('Error deleting blog:', error);
        alert('Failed to delete blog.');
      }
    }
  };

  return (
    <div className="admin-dashboard container py-4">
      <h2 className="mb-4 text-center">Admin Blog Management</h2>
      <div className="row">
        {blogs.map(blog => (
          <div className="col-md-4 mb-4" key={blog._id}>
            <div className="card h-100">
              <img
                src={`http://localhost:3003/Blogimages/${blog.thumbnailimage}`}
                className="card-img-top"
                alt="Thumbnail"
              />
              <div className="card-body">
                <h5 className="card-title">{blog.mainheading}</h5>
                <p className="card-text">{blog.introduction.slice(0, 100)}...</p>
                <div className="d-flex justify-content-between">
                  <Link to={`/blog/${blog._id}`} className="btn btn-sm btn-info">View</Link>
                  <button onClick={() => deleteBlog(blog._id)} className="btn btn-sm btn-danger">Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
