import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout";
import Home from "../../Pages/Home/Home";
import SignIn from "../../Pages/SignIn/SignIn";
import Signup from "../../Pages/SignUP/Signup";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import LogInPrivateRoute from "./PrivateRoutes/LogInPrivateRoute";
import RedirectToHome from "./PrivateRoutes/RedirectToHome";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Contact from "../../Pages/Contact/Contact";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";


const Routes = createBrowserRouter([
      {
            path: '/',
            element: <MainLayout></MainLayout>,
            errorElement: <ErrorPage></ErrorPage>,
            children: [
                  {
                        path: '/',
                        element: <Home></Home>
                  },
                  {
                        path: '/signin',
                        element: <RedirectToHome><SignIn></SignIn></RedirectToHome>
                  },
                  {
                        path: '/signup',
                        element: <RedirectToHome> <Signup></Signup></RedirectToHome>
                  },
                  {
                        path: '/dashboard',
                        element: <Dashboard/>
                  },
                  {
                        path: '/contact',
                        element: <Contact></Contact>
                  },
                  {
                        path: '/service/:id',
                        element: <LogInPrivateRoute><ServiceDetails/></LogInPrivateRoute>,
                        loader: ()=>fetch('/public/services.json')
                  }
            ]
      }
])

export default Routes;