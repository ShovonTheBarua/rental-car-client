import React from "react";

const TopRated = () => {
  return (
    <div className="max-w-7xl mx-auto my-15">
      <h1 className="text-4xl mb-8 font-bold  text-white">TOP RATED CARS</h1>

      <div className="flex justify-between ">
        <div className="relative group ">
          <img
            className="h-120 w-100  object-cover "
            src="https://i.ibb.co.com/ch0cvCT6/melvin-brizuela-z-MGr-Pdj-Ro-OU-unsplash.jpg"
            alt=""
          />

          <div class="absolute inset-0 bg-black/50 group-hover:opacity-0 transition duration-300"></div>

          <div class="absolute inset-0 group-hover:opacity-0 flex items-center justify-center">
            <p class="text-white text-2xl font-bold">TOYOTA</p>
          </div>
        </div>
        <div className="relative group">
          <img
            className="h-120 w-100  object-cover"
            src="https://i.ibb.co.com/KJ4m3W1/martin-katler-y3ne-Nk-E6ef-I-unsplash.jpg"
            alt=""
          />

          <div class="absolute inset-0 bg-black/50 group-hover:opacity-0 transition duration-300"></div>

          <div class="absolute inset-0 group-hover:opacity-0 flex items-center justify-center">
            <p class="text-white text-2xl font-bold">MERCEDES</p>
          </div>
        </div>
        <div className="relative group">
          <img
            className="h-120 w-100  object-cover"
            src="https://i.ibb.co.com/v4ndGhwy/josh-berquist-4s-Wbz-H5fp8-unsplash.jpg"
            alt=""
          />

          <div class="absolute inset-0 bg-black/50 group-hover:opacity-0 transition duration-300"></div>

          <div class="absolute inset-0 group-hover:opacity-0 flex items-center justify-center">
            <p class="text-white text-2xl font-bold">BMW</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRated;
