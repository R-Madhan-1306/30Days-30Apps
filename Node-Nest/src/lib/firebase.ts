import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAkJjdup7Mb-v8sbAf2uWaAse1Fu3xiLLU",
  authDomain: "notenest-30e08.firebaseapp.com",
  projectId: "notenest-30e08",
  storageBucket: "notenest-30e08.firebasestorage.app",
  messagingSenderId: "739031910440",
  appId: "1:739031910440:web:f24fa7e6fdf2a5aeaa4d1d",
  measurementId: "G-0LDFGNFP5Z"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }