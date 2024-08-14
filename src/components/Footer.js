import React from 'react'
import '../styles/footer.css'
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div>
        <div className='footer'>
            <div className='footer-text'>
              <h1>Home<em>Hub</em></h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla a auctor pharetra, felis risus facilisis dolor, ac dictum elit lorem sit amet elit. Integer ac odio non nulla ultrices sollicitudin. </p>
            </div>
            <div className='footer-links'>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/properties">Properties</NavLink> 
              <NavLink to="/about">About</NavLink>
            </div>
            
            <form className='footer-form'> 
              <p>Subscribe to Our newsletter:</p>
              <input type='email' placeholder='email adress' />
              <input type='submit'/>
            </form>
        </div>
        <div className='after-footer'> 
            <p>Copyright<sup>&copy;</sup> 2024 HomeHub</p>
            <p>User Terms & Conditions | Privacy Policy</p>
        </div>
    </div>
  )
}

export default Footer