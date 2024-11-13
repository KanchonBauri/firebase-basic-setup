// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBK9I7MMeG4BKD8dIpbV6FWLTM2odZ6Ftk",
  authDomain: "fir-basic-setup-ebb08.firebaseapp.com",
  projectId: "fir-basic-setup-ebb08",
  storageBucket: "fir-basic-setup-ebb08.firebasestorage.app",
  messagingSenderId: "858703493048",
  appId: "1:858703493048:web:1adffbf230530012b6014d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);   // add kora hoiache
export default auth;        // add kora hoiache