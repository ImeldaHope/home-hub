import React from "react";
import UserSection from "./UserSection";
import '../styles/navbar.css';
import { NavLink } from "react-router-dom";

function NavBar() {
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
      <UserSection />
    </header>
    
  )
}

export default NavBar;
