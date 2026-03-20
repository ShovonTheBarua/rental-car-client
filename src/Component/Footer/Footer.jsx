import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineX } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";


const Footer = () => {
  return (
    <div className="py-5 md:py-20 bg-[#E6E6FA] h-200">
      <div className="flex flex-col md:flex-row gap-30 max-w-7xl mx-auto">
        <div className="relative flex justify-center items-end">
          <img
            className="  "
            src="https://i.ibb.co.com/xK11M1NM/rentwheels-carbon-fiber-removebg-preview.png"
            alt=""
          />
          <div className="absolute text-[18px] text-secondary opacity-70 text-center">
            <p>COPY RIGHT 2020</p>
            <p>"Drive Your Dreams Today"</p>
          </div>
        </div>
        <div className="w-full col-span-2 p-3">
          {/* contect,  term condi,    */}
          <div className="grid grid-cols-3">
            <div>
              <h1 className="text-xl font-semibold text-secondary pb-3">
                Contact
              </h1>
              <p>+602-774-4735</p>
              <p>
                South 51st Street,
                <br /> Phoenix
              </p>
              <p>hello@unitedut.com</p>
            </div>
            <div>
              <h1 className="text-xl font-semibold text-secondary pb-3 ">
                Terms &amp; Conditions
              </h1>
              <p>privacy policy</p>
              <p>Cookie policy</p>
            </div>
            <div>
              <h1 className="text-xl font-semibold text-secondary pb-3">
                About Us
              </h1>
              <p>Mission</p>
              <p>Team</p>
              <p>Newsletter</p>
            </div>
          </div>
          <div className=" border-b border-gray-500 my-4 p-4"></div>
          {/* social midea icon */}
          <div className="flex gap-2 justify-end">
            <FaFacebook className="text-3xl" />
            <AiOutlineX className="text-3xl" />
            <AiFillInstagram className="text-3xl" />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
