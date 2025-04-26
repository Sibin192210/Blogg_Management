import { useEffect, useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Signup({ setShowNavbarFooter }) {
  useEffect(() => {
    setShowNavbarFooter(false);
    return () => setShowNavbarFooter(true);
  }, [setShowNavbarFooter]);

  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.password !== data.confirmPassword) {
      setErrorMsg("Passwords do not match");
      return;
    }

    setErrorMsg(""); // clear previous errors

    axios
      .post("http://localhost:3003/SignupDetails", {
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        if (res.data.msg === " User details saved") {
          setSuccessMsg("🎉 Registered Successfully! You can now log in.");
          setData({ email: "", password: "", confirmPassword: "" });

          setTimeout(() => {
            setSuccessMsg("");
          }, 5000);
        } else if (res.data.status === 404) {
          setErrorMsg("This email already exists");
        } else {
          setErrorMsg("Something went wrong. Try again!");
        }
      })
      .catch((err) => {
        console.error("Error submitting form:", err);
        setErrorMsg("Server error. Please try later.");
      });
  };

  return (
    <div className="loginbg">
      <form className="loginpage" onSubmit={handleSubmit}>
        <div id="logintext" className="mb-5">
          Sign Up
        </div>

        <span>Email</span>
        <div className="input-group mb-4">
          <svg
            className="mt-2 mr-3"
            id="i-user"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="25"
            height="25"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M22 11 C22 16 19 20 16 20 13 20 10 16 10 11 10 6 12 3 16 3 20 3 22 6 22 11 Z M4 30 L28 30 C28 21 22 20 16 20 10 20 4 21 4 30 Z" />
          </svg>
          <input
            type="text"
            className="form-control"
            placeholder="Type your email"
            name="email"
            value={data.email}
            onChange={handleChange}
            required
          />
        </div>

        <span>Password</span>
        <div className="input-group mb-4">
          <svg
            className="mt-2"
            id="i-lock"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="25"
            height="25"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M5 15 L5 30 27 30 27 15 Z M9 15 C9 9 9 5 16 5 23 5 23 9 23 15 M16 20 L16 23" />
            <circle cx="16" cy="24" r="1" />
          </svg>
          <input
            type="password"
            className="form-control"
            placeholder="Create password"
            name="password"
            value={data.password}
            onChange={handleChange}
            required
          />
        </div>

        <span>Confirm Password</span>
        <div className="input-group mb-4">
          <svg
            className="mt-2"
            id="i-lock"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="25"
            height="25"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M5 15 L5 30 27 30 27 15 Z M9 15 C9 9 9 5 16 5 23 5 23 9 23 15 M16 20 L16 23" />
            <circle cx="16" cy="24" r="1" />
          </svg>
          <input
            type="password"
            className="form-control"
            placeholder="Re-enter password"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        {errorMsg && (
          <div
            style={{
              color: "red",
              textAlign: "center",
              marginBottom: "10px",
              fontWeight: "500",
            }}
          >
            {errorMsg}
          </div>
        )}

        {successMsg && (
          <div
            style={{
              backgroundColor: "#d4edda",
              color: "#155724",
              padding: "12px 16px",
              marginTop: "10px",
              border: "1px solid #c3e6cb",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "500",
              textAlign: "center",
              transition: "all 0.4s ease-in-out",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            {successMsg}
          </div>
        )}

        <div className="d-grid mt-3">
          <button className="btn" type="submit">
            Sign Up
          </button>
        </div>

        <div className="text-center mt-3">
          <p>
            Already have an account?{" "}
            <Link to="/Login" className="text-black fw-semibold">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Signup;
