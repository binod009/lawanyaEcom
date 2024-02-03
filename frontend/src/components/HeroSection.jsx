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
            <SwiperSlide className="h-[100%] w-[100%]">
              <img
                loading="lazy"
                className="h-[100vh] w-full object-cover"
                src="https://cdn.pixabay.com/photo/2020/01/22/09/39/teacher-4784916_1280.jpg"
                alt="event_image"
              />
            </SwiperSlide>
            <SwiperSlide className="h-[100%] w-[100%]">
              <img
                loading="lazy"
                className="h-[100vh] w-full object-cover"
                src="https://cdn.pixabay.com/photo/2020/01/22/09/40/teacher-4784917_1280.jpg"
                alt="event_image"
              />
            </SwiperSlide>
            <SwiperSlide className="h-[100%] w-[100%]">
              <img
                loading="lazy"
                className="h-[100vh] w-full object-cover"
                src="https://scontent-del1-2.xx.fbcdn.net/v/t39.30808-6/415968990_879682874163212_7358555269530752866_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=xbodZng2d70AX-bMppo&_nc_ht=scontent-del1-2.xx&oh=00_AfDvB3Yt1cR91p0BncmP6SFdXmrjdWX4y7l5oyvU8Rsd6A&oe=65ACA037"
                alt="event_image"
              />
            </SwiperSlide>
            <SwiperSlide className="h-[100%] w-[100%]">
              <img
                className="h-[100vh] w-full object-cover"
                src="https://cdn.pixabay.com/photo/2018/03/25/10/02/never-stop-learning-3258944_1280.jpg"
                alt="event_image"
              />
            </SwiperSlide>
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
