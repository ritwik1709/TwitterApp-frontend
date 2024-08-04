// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDzFk62NM4kItGoGoJb-lE28GSzTHp-zxc",
  authDomain: "twitterapp-e3294.firebaseapp.com",
  projectId: "twitterapp-e3294",
  storageBucket: "twitterapp-e3294.appspot.com",
  messagingSenderId: "440419899552",
  appId: "1:440419899552:web:d23202d0af5bdcace311c5",
  measurementId: "G-ZPHRE66NJ7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
