import React, { useState } from "react";
import { Link } from "react-scroll";
import "./styles/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li><Link to="home" smooth={true} duration={500} onClick={closeMenu}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500} onClick={closeMenu}>About</Link></li>
        <li><Link to="projects" smooth={true} duration={500} onClick={closeMenu}>Projects</Link></li>
        <li><Link to="skills" smooth={true} duration={500} onClick={closeMenu}>Skills</Link></li>
        <li><Link to="contact" smooth={true} duration={500} onClick={closeMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
