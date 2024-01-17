import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar } from "antd";
import { FaQuoteLeft } from "react-icons/fa";
import { DataofCard } from "../utils/customData";

const settings = {
  className: "variable-width",
  variableWidth: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  autoplay: true,
  arrows: false,
  speed: 2000,
  autoplaySpeed: 4000,

  responsive: [
    {
      breakpoint: 1440,
      settings: {
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const Testomonial = () => {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-between gap-10 lg:w-full lg:h-[100%/2] bg-gradient-to-r from-[#f3c878] to-[#f37d85] text-center xl:h-auto">
        <div className="h-auto">
          <h5 className="p-5 text-4xl lg:mt-8 lg:text-6xl text-white font-semibold lg:p-8">
            Testomonial
          </h5>
        </div>
        <div className=" w-[25rem] md:w-[48rem] lg:w-[64rem] xl:w-[90rem] min-h-[30rem]">
          <Slider {...settings}>
            {DataofCard.map((item) => (
              <div className="mt-5">
                <div className="flex flex-col items-start justify-center p-5 bg-slate-800 xl:p-14 w-[320px] md:w-[320px] md:p-2.5 lg:w-[445px] lg:p-2 xl:w-[418px] xl:overflow-hidden shadow-lg">
                  <div className="p-2">
                    <FaQuoteLeft color="teal" size={42} />
                  </div>
                  <div className="text-slate-600 font-normal text-justify lg:py-2.5 lg:px-2.5">
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
      </div>
    </>
  );
};

export default Testomonial;
{
  /* <div
              key={item.name}
              className="h-80 :w-60 flex items-start bg-white lg:shadow-xl rounded-md p-5"
            >
              <div className="h-full flex flex-col items-start justify-evenly">
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
            </div> */
}
