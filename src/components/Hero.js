import React from 'react'
import '../styles/hero.css'

function Hero() {
  return (
    <div className='hero'>
        <div>        
            <small><em className='dash'>———</em> Find Your Dream Home Today</small>
            <p className='sub-header'>Your Fast-Track to Property Deals: </p>
            <h1>Buy, Rent, Sell</h1>
            <p>Explore a wide range of properties, from luxurious apartments to cozy family homes, all tailored to your lifestyle and budget.
            Whether you're buying your first home or searching for an investment property, our expert agents are here to guide you every step of the way.</p>
        </div>
        <img src='house.png'/>
    </div>
  )
}

export default Hero