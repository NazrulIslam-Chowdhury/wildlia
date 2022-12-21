import React, { useContext, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import MyReview from './MyReview/MyReview';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [userReviews, setUserReview] = useState([]);
    const [loading, setLoading] = useState(true);
    useTitle('My-reviews');

    useEffect(() => {
        fetch(`https://wildlia-server.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setUserReview(data);
                setLoading(false);
            })
    }, [user?.email])

    if (loading) {
        return <div className='flex justify-center'><div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-teal-700 font-bold"></div></div>
    }

    const deleteOnClick = id => {
        const proceed = window.confirm('Are you want to delete this review');
        if (proceed) {
            fetch(`https://wildlia-server.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        toast.success('Review deleted successfully');
                        const remaining = userReviews.filter(rev => rev._id !== id);
                        setUserReview(remaining);
                    }
                })
        }
    }
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 p-8 mt-5'>

            {
                userReviews.map(review => <MyReview key={review._id} review={review} deleteOnClick={deleteOnClick}></MyReview>

                )
            }
            <Toaster />
        </div>
    );
};

export default MyReviews;