// Import the functions you need from the SDKs you need
import { initializeApp, getApp , getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD88KxiZGtAVdhcx-ClhSJWt-ylwqxlpVY",
  authDomain: "sensai-mock-eb914.firebaseapp.com",
  projectId: "sensai-mock-eb914",
  storageBucket: "sensai-mock-eb914.firebasestorage.app",
  messagingSenderId: "815305673806",
  appId: "1:815305673806:web:6e5469421bc122ff95471f",
  measurementId: "G-E2DHNHTLKE"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();


export const auth = getAuth(app);
export const db = getFirestore(app);
