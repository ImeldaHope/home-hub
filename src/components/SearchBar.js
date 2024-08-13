import React, { useState } from "react";

function SearchBar({ homehub }) {
  const [search, setSearch] = useState("");

  function handleSearchChange(event) {
    event.preventDefault();
    setSearch(event.target.value);
  }

  const filteredProperties = homehub.filter((property) => {
    const toLowerCaseSearch = search.toLowerCase();
    return (
      property.title.toLowerCase().includes(toLowerCaseSearch) ||
      property.location.toLowerCase().includes(toLowerCaseSearch) ||
      property.propertyType.toLowerCase().includes(toLowerCaseSearch) ||
      property.description.toLowerCase().includes(toLowerCaseSearch)
    );
  });

  return (
    <div className="search-form-container">
      <form className="search-form">
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search property here..."
          name="search"
          id="search"
        />
      </form>
      <div className="search-results">
        <ol>
          {filteredProperties.map((property) => (
            <li key={property.id}>
              <h3>Title: {property.title}</h3>
              <p>Location: {property.location}</p>
              <p>Type: {property.propertyType}</p>
              <p>Description: {property.description}</p>
              <p>Price: {property.price}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default SearchBar;
