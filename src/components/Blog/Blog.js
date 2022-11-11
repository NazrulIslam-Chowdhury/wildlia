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

        <div className='grid grid-cols-1 space-y-6 bg-gradient-to-br from-green-400 p-4 rounded'>
            <div>
                <h1 className='text-4xl font-bold'>Q:1 Differenc between SQL and NoSQL </h1>
                <p>Ans:SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
            </div>
            <div>
                <h1 className='text-4xl font-bold'>Q:2 What is JWT, and how does it work?</h1>
                <p>JSON Web Token is a proposed Internet standard for creating data with optional signature and/or optional encryption whose payload holds JSON that asserts some number of claims. The tokens are signed either using a private secret or a public/private key.</p>
            </div>
            <div>
                <h1 className='text-4xl font-bold'>Q:3 What is the difference between javascript and NodeJS? </h1>
                <p>Ans:JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
            </div>
            <div>
                <h1 className='text-4xl font-bold'>Q:4 How does NodeJS handle multiple requests at the same time? </h1>
                <p>Ans:How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
            </div>

        </div>
    );
};

export default Blog;