import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineClose } from "react-icons/md";
import './Addblog.css';

const Addblog = () => {
  const [blogs, setBlogs] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    mainheading: '',
    authorname: '',
    subheading1: '',
    introduction: '',
    subheading2: '',
    story2: '',
    story2a: '',
    subheading3: '',
    story3: '',
    story3a: '',
    subheading4: '',
    story4: '',
    story4a: ''
  });

  const [selectedFiles, setSelectedFiles] = useState({
    thumbnailimage: null,
    corosal1: null,
    corosal2: null,
    corosal3: null
  });

  const isLoggedIn = localStorage.getItem('authToken');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value, type, files } = e.target;
    if (type === 'file') {
      setSelectedFiles(prev => ({ ...prev, [id]: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [id]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const blogData = new FormData();
    Object.entries(formData).forEach(([key, val]) => blogData.append(key, val));
    Object.entries(selectedFiles).forEach(([key, file]) => {
      if (file) blogData.append(key, file);
    });

    try {
      const response = await axios.post('http://localhost:3003/addBlogDetails', blogData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      if (response.data.msg === 'Blog saved successfully') {
        alert('Blog posted successfully');

        // ✅ FIXED: Include _id in new blog object
        setBlogs(prev => [
          ...prev,
          {
            ...formData,
            _id: response.data.data._id,
            thumbnailimage: `/Blogimages/${response.data.data.thumbnailimage}`
          }
        ]);

        resetForm();
      } else {
        alert('Something went wrong');
      }
    } catch (err) {
      console.error('Error submitting blog:', err);
      alert('Server error');
    }
  };

  const resetForm = () => {
    setFormData({
      mainheading: '',
      authorname: '',
      subheading1: '',
      introduction: '',
      subheading2: '',
      story2: '',
      story2a: '',
      subheading3: '',
      story3: '',
      story3a: '',
      subheading4: '',
      story4: '',
      story4a: ''
    });
    setSelectedFiles({
      thumbnailimage: null,
      corosal1: null,
      corosal2: null,
      corosal3: null
    });
    document.querySelectorAll('input[type="file"]').forEach(input => input.value = '');
  };

  const handleCloseForm = () => {
    resetForm();
    setShowForm(false);
  };

  const handleCreateNewBlog = () => {
    if (isLoggedIn) {
      setShowForm(true);
    } else {
      navigate('/login');
    }
  };

  return (
    <div>
      {blogs.length > 0 && (
        <div className="blog-card-container">
          {blogs.map((blog, idx) => (
            <div key={idx} className="card">
              {blog.thumbnailimage && (
                <img src={blog.thumbnailimage} className="card-img-top" alt="Thumbnail" />
              )}
              <div className="card-body">
                <h5 className="card-title">{blog.mainheading}</h5>
                <p>{blog.subheading1 || blog.introduction?.slice(0, 60) + '...'}</p>

                {/* ✅ Works now because _id is present */}
                <Link to={`/blog/${blog._id}`} className="btn btn-primary">Read more...</Link>
              </div>
            </div>
          ))}
        </div>
      )}

      <button className="open-form-btn" onClick={handleCreateNewBlog}>
        Create New Blog
      </button>

      {showForm && isLoggedIn ? (
        <div className="Add-blog-parent">
          <div className="popupoverlay">
            <div className="blog-input-contents">
              <button className="close-btn" onClick={handleCloseForm}><MdOutlineClose /></button>
              <h2>Create New Blog Post</h2>
              <form className="form-edit" onSubmit={handleSubmit}>
                <label>Main Heading</label>
                <input type="text" id="mainheading" value={formData.mainheading} onChange={handleChange} required />

                <label>Author Name</label>
                <input type="text" id="authorname" value={formData.authorname} onChange={handleChange} required />

                <label>Thumbnail Image</label>
                <input type="file" id="thumbnailimage" accept="image/*" onChange={handleChange} required />

                <label>Subheading 1</label>
                <input type="text" id="subheading1" value={formData.subheading1} onChange={handleChange} required />

                <label>Introduction</label>
                <textarea id="introduction" value={formData.introduction} onChange={handleChange} required />

                <label>Subheading 2</label>
                <input type="text" id="subheading2" value={formData.subheading2} onChange={handleChange} required />

                <label>Story 2</label>
                <textarea id="story2" value={formData.story2} onChange={handleChange} required />
                <textarea id="story2a" value={formData.story2a} onChange={handleChange} />

                <label>Carousel Images</label>
                <input type="file" id="corosal1" accept="image/*" onChange={handleChange} />
                <input type="file" id="corosal2" accept="image/*" onChange={handleChange} />
                <input type="file" id="corosal3" accept="image/*" onChange={handleChange} />

                <label>Subheading 3</label>
                <input type="text" id="subheading3" value={formData.subheading3} onChange={handleChange} required />

                <label>Story 3</label>
                <textarea id="story3" value={formData.story3} onChange={handleChange} required />
                <textarea id="story3a" value={formData.story3a} onChange={handleChange} />

                <label>Subheading 4</label>
                <input type="text" id="subheading4" value={formData.subheading4} onChange={handleChange} required />

                <label>Story 4</label>
                <textarea id="story4" value={formData.story4} onChange={handleChange} required />
                <textarea id="story4a" value={formData.story4a} onChange={handleChange} />

                <button type="submit">Publish Blog</button>
              </form>
            </div>
          </div>
        </div>
      ) : !isLoggedIn ? (
        <div className="login-warning">Please log in to upload a blog</div>
      ) : null}
    </div>
  );
};

export default Addblog;
