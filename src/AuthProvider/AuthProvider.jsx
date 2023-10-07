import { createContext } from "react";
import { auth } from "../Firebase/FirebaseAuth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


export const UserContext = createContext(null)


const AuthProvider = ({children}) => {


      const createUser = (email, password)=>{

          return  createUserWithEmailAndPassword(auth, email, password)
      }
      const logInUser = (email, password)=>{
            return signInWithEmailAndPassword(auth, email, password)
      }


  const UserData = {
      createUser,
      logInUser,
  }


      return (
            <UserContext.Provider value={UserData}>
                  {children}
            </UserContext.Provider>
      );
};

export default AuthProvider;