import React from "react";

const EventsCard = () => {
  return (
    <div className="h-[20rem] w-[18rem] bg-[#ffffff] flex flex-col items-center justify-center rounded-3xl hover:shadow-lg transition-shadow ease-in">
      <img
        className="object-cover h-40 rounded-3xl p-1"
        src="https://www.pcma.org/wp-content/uploads/2021/06/CL2021-Singapore.jpg"
        alt="event-pic"
      />

      <div className="w-full flex flex-col ml-8">
        <p className="text-slate-800 font-extrabold">Effective communication</p>
        <p className="text-slate-600 font-bold text-lg">24 december 2024</p>
        <p className="text-slate-700 text-[14px] text-start leading-relaxed font-medium">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
          doloribus nemo blanditiis dolorum assumenda consequuntur quam quos
          commodi nisi illo.
        </p>
      </div>
    </div>
  );
};

export default EventsCard;
