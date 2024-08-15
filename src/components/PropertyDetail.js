import React from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import '../styles/property-details.css';

function PropertyDetail({ closeDetails }) {
  const params = useParams();
  const properties = useOutletContext();

  const property = properties.find(prop => prop);

  return (
    <div>
      {property ? (
        <div className="property-details">
          <header className="property-header">
            <div className="header-content">
              <h2>{property.title}</h2>
              <p>Location: {property.location}</p>
              <p>Status: {property.status}</p>
              <p>Type: {property.propertyType}</p>
              <p>{property.bedrooms} Bedrooms</p>
              <h3>Price: KSH {property.price.toLocaleString()}</h3>
            </div>
          </header>

          <div className="property-main">
            <div className="property-gallery">
              {/* Main Image */}
              <img src={property.mainImage} alt={property.title} className="main-image" />
            </div>

            <div className="property-info">
              <div className="property-description">
                <h4>Property Description:</h4>
                <p>{property.description}</p>
              </div>

              <div className="specifications">
                <h4>Specifications:</h4>
                <p>Garage: {property.garage ? 'Yes' : 'No'}</p>
                <p>Swimming Pool: {property.pool ? 'Yes' : 'No'}</p>
                <p>Gym: {property.gym ? 'Yes' : 'No'}</p>
                <p>Parking: {property.parking ? 'Yes' : 'No'}</p>
                <p>Elevator: {property.elevator ? 'Yes' : 'No'}</p>
              </div>

              <div className="amenities">
                <h4>Amenities:</h4>
                <ul>
                  {property.amenities?.map((amenity, index) => (
                    <li key={index}>{amenity}</li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="property-sidebar">
              <div className="agent-info">
                <img src={property.profilePicture} alt={property.agentName} className="agent-photo" />
                <h4>Contact:</h4>
                <p>Agent Name: {property.agentName}</p>
                <p>Phone: {property.agentPhone}</p>
                <p>Email: {property.agentEmail}</p>
              </div>

              <div className="find-your-property">
                <h4>Find Your Property:</h4>
                <form>
                  <label>
                    Date:
                    <input type="date" name="date" required />
                  </label>
                  <label>
                    Time:
                    <input type="time" name="time" required />
                  </label>
                  <label>
                    Your Name:
                    <input type="text" name="name" required />
                  </label>
                  <label>
                    Email:
                    <input type="email" name="email" required />
                  </label>
                  <label>
                    Phone:
                    <input type="tel" name="phone" required />
                  </label>
                  <label>
                    Your Message:
                    <textarea name="message" required></textarea>
                  </label>
                  <button type="submit">Submit Request</button>
                </form>
              </div>
            </aside>
          </div>

          {/* <button onClick={closeDetails}>Close</button> */}
        </div>
      ) : (
        <p>No property details available.</p>
      )}
    </div>
  );
}

export default PropertyDetail;