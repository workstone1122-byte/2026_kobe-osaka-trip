// Import Firebase core
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyBsMiLUgtJtcv48iRp_9QFx5fShtRd6Lro",
  authDomain: "kobe-osaka-2026travel.firebaseapp.com",
  projectId: "kobe-osaka-2026travel",
  storageBucket: "kobe-osaka-2026travel.firebasestorage.app",
  messagingSenderId: "772246724994",
  appId: "1:772246724994:web:26c067ae1096d13ebdef9b"
};

// Initialize Firebase App
export const app = initializeApp(firebaseConfig);
