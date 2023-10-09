import { FaEnvelope, FaLocationArrow, FaPhone, FaVoicemail } from "react-icons/fa";


const Contact = () => {
      return (
            <div className="text-white my-16 max-w-7xl mx-auto">
                  <div className="text-center">
                        <h2 className="text-3xl font-bold my-4">Countact Us</h2>
                        <p className="px-64 my-6 text-slate-300 text-base">Welcome to the Hackathon event! We're thrilled to have you on this exciting journey of innovation, collaboration, and creativity. If you have any questions, need assistance, or would like to connect with our team, you've come to the right place.</p>
                        <div className="grid grid-cols-1 lg:grid-cols-3 my-12 gap-10">
                              <div className="flex flex-col justify-center shadow-md p-12 bg-slate-700">
                                    <span className="my-3 mx-auto"><FaLocationArrow className="text-2xl text-red-400 text-center"></FaLocationArrow></span>
                                    <h4 className="font-extrabold text-2xl text-center text-slate-200 py-4">Address</h4>
                                    <p>Bangladesh, Lalmonirhat</p>
                              </div>
                              <div className="flex flex-col justify-center shadow-md p-12 bg-slate-700">
                                    <span className="my-3 mx-auto"><FaPhone className="text-2xl text-red-400 text-center"></FaPhone></span>
                                    <h4 className="font-extrabold text-2xl text-center text-slate-200 py-4">Phone</h4>
                                    <p>02248834993</p>
                              </div>
                              <div className="flex flex-col justify-center shadow-md p-12 bg-slate-700">
                                    <span className="my-3 mx-auto"><FaEnvelope className="text-2xl text-red-400 text-center"></FaEnvelope></span>
                                    <h4 className="font-extrabold text-2xl text-center text-slate-200 py-4">Email</h4>
                                    <p>hackathone543@gmail.com</p>
                              </div>
                        </div>
                  </div>
                  <div>
                        <form className="flex flex-col text-black text-center my-16 gap-8" action="">
                              <h3 className="text-3xl font-bold text-white">React Us With Email</h3>
                              <input type="text" placeholder="Name" className="input input-bordered w-full" required/>
                              <input type="text" placeholder="Email" className="input input-bordered w-full" required/>
                              <textarea className="textarea textarea-bordered h-24" placeholder="Write Your Details message"></textarea>
                              <button type="submit" className="btn btn-secondary">Submit</button>
                        </form>
                  </div>
            </div>
      );
};

export default Contact;