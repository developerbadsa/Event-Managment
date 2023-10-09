
import { FaArrowCircleRight, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AboutUs = () => {
      return (
            <div className='max-w-7xl mx-auto'>
                  <div>
                        <h2 className='text-center text-2xl font-bold text-white py-4 lg:py-16'>About Us</h2>
                  </div>

                  <div className='flex flex-col justify-center items-center text-center px-4 lg:px-0 lg:grid  lg:grid-cols-4 text-white py-2'>
                        <div>
                              <span className='text-red-500'>Overview</span>
                              <h2 className='text-4xl font-bold my-6'>Get the latest info about Hackthons</h2>
                        </div>
                        <div>
                              <p className='text-base font-light text-slate-300 p-4'>
                                    We have dedicated tracks for every industry Whether you want to hire tech top talent meet with the policymakers influencing your industry or exchange notes with your peers and competitors, we have
                              </p>
                        </div>
                        <div>
                              <ol type='disk' className='flex flex-col gap-3 p-4'>
                                    <li className='flex items-center gap-2'><FaCheckCircle className='text-red-400'></FaCheckCircle> Application Interview</li>
                                    <li className='flex items-center gap-2'><FaCheckCircle className='text-red-400'></FaCheckCircle>Acceptance Payment</li>
                                    <li className='flex items-center gap-2'><FaCheckCircle className='text-red-400'></FaCheckCircle> Startup Program Access</li>
                                    <li className='flex items-center gap-2'><FaCheckCircle className='text-red-400'></FaCheckCircle> Accelerate Program</li>
                              </ol>
                        </div>
                        <div className='flex items-center'>
                              <Link to='/about'><button className="btn btn-circle text-xl btn-secondary"><FaArrowCircleRight></FaArrowCircleRight></button></Link>
                        </div>

                  </div>
            </div>
      );
};

export default AboutUs;