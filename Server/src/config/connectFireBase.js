// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCM8o8cezo-JCBP5oKICgPHKTUJww6gWc",
  authDomain: "appweb-e12ec.firebaseapp.com",
  projectId: "appweb-e12ec",
  storageBucket: "appweb-e12ec.appspot.com",
  messagingSenderId: "895836903444",
  appId: "1:895836903444:web:1ae6c36287e5acc25faf01",
  measurementId: "G-WDWGY7C82M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
