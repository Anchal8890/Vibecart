import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const { signup, login, googleSignIn } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleForm = () => setIsLogin(!isLogin);
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      isLogin ? await login(email, password) : await signup(email, password);
      navigate("/")
    } catch (error) {
      console.error("Authentication Error:", error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleSignIn();
      navigate("/")
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-500 to-blue-200 font-poppins">
      <div className="bg-white p-8 rounded-md shadow-lg w-full max-w-lg">
        <h1 className="text-2xl font-semibold text-center mb-6">
          {isLogin ? "Login" : "Sign Up"}
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button className="w-full mt-6 p-3 text-white bg-blue-500 rounded-md text-lg font-medium hover:bg-blue-600">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <div className="flex items-center my-6">
          <hr className="w-full border-gray-300" />
          <p className="mx-4 text-gray-500">OR</p>
          <hr className="w-full border-gray-300" />
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full p-3 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-100 transition"
        >
          <FcGoogle size={24} className="mr-3" />
          Sign in with Google
        </button>

        <p className="mt-4 text-center text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            onClick={toggleForm}
            className="text-blue-500 cursor-pointer hover:underline"
          >
            {isLogin ? "Sign Up Here" : "Login Here"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
