import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5DEWaBlfSwepoHlZgliumWLU0Q1Ua1hs",
  authDomain: "blog-go-6742d.firebaseapp.com",
  projectId: "blog-go-6742d",
  storageBucket: "blog-go-6742d.appspot.com",
  messagingSenderId: "565097948672",
  appId: "1:565097948672:web:5e1fa742c1e4a1a0aa1ae5",
  measurementId: "G-HWW3MP1F81"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
