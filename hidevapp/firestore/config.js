// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "@firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "{YOUR API KEY}",
  authDomain: "hiverse-develop.firebaseapp.com",
  projectId: "hiverse-develop",
  storageBucket: "hiverse-develop.appspot.com",
  messagingSenderId: "757869704222",
  appId: "1:757869704222:web:cd76d806f37e43b823aa0f",
  measurementId: "G-JFT1G9XF7S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)