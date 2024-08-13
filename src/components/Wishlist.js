import React from 'react';

const Wishlist = ({ wishlist, removeFromWishlist, handleEdit, handleExport }) => {
  const totalValue = wishlist.reduce((acc, property) => acc + property.price, 0);
  const averagePrice = wishlist.length > 0 ? totalValue / wishlist.length : 0;

  return (
    <div>
      <h2>My Wishlist</h2>
      <p>Total properties: {wishlist.length}</p>
      <p>Total Value: KSH {totalValue.toLocaleString()}</p>
      <p>Average Price: KSH {averagePrice.toLocaleString()}</p>

      <div>
        <button onClick={handleExport}>Export Wishlist</button>
      </div>

      <ul>
        {wishlist.length > 0 ? (
          wishlist.map((property) => (
            <li key={property.id}>
              <div className="property-image">
                <img src={property.images[0]} alt={property.title} style={{ width: '100px', height: 'auto' }} />
              </div>
              <h4>{property.title}</h4>
              <p>{property.location}</p>
              <p>KSH {property.price.toLocaleString()}</p>
              <p>{property.bedrooms} Bedrooms</p>
              <p>Status: {property.status}</p>
              <button onClick={() => handleEdit(property.id)}>Edit</button>
              <button onClick={() => removeFromWishlist(property.id)}>Remove</button>
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
