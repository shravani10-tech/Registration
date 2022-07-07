import React from "react";
import "./Components/Footer/Footer.css";
import Footer from "./Components/Footer/Footer.js";
import Demo from "./Components/Forms/signup.js";
import "./Components/Forms/signup.css";

import Navbar from "./Components/Navbar/Navbar.js";
import "./Components/Navbar/Navbar.css";
import "./Components/otp.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,

} from "react-router-dom";

import OTP from "./Components/otp.jsx";



function App() {
  return (
    <>

      <Router>
        <Navbar />
        
        <Routes>
          <Route path="/registration"element={<Demo/>}/>
          <Route exact path="/otpvr" element={<OTP/>} />
          <Route path='/otpvr' element={<Navigate to="OTP" />} />


        </Routes>
        <Footer/>
      </Router>



    </>

  );
}

export default App;