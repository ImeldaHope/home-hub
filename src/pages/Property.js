import React, { useState } from 'react'
import PropertyCard from '../components/PropertyCard';
import PropertyFilter from '../components/PropertyFilter';
import SearchBar from '../components/SearchBar';
import { useOutletContext } from 'react-router-dom';
import "../styles/properties.css"

function Property() {
  const {properties, handleLike, isPropertyDetailOpen} = useOutletContext() 
  const [search, setSearch] = useState("");
  console.log('in property',isPropertyDetailOpen)
  function handleSearchChange(event) {
    event.preventDefault();
    setSearch(event.target.value);
  }

  const filteredProperties = properties.filter((property) => {
    const toLowerCaseSearch = search.toLowerCase();
    return (
      property.title.toLowerCase().includes(toLowerCaseSearch) ||
      property.location.toLowerCase().includes(toLowerCaseSearch) ||
      property.propertyType.toLowerCase().includes(toLowerCaseSearch) ||
      property.description.toLowerCase().includes(toLowerCaseSearch)
    );
  });

  return (
    <div className='properties-container'>
      
      <div className='properties-header'>  
        <h1>All Properties </h1>      
        <SearchBar search={search} handleSearchChange={handleSearchChange}/>
      </div>      
      <div>
        {/* <PropertyFilter filters={filters} handleChange={handleChange}/> */}
      </div>
      <div className="property-list">        
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} properties={property} handleLike={handleLike}/>
        ))}        
      </div>
      
    </div>
  )
}

export default Property;