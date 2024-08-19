import React, { useEffect, useState } from "react";
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Wishlist from './components/Wishlist';
import { Outlet } from "react-router-dom";

function App() {
  const [properties, setProperties] = useState([]);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);    
  const [isLiked, setIsLiked] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  
  const [filters, setFilters] = useState({
    location: '',
    minPrice: '',
    maxPrice: '',    
    bedrooms: '',
    status: ''
  });

  

  useEffect(() => {
    fetch("https://homehub-isbp.onrender.com/wishlist")
      .then((res) => res.json())
      .then((data) => setWishlist(data.reverse()));
  }, [wishlist]);

  function handleDelete(deletedId) {    

    fetch(`https://homehub-isbp.onrender.com/wishlist/${deletedId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
    });
    console.log('I have been called')
    const wishlistFiltered = wishlist.filter(
      (filtered) => filtered.id !== deletedId
    );
    setWishlist(wishlistFiltered);
  }

  useEffect(() => {
    fetch('https://homehub-isbp.onrender.com/homehub')
      .then(response => response.json())
      .then(data => setProperties(data))
      .catch(error => console.error('Error fetching properties:', error));
  }, []);

  // function handleLike(id) {
    
  //   if (isLiked) {
  //     const liked = wishlist.find(wish => wish.id === id)
  //     handleDelete(liked.id);
  //   } else {
  //     postToWishlist(id);
  //   }
  //   setIsLiked(!isLiked);      
  // }

  function postToWishlist(id){
       
    const likedProperty = properties.find((property) => property.id === id) 
    const postData = { ...likedProperty, reviews: [] };

    fetch("https://homehub-isbp.onrender.com/wishlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((res) => res.json())
      .then((data) => setWishlist([data, ...wishlist]));
  }
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };

  function openWishlist(){
    setIsWishlistOpen(true)
  }
  function closeWishlist(){
    setIsWishlistOpen(false)
  }

  return (
    <div>                 
      <NavBar openWishlist={openWishlist}/> 
      <Wishlist wishlist={wishlist} isOpen={isWishlistOpen} closeWishlist={closeWishlist} /> 
      <Outlet context={{properties, handleChange, filters, handleDelete, postToWishlist, wishlist, isLiked, setIsLiked}}/> 
      <Footer />
    </div>
  );
}

export default App;
