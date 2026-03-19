import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CustomerRatings = () => {
  return (
    <div className="max-w-7xl mx-auto pb-10">
      <h1 className="text-4xl mb-8 font-bold text-white">
        CUSTOMER TESTIMONIALS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-15 ">
        <div className="w-96 bg-white p-4 rounded-2xl">
          <FontAwesomeIcon
            className="text-[#5D67D9] text-6xl mb-3"
            icon={faQuoteLeft}
          />
          <p className="text-[#1E293B] pb-6 font-medium text-">
            “I had an amazing experience renting a car here. The booking process
            was super easy, and the car was clean and in perfect condition.
            Highly recommended for anyone looking for a hassle-free rental!”
          </p>
          <p>~ Sarah Ahmed</p>
        </div>
        <div className="w-96 bg-white p-4 rounded-2xl">
          <FontAwesomeIcon
            className="text-[#5D67D9] text-6xl mb-3"
            icon={faQuoteLeft}
          />
          <p className="text-[#1E293B] pb-6 font-medium text-">
            “Great service and very reasonable pricing. The car was delivered on
            time and performed well throughout my trip. Customer support was
            also very responsive.”
          </p>
          <p>~ James Wilson</p>
        </div>
        <div className="w-96 bg-white p-4 rounded-2xl ">
          <FontAwesomeIcon
            className="text-[#5D67D9] text-6xl mb-3"
            icon={faQuoteLeft}
          />
          <p className="text-[#1E293B] pb-6 font-medium text-">
            “I’ve tried multiple rental services before, but this one stands
            out. The platform is smooth, and the car quality exceeded my
            expectations. Will definitely rent again!”
          </p>
          <p>~ Tanvir Hasan</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerRatings;
