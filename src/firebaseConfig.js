// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9vbgxlP66SqNV4ya82oLihU3qfsvYUYY",
  authDomain: "gallery-7e708.firebaseapp.com",
  projectId: "gallery-7e708",
  storageBucket: "gallery-7e708.appspot.com",
  messagingSenderId: "65340069182",
  appId: "1:65340069182:web:fdeed4d00ad81ad075c86f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);