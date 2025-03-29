import { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import { FiMenu, FiUser, FiHeart, FiShoppingCart } from "react-icons/fi";
import { MdClose, MdOutlineChildCare } from "react-icons/md";
import { LiaMaleSolid, LiaFemaleSolid } from "react-icons/lia";
import { auth } from "../../Firebase/firebaseConfig" // Firebase Auth import
import { onAuthStateChanged, signOut } from "firebase/auth";

const Navbar = () => {
  const location = useLocation();
  const [menu, setMenu] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // Cleanup function
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white fixed top-0 w-full shadow-md z-50">
      <nav className="mx-auto flex items-center justify-between px-4 py-4 md:px-6">
        
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img onClick={() => window.scrollTo(0, 0)} src="/Assets/vibecart.png" alt="logo" className="w-30 h-10" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul onClick={() => window.scrollTo(0, 0)} className="hidden md:flex items-center lg:gap-12 md:gap-4 text-2xl font-semibold">
          <li className={`${menu === "Home" ? "border-b-2 border-blue-500" : ""}`}>
            <Link to="/" className="text-gray-600 hover:text-gray-800">Home</Link>
          </li>
          <li className={`${menu === "mens" ? "border-b-2 border-blue-500" : ""}`}>
            <Link to="/mens" className="text-gray-600 hover:text-gray-800">Mens</Link>
          </li>
          <li className={`${menu === "womens" ? "border-b-2 border-blue-500" : ""}`}>
            <Link to="/womens" className="text-gray-600 hover:text-gray-800">Womens</Link>
          </li>
          <li className={`${menu === "kids" ? "border-b-2 border-blue-500" : ""}`}>
            <Link to="/kids" className="text-gray-600 hover:text-gray-800">Kids</Link>
          </li>
          <li className={`${menu === "profile" ? "border-b-2 border-blue-500" : ""}`}>
            <Link to="/profile" className="text-gray-600 hover:text-gray-800">Profile</Link>
          </li>
        </ul>

        {/* Cart and Profile/Login */}
        <div className="hidden md:flex items-center gap-4 pr-2">
          <Link to="/wishlist" className="relative">
            <FiHeart size={28} className="text-gray-800" />
          </Link>
          
          <Link to="/cart" className="relative">
            <FiShoppingCart size={28} />
            <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-sm rounded-full flex items-center justify-center">
              {getTotalCartItems()}
            </div>
          </Link>

          {user ? (
            <div className="relative group">
              <img
                src={user.photoURL || "/Assets/user-profile.jpg"}
                alt="User"
                className="w-10 h-10 rounded-full cursor-pointer"
              />
              {/* Dropdown for Logout */}
              <div className="hidden group-hover:block absolute bg-white shadow-lg rounded-md py-2 w-36 right-0">
                <button onClick={() => signOut(auth)} className="w-full text-left px-4 py-2 hover:bg-gray-200">
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <Link to="/login">
              <button className="bg-blue-500 hover:bg-gray-300 text-white font-semibold py-2 px-4 rounded-full">
                Login
              </button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex gap-4 md:hidden">
          <Link to="/wishlist" className="relative md:hidden block">
            <FiHeart size={24} className="text-gray-800" />
          </Link>
          <button className="md:hidden text-2xl pr-5" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <MdClose /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul onClick={() => window.scrollTo(0, 0)} className="md:hidden bg-white shadow-lg py-4">
          {[
            { name: "mens", icon: <LiaMaleSolid /> },
            { name: "womens", icon: <LiaFemaleSolid /> },
            { name: "kids", icon: <MdOutlineChildCare /> },
          ].map((item) => (
            <li key={item.name} onClick={() => setMenu(item.name)} className="py-2 px-4 border-b border-gray-200 flex items-center gap-2">
              <Link to={`/${item.name}`} className="text-gray-600 capitalize flex items-center gap-2">
                {item.icon} {item.name}
              </Link>
            </li>
          ))}

          {/* Profile/Login in Mobile Menu */}
          <li className="py-2 px-4 flex items-center gap-2">
            {user ? (
              <button onClick={() => signOut(auth)} className="text-gray-600 flex items-center gap-2">
                <FiUser /> Logout
              </button>
            ) : (
              <Link to="/login" className="text-gray-600 flex items-center gap-2">
                <FiUser /> Login
              </Link>
            )}
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;
