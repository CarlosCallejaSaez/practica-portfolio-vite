import React, { useState } from 'react';
import "./Header.css"

function Header({ data }) {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const handleEmailClick = () => {
        alert(`Sending email to ${data.email}`);
    };

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`header-container ${isMenuOpen ? 'menu-open' : ''}`}>
            <div className="header-content">
                <h1>{data.name}</h1>
                <button onClick={handleEmailClick}>💌Email</button>
                <button className="menu-button" onClick={toggleMenu}>
                    ☰
                </button>
            </div>
            <div className={`links ${isMenuOpen ? 'show-menu' : ''}`}>
                <a href="#about-me-container">
                    About Me
                </a>

                <a href="#education-container">
                    Education
                </a>
                <a href="#work-container">
                    Work Experience
                </a>
                <a href="#projects">
                    Projects
                </a>
                <a href="#skills">
                    Skills
                </a>
            </div>
        </header>
    );
}

export default Header;