import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";


const Signup = () => {
      return (
            <div className="flex items-center container mx-auto min-h-[80vh] rounded">
                  <div className="flex h-full w-full flex-col lg:flex-row justify-between transition-opacity">
                        <div className="flex flex-col items-center justify-center w-[50%] bg-white text-black rounded-r-lg">
                              <h1 className="text-5xl font-bold">Sign In</h1>
                              <p className="py-6">Do you have already created acount?</p>
                              <Link to='/signin'><button className="btn hover:bg-red-500 bg-red-500 text-white">Sign In Now</button></Link>
                        </div>
                        <div className=" flex-1 bg-red-500 rounded-l-lg">

                              <form className="px-24 my-24">
                                    <div>
                                          <h3 className="text-center font-extrabold text-4xl text-red-50 my-8">Sign Up</h3>
                                          <div className="flex gap-4 justify-center my-8">
                                                <button className="btn btn-circle text-2xl"> <FaGoogle></FaGoogle></button>
                                                <button className="btn btn-circle text-2xl"> <FaFacebook></FaFacebook></button>
                                                <button className="btn btn-circle text-2xl"> <FaGithub></FaGithub></button>
                                          </div>
                                    </div>
                                    <div className="form-control mb-6">
                                          <input type="text" placeholder="Profile Picture URL" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control mb-6">
                                          <input type="Email" placeholder="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                          <input type="Password" placeholder="password" className="input input-bordered" required />
                                          <label className="label ">
                                                <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                                          </label>
                                    </div>
                                    <div className="form-control mt-6">
                                          <button className="btn font-bold">Sign Up</button>
                                    </div>
                              </form>
                        </div>
                  </div>
            </div>
      );
};

export default Signup;