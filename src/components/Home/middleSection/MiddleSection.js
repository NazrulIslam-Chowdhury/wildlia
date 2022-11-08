import React from 'react';
import { Link } from 'react-router-dom';

const MiddleSection = () => {
    return (
        <div>
            <div className="dark:bg-green-400 dark:text-gray-50 rounded">
                <div className="container grid grid-cols-12 mx-auto dark:bg-gray-900">
                    <div className="bg-no-repeat bg-cover dark:bg-gray-700 col-span-full lg:col-span-4" style={{ backgroundImage: " url('https://source.unsplash.com/random/640x480')", backgroundPosition: "center center", backgroundBlendMode: "multiply", backgroundSize: "cover" }}></div>
                    <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">

                        <h1 className="text-3xl font-semibold">Lorem ipsum dolor sit.</h1>
                        <p className="flex-1 pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, reprehenderit adipisci tempore voluptas laborum quod.</p>
                        <Link rel="noopener noreferrer" to='' className="no-underline inline-flex items-center pt-2 pb-6 space-x-2 text-sm dark:text-violet-400">
                            <span>Read more</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </Link>
                        <div className="flex items-center justify-between pt-2">
                            <div className="flex space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 dark:text-gray-400">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path>
                                </svg>
                                <span className="self-center text-sm">by Nazrul Islam</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="dark:bg-green-400 dark:text-gray-100 mt-5 rounded">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <div className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
                        <img src="https://source.unsplash.com/random/480x360" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-semibold sm:text-4xl">Noster tincidunt reprimique ad pro</h3>
                            <span className="text-xs dark:text-gray-400">February 19, 2021</span>
                            <p>Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="dark:bg-green-400 dark:text-gray-50 mt-5 rounded">
                <div className="container grid grid-cols-12 mx-auto dark:bg-gray-900">
                    <div className="bg-no-repeat bg-cover dark:bg-gray-700 col-span-full lg:col-span-4" style={{ backgroundImage: " url('https://source.unsplash.com/random/640x480')", backgroundPosition: "center center", backgroundBlendMode: "multiply", backgroundSize: "cover" }}></div>
                    <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
                        <h1 className="text-3xl font-semibold">Lorem ipsum dolor sit.</h1>
                        <p className="flex-1 pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, reprehenderit adipisci tempore voluptas laborum quod.</p>
                        <Link rel="noopener noreferrer" to='' className="no-underline inline-flex items-center pt-2 pb-6 space-x-2 text-sm dark:text-violet-400">
                            <span>Read more</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </Link>
                        <div className="flex items-center justify-between pt-2">
                            <div className="flex space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 dark:text-gray-400">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path>
                                </svg>
                                <span className="self-center text-sm">by Nazrul Islam</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiddleSection;