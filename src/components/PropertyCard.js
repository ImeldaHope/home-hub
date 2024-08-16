import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoHeartCircleOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { LiaBedSolid } from "react-icons/lia";
import { PiBathtub } from "react-icons/pi";
import { TbRulerMeasure } from "react-icons/tb";
import "../styles/card.css";

function PropertyCard({
  properties,
  postToWishlist,
  handleDelete,
  inWishlist,
  isLiked,
  setIsLiked,
}) {
  function handleLike(id) {
    if (isLiked) {
      handleDelete(id);
    } else {
      postToWishlist(id);
    }
    setIsLiked(!isLiked);
  }

  return (
    <div className="property_card" id={properties.id}>
      <div className="property_card-img_container">
        <img
          className="property_card-img"
          src={properties.images[0]}
          alt={properties.title}
          height={300}
        />
        {!inWishlist && (
          <IoHeartCircleOutline
            className={`like_icon icon ${isLiked ? "isLiked" : ""}`}
            style={{ color: "#ffffff" }}
            onClick={() => handleLike(properties.id)}
          />
        )}
        <div className="property_card-tags">
          <small>{properties.status}</small>
          <small>{properties.propertyType}</small>
        </div>
      </div>

      <div className="property_card-content">
        <div className="property_card-details">
          <h2 className="property_card-location">{properties.title}</h2>
          <div className="property_card-price">
            <h3>Kes {properties.price.toLocaleString()}</h3>
            {properties.status === "For Rent" ? <span>/year</span> : null}
          </div>

          <div className="property_card-address_container">
            <FaLocationDot className="location_icon icon" />

            <p className="property_card-address">{properties.location}</p>
          </div>
          <hr />
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
          <Link
            className="view-property-btn"
            to={`/properties-detail/${properties.id}`}
          >
            View Property
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
