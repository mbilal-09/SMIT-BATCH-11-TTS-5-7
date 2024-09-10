import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBa9jN0eijJAs8vUP0yPm9E2rcbY_xLLiM",
  authDomain: "project-1-415f5.firebaseapp.com",
  projectId: "project-1-415f5",
  storageBucket: "project-1-415f5.appspot.com",
  messagingSenderId: "419371233616",
  appId: "1:419371233616:web:7235fde82b75d5d556bc55",
  measurementId: "G-CCTTPRNMYL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

export { auth, db, storage };
