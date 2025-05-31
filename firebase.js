// Firebase App (the core Firebase SDK) is always required and must be listed first
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUHtEGMXltNMLTPewKgjeG1uCUp4XfANM",
  authDomain: "boxli-f6f56.firebaseapp.com",
  projectId: "boxli-f6f56",
  storageBucket: "boxli-f6f56.appspot.com",
  messagingSenderId: "947272458754",
  appId: "1:947272458754:web:e7a1b54675141d2a2dbd1b",
  measurementId: "G-7C13JLNSK1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
