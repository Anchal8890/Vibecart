import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  // ✅ Load wishlist items from localStorage when the page loads
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div className="container mx-auto mt-20 p-5">
      <h2 className="text-3xl font-bold mb-5">Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-2 md:m-5 m-5 lg:mx-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-20 gap-6">
          {wishlist.map(({ id, img, name, new_price, old_price }) => (
            <div
              key={id}
              className="relative bg-white rounded-lg shadow-lg p-4"
            >
              <div
                className="absolute top-3 right-3 bg-white p-1 rounded-full cursor-pointer"
                onClick={() => removeFromWishlist(id)}
              >
                <FaHeart className="text-red-500" />
              </div>

              <Link to={`/product/${id}`}>
                <img
                  src={img}
                  alt={name}
                  className="w-full md:h-68 h-36 bg-cover rounded-lg transition-transform duration-300 "
                />
              </Link>

              <p className="mt-2 text-gray-900 font-bold">{name}</p>
<div className="flex items-center justify-between">
  <span className="text-green-600 font-bold">${new_price}</span>
  <span className="text-gray-400 line-through">${old_price}</span>
</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
{/* <div className="relative bg-white rounded-lg shadow-lg p-4"> */}
{/* Wishlist Icon */}
{/* <div
  className="absolute top-3 right-3 bg-white p-1 rounded-full cursor-pointer"
  onClick={() => removeFromWishlist(id)}
  <FaHeart className="text-red-500" />
</div>

<Link to={`/product/${id}`}>
  <img src={img} alt={name} className="w-full h-48 object-cover rounded-lg" />
</Link>

<p className="mt-2 text-gray-900 font-bold">{name}</p>
<div className="flex items-center justify-between">
  <span className="text-green-600 font-bold">${new_price}</span>
  <span className="text-gray-400 line-through">${old_price}</span>
</div>
</div> */}