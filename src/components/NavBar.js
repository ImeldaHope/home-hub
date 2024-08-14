import React from "react";
import UserSection from "./UserSection";
import '../styles/navbar.css';
import { NavLink } from "react-router-dom";
import { FaHeartCircleCheck } from "react-icons/fa6";

function NavBar({openWishlist}) {
  return (
    <header>
      <div id="logo-div">
          <h1>Home<em>Hub</em></h1>
      </div>    
      <nav>
          <ul>          
              <li><NavLink to="/">Home</NavLink> </li>
              <li><NavLink to="/properties">Properties</NavLink> </li>
              <li><NavLink to="/about">About</NavLink> </li>              
          </ul>
      </nav>        
      <FaHeartCircleCheck className="wishlist-icon" onClick={openWishlist}/> 
      <UserSection />
    </header>
    
  )
}

export default NavBar;
