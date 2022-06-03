// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1q0zGcYoGHBcnK9ST7Eks3C0P_NzheKE",
  authDomain: "india-furniture-limited.firebaseapp.com",
  projectId: "india-furniture-limited",
  storageBucket: "india-furniture-limited.appspot.com",
  messagingSenderId: "1023722831471",
  appId: "1:1023722831471:web:b35ec58bd9d90d316bd79a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
