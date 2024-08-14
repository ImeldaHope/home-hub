
function SearchBar({search, handleSearchChange}) {
  
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
    </div>
  );
}

export default SearchBar;
