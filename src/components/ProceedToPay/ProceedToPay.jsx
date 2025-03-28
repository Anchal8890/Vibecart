import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaGooglePay, FaCreditCard, FaUniversity } from "react-icons/fa";
import Lottie from "lottie-react";
import paymentMethod from "../../assets/payment-method.json";
import paymentSuccess from "../../assets/payment-success.json";
import { ShopContext } from "../../context/ShopContext";

const ProceedToPay = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } =
  useContext(ShopContext);

  return (
    <div className="flex flex-col items-center justify-center h-auto bg-gradient-to-r from-blue-600 to-purple-600 px-6 font-poppins">
      {/* Payment Container */}
      <div className="bg-white bg-opacity-10 mt-20 mb-5 backdrop-blur-lg p-2 rounded-xl shadow-lg w-full h-auto max-w-lg border border-white border-opacity-20">
        <div>
        <h2 className="text-3xl font-extrabold text-gray-700 text-center drop-shadow-lg">
          💳 Secure Payment
        </h2>

        {/* Lottie Animation */}
        <Lottie animationData={paymentMethod} className="w-32 mx-auto" />

        {/* Order Summary */}
        <div className="bg-gray bg-opacity-20 p-1 rounded-lg shadow-md">
          <p className="text-lg font-semibold text-black pb-2">🛒 Order Summary</p>
          <p className="text-gray-700">Subtotal: <span className="font-bold text-gray-700">Rs.{getTotalCartAmount()}</span></p>
          <p className="text-gray-700">Shipping Fee: <span className="text-green-400">Free</span></p>
          <hr className="my-2 border-gray-400" />
          <p className="text-xl font-bold text-gray-700">Total: Rs. {getTotalCartAmount()}</p>
        </div>

        {/* Payment Methods */}
        <div className="space-y-1">
          <label className="flex items-center bg-white bg-opacity-20 p-1 rounded-lg cursor-pointer hover:bg-opacity-30 transition">
            <FaGooglePay className="text-2xl text-blue-400" />
            <input type="radio" name="payment" className="ml-3 form-radio text-blue-500" />
            <span className="ml-3 text-gray-700">UPI (Google Pay, PhonePe, Paytm)</span>
          </label>

          <label className="flex items-center bg-white bg-opacity-20 p-1 rounded-lg cursor-pointer hover:bg-opacity-30 transition">
            <FaCreditCard className="text-2xl text-yellow-400" />
            <input type="radio" name="payment" className="ml-3 form-radio text-blue-500" />
            <span className="ml-3 text-gray-700">Debit / Credit Card</span>
          </label>

          <label className="flex items-center bg-white bg-opacity-20 p-1 rounded-lg cursor-pointer hover:bg-opacity-30 transition">
            <FaUniversity className="text-2xl text-green-400" />
            <input type="radio" name="payment" className="ml-3 form-radio text-blue-500" />
            <span className="ml-3 text-gray-700">Net Banking</span>
          </label>
        </div>

        {/* Confirm & Pay Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full mt-3 bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-green-600 transition-all transform hover:scale-105"
        >
          Confirm & Pay 💸
        </button>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="w-full mt-3 text-gray-300 font-semibold hover:text-white transition"
        >
          ⬅️ Go Back
        </button>
        </div>
      </div>

      {/* Payment Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
            <Lottie animationData={paymentSuccess} className="w-32 mx-auto" />
            <h2 className="text-xl font-bold text-gray-800 mb-4">Payment Successful! ✅</h2>
            <p className="text-gray-600">Thank you for your payment. Your order has been placed successfully.</p>

            <button
              onClick={() => {
                setIsModalOpen(false);
                navigate("/");
              }}
              className="mt-4 w-full bg-green-500 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-green-600 transition"
            >
              Go to Home 🏠
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProceedToPay;
