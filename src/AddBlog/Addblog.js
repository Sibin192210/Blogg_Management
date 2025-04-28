import React, { useState } from 'react';
import axios from 'axios'; // important import
import { Link } from 'react-router-dom';
import { MdOutlineClose } from "react-icons/md";
import './Addblog.css';

const Addblog = () => {
  const [blogs, setBlogs] = useState([]);
  const [showForm, setShowForm] = useState(true);
  const [formData, setFormData] = useState({
    mainheading: '',
    authorname: '',
    thumbnailimage: '',
    subheading1: '',
    introduction: '',
    subheading2: '',
    story2: '',
    story2a: '',
    corosal1: '',
    corosal2: '',
    corosal3: '',
    subheading3: '',
    story3: '',
    story3a: '',
    subheading4: '',
    story4: '',
    story4a: ''
  });

  const [selectedFiles, setSelectedFiles] = useState({});

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
    Object.keys(formData).forEach(key => {
      blogData.append(key, formData[key]);
    });

    Object.keys(selectedFiles).forEach(key => {
      blogData.append(key, selectedFiles[key]);
    });

    try {
      const response = await axios.post('http://localhost:3003/addBlogDetails', blogData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      if (response.data.msg === 'Blog created successfully') {
        alert('Blog posted successfully');
        setBlogs(prev => [
          ...prev,
          {
            ...formData,
            thumbnailimage: response.data.thumbnailPath  // Assuming server returns the image URL
          }
        ]);
        resetForm();
        setShowForm(true);  // Show the form again for new blog
      } else {
        alert('Something went wrong');
      }
    } catch (error) {
      console.error('Error submitting blog:', error);
      alert('Server error');
    }
  };

  const resetForm = () => {
    setFormData({
      mainheading: '',
      authorname: '',
      thumbnailimage: '',
      subheading1: '',
      introduction: '',
      subheading2: '',
      story2: '',
      story2a: '',
      corosal1: '',
      corosal2: '',
      corosal3: '',
      subheading3: '',
      story3: '',
      story3a: '',
      subheading4: '',
      story4: '',
      story4a: ''
    });
    setSelectedFiles({});
    document.querySelectorAll('input[type="file"]').forEach(input => input.value = '');
  };

  const handleCloseForm = () => {
    resetForm();
    setShowForm(false);
  };

  return (
    <div>
      {/* Blog Cards Display */}
      {blogs.length > 0 && (
        <div className="blog-card-container">
          {blogs.map((blog, index) => (
            <div key={index} className="card">
              {blog.thumbnailimage && (
                <img src={blog.thumbnailimage} className="card-img-top" alt="Thumbnail" />
              )}
              <div className="card-body">
                <h5 className="card-title">{blog.mainheading}</h5>
                <p>{blog.subheading1 || (blog.introduction && blog.introduction.slice(0, 60) + '...')}</p>
                <Link to={`/blog/${index}`} className="btn btn-primary">
                  Read more...
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Button to open form */}
      {!showForm && (
        <button className="open-form-btn" onClick={() => setShowForm(true)}>
          Create New Blog
        </button>
      )}

      {/* Form */}
      {showForm && (
        <div className='Add-blog-parent'>
          <div className='popupoverlay'>
            <div className='blog-input-contents'>
              <button className="close-btn" onClick={handleCloseForm} aria-label="Close form">
                <MdOutlineClose className="close-icon" />
              </button>
              <h2>Create New Blog Post</h2>
              <form className='form-edit' onSubmit={handleSubmit}>
                <label>Main Heading</label>
                <input type="text" id="mainheading" value={formData.mainheading} onChange={handleChange} required />

                <label>Author Name</label>
                <input type="text" id="authorname" value={formData.authorname} onChange={handleChange} required />

                <label>Thumbnail Image</label>
                <input type="file" id="thumbnailimage" accept="image/*" onChange={handleChange} required />

                <label>Sub Heading 1</label>
                <input type="text" id="subheading1" value={formData.subheading1} onChange={handleChange} required />

                <label>Introduction</label>
                <textarea id="introduction" value={formData.introduction} onChange={handleChange} required></textarea>

                <label>Sub Heading 2</label>
                <input type="text" id="subheading2" value={formData.subheading2} onChange={handleChange} required />

                <label>Story 2</label>
                <textarea id="story2" value={formData.story2} onChange={handleChange} required></textarea>
                <textarea id="story2a" value={formData.story2a} onChange={handleChange}></textarea>

                <label>Carousel Images</label>
                <input type="file" id="corosal1" accept="image/*" onChange={handleChange} />
                <input type="file" id="corosal2" accept="image/*" onChange={handleChange} />
                <input type="file" id="corosal3" accept="image/*" onChange={handleChange} />

                <label>Sub Heading 3</label>
                <input type="text" id="subheading3" value={formData.subheading3} onChange={handleChange} required />

                <label>Story 3</label>
                <textarea id="story3" value={formData.story3} onChange={handleChange} required></textarea>
                <textarea id="story3a" value={formData.story3a} onChange={handleChange}></textarea>

                <label>Sub Heading 4</label>
                <input type="text" id="subheading4" value={formData.subheading4} onChange={handleChange} required />

                <label>Story 4</label>
                <textarea id="story4" value={formData.story4} onChange={handleChange} required></textarea>
                <textarea id="story4a" value={formData.story4a} onChange={handleChange}></textarea>

                <button type="submit">Publish Blog</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Addblog;
