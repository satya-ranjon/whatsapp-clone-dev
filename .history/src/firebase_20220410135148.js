import { initializeApp } from "firebase/app";
import firestore from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBExFJWKC7hRGfEdUOI4JujDRhjQe4C5ng",
  authDomain: "whatsapp-clone-dev-e377f.firebaseapp.com",
  databaseURL:
    "https://whatsapp-clone-dev-e377f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "whatsapp-clone-dev-e377f",
  storageBucket: "whatsapp-clone-dev-e377f.appspot.com",
  messagingSenderId: "679244330200",
  appId: "1:679244330200:web:1f637b99f8cb1f752513ad",
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export default App;