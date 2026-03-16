import React from "react";

const AddCar = () => {
  return (
    <div className="">
      <div className="bg-white max-w-2xl mx-auto my-auto mt-20 shadow-2xl shadow-slate-800  rounded-2xl">
        <form className="p-8 ">
          <h1 className="text-center text-gray-700 text-4xl font-bold mb-3">Add A Car</h1>
          <fieldset className="flex flex-col space-y-4">
            <div>
              <label className="label font-bold mb-2">Your Name</label>
              <input
                type="text"
                className="input w-full"
                placeholder="name"
                readOnly
              />
            </div>
            <div>
              <label className="label font-bold mb-2">Your Email</label>
              <input
                type="email"
                className="input w-full"
                placeholder="Email"
                readOnly
              />
            </div>
             
               <label className="label font-bold mb-2">Category</label>
              <select defaultValue="Pick a browser" className="select w-full text-gray-500">
                <option disabled={true}>Pick a category</option>
                <option>Sedan</option>
                <option>SUV</option>
                <option>Hatchback</option>
                <option>Luxury</option>
                <option>Electric</option>
              </select>
            
            <div className="flex justify-between ">
              <div>
                <label className="label font-bold mb-2">Car Name</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="TOYOTA"
                />
              </div>
              <div>
                <label className="label font-bold mb-2">Rent Price</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="$100 / DAY"
                />
              </div>
            </div>
            <div>
              <label className="label font-bold mb-2">Location</label>
              <input
                type="text"
                className="input w-full"
                placeholder="221B Baker Street, London"
              />
            </div>
            <div>
              <label className="label font-bold mb-2">Hosted Image URL</label>
              <input
                type="text"
                className="input w-full"
                placeholder="image url"
              />
            </div>
            <div>
              <label className="label font-bold mb-2">Description</label>
              <textarea
                type="text"
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
