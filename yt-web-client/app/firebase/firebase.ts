// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup,GoogleAuthProvider,onAuthStateChanged,User } from "firebase/auth";
import { getFunctions } from "firebase/functions";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnv0hLoC3xQoNg0GTqUXrmgP5EaZH4zLM",
  authDomain: "clone-ecbb6.firebaseapp.com",
  projectId: "clone-ecbb6",
  appId: "1:1007617204826:web:3dd3a2d21813274e9c6e63",
  measurementId: "G-RWPTS88N96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const functions = getFunctions();

export function signInWithGoogle() {
  return signInWithPopup(auth, new GoogleAuthProvider());
}


export function signOut(){
    return auth.signOut();
}

export function onAuthStateChangedHelper(callback: (user: User | null) => void) {
    return onAuthStateChanged(auth, callback);
}