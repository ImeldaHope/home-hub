import React, { useEffect, useState } from "react";
import './App.css';

import PropertyFilter from "./components/PropertyFilter";
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Wishlist from './components/Wishlist'; // Import Wishlist component
import PropertyDetails from './components/PropertyDetails'; // Import PropertyDetails component

function App() {
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null); // State for selected property details
  const [wishlist, setWishlist] = useState([]); // State for wishlist

  useEffect(() => {
    fetch('http://localhost:8001/homehub')
      .then(response => response.json())
      .then(data => setProperties(data))
      .catch(error => console.error('Error fetching properties:', error));
  }, []);

  // Function to handle when a property is clicked for details
  const handlePropertyClick = (property) => {
    setSelectedProperty(property);
  };

  // Function to add a property to the wishlist
  const addToWishlist = (property) => {
    setWishlist([...wishlist, property]);
  };

  // Function to remove a property from the wishlist
  const removeFromWishlist = (propertyId) => {
    setWishlist(wishlist.filter(property => property.id !== propertyId));
  };

  // Function to close the property details view
  const closeDetails = () => {
    setSelectedProperty(null);
  };

  return (
    <div>
      <header>
        <NavBar />
      </header>

      <h1>HomeHub</h1>  
      
      <PropertyFilter properties={properties} />

      {/* PropertyDetails component - only shown if a property is selected */}
      {selectedProperty && (
        <PropertyDetails property={selectedProperty} closeDetails={closeDetails} />
      )}

      {/* Wishlist component */}
      <Wishlist 
        wishlist={wishlist} 
        removeFromWishlist={removeFromWishlist} 
      />

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
