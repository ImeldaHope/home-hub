import React from 'react'

const PropertyDetails = ({ property, closeDetails }) => {
  return (
    <div>
      {property ? (
        <div className="property-details">
          <h2>{property.title}</h2>
          <div className="property-gallery">
      
            
          </div>
          <p>Location: {property.location}</p>
          <p>Type: {property.propertyType}</p>
          <p>{property.bedrooms} Bedrooms</p>
          <p>Status: {property.status}</p>
          <p>Description: {property.description}</p>
          <p>Price: KSH {property.price.toLocaleString()}</p>

          <div className="specifications">
            <h4>Specifications:</h4>
            <p>Square Footage: {property.squareFootage} sq ft</p>
            <p>Year Built: {property.yearBuilt}</p>
            <p>Lot Size: {property.lotSize} acres</p>
            <p>Garage: {property.garage ? 'Yes' : 'No'}</p>
            <p>Swimming Pool: {property.pool ? 'Yes' : 'No'}</p>
          </div>

          <div className="amenities">
            <h4>Amenities:</h4>
            <ul>
              {property.amenities && property.amenities.map((amenity, index) => (
                <li key={index}>{amenity}</li>
              ))}
            </ul>
          </div>
          
          <div className="contact-info">
            <h4>Contact:</h4>
            <p>Agent Name: {property.agentName}</p>
            <p>Phone: {property.agentPhone}</p>
            <p>Email: {property.agentEmail}</p>
          </div>
          <button onClick={closeDetails}>Close</button>
        </div>
      ) : (
        <p>No property details available.</p>
      )}
    </div>
  );
};