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
                src="https://scontent-del1-1.xx.fbcdn.net/v/t39.30808-6/419748786_885454223586077_7183233656963376526_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=3635dc&_nc_ohc=HKzfoCaSmt8AX8REaRZ&_nc_ht=scontent-del1-1.xx&oh=00_AfD1RTWXJZoyS_hZBoiq8kskgHmVws1_gvsDGuewYje38A&oe=65AD823B"
              />
            </SwiperSlide>
            <SwiperSlide className="h-[100%] w-[100%]">
              <img
                loading="lazy"
                className="h-[100vh] w-full object-cover"
                src="https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/416364172_875936211204545_8877722835327806798_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=3635dc&_nc_ohc=onHT3eWiVVEAX8PpYqX&_nc_ht=scontent.fktm3-1.fna&oh=00_AfBEUqxlvrH4QlfaX17mQrwtgbm0kGaFPKoOzRjxXWQyZQ&oe=65A1740B"
              />
            </SwiperSlide>
            <SwiperSlide className="h-[100%] w-[100%]">
              <img
                loading="lazy"
                className="h-[100vh] w-full object-cover"
                src="https://scontent-del1-2.xx.fbcdn.net/v/t39.30808-6/415968990_879682874163212_7358555269530752866_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=xbodZng2d70AX-bMppo&_nc_ht=scontent-del1-2.xx&oh=00_AfDvB3Yt1cR91p0BncmP6SFdXmrjdWX4y7l5oyvU8Rsd6A&oe=65ACA037"
              />
            </SwiperSlide>
            <SwiperSlide className="h-[100%] w-[100%]">
              <img
                className="h-[100vh] w-full object-cover"
                src="https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/414436531_871258605005639_7659450849540358200_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_ohc=7JAKqG3Ym10AX9lxz1e&_nc_ht=scontent.fktm3-1.fna&oh=00_AfDH9VYoaseBkCq7sGzvxC5EvFvBiTX3paWmrDfHdkqxvg&oe=65ACDB91"
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
