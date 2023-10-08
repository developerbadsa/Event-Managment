import { useContext } from "react";
import { UserContext } from "../../../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";


const RedirectToHome = ({children}) => {

      const {user} = useContext(UserContext)


      if(user){
            return <Navigate  to='/'></Navigate>
      }

      return children
}

export default RedirectToHome;