import React from "react";

const EventsCard = () => {
  return (
    <div className="md:h-[20rem] w-full lg:w-[18rem] bg-[#fff] md:flex md:flex-col md:items-center md:justify-center rounded-3xl hover:shadow-lg transition-shadow ease-in">
      <div className="h-44 w-full">
        <img
          className="md:object-cover md:w-full md:h-44 rounded-tl-3xl rounded-tr-3xl p-3 lg:p-3 lg:rounded-3xl"
          src="https://www.pcma.org/wp-content/uploads/2021/06/CL2021-Singapore.jpg"
          alt="event-pic"
        />
        .
      </div>

      <div className="flex flex-1 flex-col rounded-3xl">
        <p className="text-slate-800 font-extrabold ml-5">
          Effective communication
        </p>
        <p className="text-slate-600 font-bold text-lg ml-5">
          24 december 2024
        </p>
        <time className="text-slate-900 font-normal text-md ml-5">12:00</time>
        <div className="border-t-2 border-black w-[10%] ml-[45%]"></div>
        <p className="text-slate-700 text-[14px] text-start leading-relaxed font-medium ml-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
        </p>
      </div>
    </div>
  );
};

export default EventsCard;
