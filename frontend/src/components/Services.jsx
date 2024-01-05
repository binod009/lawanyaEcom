import React from "react";
import { carddata } from "../utils/customData";
import Carousel from "./Carousel";
const Services = () => {
  return (
    <div className="bg-white min-h-dvh">
      <Carousel />
      <div className="lg:max-w-7xl mx-auto">
        <div className="lg:mx-14 text-center lg:mb-10 space-y-3">
          <p className="lg:text-3xl font-semibold text-slate-700">
            Our CPS program evolves with industries, keeping your
            <span className="text-blue-500 space-x-5"> skills</span> relevant.
          </p>
          <p className="text-slate-700 lg:text-3xl font-semibold">
            Through carefully curated modules and workshops, we provide
          </p>
        </div>

        <div className="grid grid-cols-3 gap-12 lg:mt-20 p-8">
          {carddata &&
            carddata.map((card) => (
              <div className="lg:shadow-lg lg:min-h-[350px] text-center space-y-2">
                <p className="lg:text-2xl font-extrabold text-slate-600 lg:px-8 mt-28 text-start">
                  {card.title}
                </p>
                <p className="text-slate-600 text-thin font-light lg:px-8 text-start leading-relaxed">
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
