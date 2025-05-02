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
import Tajmahal from './Demo-stories/Tajmahal';
import Egypt from './Demo-stories/Egypt';
import Chinawall from './Demo-stories/Chinawall';
import Antartica from './Demo-stories/Antartica';
import Boating from './Demo-stories/Boating';
import Aboutus from './Components/AboutUs/Aboutus';
import Forgetpass from './Components/User/Forgetpass';
import Adminlogin from './Components/Admin/Adminlogin';
import Addblog from './AddBlog/Addblog';
import ViewAllBlog from './Viewallblogs/ViewAllBlog';
import ViewOneBlog from './ViewOneblog/ViewOneBlog';

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
        <Route path="/Tajmahal" element={<Tajmahal />} />
        <Route path="/Egypt" element={<Egypt />} />
        <Route path="/Chinawall" element={<Chinawall />} />
        <Route path="/Antartica" element={<Antartica/>} />
        <Route path="/Boating" element={<Boating />} />
        <Route path="/Aboutus" element={<Aboutus />} />  
        <Route path='/Addblog' element={<Addblog />} />     
        <Route path='/ViewAllBlog' element={<ViewAllBlog/>}/> 
        <Route path='/blog/:id' element={<ViewOneBlog/>} />  {/* Updated dynamic route */}
        <Route path="/Forgetpass" element={<Forgetpass setShowNavbarFooter={setShowNavbarFooter} />} />        
        <Route path="/Adminlogin" element={<Adminlogin setShowNavbarFooter={setShowNavbarFooter} />} />        
      </Routes>

      {showNavbarFooter && <Footer setIsContactOpen={setIsContactOpen} />}
      <Contact isOpen={isContactOpen} setIsContactOpen={setIsContactOpen} />
    </BrowserRouter>
  );
}

export default App;
