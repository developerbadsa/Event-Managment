import { Link, NavLink } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { UserContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const Navbar = () => {

      const { user, logOutUser } = useContext(UserContext);


      const menuItems = (
            <>

                  <li className="">
                        <NavLink
                              to="/"
                              className={({ isActive, isPending }) =>
                                    isPending ? "text-slate-100" : isActive ? "text-red-500" : "text-slate-100"
                              }
                        >
                              Home
                        </NavLink>
                  </li>
                  {
                        user && <li>
                              <NavLink
                                    to="/dashboard"
                                    className={({ isActive, isPending }) =>
                                          isPending ? "text-slate-100" : isActive ? "text-red-500" : "text-slate-100"
                                    }
                              >
                                    Dashboard
                              </NavLink>
                        </li>
                  }
                  {
                        user && <li>
                              <NavLink
                                    to="/contact"
                                    className={({ isActive, isPending }) =>
                                          isPending ? "text-slate-100" : isActive ? "text-red-500" : "text-slate-100"
                                    }
                              >
                                    Contact
                              </NavLink>
                        </li>
                  }
                  <li>
                        <NavLink
                              to="/about"
                              className={({ isActive, isPending }) =>
                                    isPending ? "text-slate-100" : isActive ? "text-red-500" : "text-slate-100"
                              }
                        >
                              About
                        </NavLink>
                  </li>
                  {
                        !user && <li>
                              <NavLink
                                    to="/signin"
                                    className={({ isActive, isPending }) =>
                                          isPending ? "text-slate-100" : isActive ? "text-red-500" : "text-slate-100"
                                    }
                              >
                                    Sign In
                              </NavLink>
                        </li>
                  }
                  {
                        !user && <li>
                              <NavLink
                                    to="/signup"
                                    className={({ isActive, isPending }) =>
                                          isPending ? "text-slate-100" : isActive ? "text-red-500" : "text-slate-100"
                                    }
                              >
                                    Sign Up
                              </NavLink>
                        </li>
                  }


            </>
      )



      const handleLogOut = () => {
            logOutUser()
                  .then(() => {
                        Swal.fire(
                              'Successfuly logged Out',
                              'success')
                  })
                  .catch(err => console.log(err))
      }


      return (
            <nav className="navbar max-w-7xl mx-auto justify-between py-8 px-4 lg:px-0 border-b bg-transparent">
                  <div className="navbar-start">
                        <div className="dropdown">
                              <label tabIndex={0} className="btn bg-slate-300 lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                              </label>
                              <ul tabIndex={0} className=" dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52">
                                    {
                                          menuItems
                                    }
                              </ul>
                        </div>
                        <div className="hidden lg:inline-block">
                              <img className="w-52" src="/public/images/logo.png" alt="" />
                        </div>
                  </div>
                  <div className="navbar-center ">
                        <div className="lg:hidden -ml-10">
                              <img className="w-44 mr-5" src="/public/images/logo.png" alt="" />
                        </div>
                        <div className="hidden ml-32 lg:flex">
                              <ul className="font-semibold text-xl gap-4  menu-horizontal px-1">
                                    {
                                          menuItems
                                    }
                              </ul>
                        </div>
                  </div>
                  <div className="navbar-end">
                        {
                              user ? <><div className="text-white font-bold ml-4 px-4 hidden lg:inline-block">{user.displayName}</div><div className="dropdown dropdown-end">


                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                          <div className=" text-white text-3xl">
                                                {user.photoURL ? <img className="rounded-full" src={user.photoURL} alt="" />:  <FaRegUserCircle></FaRegUserCircle>}
                                          </div>
                                    </label>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                          <li className="bg-black "><div className="text-white font-bold ml-4 px-4 lg:hidden">{user.displayName}</div></li>
                                          <li><Link to={'/dashboard'}>Dashboard</Link></li>
                                          <li><button onClick={handleLogOut}>Logout</button></li>
                                    </ul>
                              </div></> :
                                    <div className=" text-white text-3xl">
                                          <FaRegUserCircle></FaRegUserCircle>
                                    </div>
                        }
                  </div>
            </nav>
      );
};

export default Navbar;