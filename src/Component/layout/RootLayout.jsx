import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div className='bg-[#F5FBE6]'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default RootLayout;