import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom';
import '../styles/property-details.css';

function PropertyDetail({ closeDetails }) {
  const params = useParams();
  const properties = useOutletContext();
  
  const property = properties.find(prop => prop.id === parseInt(params.id));
  
  return (
    <div>
      {property ? (
        <div className="property-details">
          <h2>{property.title}</h2>

          <div className="property-gallery">
            {/* Gallery content here */}
          </div>
          
          <p>Location: {property.location}</p>
          <p>Type: {property.propertyType}</p>
          <p>{property.bedrooms} Bedrooms</p>
          <p>Status: {property.status}</p>
          <p>Description: {property.description}</p>
          <p>Price: KSH {property.price.toLocaleString()}</p>

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
             {property.amenities}
            </ul>
          </div>

          <div className="property-description">
            <h4>Property Description:</h4>
            <p>{property.description}</p>
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

          <div className="contact-info">
            <h4>Contact:</h4>
            <p>Agent Name: {property.agentName}</p>
            <p>Phone: {property.agentPhone}</p>
            <p>Email: {property.agentEmail}</p>
            <p>Profile picture:{property.profilePicture}</p>
          </div>

          {/* <button onClick={closeDetails}>Close</button> */}
        </div>
      ) : (
        <p>No property details available.</p>
      )}
    </div>
  );
};

export default PropertyDetail;