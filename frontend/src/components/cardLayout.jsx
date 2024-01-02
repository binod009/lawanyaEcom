import React from "react";
import { DataofCard } from "../utils/customData";
import { FaQuoteLeft } from "react-icons/fa";
import { Avatar } from "antd";

const cardLayout = () => {
  return (
    <div className="w-full grid grid-cols-3 gap-10 lg:min-h-72 p-8">
      <div className="flex items-start justify-center  bg-blue-500 lg:shadow-lg ">
        {DataofCard &&
          DataofCard.map((item, ind) => (
            <>
              <div
                key={ind + 1}
                className="w-full gap-5 flex flex-col items-center justify-center p-5"
              >
                <div>
                  <FaQuoteLeft color="#fac651" size={35} />
                </div>
                <div className="text-white font-normal text-center">
                  {item.review}
                </div>
                <div className="flex flex-col items-center justify-evenly p-2.5">
                  <Avatar size={64} src={item.img} />
                  <p className="text-white font-bold ">{item.name}</p>
                </div>
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default cardLayout;
