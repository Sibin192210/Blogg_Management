import React from 'react'
import './Adminlogin.css';
import logo from "../../images/logo.png";

function Adminlogin() {
    return (
        <div className="admin-login-wrapper">
          <div className="admin-login-box">
            <div className="login-left">
              <img src={logo} alt="Illustration" />
            </div>
            <div className="login-right">
              <h2>Login as an Admin User</h2>
              <input type="email" placeholder="johndoe@xyz.com" />
              <input type="password" placeholder="********" />
              <button>LOGIN</button>
            </div>
          </div>
        </div>
      );
}

export default Adminlogin

