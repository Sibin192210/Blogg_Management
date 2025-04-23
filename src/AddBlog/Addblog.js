import React from 'react'
import "./Addblog.css"
const Addblog = () => {
  return (
    <div>
      <div className='Add-blog-parent'>
        <div className='blog-input-contents'>
          <form className='form-edit' action="">
            <input type="text"
              placeholder='Enter the main heading'
              required
              id='mainheading'
            />
            <input type="text"
              placeholder='Enter the author name'
              required
              id='authorname'
            />
            <label htmlFor="">Insert the Thumbnail image</label>
            <input type="file"
              required
              id='thumbnailimage'
            />
            <input type="text"
              required
              placeholder='Enter sub heading-1'
              id='subheading-1'
            />
            <input type="text"
              required
              placeholder='Enter story introduction'
              id='storyintro-1' />
            <input type="text"
              required
              placeholder='Enter sub heading-2'
              id='subheading-2'
            />
            <input type="text"
              placeholder='story-2'
              required
            />
            <label htmlFor="">Insert three best pic from your travel</label>
            <input type="file" />
            <input type="file" />
            <input type="file" />
            <input type="text"
              required
              placeholder='Enter sub-heading 3'
            />
            <input type="text"
              required
              placeholder='story-3'
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Addblog