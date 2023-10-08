import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/FirebaseAuth";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const UserContext = createContext(null)


const AuthProvider = ({ children }) => {

      const [user, setUser] = useState(null)


      const createUser = (email, password) => {

            return createUserWithEmailAndPassword(auth, email, password)
      }
      const logInUser = (email, password) => {
            return signInWithEmailAndPassword(auth, email, password)
      }

    useEffect(()=>{

      const unSubscribe =  onAuthStateChanged(auth, (CurrentUser) => {
            if (CurrentUser) {
                  setUser(CurrentUser)
            }else{
                  setUser(null)
            }
            
      });

      return unSubscribe;

    },[])

    
    const googleProvider = new GoogleAuthProvider();

    const GoogleSignIn = ()=>{
      
     return signInWithPopup(auth, googleProvider)

    }

      const logOutUser = () => {
           return signOut(auth)
      }


      const UserData = {
            createUser,
            logInUser,
            user,
            GoogleSignIn,
            logOutUser
      }


      return (
            <UserContext.Provider value={UserData}>
                  {children}
            </UserContext.Provider>
      );
};

export default AuthProvider;