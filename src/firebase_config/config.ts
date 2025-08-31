// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-J8LAHk3-COlbI36Fxc6h9_vSrLq1D8Y",
  authDomain: "disney-cone.firebaseapp.com",
  projectId: "disney-cone",
  storageBucket: "disney-cone.firebasestorage.app",
  messagingSenderId: "567454527110",
  appId: "1:567454527110:web:b1bf530acc8c99c7e1eb07",
  measurementId: "G-KW3LC42NY2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;