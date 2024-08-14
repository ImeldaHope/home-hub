import React, { useEffect, useState } from "react";
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Wishlist from './components/Wishlist';
import { Outlet } from "react-router-dom";

function App() {
  const [properties, setProperties] = useState([]);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [postWishList, setPostWishList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/homehub')
      .then(response => response.json())
      .then(data => setProperties(data))
      .catch(error => console.error('Error fetching properties:', error));
  }, []);
  
  

  function handleLike(e) {
    const likedId = e.currentTarget.getAttribute('like-id')
    
    const likedProperty = properties.find((property) => property.id === likedId)    
    

    const postData = { ...likedProperty, reviews: [] };

    fetch("http://localhost:3001/wishlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((res) => res.json())
      .then((data) => setPostWishList(data));  
  }
  

  function openWishlist(){
    setIsWishlistOpen(true)
  }
  function closeWishlist(){
    setIsWishlistOpen(false)
  }

  return (
    <div>                 
      <NavBar openWishlist={openWishlist}/> 
      <Wishlist isOpen={isWishlistOpen} closeWishlist={closeWishlist} handleLike={handleLike}/> 
      <Outlet context={{properties, handleLike}}/> 
      <Footer />
    </div>
  );
}

export default App;
