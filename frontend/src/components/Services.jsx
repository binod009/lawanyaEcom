import React from "react";
import { carddata } from "../utils/customData";
import Carousel from "./Carousel";
const Services = () => {
  return (
    <div className="bg-white min-h-dvh">
      <Carousel />
      <div className="lg:max-w-7xl mx-auto">
        <div className="mx-8 xl:mx-auto lg:mx-14 text-start lg:mb-10 lg:space-y-3">
          <p className="text-2xl leading-normal font-semibold lg:font-extrabold lg:text-3xl text-slate-700">
            Our CPS program evolves with industries, keeping your
            <span className="text-blue-500 space-x-5"> skills</span> relevant.
          </p>
          <p className="text-2xl leading-normal font-semibold text-slate-700 lg:text-3xl">
            Through carefully curated modules and workshops, we provide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-2 place-items-center xl:grid-cols-3 lg:mt-20 xl:gap-12 pb-8">
          {carddata &&
            carddata.map((card) => (
              <div className="w-[22rem] h-[17rem] p-4 mt-8 flex flex-col justify-center items-start lg:justify-center xl:gap-5 xl:h-[350px] shadow-lg space-y-2 xl:p-8">
                <p className="text-start text-lg lg:text-2xl font-extrabold text-slate-600">
                  {card.title}
                </p>
                <p className="text-start text-slate-600 text-thin font-medium leading-7">
                  {card.description}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
