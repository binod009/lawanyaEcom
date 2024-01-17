import React from "react";

const EventsCard = () => {
  return (
    <div className="md:h-[20rem] w-full lg:w-[18rem] bg-[#fff] md:flex md:flex-col md:items-center md:justify-center rounded-lg shadow-lg hover:shadow-lg transition-shadow ease-in">
      <div className="h-36 w-full">
        <img
          className="h-32 object-cover w-full md:object-cover md:w-full md:h-44 lg:p-3 "
          src="https://www.pcma.org/wp-content/uploads/2021/06/CL2021-Singapore.jpg"
          alt="event-pic"
        />
      </div>
      <div className="flex flex-1 flex-col rounded-lg">
        <p className="text-slate-800 font-extrabold ml-5">
          Effective communication
        </p>
        <p className="m-1 text-slate-600 font-bold text-lg ml-5">
          24 december 2024
        </p>
        <time className="text-slate-900 font-normal text-md ml-5">12:00</time>
        {/* <div className="border-t-2 border-black w-[10%] ml-[45%]"></div> */}
        <p className="m-1.5 text-slate-700 text-[14px] text-start leading-relaxed font-medium ml-5 ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
        </p>
      </div>
    </div>
  );
};

export default EventsCard;
