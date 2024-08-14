import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import PropertyFilter from "../components/PropertyFilter";
import PropertyTypeCard from "../components/PropertyTypeCard";
import PropertyCard from "../components/PropertyCard";
import "../styles/home.css";
import { useOutletContext } from "react-router-dom";

function Home() {
  const properties = useOutletContext();
  const [type, setType] = useState("");
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/wishlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(wishList),
    })
      .then((res) => res.json())
      .then((data) => console.log("Wishlist updated successfully", data));
  }, [wishList]);

  function handleLike() {
    const propertyInWishList = wishList.some(
      (property) => property.id === properties.id
    );

    if (!propertyInWishList) {
      setWishList((prevWishList) => [properties, ...prevWishList]);
    }
  }

  const [filters, setFilters] = useState({
    location: "",
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
    status: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 6;

  function handleTypeClick(e) {
    const selectedType = e.currentTarget.getAttribute("type");

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const filteredProperties = properties.filter((property) => {
    return (
      (type ? property.propertyType === type : true) &&
      (filters.location
        ? property.location
            .toLowerCase()
            .includes(filters.location.toLowerCase())
        : true) &&
      (filters.minPrice ? property.price >= Number(filters.minPrice) : true) &&
      (filters.maxPrice ? property.price <= Number(filters.maxPrice) : true) &&
      (filters.bedrooms
        ? property.bedrooms >= Number(filters.bedrooms)
        : true) &&
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
    <>
      <Hero />
      <PropertyFilter filters={filters} handleChange={handleChange} />
      <div className="type-section">
        <small>
          <em className="dash">———</em> Property Types
        </small>
        <h2>
          Explore Property <em>Types</em>
        </h2>
        <div className="type-div">
          {propertyTypeCount.map(([key, value]) => (
            <PropertyTypeCard
              key={key}
              type={key}
              count={value}
              handleClick={handleTypeClick}
            />
          ))}
        </div>
      </div>
      <div className="filtered-map">
        {paginatedProperties.map((property) => (
          <PropertyCard key={property.id} properties={property} />
        ))}
      </div>
      <div className="pagination-controls">
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
            className={currentPage === index + 1 ? "active" : ""}
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
    </>
  );
}

export default Home;
