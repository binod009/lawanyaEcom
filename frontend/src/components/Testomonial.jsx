import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Nextcard from "./Nextcard";
import { Avatar } from "antd";
import { FaQuoteLeft } from "react-icons/fa";
import { DataofCard } from "../utils/customData";

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 5000,
  slidesToShow: 3,
  slidesToScroll: 1,
};
const Testomonial = () => {
  return (
    <>
      <div className="flex flex-col justify-around items-center lg:w-full h-[100dvh] bg-gradient-to-r from-[#f3c878] to-[#f37d85] text-center">
        <p className="lg:mt-8 lg:text-6xl text-white font-semibold lg:p-8">
          Testomonial
        </p>
        <Slider
          {...settings}
          style={{
            display: "flex",
            justifyItems: "center",
            alignItems: "center",
            maxWidth: "80rem",
            minHeight: "27rem",
          }}
        >
          {DataofCard.map((item) => (
            <div
              key={item.name}
              className="h-80 flex items-start bg-white lg:shadow-xl rounded-md p-5"
            >
              <div className="h-full w-full flex flex-col items-start justify-evenly">
                <div className="lg:px-2">
                  <FaQuoteLeft color="teal" size={42} />
                </div>
                <div className="text-slate-600 font-normal  text-justify lg:py-2.5 lg:px-2.5">
                  {item.review}
                </div>
                <div className="flex items-center justify-evenly gap-5 p-2.5">
                  <Avatar size={64} src={item.img} />
                  <p className="text-slate-500 font-bold ">{item.name}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Testomonial;
