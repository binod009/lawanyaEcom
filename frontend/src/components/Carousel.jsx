import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
const Carousel = () => {
  return (
    <div className="translate-y-[-3rem]">
      <div className="lg:max-w-7xl mx-auto bg-white rounded-lg shadow-lg">
        <div className=" lg:flex items-center lg:flex-col h-[35vh] lg:p-5">
          <div>
            <h3 className="lg:text-5xl text-slate-700 font-semibold lg:p-5">
              Our Partners
            </h3>
          </div>
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            style={{
              maxWidth: "80rem",
              margin: "15px",
              padding: "25px",
            }}
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={5}
            speed={2000}
            controller={true}
            loop={true}
          >
            <SwiperSlide>
              <a href="https://www.facebook.com">
                <img
                  src="https://logos-world.net/wp-content/uploads/2021/11/Udemy-Logo-2017-2021.png"
                  height={120}
                  width={120}
                  alt="carousel"
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="data:image/png;base64,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"
                height={120}
                width={120}
                alt="carousel"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://logos-world.net/wp-content/uploads/2021/11/Udemy-Logo-2017-2021.png"
                height={120}
                width={120}
                alt="carousel"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://logos-world.net/wp-content/uploads/2021/11/Udemy-Logo-2017-2021.png"
                height={120}
                width={120}
                alt="carousel"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://logos-world.net/wp-content/uploads/2021/11/Udemy-Logo-2017-2021.png"
                height={120}
                width={120}
                alt="carousel"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://logos-world.net/wp-content/uploads/2021/11/Udemy-Logo-2017-2021.png"
                height={120}
                width={120}
                alt="carousel"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="data:image/png;base64,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"
                height={120}
                width={120}
                alt="carousel"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
