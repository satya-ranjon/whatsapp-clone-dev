import { createContext, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";

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

  const googleAuthprovider = new GoogleAuthProvider();
  const googlesign = () => {
    const auth = getAuth();
    signInWithPopup(auth, googleAuthprovider)
      .then((result) => {
        GoogleAuthProvider.credentialFromResult(result);
        // ...
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

  const value = {};
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
