import React, { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { Link } from "react-router";

const BrowseCars = () => {
  const instance = useAxios();
  const [browseCars, setBrowseCars] = useState([]);

  useEffect(() => {
    instance.get("/cars").then((data) => {
      console.log(data.data);
      setBrowseCars(data.data);
    });
  }, [instance]);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto px-5 md:px-20 lg:px-30">
      {browseCars.map((car) => (
        <div
          key={car._id}
          className="h-80 rounded-xl shadow-sm relative bg-radial-[at_100%_30%] from-white to-zinc-900 to-100% p-"
        >
          <div className="absolute top-3 left-3">
            <h1 className="text-xl text-white font-semibold">{car.CarName}</h1>
            <p className="text-gray-300 text-sm">{car.category}</p>
          </div>
          <figure className=" ">
            <img src={car.photoURL} alt=""/>
          </figure>
          <div className="">
            <h1 className="text-2xl absolute bottom-3 left-3 text-white font-semibold ">
              <span className="text-sm font-medium">$ </span>
              {car.RentPrice}
              <span className="text-sm font-medium"> | day </span>
            </h1>
            <Link to={`/carDetails/${car._id}`} className="btn absolute bottom-3 right-3 rounded-lg btn-secondary">
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BrowseCars;
