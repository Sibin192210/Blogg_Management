import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import Signup from './Signup'
function Login() {
  return (
    <div className='loginbg'>

      <div className='loginpage'>

        <div id='logintext' className='mb-5'>Login</div>
        <span>username</span>
        <div className="input-group mb-4">
          <svg className='mt-2 mr-3' id="i-user" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="25" height="25" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <path d="M22 11 C22 16 19 20 16 20 13 20 10 16 10 11 10 6 12 3 16 3 20 3 22 6 22 11 Z M4 30 L28 30 C28 21 22 20 16 20 10 20 4 21 4 30 Z" />
          </svg>
          <input type="text" className="form-control" placeholder="Type your username" aria-label="Username"  />
        </div>

        <div>
          <span>password</span>
          <div className="input-group mb-4">
            <svg className='mt-2' id="i-lock" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="25" height="25" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
              <path d="M5 15 L5 30 27 30 27 15 Z M9 15 C9 9 9 5 16 5 23 5 23 9 23 15 M16 20 L16 23" />
              <circle cx="16" cy="24" r="1" />
            </svg>
            <input type="password" className="form-control" placeholder="Enter Password" aria-label="Username" />
          </div>
        </div>

        <p className="text-center"><a href="#" class="link-body-emphasis link-offset-2 link-underline-opacity-0 link-underline-opacity-0-hover">Forgot password</a></p>

        <div class="d-grid">
          <button class="btn" type="button">Login</button>
        </div>

        <div className="text-center">
          <p>
            Don't have an account?
          </p>
        </div>

        <div className="text-center mt-3">
          <p><Link to='/Signup' class="text-primary fw-semibold link-body-emphasis link-offset-2 link-underline-opacity-0 link-underline-opacity-0-hover">Sign up</Link></p>
        </div>

      </div>
    </div>

  )
}

export default Login