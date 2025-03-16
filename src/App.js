import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import About from './pages/About';
import "./App.css";
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Navbar remains on all pages */}
        <Navbar />
        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Hero />} />           {/* Home Route */}
          <Route path="/about" element={<About />} />  
          <Route path="/projects" element={<Projects />} />   
          <Route path="/skills" element={<Skills />} />  
          <Route path="/contact" element={<Contact />} /> 
          <Route path = "/blogs" element={<Blogs />} />
           {/* About Route */}
          {/* You can add more routes here for other pages */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
