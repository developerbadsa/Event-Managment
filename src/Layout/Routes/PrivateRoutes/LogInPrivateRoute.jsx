import { useContext } from "react";
import { Navigate} from "react-router-dom";
import { UserContext } from "../../../AuthProvider/AuthProvider";


const LogInPrivateRoute = ({children}) => {

      const {user, loading} = useContext(UserContext)

      if(loading){
            return  <span className="loading loading-bars loading-lg"></span>
          
      }else if(user){
            return children
      }


      return <Navigate to='/signin'></Navigate>
};

export default LogInPrivateRoute;