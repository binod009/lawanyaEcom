import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchpartnerDataAsync } from "../slice/partner";

const settings = {
  infinite: true,
  className: "slick variable-width",
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
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
};

const Carousel = () => {
  const { partnerdata } = useSelector((state) => state.partner);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchpartnerDataAsync());
  }, []);

  return (
    <div className="translate-y-[-3rem] lg:translate-y-[-3rem] lg:max-w-7xl lg:mx-auto">
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
              overflow: "hidden",
            }}
          >
            {partnerdata ? (
              partnerdata.map((item) => {
                return (
                  <div>
                    <img
                      className="object-cover h-[35px] w-[65px] lg:h-[7rem] lg:w-56"
                      src={process.env.REACT_APP_API_URL + item.image}
                      alt=""
                    />
                  </div>
                );
              })
            ) : (
              <div>
                <img
                  className="object-cover h-[35px]  w-[60px] lg:h-[7rem]  lg:w-56"
                  src="https://tukuz.com/wp-content/uploads/2019/12/regis-college-logo-vector.png"
                  alt=""
                />
              </div>
            )}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
