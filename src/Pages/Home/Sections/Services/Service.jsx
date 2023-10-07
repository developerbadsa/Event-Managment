import { Link } from "react-router-dom";

const Service = ({ service }) => {

      const { id, name, image, short_description, price } = service;
      return (
            <div className="bg-transparent text-white place-items-end">
                  <div className=" h-[550px] bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                              <img className="rounded-t-lg h-[300px] w-full" src={image} alt={name} />
                        </a>
                        <div className="p-5 grid">
                              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {name}
                              </h5>
                              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    {short_description}
                              </p>
                              <span className="text-base text-red-500 font-semibold my-4">Price: ${price}</span>
                              <Link to={`/service/${id}`}>
                                    <button className="inline-flex items-center place-items-end px-3 py-2 mb-12 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    > Show Details<svg
                                          className="w-3.5 h-3.5 ml-2"
                                          aria-hidden="true"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 14 10"
                                    >
                                                <path
                                                      stroke="currentColor"
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      strokeWidth={2}
                                                      d="M1 5h12m0 0L9 1m4 4L9 9"
                                                />
                                          </svg>
                                           </button>

                              </Link>
                        </div>
                  </div>

            </div>
      );
};

export default Service;