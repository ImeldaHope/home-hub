import React, { useState } from 'react'
import PropertyCard from '../components/PropertyCard';
import SearchBar from '../components/SearchBar'
import { useOutletContext } from 'react-router-dom';
import "../styles/properties.css"

function Property() {
  const properties = useOutletContext() 
  const [search, setSearch] = useState("");

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
    <>
      <h1>Property</h1>
      <div>
        <SearchBar search={search} handleSearchChange={handleSearchChange}/>
        
        <div className="property-list">        
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} properties={property} />
          ))}        
        </div>
      </div>
    </>
  )
}

export default Property;