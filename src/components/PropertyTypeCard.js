import React from 'react';
import '../styles/property-type-card.css';
import { HiHomeModern } from "react-icons/hi2";

function PropertyTypeCard({type, count, handleClick, selected}) {  
  
  return (
    <section>        
        <div className='main-type' onClick={(e) => handleClick(e)} type={type}>        
            <div className={`type-card ${selected ? 'current' : ''}`}>
                <HiHomeModern className='house-icon'/>
                <h5>{type}</h5>
                <p>{count} {type}s</p>
            </div>
        </div>
    </section>
  )
}

export default PropertyTypeCard