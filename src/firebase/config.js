import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD0KWoQ_uQtIxksx-CIskur1S615pDufD4",
    authDomain: "crypto-world-c1fe2.firebaseapp.com",
    projectId: "crypto-world-c1fe2",
    storageBucket: "crypto-world-c1fe2.firebasestorage.app",
    messagingSenderId: "11867512536",
    appId: "1:11867512536:web:c24b13500db8e98952c1ad",
    measurementId: "G-JEM2X84ZB5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
