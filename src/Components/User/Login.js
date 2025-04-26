import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login({ setShowNavbarFooter }) {
  const navigate = useNavigate();

  useEffect(() => {
    setShowNavbarFooter(false);
    return () => setShowNavbarFooter(true);
  }, [setShowNavbarFooter]);

  const [data, setData] = useState({ email: "", password: "" });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginMessage, setLoginMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
    setEmailError("");
    setPasswordError("");
    setLoginMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3003/loginDetails", data)
      .then((res) => {
        if (!res.data.success) {
          setEmailError("Invalid email");
        } else if (res.data.data.password !== data.password) {
          setPasswordError("Incorrect password");
        } else {
          setLoginMessage("Login Success");
          setTimeout(() => navigate("/"), 3000);
        }
      })
      .catch((err) => {
        console.error("Login error:", err);
      });
  };

  return (
    <div className="loginbg">
      <form className="loginpage" onSubmit={handleSubmit}>
        <div id="logintext" className="mb-5">
          Login
        </div>

        <span>Email</span>
        <div className="input-group mb-1">
          <input
            type="email"
            className="form-control"
            placeholder="Type your email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
        </div>
        {emailError && <div className="text-danger mb-2">{emailError}</div>}

        <span>Password</span>
        <div className="input-group mb-1">
          <input
            type="password"
            className="form-control"
            placeholder="Enter Password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
        </div>
        {passwordError && (
          <div className="text-danger mb-2">{passwordError}</div>
        )}

        <p className="text-center">
          <Link to="/Forgetpass" className="text-black">
            Forgot password
          </Link>
        </p>

        <div className="d-grid">
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </div>

        {loginMessage && (
          <div className="login-success">
            ✅ {loginMessage} – Redirecting...
          </div>
        )}

        <div className="text-center mt-3">
          <p>Don't have an account?</p>
          <Link to="/Signup" className="text-black">
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
