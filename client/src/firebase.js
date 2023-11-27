// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "estate-mern-46174.firebaseapp.com",
  projectId: "estate-mern-46174",
  storageBucket: "estate-mern-46174.appspot.com",
  messagingSenderId: "862595024147",
  appId: "1:862595024147:web:b048528d073d37d8ddc6e6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
