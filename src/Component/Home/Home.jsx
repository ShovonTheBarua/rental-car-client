import React from 'react';
import Slider from '../homeComponent/Slider';
import FeaturedCars from '../homeComponent/FeaturedCars';
import RentWithUs from '../homeComponent/RentWithUs';
import TopRated from '../homeComponent/TopRated';
import CustomerRatings from '../homeComponent/CustomerRatings';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <FeaturedCars></FeaturedCars>
            <div className='bg-[#1E293B]'>
            <RentWithUs></RentWithUs>
            <TopRated></TopRated>
            <CustomerRatings></CustomerRatings>
            </div>
        </div>
    );
};

export default Home;