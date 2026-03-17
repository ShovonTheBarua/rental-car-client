import React, { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";

const MyListings = () => {
  const [cars, setCars] = useState([]);
  const instance = useAxios();
  const { user, loading } = useAuth();
  console.log(cars);
  useEffect(() => {
    if (loading) return;
    instance.get(`/myListings?email=${user?.email}`).then((data) => {
      console.log(data);
      setCars(data.data);
    });
  }, [user, instance, loading]);

  return (
    <div className="overflow-x-auto max-w-7xl mx-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="text-[16px]">
            <th>SL No.</th>
            <th>Car Name</th>
            <th>Category</th>
            <th>Rent Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {cars.map((car, index) => (
            <tr className="text-[16px]">
              <th>{index + 1}</th>
              <td>{car.CarName}</td>
              <td>{car.category}</td>
              <td>$ {car.RentPrice}</td>
              <td>Available</td>
              <td><button className="btn">del</button></td>
              <td><button className="btn">edit</button></td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyListings;
