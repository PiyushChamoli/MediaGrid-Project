// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4M8gxzUvZXJEUsgJTJt1QiOGDYUoauWE",
  authDomain: "mediagrid-aa017.firebaseapp.com",
  projectId: "mediagrid-aa017",
  storageBucket: "mediagrid-aa017.firebasestorage.app",
  messagingSenderId: "11802583434",
  appId: "1:11802583434:web:f29dacca18d8d15b4ee873",
  measurementId: "G-BNW2MPTG02",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
