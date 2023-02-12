
import { initializeApp } from "firebase/app";

import {getAuth ,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTO_DOMAIN ,
  projectId:  process.env.REACT_APP_FIREBASE_ID,
  storageBucket:  process.env.REACT_APP_FIREBASE_STORAGE_BUCKECT,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId:  process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId:  process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
const auth = getAuth()

const provider = new GoogleAuthProvider



export {app ,auth , provider}