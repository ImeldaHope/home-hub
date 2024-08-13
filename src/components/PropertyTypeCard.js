import React from 'react'
import '../styles/property-type-card.css'

function PropertyTypeCard() {
  return (
    <section>
        <small><em className='dash'>———</em> Property Types</small>
        <h2>Explore Property <em>Types</em></h2>
        <div className='main-type'>        
            <div className='type-card'>
                <h5>Apartments</h5>
                <p>300 Properties</p>
            </div>
        </div>
    </section>
  )
}

export default PropertyTypeCard