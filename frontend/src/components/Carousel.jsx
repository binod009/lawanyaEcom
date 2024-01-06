import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 5000,
  slidesToShow: 4,
  slidesToScroll: 1,
};

const Carousel = () => {
  return (
    <div className="translate-y-[-3rem]">
      <div className="max-w-screen-sm lg:max-w-7xl mx-auto bg-white rounded-lg shadow-lg">
        <p className="pt-2 pb-2 text-center text-4xl text-slate-800 font-semibold bg-slate-400 rounded-tr-lg rounded-tl-lg">
          Our Partners
        </p>
        <div className="flex flex-col items-center justify-around lg:flex lg:flex-col h-[25vh] lg:p-5">
          <Slider
            {...settings}
            style={{
              display: "flex",
              justifyItems: "center",
              alignItems: "center",
              maxWidth: "80rem",
            }}
          >
            <div className="flex items-center justify-center h-20">
              <a href="https://www.facebook.com">
                <img
                  className="object-cover h-full w-auto"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmbaHFL02fBV31Xa-mUNZ3htUh4KP-p_CZQw&usqp=CAU"
                  alt="partnership-pic"
                />
              </a>
            </div>
            <div className="flex items-center justify-center h-20">
              <a href="https://www.facebook.com">
                <img
                  className="object-cover h-full w-auto"
                  src="https://www.eduopinions.com/wp-content/uploads/2018/07/BabsonCollege-logo.jpg"
                  alt="partnership-pic"
                />
              </a>
            </div>
            <div className="flex items-center justify-center h-20 ">
              <a href="https://www.facebook.com">
                <img
                  className="object-cover h-full w-auto"
                  src="https://nirvanacollege.edu.np/wp-content/uploads/2022/01/Nirvana-school-college-logo-1.png"
                  alt="partnership-pic"
                />
              </a>
            </div>

            <div className="flex items-center justify-center h-20 ">
              <a href="https://www.facebook.com">
                <img
                  className="object-cover h-full w-auto"
                  src="https://png.pngtree.com/template/20190226/ourmid/pngtree-company-name-logo-latter-a-image_64869.jpg"
                  alt="partnership-pic"
                />
              </a>
            </div>

            <div className="flex items-center justify-center h-20">
              <a href="https://www.facebook.com">
                <img
                  className="object-cover h-full w-auto"
                  src="https://tukuz.com/wp-content/uploads/2019/12/regis-college-logo-vector.png"
                  alt="partnership-pic"
                />
              </a>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
