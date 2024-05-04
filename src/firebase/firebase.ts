import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBAm2i-EEVbZc05zjY2Uwmt-K72tBfSXNg",
    authDomain: "leetcode-865.firebaseapp.com",
    projectId: "leetcode-865",
    storageBucket: "leetcode-865.appspot.com",
    messagingSenderId: "153535356777",
    appId: "1:153535356777:web:9e8d5488d17f8840b6a7f8"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
console.log(app);
const firestore = getFirestore(app);

// export default auth;
export { auth, firestore, app };