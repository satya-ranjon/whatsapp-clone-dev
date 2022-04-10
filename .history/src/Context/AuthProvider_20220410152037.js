import { createContext, useContext, useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import "../firebase";
import {
  doc,
  getFirestore,
  setDoc,
  writeBatch,
  getDoc,
  getDocs,
  collection,
} from "firebase/firestore";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [loading, setLoding] = useState(true);
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const auth = getAuth();
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoding(false);
    });
    return unSubscribe;
  }, []);

  // google login
  const db = getFirestore();
  const googleAuthprovider = new GoogleAuthProvider();
  const googlesign = () => {
    const auth = getAuth();
    signInWithPopup(auth, googleAuthprovider)
      .then((result) => {
        setDoc(doc(db, "users", result.user.email), {
          fullname: result.user.displayName,
          email: result.user.email,
          photoURL: result.user.photoURL,
          uid: result.user.uid,
        });
      })
      .catch((error) => {
        GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  // logout function

  function logout() {
    const auth = getAuth();
    return signOut(auth);
  }
  const batch = writeBatch(db);
  // const querySnapshot = collection(db, "users");
  const querySnapshot = getDoc(collection(db, "users", "k15981598k@gmail.com"));
  const value = {
    currentUser,
    googlesign,
    logout,
    batch,
    querySnapshot,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
