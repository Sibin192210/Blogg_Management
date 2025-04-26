import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Forgetpass.css";

function Forgetpass({ setShowNavbarFooter }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [enteredOtp, setEnteredOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    setShowNavbarFooter?.(false);
    return () => setShowNavbarFooter?.(true);
  }, [setShowNavbarFooter]);

  const generateRandomOtp = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const handleSendOtp = async () => {
    if (!email) return alert("Please enter your email");

    try {
      const res = await fetch("http://localhost:3003/checkEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!data.success) return alert("Invalid email address");

      const otp = generateRandomOtp();
      setGeneratedOtp(otp);
      setOtpSent(true);

      // In real application, use an email service to send OTP
      alert("OTP sent to your email: " + otp);
    } catch (err) {
      alert("Server error");
    }
  };

  const handleVerifyOtp = () => {
    if (enteredOtp === generatedOtp) {
      setIsOtpVerified(true);
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  const handleResetPassword = async () => {
    if (!newPassword || !confirmPassword) return alert("Please fill all fields");
    if (newPassword !== confirmPassword) return alert("Passwords do not match");

    try {
      const res = await fetch("http://localhost:3003/updatePassword", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password: newPassword }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Password updated successfully. Please login.");
        navigate("/Login");
      } else {
        alert(data.msg);
      }
    } catch (err) {
      alert("Failed to update password");
    }
  };

  return (
    <div className="forgetpass-page">
      <div className="forgetpass-container">
        <h2>Forgot Password</h2>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={otpSent}
        />
        {!otpSent && <button onClick={handleSendOtp}>Send OTP</button>}

        {/* OTP Input */}
        {otpSent && !isOtpVerified && (
          <>
            <input
              type="text"
              placeholder="Enter 6-digit OTP"
              value={enteredOtp}
              onChange={(e) => setEnteredOtp(e.target.value)}
            />
            <button onClick={handleVerifyOtp}>Verify OTP</button>
          </>
        )}

        {/* Password Reset */}
        {isOtpVerified && (
          <>
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Retype Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button onClick={handleResetPassword}>Update Password</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Forgetpass;
