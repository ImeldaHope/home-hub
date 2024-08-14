import "../styles/property-filter.css";

const PropertyFilter = ({ filters, handleChange}) => {
  
  return (
    <div className="filter-div">
      <div className="filter-title">
        <h2>Find Property</h2>
      </div>
      <div className="filters">
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
              placeholder="Min Price"
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
              placeholder="Max Price"
            />
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
        </div>
      </div>
  );
};

export default PropertyFilter;
