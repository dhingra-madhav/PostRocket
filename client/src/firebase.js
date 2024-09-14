// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "post-rocket-8fe23.firebaseapp.com",
  projectId: "post-rocket-8fe23",
  storageBucket: "post-rocket-8fe23.appspot.com",
  messagingSenderId: "294577163450",
  appId: "1:294577163450:web:8f2cddb5ddce9d2f8c4683",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
