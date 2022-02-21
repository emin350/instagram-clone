// Import the functions you need from the SDKs you need
import { initializeApp,getApps,getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlwzZahos-mQAB8qAIewITPrQ3pRRntLE",
  authDomain: "instagram-bc216.firebaseapp.com",
  projectId: "instagram-bc216",
  storageBucket: "instagram-bc216.appspot.com",
  messagingSenderId: "876422464612",
  appId: "1:876422464612:web:cb7819a3ecf08542618b71"
};

// Initialize Firebase
const app =!getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };