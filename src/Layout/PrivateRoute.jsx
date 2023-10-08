import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {

      const isTrue = false

      if(isTrue){
            return children
      }


      return <Navigate to='/signin'></Navigate>
};

export default PrivateRoute;