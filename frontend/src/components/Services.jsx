import React, { useEffect } from "react";
import { carddata } from "../utils/customData";
import Carousel from "./Carousel";
import { useDispatch, useSelector } from "react-redux";
import { fetchprogramDataAsync } from "../slice/program";
const Services = () => {
  const { programdata } = useSelector((state) => state.program);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchprogramDataAsync());
  }, []);

  return (
    <div className="bg-white min-h-dvh">
      <Carousel />
      <div className="lg:max-w-7xl mx-auto">
        <div className="mx-8 xl:mx-auto lg:mx-14 text-start md:text-center lg:text-center lg:mb-10 lg:mt-[50px] lg:space-y-3">
          <p className="text-2xl leading-normal font-semibold lg:font-extrabold lg:text-3xl text-slate-700">
            Our CPS program evolves with industries, keeping your
            <span className="text-blue-500 space-x-5"> skills</span> relevant.
          </p>
          <p className="text-2xl leading-normal font-semibold text-slate-700 lg:text-3xl ">
            Through carefully curated modules and workshops, we provide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-2 place-items-center xl:grid-cols-3 lg:mt-20 xl:gap-12 pb-8">
          {programdata &&
            programdata.map((program) => (
              <div className="w-[22rem] md:w-[20rem] h-[17rem] lg:w-[26rem] lg:h-[18rem] lg:gap-4 p-4 mt-8 flex flex-col justify-center items-start lg:justify-center xl:gap-5 xl:h-[350px] shadow-lg space-y-2 xl:p-8">
                <p className="text-start text-lg lg:text-2xl font-extrabold text-slate-600">
                  {program.servicename}
                </p>
                <p className="text-start text-slate-600 text-thin font-medium leading-7">
                  {program.description}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
