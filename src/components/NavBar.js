import React, { useState } from "react";
import UserSection from "./UserSection";
import '../styles/navbar.css';
import { NavLink } from "react-router-dom";
import { FaHeartCircleCheck, FaBars, FaLinesLeaning } from "react-icons/fa6";

function NavBar({ openWishlist }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header>
      <div id="logo-div">
        <h1>Home<em>Hub</em></h1>
      </div>
      <div className="burger-menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaLinesLeaning /> : <FaBars />}
      </div>            
        <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/properties">Properties</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
        </nav>
        <FaHeartCircleCheck className="wishlist-icon" onClick={openWishlist} />
        <UserSection />
      {menuOpen && (
        <div className={`nav-container ${menuOpen ? 'open' : ''}`}>
          <nav>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/properties">Properties</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
            </ul>
          </nav>
          <FaHeartCircleCheck className="wishlist-icon" onClick={openWishlist} />
          <UserSection />
        </div>
      )}
    </header>
  );
}

export default NavBar;
