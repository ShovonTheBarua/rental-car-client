import React from 'react';
import Slider from '../homeComponent/Slider';
import FeaturedCars from '../homeComponent/FeaturedCars';
import RentWithUs from '../homeComponent/RentWithUs';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <FeaturedCars></FeaturedCars>
            <RentWithUs></RentWithUs>
        </div>
    );
};

export default Home;