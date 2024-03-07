import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { fetchdataAsync } from "../slice/carousel";
const HeroSection = () => {
  const { carouseldata } = useSelector((state) => state.carousel);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchdataAsync());
  }, []);
  return (
    <>
      <Navbar />
      <div className="h-[100vh]">
        <div className="z-[-10] top-0 left-0 w-full h-full backdrop-opacity-10 bg-black/50">
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
            {carouseldata ? (
              carouseldata.map((item) => (
                <SwiperSlide className="h-[100%] w-[100%]">
                  <img
                    loading="lazy"
                    className="h-[100vh] w-full object-cover"
                    src={process.env.REACT_APP_API_URL + item.image}
                    alt="event_image"
                  />
                </SwiperSlide>
              ))
            ) : (
              <></>
            )}
          </Swiper>
        </div>

        {/* <div style={containerStyle}> */}
        <div className="absolute top-0 left-0 z-10 right-0 h-[100vh] w-full">
          <div className="lg:max-w-7xl mx-auto h-screen  flex flex-col items-start">
            <div className="mx-8 mt-44 max-w-4xl space-y-2">
              <h1 className="text-white font-extrabold text-4xl lg:text-7xl p-2 ">
                <span className="text-blue-400">Empowering</span>
                <p className="mt-4">Schools to Excel</p>
              </h1>
              <h2 className="text-white p-2 font-normal lg:font-extrabold text-2xl lg:text-xl">
                Your Trusted Partner in Educational Excellence
              </h2>
            </div>
            <div className="mx-8 flex items-center justify-items-center bg-orange-500 px-14 py-2 rounded-full mt-3 cursor-pointer hover:bg-orange-600 transition-all ease-in-out">
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
