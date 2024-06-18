// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGn6lL9DOytmQ6Zv0eecwmJqiy84TOAbk",
  authDomain: "react-course-cdb6e.firebaseapp.com",
  projectId: "react-course-cdb6e",
  storageBucket: "react-course-cdb6e.appspot.com",
  messagingSenderId: "37936669259",
  appId: "1:37936669259:web:ea4c2cf40d0c69c0e863ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);