import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGooglePay, FaCreditCard, FaUniversity } from "react-icons/fa";
import Lottie from "lottie-react";
import paymentMethod from "../../assets/payment-method.json";
import paymentSuccess from "../../assets/payment-success.json";

const ProceedToPay = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 to-purple-600 px-6 font-poppins">
      {/* Payment Container */}
      <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-xl shadow-lg w-full max-w-lg border border-white border-opacity-20">
        <h2 className="text-3xl font-extrabold text-gray-700 text-center mb-6 drop-shadow-lg">
          💳 Secure Payment
        </h2>

        {/* Lottie Animation */}
        <Lottie animationData={paymentMethod} className="w-44 mx-auto mb-4" />

        {/* Order Summary */}
        <div className="bg-gray bg-opacity-20 p-4 rounded-lg shadow-md mb-4">
          <p className="text-lg font-semibold text-white">🛒 Order Summary</p>
          <p className="text-gray-700">Subtotal: <span className="font-bold text-white">Rs. 1500</span></p>
          <p className="text-gray-700">Shipping Fee: <span className="text-green-400">Free</span></p>
          <hr className="my-2 border-gray-400" />
          <p className="text-xl font-bold text-white">Total: Rs. 1500</p>
        </div>

        {/* Payment Methods */}
        <div className="space-y-4">
          <label className="flex items-center bg-white bg-opacity-20 p-3 rounded-lg cursor-pointer hover:bg-opacity-30 transition">
            <FaGooglePay className="text-2xl text-blue-400" />
            <input type="radio" name="payment" className="ml-3 form-radio text-blue-500" />
            <span className="ml-3 text-gray-700">UPI (Google Pay, PhonePe, Paytm)</span>
          </label>

          <label className="flex items-center bg-white bg-opacity-20 p-3 rounded-lg cursor-pointer hover:bg-opacity-30 transition">
            <FaCreditCard className="text-2xl text-yellow-400" />
            <input type="radio" name="payment" className="ml-3 form-radio text-blue-500" />
            <span className="ml-3 text-gray-700">Debit / Credit Card</span>
          </label>

          <label className="flex items-center bg-white bg-opacity-20 p-3 rounded-lg cursor-pointer hover:bg-opacity-30 transition">
            <FaUniversity className="text-2xl text-green-400" />
            <input type="radio" name="payment" className="ml-3 form-radio text-blue-500" />
            <span className="ml-3 text-gray-700">Net Banking</span>
          </label>
        </div>

        {/* Confirm & Pay Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full mt-6 bg-green-500 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-green-600 transition-all transform hover:scale-105"
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
