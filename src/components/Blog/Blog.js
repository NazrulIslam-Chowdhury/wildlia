import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    const { loading } = useContext(AuthContext);
    useTitle('Blog');

    if (loading) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-green-600 font-bold ml-96"></div>
    }
    return (
        <div>
            {/* <h1>This is blog</h1> */}
        </div>
    );
};

export default Blog;