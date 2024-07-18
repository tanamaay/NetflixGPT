// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBi0tsiAnbo0SMJJopw0YAP0JrCmEhPr3s",
  authDomain: "netflixgpt-2ae6b.firebaseapp.com",
  projectId: "netflixgpt-2ae6b",
  storageBucket: "netflixgpt-2ae6b.appspot.com",
  messagingSenderId: "160695219112",
  appId: "1:160695219112:web:13c32b88d40680615c239d",
  measurementId: "G-5VXXHQQFH7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(); 