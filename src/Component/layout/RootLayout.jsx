import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';
import Footer from '../Footer/Footer';

const RootLayout = () => {
    return (
        <div  >
            <Navbar></Navbar>
            <Outlet></Outlet>
            <ToastContainer />
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;