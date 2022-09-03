// Import the functions you need from the SDKs you need
import { initializeApp ,     getApp , getApps  } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIRE_BASE_API_KEY,
  authDomain:process.env.FIRE_BASE_AUTH_DOMAIN,
  projectId: process.env.FIRE_BASE_PROJECT_ID,
  storageBucket: process.env.FIRE_BASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIRE_BASE_MESSAGE_SENDER_ID,
  appId:process.env.FIRE_BASE_APP_ID 
};

// Initialize Firebase
const app = !getApp().length ?  initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export {app , db , storage}

