import React, { useEffect, useState } from 'react';
import useAxios from '../../hooks/useAxios';
import { useParams } from 'react-router';

const CarDetails = () => {
    const instance = useAxios()
    const [car, setCar] = useState()
    const {id} = useParams()
    console.log(id)

    useEffect(()=>{
        instance.get(`/carDetails/${id}`).then(data => {
            console.log(data.data)
            setCar(data.data)
        })
        
    },[instance, id])

    return (
        // main
        <div className='max-w-7xl flex flex-col md:flex-row justify-between items-center p-20 mx-auto bg-radial-[at_100%_30%] from-white to-zinc-900 to-300%'>
            {/* image */}
            <div>
                <img src={car?.photoURL} className=''  alt="" />
            </div>
            {/* description */}
            <div className='text-secondary text-center md:text-left'>
                <h1 className='text-4xl font-bold '>{car?.CarName}</h1>
                <p className='pb-5'>{car?.category}</p>
                <p className='text-2xl font-semibold'>Rent price: ${car?.RentPrice}</p>
                <p className='text-2xl font-semibold'>Location: {car?.location}</p>
                <p className='text-2xl font-semibold'>Car status: {car?.status}</p>
                <h2 className='text-xl text-gray-600 font-semibold pt-5'>Provider name: {car?.UserName}</h2>
                <h2 className='text-xl text-gray-600'>Provider email: {car?.UserEmail}</h2>
                <button className='btn btn-secondary mt-5'>Book Now</button>
            </div>
        </div>
    );
};

export default CarDetails;


