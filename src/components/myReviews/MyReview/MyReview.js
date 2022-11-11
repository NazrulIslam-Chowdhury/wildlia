
import React, { useContext } from 'react';

import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
const MyReview = ({ review, deleteOnClick }) => {
    const { user, loading } = useContext(AuthContext);
    const { _id, userImg, name, email, comment } = review;
    if (loading) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-green-600 font-bold ml-96"></div>
    }

    return (
        <div className="container flex flex-col w-auto max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-gray-900 text-gray-100 shadow-md shadow-black">
            <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                    <div>
                        <img src={userImg} alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
                    </div>
                    <div>
                        <h4 className="font-bold">{name
                        }</h4>
                        <span className="text-xs text-gray-400">{user.displayName}</span> <br />
                        <span className="text-xs text-gray-400">{email}</span>
                    </div>
                </div>
                <div className="flex items-center space-x-2 text-yellow-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                        <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                    </svg>
                    <span className="text-xl font-bold">4.5</span>
                </div>
            </div>
            <div className="p-4 space-y-2 flex-wrap text-sm text-gray-400">
                <p>{comment.slice(1, 30) + '...'}Read more</p>
            </div>
            <div className='flex justify-between mt-5'>
                <Link className='no-underline' to={`/modal/:${_id}`}>
                    <button className='bg-green-200 hover:bg-green-400 py-2 px-4 text-black text-lg font-bold rounded'>Edit review</button>
                </Link>
                <button onClick={() => deleteOnClick(_id)} className='hover:bg-green-300 rounded-full text-red-500 p-2 h-8 w-8'><FaTrashAlt /></button>
            </div>

        </div>
    );
};

export default MyReview;