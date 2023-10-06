import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import Signup from "../Pages/SignUP/Signup";


const Routes = createBrowserRouter([
      {
            path: '/',
            element: <MainLayout></MainLayout>,
            children: [
                  {
                        path: '/',
                        element: <Home></Home>
                  },
                  {
                        path: '/signin',
                        element: <SignIn></SignIn>
                  },
                  {
                        path: '/signup',
                        element: <Signup></Signup>
                  }
            ]
      }
])

export default Routes;