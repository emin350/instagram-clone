// Import the functions you need from the SDKs you need
import { initializeApp,getApps,getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4KcAyLbTz-utgS7k418ZRWVP_4GVDdnM",
  authDomain: "insta010822.firebaseapp.com",
  projectId: "insta010822",
  storageBucket: "insta010822.appspot.com",
  messagingSenderId: "170165168997",
  appId: "1:170165168997:web:21c0f80141b4e4bb9f8f8c"
};

// Initialize Firebase
const app =!getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };