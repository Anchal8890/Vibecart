import React from "react";
import new_collections from "../../../public/Assets/new_collections.js";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { motion, useInView } from "framer-motion"; // Import Framer Motion for animations


function CollectionItem({ id, img, name, new_price, old_price, index }) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Animates only once per scroll
 // ✅ Check if this item is already in localStorage on component mount
  useEffect(() => {
    const wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || [];
    setIsWishlisted(wishlistItems.some((item) => item.id === id));
  }, [id]); // Runs only when `id` changes

  const handleWishlistClick = (e) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  
    let wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || [];
  
    if (!isWishlisted) {
      wishlistItems.push({ id, img, name, new_price, old_price });
    } else {
      wishlistItems = wishlistItems.filter((item) => item.id !== id);
    }
  
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
  };

  return (
    <motion.div
         ref={ref}
         className="relative bg-gradient-to-b from-[#f8f9fa] to-white rounded-2xl shadow-lg overflow-hidden p-4"
         initial={{ opacity: 0, scale: 0.8, y: 50 }} // Start hidden & slightly lower
         animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}} // Animate when in view
         transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }} // Staggered effect
       >
         {/* Discount Badge */}
         <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
           50% OFF
         </div>
   
         {/* Wishlist Icon */}
         <div
           className="absolute top-3 lg:right-3 right-1 bg-white p-1 rounded-full shadow-md cursor-pointer hover:bg-red-100"
           onClick={handleWishlistClick}
         >
           <FaHeart
             className={`transition duration-300 text-lg ${
               isWishlisted ? "text-red-500" : "text-gray-600 hover:text-red-500"
             }`}
           />
         </div>
   
         <Link to={`/product/${id}`}>
           <div className="relative top-7 overflow-hidden rounded-lg">
             <img
               loading="lazy"
               onClick={() => window.scrollTo(0, 0)}
               className="w-full md:h-68 h-36 bg-cover rounded-lg transition-transform duration-300 hover:scale-110"
               src={img}
               alt={name}
             />
           </div>
         </Link>
   
         {/* Product Name */}
         <p className="mt-10 text-gray-900 font-bold text-2xl">{name}</p>
   
         {/* Price Section */}
         <div className="flex items-center justify-between mt-2">
           <div className="text-green-600 font-bold text-xl">${new_price}</div>
           <div className="text-gray-400 line-through text-sm">${old_price}</div>
         </div>
       </motion.div>
  );
}

const NewCollection = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <div className="text-center">
        <h1 className="text-2xl lg:text-3xl font-bold mb-4">NEW COLLECTIONS</h1>
        <hr className="w-20 h-1 bg-gray-800 rounded-full mx-auto mb-6" />
      </div>

      <div className="grid grid-cols-2 md:m-5 m-5 lg:mx-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-40 gap-6">
        {new_collections.map((item, i) => (
          <CollectionItem
            key={i}
            id={item.id}
            name={item.name}
            img={item.img}
            new_price={item.new_price}
            old_price={item.old_price}
            index={i}
          />
        ))}
      </div>
    </div>
  );
};

export default NewCollection;
