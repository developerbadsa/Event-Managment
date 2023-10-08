import { createContext, useState } from "react";
import { auth } from "../Firebase/FirebaseAuth";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const UserContext = createContext(null)


const AuthProvider = ({ children }) => {

      const [user, setUser] = useState(null)


      const createUser = (email, password) => {

            return createUserWithEmailAndPassword(auth, email, password)
      }
      const logInUser = (email, password) => {
            return signInWithEmailAndPassword(auth, email, password)
      }

      onAuthStateChanged(auth, (CurrentUser) => {
            if (CurrentUser) {
                  setUser(CurrentUser)
            }
      });

      const logOutUser = () => {
            signOut(auth)
      }


      const UserData = {
            createUser,
            logInUser,
            user,
            logOutUser
      }


      return (
            <UserContext.Provider value={UserData}>
                  {children}
            </UserContext.Provider>
      );
};

export default AuthProvider;