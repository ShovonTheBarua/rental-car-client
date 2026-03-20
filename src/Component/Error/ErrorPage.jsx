import React from 'react';
import { TbFaceIdError } from "react-icons/tb";
import { Link } from 'react-router';


const ErrorPage = () => {
    return (
        <div className='bg-secondary h-screen flex flex-col gap-8 justify-center items-center'>
            <h1 className='flex text-white text-9xl font-medium'>404 <TbFaceIdError /></h1>
            <Link className='btn w-50' to="/">Home</Link>
        </div>
    );
};

export default ErrorPage;