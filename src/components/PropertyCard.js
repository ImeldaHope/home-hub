import React from "react";
import { IoLocationOutline, IoHeartCircleOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { LiaBedSolid } from "react-icons/lia";
import { PiBathtub } from "react-icons/pi";
import { TbRulerMeasure } from "react-icons/tb";
import "../styles/card.css";

function PropertyCard({properties}) {
  return (
    <div className="property_card">
      <div className="property_card-img_container">
        <img
          className="property_card-img"
          src={properties.images[0]}
          alt={properties.title}
          height={300}
        />
        <IoHeartCircleOutline
          className="like_icon icon"
          style={{ color: "#ffffff" }}
        />
        <div className="property_card-tags">
          <small>{properties.status}</small>
          <small>{properties.propertyType}</small>
        </div>
      </div>

      <div className="property_card-content">
        <div className="property_card-details">
          <h2 className="property_card-location">{properties.title}</h2>
          <div className="property_card-price">
            <h3>Kes {properties.price}</h3> 
            {properties.status === "For Rent"? <span>/year</span> : null }
          </div>          

          <div className="property_card-address_container">
            <FaLocationDot className="location_icon icon"/>
            
            <p className="property_card-address">
              {properties.location}
            </p>
          </div>
          <hr/>
          <div className="property_card-details_container">
            <div className="beds">
              <LiaBedSolid className="bed_icon icon" />
              <span>{properties.bedrooms}</span>
            </div>
            <div className="bath">
              <PiBathtub className="bath_icon icon" />
              <span>{properties.bathrooms}</span>
            </div>
            <div className="plinth">
              <TbRulerMeasure className="plinth_icon icon" />
              <span>{properties.squareFootage} sqft</span>
            </div>
          </div>
          <button className="view-property-btn">View Property</button>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;