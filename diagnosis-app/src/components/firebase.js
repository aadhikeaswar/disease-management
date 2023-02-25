// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhnQ4Bo74T-UEFgSd-a8qndUUuPxqALbg",
  authDomain: "tryhard-hackathon.firebaseapp.com",
  projectId: "tryhard-hackathon",
  storageBucket: "tryhard-hackathon.appspot.com",
  messagingSenderId: "388066462684",
  appId: "1:388066462684:web:cdb7e206b5a2db84e7dd19"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();