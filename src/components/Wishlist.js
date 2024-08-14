import React, { useEffect, useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import '../styles/wishlist.css';

function Wishlist({isOpen, closeWishlist, handleLike}) {
 const [wishlist, setWishlist] = useState([]);
  console.log('wishlist data',wishlist)
 useEffect( () => {
  fetch("http://localhost:3001/wishlist")
    .then(res => res.json())
    .then(data => setWishlist(data))
  }, [])

  return (
    <div className={`wishlist-modal ${isOpen ? 'open' : ''}`}>
      <h1>WishList</h1>
      <span className="close-btn" onClick={closeWishlist}>&times;</span>
      {wishlist.map((wish) => (
        <div key={wish.id} className='wishlist-content'>
          <PropertyCard  properties={wish} handleLike={handleLike}/>
          <h3>Reviews</h3>
          <div>{wish.reviews.map((review, index) => <p key={index}>{review}</p>)}</div>
        </div>
        ))}
    </div>
  )
}

export default Wishlist