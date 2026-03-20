import React, { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { useParams } from "react-router";
import { Bounce, toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";

const CarDetails = () => {
  const instance = useAxios();
  const {user} = useAuth()
  const [car, setCar] = useState();
  const { id } = useParams();
  console.log(id);


  useEffect(() => {
    instance.get(`/carDetails/${id}`).then((data) => {
      console.log(data.data);
      setCar(data.data);
    });
  }, [instance, id]);

  const handleCarBooking = () => {
    const updateStatus = {
       status: "Booked",
       BookingEmail: user?.email
      };
    instance.patch(`/carDetails/${id}`, updateStatus).then((data) => {
      console.log(data);
      if (data.data.acknowledged) {
        toast.success("Car has been booked successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      }
    });
  };

  return (
    // main
    <div className="max-w-7xl flex flex-col md:flex-row justify-between items-center p-20 mx-auto bg-radial-[at_100%_30%] from-white to-zinc-900 to-300%">
      {/* image */}
      <div>
        <img src={car?.photoURL} className="" alt="" />
      </div>
      {/* description */}
      <div className="text-secondary text-center md:text-left">
        <h1 className="text-4xl font-bold ">{car?.CarName}</h1>
        <p className="pb-5">{car?.category}</p>
        <p className="text-2xl font-semibold">Rent price: ${car?.RentPrice}</p>
        <p className="text-2xl font-semibold">Location: {car?.location}</p>
        <p className="text-2xl font-semibold">Car status: {car?.status}</p>
        <h2 className="text-xl text-gray-600 font-semibold pt-5">
          Provider name: {car?.UserName}
        </h2>
        <h2 className="text-xl text-gray-600">
          Provider email: {car?.UserEmail}
        </h2>
        <button onClick={handleCarBooking} className="btn btn-secondary mt-5">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default CarDetails;
