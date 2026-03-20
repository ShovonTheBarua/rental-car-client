import React from "react";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import { Bounce, toast } from "react-toastify";

const AddCar = () => {
  const { user } = useAuth();
  const instance = useAxios();

  const handleAddCar = (e) => {
    e.preventDefault();
    const UserName = user.displayName;
    const UserEmail = user.email;
    const category = e.target.category.value;
    const CarName = e.target.carName.value;
    const RentPrice = e.target.rentPrice.value;
    const location = e.target.location.value;
    const photoURL = e.target.photoURL.value;
    const description = e.target.description.value;
    const status = 'Available'

    const newCar = {
      UserName,
      UserEmail,
      category,
      CarName,
      RentPrice,
      location,
      photoURL,
      description,
      status
    };

    instance.post("/cars", newCar).then((data) => {
      console.log(data);
      toast.success("Car added successfully", {
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
    });
  };

  return (
    <div className="">
      <div className="bg-white max-w-2xl mx-auto  my-20 shadow-2xl shadow-slate-800  rounded-2xl">
        <form onSubmit={handleAddCar} className="p-8 ">
          <h1 className="text-center text-gray-700 text-4xl font-bold mb-3">
            Add A Car
          </h1>
          <fieldset className="flex flex-col space-y-4">
            <div>
              <label className="label font-bold mb-2">Your Name</label>
              <input
                type="text"
                className="input w-full"
                placeholder="name"
                defaultValue={user?.displayName}
                readOnly
              />
            </div>
            <div>
              <label className="label font-bold mb-2">Your Email</label>
              <input
                type="email"
                className="input w-full"
                placeholder="Email"
                defaultValue={user?.email}
                readOnly
              />
            </div>

            <label className="label font-bold mb-2">Category</label>
            <select
              defaultValue="Pick a browser"
              name="category"
              required
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
                <label className="label font-bold mb-2">Car Name</label>
                <input
                  type="text"
                  required
                  name="carName"
                  className="input w-full"
                  placeholder="TOYOTA"
                />
              </div>
              <div>
                <label className="label font-bold mb-2">Rent Price</label>
                <input
                  type="text"
                  required
                  name="rentPrice"
                  className="input w-full"
                  placeholder="$100 / DAY"
                />
              </div>
            </div>
            <div>
              <label className="label font-bold mb-2">Location</label>
              <input
                type="text"
                required
                name="location"
                className="input w-full"
                placeholder="221B Baker Street, London"
              />
            </div>
            <div>
              <label className="label font-bold mb-2">Hosted Image URL</label>
              <input
                type="text"
                name="photoURL"
                required
                className="input w-full"
                placeholder="image url"
              />
            </div>
            <div>
              <label className="label font-bold mb-2">Description</label>
              <textarea
                type="text"
                name="description"
                className="textarea w-full"
                placeholder="This car is awesome"
              />
            </div>
            <button className="btn btn-primary mt-4 ">Add</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default AddCar;
