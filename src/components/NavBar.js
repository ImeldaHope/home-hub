import React from "react"
import SearchBar from "./SearchBar";
import UserSection from "./UserSection";

function NavBar() {
  return (

    <>
    <div id="logo-div">
        <h3>HomeHub</h3>
    </div>
    
    <nav>
        <ul>
            <li><a href="/">Home</a> </li>
            <li><a href="/about">About</a> </li>
            <li><a href="/properties">Properties</a> </li>
        </ul>
    </nav>
    <SearchBar />
    <UserSection />
    </>
    
  )
}

export default NavBar;
