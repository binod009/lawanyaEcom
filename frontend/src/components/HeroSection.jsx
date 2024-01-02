import React from "react";
import Navbar from "./Navbar";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
const HeroSection = () => {
  // const containerStyle = {
  //   backgroundImage: 'url("/assets/hero.jpg")',
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  //   backgroundAttachment: "fixed",
  // };

  return (
    <>
      <Navbar />
      <div className="relative h-[100vh]">
        <Swiper
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          effect="fade"
          centeredSlides={true}
          navigation={true}
          modules={[Autoplay, Navigation, EffectFade]}
        >
          <SwiperSlide className="h-[100%] w-[100%]">
            <img
              loading="lazy"
              className="h-[100vh] w-full object-cover"
              src="http://tinyurl.com/2p894m2z"
              alt="lady"
            />
          </SwiperSlide>

          <SwiperSlide className="h-[100%] w-[100%]">
            <img
              loading="lazy"
              className="h-[100vh] w-full object-cover"
              src="http://tinyurl.com/7ycxt6bn"
              alt="event-pic"
            />
          </SwiperSlide>
          <SwiperSlide className="h-[100%] w-[100%]">
            <img
              loading="lazy"
              className="h-[100vh] w-full object-cover"
              src="http://tinyurl.com/bdfb2j8w"
              alt="event-pic"
            />
          </SwiperSlide>
          <SwiperSlide className="h-[100%] w-[100%]">
            <img
              loading="lazy"
              className="h-[100vh] w-full object-cover"
              src=" http://tinyurl.com/m6sycbhm"
              alt="lady"
            />
          </SwiperSlide>
        </Swiper>
        {/* <div style={containerStyle}> */}
        <div className="absolute top-0 left-0 z-20 right-0 h-[100vh] w-full backdrop-opacity-10 bg-black/50 ">
          <div className="lg:max-w-7xl mx-auto h-screen  flex lg:flex-col items-start">
            <div className="mt-44 max-w-4xl space-y-5">
              <h1 className="text-white font-extrabold lg:text-7xl">
                <span className="text-blue-400">Empowering </span>Schools to
                Excel
              </h1>
              <h2 className="text-white font-extrabold lg:text-xl">
                Your Trusted Partner in Educational Excellence
              </h2>
            </div>
            <div className="flex items-center justify-items-center bg-orange-500 px-14 py-2 rounded-full mt-3 cursor-pointer hover:bg-orange-600 transition-all ease-in-out">
              <p className="text-white font-medium">Events</p>
            </div>
          </div>
        </div>

        {/* </div> */}
      </div>
    </>
  );
};

export default HeroSection;
