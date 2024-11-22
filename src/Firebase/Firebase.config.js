// Import the necessary Firebase functions
import { initializeApp } from "firebase/app";

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyCbXEM1TVxM0UsKLhtFRksBEUFI9J8gTbo",
  authDomain: "wavebd-87a85.firebaseapp.com",
  projectId: "wavebd-87a85",
  storageBucket: "wavebd-87a85.firebasestorage.app",
  messagingSenderId: "344725841148",
  appId: "1:344725841148:web:4e2f7d3e5bea597ca1e379",
  measurementId: "G-Y502KT2ET0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export app to be used elsewhere
export { app };
