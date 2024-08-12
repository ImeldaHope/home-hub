import React from "react";

function SearchBar() {
  return (
    <div className="search-form-container">
      <form className="search-form">
        <input
          type="text"
          placeholder="Search property here..."
          name="search"
          id="search"
        />
      </form>
    </div>
  );
}

export default SearchBar;
