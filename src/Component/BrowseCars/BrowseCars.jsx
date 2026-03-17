import React, { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";

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
        <div key={car._id} className=" h-80 rounded-xl shadow-sm relative bg-radial-[at_100%_30%] from-white to-zinc-900 to-100% p-">
          <figure className=" ">
            <img src={car.photoURL} alt="" />
          </figure>
          <div className="absolute bottom-0 flex justify-between w-full p-4">
            <div className="">
              <h1 className="text-xl text-white font-semibold">{car.CarName}</h1>
              <p className="text-gray-300 text-sm">{car.category}</p>
            </div>
            <div>
              <button className="btn rounded-lg btn-secondary">View Details</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BrowseCars;
