import React, { useContext } from 'react';
// import toast from 'react-hot-toast';
import { FaSmile } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const AddService = () => {
    const { loading, user } = useContext(AuthContext);
    useTitle('Add-Service');

    if (loading) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-green-600 font-bold ml-96"></div>
    }

    const addServiceOnSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const price = form.price.value;
        const img = form.url.value;
        const details = form.details.value;
        console.log(title, img, price, details);

        // const service = {
        //     title,
        //     price,
        //     img,
        //     details
        // }

        //     fetch('https://wildlia-server.vercel.app/services', {
        //         method: 'POST',
        //         headers: {
        //             'content-type': 'application/json'
        //         },
        //         body: JSON.stringify(service)
        //     })
        //         .then(res => res.json())
        //         .then(data => {
        //             if (data.acknowledged) {
        //                 toast.success('Review added successfully')
        //                 form.reset();
        //             }
        //         })
        //         .catch(err => console.error(err))

    }
    return (
        <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
            <form onSubmit={addServiceOnSubmit} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid ">

                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-green-400">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <FaSmile className='h-16 w-16 text-gray-300' />
                        <p className="text-xl ">Please add a service!</p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Title</label>
                            <input name='title' type="text" placeholder="title" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" required />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Service duration</label>
                            <input name='duration' type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" defaultValue='1d' />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Price</label>
                            <input name='price' type="text" placeholder="price" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">PhotoURl</label>
                            <input name='url' type="text" placeholder="PhotoURL" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full">
                            <label className="text-sm">Details</label>
                            <textarea name='details' placeholder="write a description" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" required></textarea>
                        </div>
                        <div className="col-span-full">

                            <div className="flex items-center space-x-2">
                                <img src={user?.photoURL} alt="" className="w-10 h-10 rounded-full bg-gray-700" />
                                <button className="px-4 py-2 border rounded-md hover:bg-green-600 border-gray-100">Add</button>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default AddService;