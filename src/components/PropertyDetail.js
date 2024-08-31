import React from 'react';
import { FaBed } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";
import { FaTimesCircle } from "react-icons/fa";
import { TbRulerMeasure } from "react-icons/tb";
import { useOutletContext, useParams, useNavigate } from 'react-router-dom';
import '../styles/property-details.css';

function PropertyDetail() {
  const params = useParams();
  const {properties} = useOutletContext();
  const navigate = useNavigate();

  const property = properties.find(prop => prop.id === params.id);
  
  return (
    <div >
      
      {property ? (
        <div className="property-details">            
            <button onClick={() => navigate(-1)} className='back-btn'>&larr; Back</button> 
            <div className='property-title'>
              <h2>{property.title}</h2>
              <p>{property.status}</p>
            </div>
            <div className='property-location'>
              <FaLocationDot className='pin'/>
              <p> {property.location}</p>            
            </div>
            <div className='price-flex'>            
              <p className='price'>Kes {property.price.toLocaleString()}</p>
              <TbRulerMeasure className="sqft-icon" />
              <p className='sqft'>{property.squareFootage} sqft</p>
            </div>
            <div className="property-gallery">
              <img className='main-image' src={property.images[0]} alt={property.title}/>
              <div className='side-images'>{property.images.map((pic) => <img src={pic} alt={property.title}/>)}</div>
            </div>
          <div className='property-main'>
            <div>
              <div>
                <h2>Property Description</h2>
                <p>{property.description}</p>  
              </div>
              <div>
                <h2>Property Overview</h2>
                <h3>{property.propertyType}</h3>
                <div className='bedroom-detail'>
                  <FaBed className='bed-icon'/>
                  <p> {property.bedrooms} Bedrooms</p>
                </div>              
                <div className='amenity-list'>
                  {property.amenities.map((amenity) => <p>{amenity}</p>)}
                </div>             
              </div>       
          
              <div className="specifications">
                <h3>Amenities:</h3>
                <div className='specs'>
                  <p>Garage: {property.amenities && property.amenities.includes('Garage') ? <FaCircleCheck className='circle-check'/> : <FaTimesCircle className='circle-uncheck'/>}</p>
                  <p>Swimming Pool: {property.amenities && property.amenities.includes('Swimming Pool') ? <FaCircleCheck className='circle-check'/> : <FaTimesCircle className='circle-uncheck'/>}</p>
                  <p>Gym: {property.amenities && property.amenities.includes('Gym') ? <FaCircleCheck className='circle-check'/> : <FaTimesCircle className='circle-uncheck'/>}</p>
                  <p>Parking: {property.amenities && property.amenities.includes('Parking') ? <FaCircleCheck className='circle-check'/> : <FaTimesCircle className='circle-uncheck'/>}</p>
                  <p>Elevator: {property.amenities && property.amenities.includes('Elevator') ? <FaCircleCheck className='circle-check'/> : <FaTimesCircle className='circle-uncheck'/>}</p>
                </div>
              </div>
              <div>
                <h3>Location</h3>
                <iframe       
                  src="https://www.openstreetmap.org/export/embed.html?bbox=34.8,-4.6,42.0,5.5&layer=mapnik"
                  title="Map of Kenya"
                ></iframe>
              </div>                   
            </div>
          
            <aside className="property-sidebar">
              <div className="agent-info">
                <img src="https://img.freepik.com/free-photo/beautiful-african-woman-monochrome-portrait_23-2151436107.jpg?t=st=1723776954~exp=1723780554~hmac=78f83c7c5dcce33a919e01a07b1462860514779ae578eac2883360a8d59ee34c&w=740" alt={property.agent.name} className="agent-photo" />
                <h4>Contact:</h4>
                <p>Agent Name: {property.agent.name}</p>
                <p>Phone: {property.agent.phone}</p>
                <p>Email: {property.agent.email}</p>
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
                    <input type="text" name="name" placeholder='enter your name' required />
                  </label>
                  <label>
                    Email:
                    <input type="email" name="email" placeholder='enter your email address' required />
                  </label>
                  <label>
                    Phone:
                    <input type="tel" name="phone" placeholder='enter your phone number' required />
                  </label>
                  <label>
                    Your Message:
                    <textarea name="message" placeholder='enter your message body' required></textarea>
                  </label>
                  <button type="submit">Submit Request</button>
                </form>
              </div>
            </aside> 
          </div>
        </div>
      ) : (
        <p>No property details available.</p>
      )}
    </div>
  );
};

export default PropertyDetail;