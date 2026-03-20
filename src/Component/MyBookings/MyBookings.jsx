import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { Link } from "react-router";
import useAuth from "../../hooks/useAuth";

const MyBookings = () => {
  const instance = useAxios();
  const { user } = useAuth();
  const [browseCars, setBrowseCars] = useState([]);

  console.log(user?.email);
  useEffect(() => {
    instance.get(`/myBookings?email=${user?.email}`).then((data) => {
      console.log(data.data);
      setBrowseCars(data.data);
    });
  }, [user, instance]);

  return (
    <div className=" max-w-7xl mx-auto mb-20">
      <h1 className=" text-3xl mb-4 mt-8 font-bold text-secondary">
        Manage Your Bookings
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto px-5 md:px-2 lg:px-0 ">
        {browseCars.map((car) => (
          <div
            key={car._id}
            className="h-80 rounded-xl shadow-sm relative bg-radial-[at_100%_30%] from-white to-zinc-900 to-100% p-"
          >
            <div className="absolute top-3 left-3">
              <h1 className="text-xl text-white font-semibold">
                {car.CarName}
              </h1>
              <p className="text-gray-300 text-sm">{car.category}</p>
            </div>
            <div>
              <button
                className={`rounded-full px-3 py-1 text-sm font-light absolute top-3 right-3 ${
                  car.status === "Booked"
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {car.status}
              </button>
            </div>
            <figure className="absolute pt-10">
              <img src={car.photoURL} alt="" />
            </figure>
            <div className="">
              <h1 className="text-2xl absolute bottom-3 left-3 text-white font-semibold ">
                <span className="text-sm font-medium">$ </span>
                {car.RentPrice}
                <span className="text-sm font-medium"> | day </span>
              </h1>
              <Link
                to={`/carDetails/${car._id}`}
                className="btn absolute bottom-3 right-3 rounded-lg btn-secondary"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
