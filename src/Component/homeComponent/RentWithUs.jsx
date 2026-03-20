import React from "react";

const RentWithUs = () => {
  return (
    <div className="max-w-7xl mx-auto pt-10 px-3">
      <h1 className="text-4xl mb-8 font-bold text-white">
        WHY RENT WITH US?
      </h1>

      <div className=" grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4">
        <div className="text-[#E6E6FA] bg-secondary  px-2 md:px-4 py-8 rounded-xl">
          <h1 className="text-2xl font-medium mb-4">Easy & Fast Booking</h1>
          <p className="text-gray-400">
            Book your desired vehicle in just a few clicks. Our streamlined
            process ensures a smooth and hassle-free experience from search to
            checkout.
          </p>
        </div>
        <div className="text-[#E6E6FA] bg-secondary  p-5 rounded-xl">
          <h1 className="text-2xl font-medium mb-3">Competitive Pricing</h1>
          <p className="text-gray-400">
            Enjoy transparent pricing with no hidden fees. We offer some of the
            most competitive rental rates to fit every budget.
          </p>
        </div>
        <div className="text-[#E6E6FA] bg-secondary  p-5 rounded-xl">
          <h1 className="text-2xl font-medium mb-3">Verified Car Owners</h1>
          <p className="text-gray-400">
            All vehicles are listed by trusted and verified providers, ensuring
            safety, reliability, and top-quality service every time you rent.
          </p>
        </div>
        <div className="text-[#E6E6FA] bg-secondary  p-5 rounded-xl">
          <h1 className="text-2xl font-medium mb-3"> 24/7 Customer Care</h1>
          <p className="text-gray-400">
            Our dedicated support team is available around the clock to assist
            you with bookings, issues, or any inquiries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RentWithUs;
