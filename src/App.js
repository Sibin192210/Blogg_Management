import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/User/Login';
import Signup from './Components/User/Signup';
import Homepage from './Components/Homepage/Homepage';
import Contact from './Components/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';
import { useState } from 'react';
import Footer from './Components/Footer/Footer';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [showNavbarFooter, setShowNavbarFooter] = useState(true);

  return (
    <BrowserRouter>
      {showNavbarFooter && <Navbar setIsContactOpen={setIsContactOpen} />}

      <Routes>
        <Route path="/" element={<Homepage setShowNavbarFooter={setShowNavbarFooter} />} />
        <Route path="/Signup" element={<Signup setShowNavbarFooter={setShowNavbarFooter} />} />
        <Route path="/Login" element={<Login setShowNavbarFooter={setShowNavbarFooter} />} />
      </Routes>

      {showNavbarFooter && <Footer setIsContactOpen={setIsContactOpen} />}
      <Contact isOpen={isContactOpen} setIsContactOpen={setIsContactOpen} />
    </BrowserRouter>
  );
}

export default App;
