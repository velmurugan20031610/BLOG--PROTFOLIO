import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUhIHdDPZa5OtQLLCYIrh-RWz2Upr0ji8",
  authDomain: "blog-portfolio-e62d1.firebaseapp.com",
  projectId: "blog-portfolio-e62d1",
  storageBucket: "blog-portfolio-e62d1.firebasestorage.app",
  messagingSenderId: "985278739866",
  appId: "1:985278739866:web:d01a599165409e55cf3623",
  measurementId: "G-Y9NJLS76JT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Correct way
export const auth = getAuth(app);
