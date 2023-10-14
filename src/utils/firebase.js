// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBalZ-LHikmLGohIgVRAWyy9jxep6Tnn7U",
  authDomain: "netflixgpt-5ddfc.firebaseapp.com",
  projectId: "netflixgpt-5ddfc",
  storageBucket: "netflixgpt-5ddfc.appspot.com",
  messagingSenderId: "572106031546",
  appId: "1:572106031546:web:92d4f2acc23504a4219d83",
  measurementId: "G-P1CM9KVQGE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
