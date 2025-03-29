import { createContext, useContext, useEffect, useState } from "react";
import { auth, googleProvider } from "../Firebase/firebaseConfig";
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Track user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Email/Password Signup
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Email/Password Login
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google Login
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Logout
  const logout = () => {
    return signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, googleSignIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook for using AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
