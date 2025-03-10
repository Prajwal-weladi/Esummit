import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBbZzaWsYRxchLYI9rkLPShUVMooKCxw4Y",
  authDomain: "e-summit-25-aa0b5.firebaseapp.com",
  projectId: "e-summit-25-aa0b5",
  storageBucket: "e-summit-25-aa0b5.appspot.com",
  messagingSenderId: "355576663806",
  appId: "1:355576663806:web:fcb366c4bfc165b0025faf",
  measurementId: "G-7LEPNQDGZ3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

console.log("Firebase Auth Initialized:", auth); // ✅ Check if auth is working

export { app, analytics, auth, provider, signInWithPopup };
