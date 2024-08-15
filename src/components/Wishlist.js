import React, { useEffect, useState } from "react";
import PropertyCard from "../components/PropertyCard";
import "../styles/wishlist.css";

function Wishlist({ isOpen, closeWishlist, handleLike }) {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/wishlist")
      .then((res) => res.json())
      .then((data) => setWishlist(data));
  }, [wishlist]);

  function handleDelete(e) {
    const deletedId = e.currentTarget.getAttribute("delete-id");

    fetch(`http://localhost:3001/wishlist/${deletedId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
    });

    const wishlistFiltered = wishlist.filter(
      (filtered) => filtered.id !== deletedId
    );
    setWishlist(wishlistFiltered);
  }

  function handleUpdate(e) {
    e.preventDefault();
    const form = e.currentTarget; 
    const review = form.querySelector('input[name="review"]').value;
    
    const postedId = e.currentTarget.getAttribute("posted-id");
    console.log(postedId)
    fetch(`http://localhost:3001/wishlist/${postedId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ reviews: [...wishlist.find((item) => item.id === postedId).reviews,review] })
    });

    form.reset();
  }

  return (
    <div className={`wishlist-modal ${isOpen ? "open" : ""}`}>
      <h1>WishList</h1>
      <span className="close-btn" onClick={closeWishlist}>
        &times;
      </span>
      {wishlist.length > 0 ? (
        wishlist.map((wish) => (
          <div key={wish.id} className="wishlist-content">
            <PropertyCard properties={wish} handleLike={handleLike} />
            <h3>Reviews</h3>
            <div className="reviews-container">
              {wish.reviews.length > 0 ? (
                wish.reviews.map((review, index) => <p key={index}>{review}</p>)
              ) : (
                <p>No reviews present.</p>
              )}
              <form posted-id={wish.id} onSubmit={(e) => handleUpdate(e)}>
                <input type="text" name="review" placeholder="post a review" />
                <input type="submit" />
              </form>
            </div>
            <button
              delete-id={wish.id}
              onClick={(e) => handleDelete(e)}
              className="delete-property"
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p className="empty-wishlist">No Properties in Wishlist</p>
      )}
    </div>
  );
}

export default Wishlist;
