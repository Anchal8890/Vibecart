// authService.js
import { auth, RecaptchaVerifier } from "./firebaseConfig";
import { signInWithPhoneNumber } from "firebase/auth";

// Recaptcha Setup
const setupRecaptcha = () => {
  window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
    size: "invisible",
    callback: (response) => {
      console.log("Recaptcha Verified", response);
    },
  });
};

// Send OTP
export const sendOtp = async (phoneNumber) => {
  try {
    setupRecaptcha();
    const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier);
    window.confirmationResult = confirmationResult;
    return true;
  } catch (error) {
    console.error("OTP Sending Error:", error.message);
    throw error;
  }
};

// Verify OTP
export const verifyOtp = async (otp) => {
  try {
    const result = await window.confirmationResult.confirm(otp);
    return result.user;
  } catch (error) {
    console.error("OTP Verification Error:", error.message);
    throw error;
  }
};
