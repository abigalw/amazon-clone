import { initializeApp } from "firebase/app"
import{getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import "firebase/compat/firestore"
import "firebase/compat/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApEqX7eYjzfiznUkoxwlWUIpc56MisxG0",
  authDomain: "clone-a0e41.firebaseapp.com",
  projectId: "clone-a0e41",
  storageBucket: "clone-a0e41.firebasestorage.app",
  messagingSenderId: "303353855763",
  appId: "1:303353855763:web:76a75e70b99b534d6e24e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);