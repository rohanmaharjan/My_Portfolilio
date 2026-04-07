import React, { useState } from "react";
import "./navbar.css";

//component declaration
const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <nav className="navbar">
            <div className="navbar-left">
                <h1>My Portfolio</h1>
            </div>

            {/* hamburger icon */}
            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </div>

            <div className={`navbar-right ${menuOpen ? "active" : ""}`}>
                <ul className="nav-links">
                    <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
                    <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
                    <li><a href="#tech" onClick={() => setMenuOpen(false)}>Technology</a></li>
                    <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
                    <li><a href="#achievements" onClick={() => setMenuOpen(false)}>Achievements</a></li>
                    <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact Me</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;