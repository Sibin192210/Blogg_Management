import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/User/Login';
import Signup from './Components/User/Signup';
import Homepage from './Components/Homepage/Homepage';
import Contact from './Components/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';
import { useState } from 'react';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  return (
    <BrowserRouter>
      
      
      <Routes>       
        <Route path="/" element={[ <Navbar setIsContactOpen={setIsContactOpen} />,<Homepage />]} />
        <Route  path="/Contact" element={<Contact isOpen={isContactOpen} setIsContactOpen={setIsContactOpen} />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
     

    </BrowserRouter>
  );
}

export default App;
