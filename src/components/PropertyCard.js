import React from "react";
import { IoLocationOutline, IoHeartCircleSharp } from "react-icons/io5";
import { LiaBedSolid } from "react-icons/lia";
import { PiBathtub } from "react-icons/pi";
import { TbRulerMeasure } from "react-icons/tb";
import "../styles/card.css";

function PropertyCard() {
  return (
    <div className="property_card">
      <img
        src="https://img.freepik.com/free-photo/movie-night-by-pool-whole-family_1268-31098.jpg?t=st=1723550396~exp=1723553996~hmac=ddee877aa035c23140d9e28d68ab38dd2419c4a0d782447f761076ec2f60617c&w=826"
        alt="property image"
      />
      <IoHeartCircleSharp />

      <div className="property_card-content">
        <div className="propertyy_card-tags">
          <small>For Rent</small>
          <small>Apartment</small>
        </div>

        <div className="property_card-details">
          <div className="property_card-price">
            <h3>$6,000</h3>
            <span>/month</span>
          </div>

          <p className="property_card-location">Riverview Retreat</p>

          <div className="property_card-address_container">
            <IoLocationOutline />
            <p className="property_card-address">
              452 Robert Drives, Lake Maryhaven, NY 23531-2648
            </p>
          </div>

          <div className="property_card-details_container">
            <div className="beds">
              <LiaBedSolid />
              <span>4 Beds</span>
            </div>
            <div className="bath">
              <PiBathtub />
              <span>2 Baths</span>
            </div>
            <div className="bath">
              <TbRulerMeasure />
              <span>3,000 sqft</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
