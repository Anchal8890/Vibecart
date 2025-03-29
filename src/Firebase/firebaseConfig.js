// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1HPECihgXZbMtPJk6TNrXY_OD1Bwk1FQ",
  authDomain: "vibecart-9af64.firebaseapp.com",
  projectId: "vibecart-9af64",
  storageBucket: "vibecart-9af64.appspot.com", // Yeh 'app' hata do
  messagingSenderId: "1047098179327",
  appId: "1:1047098179327:web:367e0d176d8062909456ca",
  measurementId: "G-KVS3HJPPKL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.useDeviceLanguage();

// ✅ GoogleAuthProvider instance banao
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
