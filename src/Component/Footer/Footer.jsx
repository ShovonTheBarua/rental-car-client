import React from "react";

const Footer = () => {
  return (
    <div className="py-20 bg-[#E6E6FA]">
      <div className="flex gap-30 max-w-7xl mx-auto">
        <div className=" border relative flex justify-center items-end">
          <img
            className="  "
            src="https://i.ibb.co.com/xK11M1NM/rentwheels-carbon-fiber-removebg-preview.png"
            alt=""
          />
          <div className="absolute text-xl text-secondary opacity-70 text-center">
            <p>COPY RIGHT 2020</p>
            <p>"Drive Your Dreams Today"</p>
          </div>
        </div>
        <div className=" border w-full col-span-2 p-3">
          {/* contect,  term condi,  */}
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
              <h1 className="text-xl font-semibold text-secondary pb-3">
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
          <div className="border-b my-4"></div>
          {/* social midea icon */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
