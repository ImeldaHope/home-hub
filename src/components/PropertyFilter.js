import React, { useState } from 'react';

const PropertyFilter = ({ properties }) => {
  const [filters, setFilters] = useState({
    location: '',
    minPrice: '',
    maxPrice: '',
    propertyType: '',
    bedrooms: '',
    status: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };

  const filteredProperties = properties.filter(property => {
    return (
      (filters.location ? property.location.toLowerCase().includes(filters.location.toLowerCase()) : true) &&
      (filters.minPrice ? property.price >= Number(filters.minPrice) : true) &&
      (filters.maxPrice ? property.price <= Number(filters.maxPrice) : true) &&
      (filters.propertyType ? property.propertyType === filters.propertyType : true) &&
      (filters.bedrooms ? property.bedrooms >= Number(filters.bedrooms) : true) &&
      (filters.status ? property.status === filters.status : true)
    );
  });

  return (
    <div>
      <h2>Find Property</h2>
      <div>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={filters.location}
            onChange={handleChange}
            placeholder="Enter location"
          />
        </label>
      </div>
      <div>
        <label>
          Min Price:
          <input
            type="number"
            name="minPrice"
            value={filters.minPrice}
            onChange={handleChange}
            placeholder="Enter minimum price"
          />
        </label>
      </div>
      <div>
        <label>
          Max Price:
          <input
            type="number"
            name="maxPrice"
            value={filters.maxPrice}
            onChange={handleChange}
            placeholder="Enter maximum price"
          />
        </label>
      </div>
      <div>
        <label>
          Property Type:
          <select name="propertyType" value={filters.propertyType} onChange={handleChange}>
            <option value="">All</option>
            <option value="House">House</option>
            <option value="Apartment">Apartment</option>
            <option value="Villa">Villa</option>
            <option value="Cottage">Cottage</option>
            <option value="Loft">Loft</option>
            <option value="Estate">Estate</option>
            <option value="Penthouse">Penthouse</option>
            <option value="Retreat">Retreat</option>
            <option value="Studio">Studio</option>
            <option value="Mansion">Mansion</option>
            {/* Add other property types as needed */}
          </select>
        </label>
      </div>
      <div>
        <label>
          Bedrooms:
          <input
            type="number"
            name="bedrooms"
            value={filters.bedrooms}
            onChange={handleChange}
            placeholder="Enter minimum bedrooms"
          />
        </label>
      </div>
      <div>
        <label>
          Status:
          <select name="status" value={filters.status} onChange={handleChange}>
            <option value="">All</option>
            <option value="For Sale">For Sale</option>
            <option value="For Rent">For Rent</option>
          </select>
        </label>
      </div>
      <div>
        <h3>Filtered Properties</h3>
        <ul>
          {filteredProperties.map((property) => (
            <li key={property.id}>
              <h4>{property.title}</h4>
              <p>{property.location}</p>
              <p>KSH {property.price.toLocaleString()}</p>
              <p>{property.bedrooms} Bedrooms</p>
              <p>Status: {property.status}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PropertyFilter;
