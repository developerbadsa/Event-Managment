import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/FirebaseAuth";
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const UserContext = createContext(null)


const AuthProvider = ({ children }) => {

      const [user, setUser] = useState(null)
      const [loading, setLoading] = useState(true);


      const createUser = (email, password) => {
            setLoading(true)
            return createUserWithEmailAndPassword(auth, email, password)
      }
      const logInUser = (email, password) => {
            setLoading(true)
            return signInWithEmailAndPassword(auth, email, password)
      }

      useEffect(() => {

            const unSubscribe = onAuthStateChanged(auth, (CurrentUser) => {
                  setUser(CurrentUser)
                  setLoading(false)

            });

            return unSubscribe;

      }, [])


      const googleProvider = new GoogleAuthProvider();
      const facebookProvider = new FacebookAuthProvider();
      const githubProvider = new GithubAuthProvider();

      const GoogleSignIn = () => {
            setLoading(true)
            return signInWithPopup(auth, googleProvider)

      }
      const FacebookSignIn = () => {
            setLoading(true)
            return signInWithPopup(auth, facebookProvider)

      }
      const GithubSignIn = () => {
            setLoading(true)
            return signInWithPopup(auth, githubProvider)

      }

      const logOutUser = () => {
            setLoading(true)
            return signOut(auth)
      }


      const UserData = {
            createUser,
            logInUser,
            user,
            GoogleSignIn,
            GithubSignIn,
            loading,
            FacebookSignIn,
            logOutUser
      }


      return (
            <UserContext.Provider value={UserData}>
                  {children}
            </UserContext.Provider>
      );
};

export default AuthProvider;