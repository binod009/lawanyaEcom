import React, { useEffect } from "react";
import { Avatar, Collapse } from "antd";
import { AiFillAppstore } from "react-icons/ai";
import { GoHome } from "react-icons/go";
import CarouselForm from "./admincomponents/CarouselForm";
import { Navigate, useNavigate } from "react-router-dom";
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const items = [
  {
    key: "1",
    label: "Manage Carousel",
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: "Manage Events",
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: "Manage Partners",
    children: <p>{text}</p>,
  },
  {
    key: "4",
    label: "Manage Services",
    children: <p>{text}</p>,
  },
  {
    key: "5",
    label: "Manage Testomonials",
    children: <p>{text}</p>,
  },
];

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("access_Token");
    // if (!token) navigate("/login");
  }, []);

  const onChange = (key) => {
    console.log(key);
  };
  return (
    <>
      <div className="w-full h-screen font-bold flex bg-[#f5f5f5]">
        <div className="w-64 rounded-lg m-1.5 text-white h-auto bg-[#696cff] shadow-4xl">
          <div className="flex items-center gap-5 shadow-lg m-1.5 rounded-md p-4">
            <div>
              <AiFillAppstore size={24} />
            </div>
            LawanyaInternational
          </div>
          <Collapse
            bordered={false}
            collapsible="header"
            size="middle"
            expandIconPosition="end"
            items={items}
            defaultActiveKey={["1"]}
            onChange={onChange}
          />
        </div>

        <div className="flex-1 p-2.5">
          <div className="flex items-center gap-2 justify-between w-auto p-1.5">
            <div className="flex items-center gap-2 flex-initial">
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
          <CarouselForm />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
