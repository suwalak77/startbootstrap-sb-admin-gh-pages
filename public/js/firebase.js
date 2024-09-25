import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAlb18K7QXATCqwwTja-X1HnrQslmDWQvw",
    authDomain: "proj-2fff1.firebaseapp.com",
    projectId: "proj-2fff1",
    storageBucket: "proj-2fff1.appspot.com",
    messagingSenderId: "46263814811",
    appId: "1:46263814811:web:12fa5f31bc25532a8ad43e",
    measurementId: "G-1GBXG7L5LM"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Function to log in the user
export function loginUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// Function to register a new user
export function registerUser(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
