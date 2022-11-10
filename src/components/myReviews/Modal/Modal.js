import React, { useContext } from 'react';
// import toast, { Toaster } from 'react-hot-toast';
import { FaSmile } from 'react-icons/fa';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
// import { useLoaderData } from 'react-router-dom';


const Modal = () => {
    // const storedReview = useLoaderData();
    const { loading } = useContext(AuthContext);

    const addUpdateReviewOnSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const newComment = form.comment.value;

        console.log(newComment);

        // fetch(`https://wildlia-server.vercel.app/${storedReview._id}`, {
        //     method: 'PUT',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(newComment)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.modifiedCount > 0) {
        //             toast.success('Review update successfully');
        //             form.reset();
        //         }
        //     })
    }

    if (loading) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-green-600 font-bold ml-96"></div>
    }
    return (
        <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
            <form onSubmit={addUpdateReviewOnSubmit} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid ">

                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-green-400">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <FaSmile className='h-16 w-16 text-gray-300' />
                        <p className="text-xl ">Want to update your review ?</p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">


                        <div className="col-span-full">
                            <label className="text-sm">Update Comment</label>
                            <textarea name='comment' placeholder="write your updated review" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" required></textarea>
                        </div>
                        <div className="col-span-full">


                            <button className="px-4 py-2 border rounded-md hover:bg-green-600 border-gray-100">Add</button>

                        </div>
                    </div>
                </fieldset>

            </form>
        </section>
    );
};

export default Modal;