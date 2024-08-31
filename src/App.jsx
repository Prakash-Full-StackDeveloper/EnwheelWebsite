import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Service from './components/Service';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import NavigationBar from './NavigationBar';
import './App.css';
function App() {
  return (
    <Router className="bgColor">
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/" element={<Service />} /> 
      </Routes>
    </Router>
  );
}

export default App;

