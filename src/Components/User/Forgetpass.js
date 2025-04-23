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

  const handleSendOtp = () => {
    if (email) {
      const otp = generateRandomOtp();
      setGeneratedOtp(otp);
      setOtpSent(true);
      alert("OTP sent to your email: " + otp);
    } else {
      alert("Please enter your email");
    }
  };

  const handleVerifyOtp = () => {
    if (enteredOtp === generatedOtp) {
      setIsOtpVerified(true);
    } else {
      alert("Incorrect OTP");
    }
  };

  const handleResetPassword = () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
    } else if (!newPassword || !confirmPassword) {
      alert("Please fill in both password fields");
    } else {
      navigate("/Homepage");
    }
  };

  return (
    <div className="forgetpass-page">
      <div className="forgetpass-container">
        <h2>Forgot Password</h2>
  
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={otpSent}
        />
        {!otpSent && <button onClick={handleSendOtp}>Send OTP</button>}
  
        {/* OTP */}
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
            <button onClick={handleResetPassword}>Login</button>
          </>
        )}
      </div>
    </div>
  );
  
  
}

export default Forgetpass;
