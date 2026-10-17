
import { initializeApp } from
  "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";

import { getAuth } from
  "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

import { getFirestore } from
  "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATKQo3-rvwDdty1grT4c342Q-Wz2_NjLM",
  authDomain: "edu-hub-academia-c0590.firebaseapp.com",
  projectId: "edu-hub-academia-c0590",
  storageBucket: "edu-hub-academia-c0590.firebasestorage.app",
  messagingSenderId: "442933493275",
  appId: "1:442933493275:web:4b59ddfd78348505fb02be",
  measurementId: "G-SRGMEY6N5E"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
