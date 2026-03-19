import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  return (
    <div>
      <Swiper
        className="max-w-7xl max-h-150 "
        navigation
        pagination={{ clickable: true }}
        autoplay={true}
        modules={[Navigation, Pagination, Autoplay]}
      >
        <SwiperSlide className="relative">
          <div className="absolute p-5 md:p-15">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-secondary ">
              Rent Car
              <br />
              <span className="text-primary/30">For Vacation</span>
            </h1>
          </div>
          <img
            className="w-7xl max-h-150  object-cover"
            src="https://i.ibb.co.com/hxZHsTnJ/tabea-schimpf-O7-Wzqme-Yoqc-unsplash.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="absolute p-10 md:p-20 lg:p-30">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#E6E6FA] ">
              Experience the
              <br />
              <span className="">Luxury</span>
            </h1>
          </div>
          <img
            className="w-7xl max-h-150  object-cover"
            src="https://i.ibb.co.com/Myj0n88h/luxury-car-speeds-by-modern-building-dusk-generative-ai.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="absolute bottom-0 p-10 md:p-20 lg:p-30">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#E6E6FA] ">
              Driving
              <br />
              <span className="">With Comfort</span>
            </h1>
          </div>
          <img
            className="w-7xl max-h-150  object-cover"
            src="https://i.ibb.co.com/jkMr4KRj/portafolio-fotografico-automotriz-y-HIVd-LT0-R7-M-unsplash.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
