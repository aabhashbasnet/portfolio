import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Reference for detecting clicks outside

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">AB</Link>
      </div>

      {/* Desktop & Mobile Menu */}
      <ul ref={menuRef} className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
        </li>
        <li>
          <Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link>
        </li>
        <li>
          <Link to="/skills" onClick={() => setIsMenuOpen(false)}>Skills</Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </li>
        <li>
          <Link to="/blogs" onClick={() => setIsMenuOpen(false)}>Blogs</Link>
        </li>
      </ul>

      {/* Mobile Menu Toggle */}
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
