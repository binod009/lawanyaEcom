import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
const Card = ({ des, imgpath, bgcolor }) => {
  return (
    <>
      <div className="grid">
        <div className="grid grid-cols-2 text-white text-center text-normal lg:min-h-72">
          <div
            className={`{w-auto p-14 flex text-start justify-center items-center text-white font-semibold text-lg}`}
          >
            <div>
              <FaQuoteLeft size={35} /> Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Fugiat, distinctio.dipisicing elit. Fugiat,
              distinctio.
            </div>
          </div>
          <div className="flex flex-col justify-items-center items-center">
            <img
              className="h-[75%] w-full object-cover rounded-tr-3xl"
              src="https://media.istockphoto.com/id/1216152397/photo/portrait-of-female-owner-of-gift-store-standing-in-front-of-shelves-with-cosmetics-and-candles.jpg?s=612x612&w=0&k=20&c=23L_GhirOBiExv00QPw555TiTsSrZqhFii2F89CHXVE="
              alt="customer-pic"
            />
            <div className="w-full flex-1 flex items-center justify-center bg-white rounded-bl-3xl">
              <p className="font-extrabold text-amber-800">Samantha Beckh</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
