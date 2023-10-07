import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import Signup from "../Pages/SignUP/Signup";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";


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
                  },
                  {
                        path: '/service/:id',
                        element: <ServiceDetails></ServiceDetails>,
                        loader: ()=>fetch('/public/services.json')
                  }
            ]
      }
])

export default Routes;