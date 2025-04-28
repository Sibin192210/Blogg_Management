import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Addblog.css';
import { MdOutlineClose } from "react-icons/md";

const Addblog = () => {
  const [blogs, setBlogs] = useState([]);
  const [showForm, setShowForm] = useState(true);// for testing set to true
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

  const handleChange = (e) => {
    const { id, value, type, files } = e.target;

    if (type === 'file') {
      const fileURL = files[0] ? URL.createObjectURL(files[0]) : '';
      setFormData(prev => ({ ...prev, [id]: fileURL }));
    } else {
      setFormData(prev => ({ ...prev, [id]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBlogs(prev => [...prev, formData]);
    resetForm();
    setShowForm(false);
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

      {/* Form with Overlay */}
      {showForm && (
        <div className='Add-blog-parent'>
          <div className='popupoverlay'>
            <div className='blog-input-contents'>
              <button className="close-btn" onClick={handleCloseForm} aria-label="Close form">
              <MdOutlineClose  className="close-icon" />
              </button>
              <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Create New Blog Post</h2>
              <form className='form-edit' onSubmit={handleSubmit}>
                {/* Heading and Author */}
                <label htmlFor="mainheading">Enter your Blog name</label>
                <input type="text" id="mainheading" placeholder="Enter the main heading" required value={formData.mainheading} onChange={handleChange} />

                <label htmlFor="authorname">Enter the author name</label>
                <input type="text" id="authorname" placeholder="Enter the author name" required value={formData.authorname} onChange={handleChange} />

                {/* Thumbnail Image */}
                <label htmlFor="thumbnailimage">Insert the Thumbnail image</label>
                <input type="file" id="thumbnailimage" accept="image/*" required onChange={handleChange} />

                {/* Content Section 1 */}
                <label htmlFor="subheading1">Enter the sub heading-1</label>
                <input type="text" id="subheading1" placeholder="Enter sub heading-1" required value={formData.subheading1} onChange={handleChange} />

                <label htmlFor="introduction">Enter content-1</label>
                <textarea id="introduction" placeholder="Enter the Introduction about blog" required value={formData.introduction} onChange={handleChange}></textarea>

                {/* Content Section 2 */}
                <label htmlFor="subheading2">Sub-heading-2</label>
                <input type="text" id="subheading2" placeholder="Enter sub heading-2" required value={formData.subheading2} onChange={handleChange} />

                <label htmlFor="story2">Enter the content-2</label>
                <textarea id="story2" placeholder="Enter the story continuation" required value={formData.story2} onChange={handleChange}></textarea>
                <textarea id="story2a" placeholder="Enter the story continuation" value={formData.story2a} onChange={handleChange}></textarea>

                {/* Carousel Images */}
                <label>Insert three best pics from your travel</label>
                <input type="file" id="corosal1" accept="image/*" onChange={handleChange} />
                <input type="file" id="corosal2" accept="image/*" onChange={handleChange} />
                <input type="file" id="corosal3" accept="image/*" onChange={handleChange} />

                {/* Content Section 3 */}
                <label htmlFor="subheading3">Sub heading-3</label>
                <input type="text" id="subheading3" placeholder="Enter sub-heading 3" required value={formData.subheading3} onChange={handleChange} />

                <textarea id="story3" placeholder="Enter your story" required value={formData.story3} onChange={handleChange}></textarea>
                <textarea id="story3a" placeholder="Enter your story" value={formData.story3a} onChange={handleChange}></textarea>

                {/* Content Section 4 */}
                <label htmlFor="subheading4">Sub heading-4</label>
                <input type="text" id="subheading4" placeholder="Enter sub-heading 4" required value={formData.subheading4} onChange={handleChange} />

                <textarea id="story4" placeholder="Enter your story" required value={formData.story4} onChange={handleChange}></textarea>
                <textarea id="story4a" placeholder="Enter your story" value={formData.story4a} onChange={handleChange}></textarea>

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