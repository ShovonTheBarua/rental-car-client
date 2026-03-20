import React, { useEffect, useRef, useState } from "react";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import { Bounce, toast } from "react-toastify";
import Swal from "sweetalert2";

const MyListings = () => {
  const [cars, setCars] = useState([]);
  const instance = useAxios();
  const { user, loading } = useAuth();
  const updateModal = useRef(null);
  const [selectedCar, setSelectedCar] = useState(null);
  console.log(cars);
  useEffect(() => {
    if (loading) return;
    instance.get(`/myListings?email=${user?.email}`).then((data) => {
      console.log(data);
      setCars(data.data);
    });
  }, [user, instance, loading]);

  const handleCarUpdate = (e) => {
    e.preventDefault();
    const UserName = user.displayName;
    const UserEmail = user.email;
    const category = e.target.category.value;
    const CarName = e.target.carName.value;
    const RentPrice = e.target.rentPrice.value;
    const location = e.target.location.value;
    const photoURL = e.target.photoURL.value;
    const description = e.target.description.value;

    const newCar = {
      UserName,
      UserEmail,
      category,
      CarName,
      RentPrice,
      location,
      photoURL,
      description,
    };

    instance.patch(`/carDetails/${selectedCar._id}`, newCar).then((data) => {
      console.log(data.data.acknowledged);

      const updatedCars = cars.map(car => car._id === selectedCar._id
        ? {...car, ...newCar}
        : car
      )

      setCars(updatedCars)

      if (data.data.acknowledged) {
        updateModal.current.close();
      }

      if (data.data.acknowledged) {
        
        toast.success("Car update successfully", {
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

  const handleDeleteCar = (del_car) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // console.log(selectedCar?._id);
        instance.delete(`/myListings/${del_car?._id}`).then((data) => {
          console.log(data);
          if (data.data.acknowledged) {

            // update ui 
            const updatedCars = cars.filter(car => car._id !== del_car._id)
            setCars(updatedCars)
            

            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto mb-20">
       <h1 className="text-3xl mb-4 mt-8 font-bold text-secondary">
        Manage Your Listings
      </h1>
    <div className="overflow-x-auto max-w-7xl mx-auto  ">
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
            <tr key={car._id} className="text-[16px]">
              <th>{index + 1}</th>
              <td>{car.CarName}</td>
              <td>{car.category}</td>
              <td>$ {car.RentPrice}</td>
              <td>Available</td>
              <td>
                <button
                  className="btn"
                  onClick={() => {
                    // setSelectedCar(car);
                    // if (!car) {
                    //   return
                    // }
                    handleDeleteCar(car);
                  }}
                >
                  del
                </button>

                {/* edit */}
                <button
                  className="btn"
                  onClick={() => {
                    updateModal.current.showModal();
                    setSelectedCar(car);
                  }}
                >
                  Edit
                </button>
                <dialog
                  ref={updateModal}
                  className="modal modal-bottom sm:modal-middle"
                >
                  <div className="modal-box">
                    <div className="modal-action">
                      <form onSubmit={handleCarUpdate} method="dialog">
                        {/* if there is a button in form, it will close the modal */}

                        <fieldset className="flex flex-col space-y-4">
                          <div>
                            <label className="label font-bold mb-2">
                              Your Name
                            </label>
                            <input
                              type="text"
                              className="input w-full"
                              placeholder="name"
                              defaultValue={user?.displayName}
                              readOnly
                            />
                          </div>
                          <div>
                            <label className="label font-bold mb-2">
                              Your Email
                            </label>
                            <input
                              type="email"
                              className="input w-full"
                              placeholder="Email"
                              defaultValue={user?.email}
                              readOnly
                            />
                          </div>

                          <label className="label font-bold mb-2">
                            Category
                          </label>
                          <select
                            defaultValue={selectedCar?.category}
                            name="category"
                            className="select w-full text-gray-500"
                          >
                            <option disabled={true}>Pick a category</option>
                            <option>Sedan</option>
                            <option>SUV</option>
                            <option>Hatchback</option>
                            <option>Luxury</option>
                            <option>Electric</option>
                          </select>

                          <div className="flex justify-between gap-2">
                            <div>
                              <label className="label font-bold mb-2">
                                Car Name
                              </label>
                              <input
                                type="text"
                                defaultValue={selectedCar?.CarName}
                                name="carName"
                                className="input w-full"
                                placeholder="TOYOTA"
                              />
                            </div>
                            <div>
                              <label className="label font-bold mb-2">
                                Rent Price
                              </label>
                              <input
                                type="text"
                                defaultValue={selectedCar?.RentPrice}
                                name="rentPrice"
                                className="input w-full"
                                placeholder="$100 / DAY"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="label font-bold mb-2">
                              Location
                            </label>
                            <input
                              type="text"
                              defaultValue={selectedCar?.location}
                              name="location"
                              className="input w-full"
                              placeholder="221B Baker Street, London"
                            />
                          </div>
                          <div>
                            <label className="label font-bold mb-2">
                              Hosted Image URL
                            </label>
                            <input
                              type="text"
                              name="photoURL"
                              defaultValue={selectedCar?.photoURL}
                              className="input w-full"
                              placeholder="image url"
                            />
                          </div>
                          <div>
                            <label className="label font-bold mb-2">
                              Description
                            </label>
                            <textarea
                              type="text"
                              defaultValue={selectedCar?.description}
                              name="description"
                              className="textarea w-full"
                              placeholder="This car is awesome"
                            />
                          </div>
                          <button className="btn btn-primary mt-4 ">
                            Update
                          </button>
                        </fieldset>
                      </form>
                    </div>
                    <button
                      className="btn mt-4"
                      onClick={() => {
                        updateModal.current.close();
                      }}
                    >
                      Close
                    </button>
                  </div>
                </dialog>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default MyListings;
