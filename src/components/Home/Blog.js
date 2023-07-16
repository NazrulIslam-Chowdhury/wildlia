import React from 'react';
import blog4 from "../../assets/blogs-thumb-4.jpg";
import { blogs } from '../../Constant';
import { BsArrowRight } from 'react-icons/bs';

const Blog = () => {
    return (
        <div className='sm:p-20 p-10 space-y-10'>
            <div className='space-y-5'>
                <h1 className='font1 text-white sm:text-6xl text-3xl font-bold'>Our Blogs</h1>
                <p>We keep you informed of the latest news from the vacation world, subscribe to our blog and find out everything.</p>
            </div>
            <div className='lg:flex-row md:flex-col flex-col flex justify-center gap-16'>
                <div className='space-y-10'>
                    {
                        blogs.map((blog, idx) => (
                            <div key={idx} className='gap-5 items-center relative lg:flex-row md:flex-col flex-col flex'>
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className='hover:grayscale-[50%] cursor-pointer w-full'
                                />
                                <div className='flex flex-col items-start gap-4'>
                                    <h3 className='text-2xl text-white font-semibold text-start'>{blog.title}</h3>
                                    <p className='text-start'>{blog.detail}</p>
                                    <h4 className='flex gap-10 items-center text-lg text-amber-500 font-medium cursor-pointer'>Read More <BsArrowRight className='w-5 h-5' /></h4>

                                    <h4 className='absolute bg-white p-3 sm:top-2 top-4 left-2 text-black rounded font-medium'>{blog.date}</h4>
                                </div>

                            </div>
                        ))
                    }
                </div>
                <div className='space-y-4 relative'>
                    <img
                        src={blog4}
                        alt=""
                        className='hover:grayscale-[50%] cursor-pointer'
                    />
                    <div className='flex flex-col items-start space-y-4'>
                        <h3 className='text-2xl text-white font-semibold text-start'>World's Most Expensive Private Island Opens</h3>
                        <p className='text-start'>Private Island is located on the Palawan archipelago in the Philippines, two hours from Manila, and will offer visitors 15 acres of private land, where they can partake in tennis.</p>
                        <h4 className='flex gap-10 items-center text-lg text-amber-500 font-medium cursor-pointer'>Read More <BsArrowRight className='w-5 h-5' /></h4>
                    </div>
                    <h4 className='absolute bg-white p-3 top-2 left-2 text-black rounded font-medium'>Jun 24</h4>
                </div>
            </div>
        </div>
    );
};

export default Blog;