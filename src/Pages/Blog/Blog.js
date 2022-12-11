import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div>
            <h1 className=' lg:text-9xl md:text-6xl text-4xl text-white text-center mt-[20%]'>Coming Soon....</h1>
            <p className='text-center mt-5'><Link to='/' className='text-white underline'>Back to Home</Link></p>
        </div>
    );
};

export default Blog;