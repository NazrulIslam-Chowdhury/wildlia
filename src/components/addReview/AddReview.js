import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaSmile } from 'react-icons/fa';

import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const AddReview = () => {
    const { user, loading } = useContext(AuthContext);
    useTitle('Add-review');

    const addReviewOnSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'unregistered';
        const comment = form.comment.value;

        const review = {
            name,
            userImg: user?.photoURL,
            email,
            comment
        }
        fetch('https://wildlia-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Review added successfully')
                    form.reset();
                }
            })
            .catch(err => console.error(err))

    }

    if (loading) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-green-600 font-bold ml-96"></div>
    }
    return (
        <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
            <form onSubmit={addReviewOnSubmit} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid ">

                <fieldset className="grid grid-cols-4 gap-6 p-6 bg-teal-700">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <FaSmile className='h-16 w-16 text-gray-300' />
                        <p className="text-xl text-gray-300 font">Please give your valuable review!</p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Username</label>
                            <input name='name' type="text" placeholder="Username" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 bg-gray-300 dark:text-gray-900" required />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Email</label>
                            <input name='email' type="text" placeholder="email" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 bg-gray-300 text-gray-900" defaultValue={user?.email} />
                        </div>
                        <div className="col-span-full">
                            <label className="text-sm">Comment</label>
                            <textarea name='comment' placeholder="write your review" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 bg-gray-300 text-gray-900" required></textarea>
                        </div>
                        <div className="col-span-full">

                            <div className="flex items-center space-x-2">
                                <img src={user?.photoURL} alt="" className="w-10 h-10 rounded-full bg-gray-700" />
                                <button className="px-4 py-2 border rounded-md hover:bg-teal-700 border-gray-100">Add</button>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </form>
        </section>
    )
};

export default AddReview;