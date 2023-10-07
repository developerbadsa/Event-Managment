import { createContext } from "react";


export const UserContext = createContext(null)


const AuthProvider = ({children}) => {

  


      return (
            <UserContext.Provider value={{name:'badsa'}}>
                  {children}
            </UserContext.Provider>
      );
};

export default AuthProvider;