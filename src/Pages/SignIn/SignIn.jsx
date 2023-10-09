import { useContext, useRef } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const SignIn = () => {
      const { logInUser, GoogleSignIn, FacebookSignIn, GithubSignIn } = useContext(UserContext)
      const navigatePage = useNavigate()
      const formRef = useRef(null)

      const handleLogin = (e) => {
            e.preventDefault()
            const email = e.target.email.value;
            const password = e.target.password.value;

            logInUser(email, password)
                  .then(() => {

                        formRef.current.reset();
                        navigatePage('/');

                        Swal.fire(
                              'Congratulations!',
                              'Successfuly logged in with Email and Password',
                              'success'
                        )

                  })
                  .catch(err => {


                        Swal.fire({
                              icon: 'error',
                              title: 'Oops...',
                              text: err.message
                        });
                  })

      }



      const handleGoogleSignIn = () => {

            GoogleSignIn()
                  .then(() => {
                        navigatePage('/');
                        Swal.fire({
                              icon: 'success',
                              text: 'You have successfully logged in with Google'
                        });
                  })
                  .catch(err => console.log(err))
            return

      }
      const handleGithubSignIn = () => {

            GithubSignIn()
                  .then(() => {
                        navigatePage('/');
                        Swal.fire({
                              icon: 'success',
                              text: 'You have successfully logged in with Github'
                        });
                  })
                  .catch(err => console.log(err))
            return

      }
      const handleFbSignIn = () => {

            FacebookSignIn()
                  .then(() => {
                        navigatePage('/');
                        Swal.fire({
                              icon: 'success',
                              text: 'You have successfully logged in with Facebook'
                        });
                  })
                  .catch(err => console.log(err))
            return

      }





      return (
            <div className="flex items-center container mx-auto min-h-[80vh] rounded py-14">
                  <div className="flex h-full w-full flex-col-reverse lg:flex-row-reverse justify-between ">
                        <div className="flex flex-col items-center justify-center w-full py-8 lg:py-0 lg:w-[50%] bg-white text-black rounded-r-lg">
                              <h1 className="text-5xl font-bold">Sign Up</h1>
                              <p className="py-6">You Don't have created acount?</p>
                              <Link to='/signup'><button className="btn hover:bg-red-500 bg-red-500 text-white">Sign Up Now</button></Link>
                        </div>
                        <div className=" flex-1 bg-red-500 rounded-l-lg">

                              <form ref={formRef} onSubmit={handleLogin} className="px-24 my-8 lg:my-24">
                                    <div>
                                          <h3 className="text-center font-extrabold text-4xl text-red-50 my-8">Log In</h3>
                                          <div className="flex gap-4 justify-center my-8">
                                                <button onClick={handleGoogleSignIn} className="btn btn-circle text-2xl"> <FaGoogle></FaGoogle></button>
                                                <button onClick={handleFbSignIn} className="btn btn-circle text-2xl"> <FaFacebook></FaFacebook></button>
                                                <button onClick={handleGithubSignIn} className="btn btn-circle text-2xl"> <FaGithub></FaGithub></button>
                                          </div>
                                    </div>
                                    <div className="form-control mb-6">
                                          <input type="Email" name="email" placeholder="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                          <input type="Password" name="password" placeholder="password" className="input input-bordered" required />
                                          <label className="label ">
                                                <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                                          </label>
                                    </div>
                                    <div className="form-control mt-6">
                                          <button type="submit" className="btn font-bold">Login</button>
                                    </div>
                              </form>
                        </div>
                  </div>
            </div>
      );
};

export default SignIn;