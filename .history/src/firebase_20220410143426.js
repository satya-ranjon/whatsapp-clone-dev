// import firebase from "firebase";

import { initializeApp } from "@firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBExFJWKC7hRGfEdUOI4JujDRhjQe4C5ng",
  authDomain: "whatsapp-clone-dev-e377f.firebaseapp.com",
  projectId: "whatsapp-clone-dev-e377f",
  storageBucket: "whatsapp-clone-dev-e377f.appspot.com",
  messagingSenderId: "679244330200",
  appId: "1:679244330200:web:1f637b99f8cb1f752513ad",
};
const app = initializeApp(firebaseConfig);
const db = app.firestore();
const auth = getAuth;
const googleProvider = new GoogleAuthProvider();

export default db;
export { auth, storage, googleProvider };
