import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  infinite: true,
  className: "variable-width",
  variableWidth: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  cssEase: "linear",
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        arrows: false,
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
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

const Carousel = () => {
  return (
    <div className="translate-y-[-4rem] lg:translate-y-[-3rem] lg:max-w-7xl lg:mx-auto">
      <div className="mx-8 max-w-screen bg-white rounded-lg shadow-lg">
        <p className="pt-2 pb-2 text-center text-4xl lg:text-4xl text-slate-800 font-semibold rounded-tr-lg rounded-tl-lg">
          Our Partners
        </p>
        <div className="mt-[5px] flex items-center justify-center w-full">
          <Slider
            {...settings}
            style={{
              display: "block",
              justifyItems: "center",
              alignItems: "center",
              padding: "20px",
              width: "100%",
              height: "140px",
              overflow: "hidden",
            }}
          >
            <div>
              <img
                className="object-cover h-28 w-auto lg:h-[7rem]  lg:w-56"
                src="data:image/png;base64,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"
                alt=""
              />
            </div>
            <div>
              <img
                className="object-cover h-28 w-auto lg:h-[7rem]  lg:w-56"
                src="https://tukuz.com/wp-content/uploads/2019/12/regis-college-logo-vector.png"
                alt=""
              />
            </div>

            <div>
              <img
                className=" object-cover  h-28 w-full lg:h-[7rem] lg:w-56"
                src="data:image/png;base64,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"
                alt=""
              />
            </div>
            <div>
              <img
                className="object-cover h-28 w-full lg:h-[7rem] lg:w-56"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaHBCioA4ezGgoFOVr1F6_Ni4XTcJ5rXxNrg&usqp=CAU"
                alt=""
              />
            </div>
            <div>
              <img
                className="object-cover h-28 w-full lg:h-[7rem] lg:w-56"
                src="https://vectorlogoseek.com/wp-content/uploads/2023/05/lambton-college-vector-logo.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="object-cover h-28 w-full lg:h-28 lg:w-56"
                src="data:image/png;base64,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"
                alt=""
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
