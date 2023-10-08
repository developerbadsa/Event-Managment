import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../../../AuthProvider/AuthProvider";


const LogInPrivateRoute = ({children}) => {

      const {user} = useContext(UserContext)
      const location = useLocation()

      if(user){
            return children
      }


      return <Navigate state={location.pathname} to='/signin'></Navigate>
};

export default LogInPrivateRoute;