import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const MyReviews = () => {
    const { loading } = useContext(AuthContext);
    useTitle('My-reviews');

    if (loading) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-green-600 font-bold ml-96"></div>
    }
    return (
        <div>
            <h1>My reviews page</h1>
        </div>
    );
};

export default MyReviews;