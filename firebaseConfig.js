import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCiPgt924wVYpmrMO2oJPdGPMs-MT5sh5Y",
    authDomain: "my-app-30e5b.firebaseapp.com",
    projectId: "my-app-30e5b",
    storageBucket: "my-app-30e5b.appspot.com",
    messagingSenderId: "1065310839505",
    appId: "1:1065310839505:web:bf3db2b1bec3479e031bf0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();