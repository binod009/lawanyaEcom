import React from "react";

const EventsCard = ({ date, time, description, image }) => {
  console.log(image);
  return (
    <div className="md:h-[20rem] w-full lg:w-[18rem] bg-[#fff] md:flex md:flex-col md:items-center md:justify-center rounded-lg shadow-lg hover:shadow-lg transition-shadow ease-in">
      <div className="h-36 w-full">
        <img
          className="h-32 object-cover w-full md:object-cover md:w-full md:h-44"
          src={process.env.REACT_APP_API_URL + image}
          alt="event-pic"
        />
      </div>
      <div className="flex items-center gap-7 rounded-lg mt-8 p-2">
        <p className="text-slate-900 font-light text-sm ">
          <span>Date: </span>
          {date}
        </p>
        <p className="text-slate-900 font-light text-sm ">
          <span>Time:</span> {time}
        </p>
        {/* <div className="border-t-2 border-black w-[10%] ml-[45%]"></div> */}
      </div>

      <p className="m-1.5 text-slate-500 text-[14px] leading-relaxed font-light ml-5 ">
        {description}
      </p>
    </div>
  );
};

export default EventsCard;
