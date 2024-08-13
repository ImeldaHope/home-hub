import React from "react";
import { IoLocationOutline, IoHeartCircleOutline } from "react-icons/io5";
import { LiaBedSolid } from "react-icons/lia";
import { PiBathtub } from "react-icons/pi";
import { TbRulerMeasure } from "react-icons/tb";
import "../styles/card.css";

function PropertyCard() {
  return (
    <div className="property_card">
      <div className="property_card-img_container">
        <img
          className="property_card-img"
          src="https://img.freepik.com/free-photo/movie-night-by-pool-whole-family_1268-31098.jpg?t=st=1723550396~exp=1723553996~hmac=ddee877aa035c23140d9e28d68ab38dd2419c4a0d782447f761076ec2f60617c&w=826"
          alt="property image"
        />
        <IoHeartCircleOutline
          className="like_icon icon"
          style={{ color: "#ffffff" }}
        />
        <div className="property_card-tags">
          <small>For Rent</small>
          <small>Apartment</small>
        </div>
      </div>

      <div className="property_card-content">
        <div className="property_card-details">
          <div className="property_card-price">
            <h3>$6,000</h3>
            <span>/month</span>
          </div>

          <p className="property_card-location">Riverview Retreat</p>

          <div className="property_card-address_container">
            <IoLocationOutline className="location_icon icon" />
            <p className="property_card-address">
              452 Robert Drives, Lake Maryhaven, NY 23531-2648
            </p>
          </div>

          <div className="property_card-details_container">
            <div className="beds">
              <LiaBedSolid className="bed_icon icon" />
              <span>4 Beds</span>
            </div>
            <div className="bath">
              <PiBathtub className="bath_icon icon" />
              <span>2 Baths</span>
            </div>
            <div className="plinth">
              <TbRulerMeasure className="plinth_icon icon" />
              <span>3,000 sqft</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
