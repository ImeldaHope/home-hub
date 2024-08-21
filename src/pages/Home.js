import React, { useState } from 'react'
import Hero from '../components/Hero'
import PropertyFilter from '../components/PropertyFilter'
import PropertyTypeCard from '../components/PropertyTypeCard'
import PropertyCard from '../components/PropertyCard'
import "../styles/home.css"
import { useOutletContext } from 'react-router-dom'

function Home(){
  const {properties, handleLike, handleChange, filters, handleDelete, postToWishlist, isLiked, setIsLiked} = useOutletContext();
  const [type, setType] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const propertiesPerPage = 6;

  if(!properties) return <h1>Loading properties ...</h1>
  
  function handleTypeClick(e){
    const selectedType = e.currentTarget.getAttribute('type');
    
    if (selectedType === type) {      
      setType("");      
    } else {
      setType(selectedType);      
    }    
  }

  const propertyType = properties.reduce((acc, property) => {
    acc[property.propertyType] = (acc[property.propertyType] || 0) + 1;
    return acc;
  }, {});
  const propertyTypeCount = Object.entries(propertyType);

  const filteredProperties = properties.filter(property => {
    return (
      (type ? property.propertyType === type : true) &&
      (filters.location ? property.location.toLowerCase().includes(filters.location.toLowerCase()) : true) &&
      (filters.minPrice ? property.price >= Number(filters.minPrice) : true) &&
      (filters.maxPrice ? property.price <= Number(filters.maxPrice) : true) &&      
      (filters.bedrooms ? property.bedrooms >= Number(filters.bedrooms) : true) &&
      (filters.status ? property.status === filters.status : true)
    );
  });

  const startIndex = (currentPage - 1) * propertiesPerPage;
  const endIndex = startIndex + propertiesPerPage;
  const paginatedProperties = filteredProperties.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='home-container'>
      <Hero />
      <PropertyFilter filters={filters} handleChange={handleChange}/>
      <div className='type-section'>
        <small><em className='dash'>———</em> Property Types</small>
        <h2>Explore Property <em>Types</em></h2>
        <div className='type-div'>{propertyTypeCount.map(([key, value]) => <PropertyTypeCard key={key} type={key} count={value} handleClick={handleTypeClick}/>)}</div>
      </div>
      <div className='filtered-map'>
        {paginatedProperties.length > 0 ? paginatedProperties.map((property) => (
          <PropertyCard  inWishlist = {false} key={property.id} properties={property} handleLike={handleLike} handleDelete={handleDelete} postToWishlist={postToWishlist} isLiked={isLiked} setIsLiked={setIsLiked}/>
        )) : <p>No properties found</p>}
      </div>
      <div className='pagination-controls'>
        <button 
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button 
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
        <button 
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>        
    </div>
  )
}

export default Home