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
import AboutUs from "../../Pages/AboutUs/AboutUs";


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
                        element:<LogInPrivateRoute> <Dashboard></Dashboard></LogInPrivateRoute>
                  },
                  {
                        path: '/contact',
                        element: <LogInPrivateRoute><Contact></Contact></LogInPrivateRoute>
                  },
                  {
                        path: '/about',
                        element: <AboutUs></AboutUs>
                  },
                  {
                        path: '/service/:id',
                        element: <LogInPrivateRoute><ServiceDetails/></LogInPrivateRoute>,
                        loader: ()=>fetch('https://raw.githubusercontent.com/developerbadsa/news-json-file/main/services.json')
                  }
            ]
      }
])

export default Routes;