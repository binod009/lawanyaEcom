import { Avatar } from "antd";
import React from "react";
import { GoHome } from "react-icons/go";

const DashBoardHeader = () => {
  return (
    <>
      <div className=" bg-[#f1dabf] flex items-center gap-2 justify-between w-full p-2.5">
        <div className="flex items-center gap-2 p-1.5">
          <GoHome size={24} />
          {"/ dashboard"}
        </div>

        <Avatar
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbIBZJFE-5i1W0wuCAqpWAf4uD2a8M2gew2T2jY6TnJ5COo6_GBIOWk3uRbxqR8BPJb0E&usqp=CAU"
          size={{
            xl: 45,
          }}
          style={{
            verticalAlign: "middle",
          }}
        ></Avatar>
      </div>
    </>
  );
};

export default DashBoardHeader;
