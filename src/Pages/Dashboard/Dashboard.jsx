import React, { useContext } from 'react';
import { UserContext } from '../../AuthProvider/AuthProvider';

const Dashboard = () => {
  const { user } = useContext(UserContext)

  const { photoURL, displayName, email, emailVerified} = user;

  return (
    <div className="p-3 text-white flex justify-between flex-col lg:flex-row max-w-7xl mx-auto my-12">
          <div className="flex justify-around mb-2 w-[80%] lg:w-1/2 items-center">
            <img
              className="w-full rounded-lg"
              src={photoURL}
              alt={displayName}
            />
            <div>
            </div>
          </div>
          <div className="text-base font-semibold p-10 text-white flex flex-col gap-3">
           {
           displayName &&  <div className='text-xl lg:text-3xl font-bold '> <span>Full Name: </span> {displayName}</div>
           }
            <div className='h-10 text-base lg:text-lg my-6 '><span>{email}</span>{emailVerified ? <div className="badge badge-secondary mx-2">Verified</div>:  <div className="badge badge-secondary mx-2">Not Verified</div>}</div>
          </div>
    </div>
  );
};

export default Dashboard;