// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuWdOdyzWbvEmYKsfqAGLdEPSL2toDNsY",
  authDomain: "realtor-clonefb.firebaseapp.com",
  projectId: "realtor-clonefb",
  storageBucket: "realtor-clonefb.appspot.com",
  messagingSenderId: "47270626059",
  appId: "1:47270626059:web:849866097a8d00eb65580e"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();