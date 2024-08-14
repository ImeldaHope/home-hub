import React from 'react';

const Wishlist = ({ wishlist }) => {
  return (
    <div>
      <h2>My Wishlist</h2>
      <ul>
        {wishlist.length > 0 ? (
          wishlist.map((property) => (
            <li key={property.id}>
              <h4>{property.title}</h4>
              <p>{property.location}</p>
              <p>KSH {property.price.toLocaleString()}</p>
              <p>{property.bedrooms} Bedrooms</p>
              <p>Status: {property.status}</p>
              <a href={`/properties/${property.id}`} target="_blank">View Details</a>
            </li>
          ))
        ) : (
          <p>Your wishlist is empty.</p>
        )}
      </ul>
    </div>
  );
};

export default Wishlist;
