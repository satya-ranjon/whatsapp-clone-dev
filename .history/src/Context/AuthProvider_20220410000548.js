import { createContext, useContext } from "react";

const AuthContext = createContext();
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
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
  const value = {};
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
