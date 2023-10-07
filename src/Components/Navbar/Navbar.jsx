import { Link, NavLink } from "react-router-dom";
import { FaRegUserCircle, FaUserCircle } from "react-icons/fa";


const Navbar = () => {


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
                        </NavLink>;
                  </li>
                  <li>
                        <NavLink
                              to="/signin"
                              className={({ isActive, isPending }) =>
                                    isPending ? "text-slate-100" : isActive ? "text-red-500" : "text-slate-100"
                              }
                        >
                              Sign In
                        </NavLink>;
                  </li>
                  <li>
                        <NavLink
                              to="/signup"
                              className={({ isActive, isPending }) =>
                                    isPending ? "text-slate-100" : isActive ? "text-red-500" : "text-slate-100"
                              }
                        >
                              Sign Up
                        </NavLink>;
                  </li>
                  

            </>
      )


      return (
            <nav className="navbar justify-between bg-transparent">
                  <div className="navbar-start">
                        <div className="dropdown">
                              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                              </label>
                              <ul tabIndex={0} className=" dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    {
                                          menuItems
                                    }
                              </ul>
                        </div>
                        <div>
                              <img src="/public/images/logo.png" alt="" />
                        </div>
                  </div>
                  <div className="navbar-center hidden ml-32 lg:flex">
                        <ul className="font-semibold text-xl gap-4 menu-horizontal px-1">
                              {
                                    menuItems
                              }
                        </ul>
                  </div>
                  <div className="navbar-end">
                        <div className="dropdown dropdown-end">
                              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className=" text-white text-3xl">
                                          <FaRegUserCircle></FaRegUserCircle>
                                    </div>
                              </label>
                              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><Link >Dashboard</Link></li>
                                    <li><Link>Logout</Link></li>
                              </ul>
                        </div>
                  </div>
            </nav>
      );
};

export default Navbar;