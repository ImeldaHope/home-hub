import React, { useState } from 'react'
import PropertyCard from '../components/PropertyCard';
import PropertyFilter from '../components/PropertyFilter';
import SearchBar from '../components/SearchBar';
import { useOutletContext } from 'react-router-dom';
import "../styles/properties.css"

function Property() {
  const {properties, handleLike, filters, handleChange, postToWishlist, handleDelete, isLiked, setIsLiked} = useOutletContext() 
  const [search, setSearch] = useState("");
  
  function handleSearchChange(event) {
    event.preventDefault();
    setSearch(event.target.value);
  }

  const filteredProperties = properties
  .filter((property) => {
    const toLowerCaseSearch = search.toLowerCase();
    return (
      property.title.toLowerCase().includes(toLowerCaseSearch) ||
      property.location.toLowerCase().includes(toLowerCaseSearch) ||
      property.propertyType.toLowerCase().includes(toLowerCaseSearch) ||
      property.description.toLowerCase().includes(toLowerCaseSearch)
    );
  })
  .filter((property) => {
    return (
      (filters.location ? property.location.toLowerCase().includes(filters.location.toLowerCase()) : true) &&
      (filters.minPrice ? property.price >= Number(filters.minPrice) : true) &&
      (filters.maxPrice ? property.price <= Number(filters.maxPrice) : true) &&
      (filters.bedrooms ? property.bedrooms >= Number(filters.bedrooms) : true) &&
      (filters.status ? property.status === filters.status : true)
    );
  });


  

  return (
    <div className='properties-container'>
      
      <div className='properties-header'>  
        <h1>All Properties </h1>      
        <SearchBar search={search} handleSearchChange={handleSearchChange}/>
      </div>      
      <div>
        <PropertyFilter filters={filters} handleChange={handleChange}/>
      </div>
      <div className="property-list">        
        {filteredProperties.map((property) => (
          <PropertyCard inWishlist = {false} key={property.id} properties={property} handleLike={handleLike} handleDelete={handleDelete} postToWishlist={postToWishlist} isLiked={isLiked} setIsLiked={setIsLiked}/>
        ))}        
      </div>      
    </div>
  )
}

export default Property;