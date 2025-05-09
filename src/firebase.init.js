// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDz69NY8UF8-_Y7a2ZWZ2wv0nQIg0iP9nI",
  authDomain: "b11a9-react-authenticati-d14d8.firebaseapp.com",
  projectId: "b11a9-react-authenticati-d14d8",
  storageBucket: "b11a9-react-authenticati-d14d8.firebasestorage.app",
  messagingSenderId: "868115008759",
  appId: "1:868115008759:web:de1a9032704e211b2717f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);
