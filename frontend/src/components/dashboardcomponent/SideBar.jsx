import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const item = [
  { id: "1", name: "Manage Carousel", link: "/admin/carousel" },
  { id: "2", name: "Manage Events", link: "/admin/event" },
  { id: "3", name: "Manage Partners", link: "/admin/partner" },
  { id: "4", name: "Manage Services", link: "/admin/service" },
  { id: "5", name: "Manage Testomonials", link: "/admin/testomonial" },
];

const SideBar = () => {
  return (
    <>
      <div className="h-screen w-64 text-justify text-white bg-[#f1dabf] shadow-4xl">
        <div className="flex items-center gap-3 shadow-lg m-1.5 mb-0 rounded-md p-4 transition-all ease">
          <div>
            <AiFillAppstore size={24} color="brown" />
          </div>
          <span className="text-amber-500">LawanyaInternational</span>
        </div>

        <ul className="flex flex-col gap-2 mt-5">
          {item.map((item) => (
            <NavLink
              key={item.id}
              to={item.link}
              className="p-5 rounded-sm hover:bg-amber-600 cursor-pointer "
            >
              {item.name}
            </NavLink>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SideBar;

//   <Collapse
// bordered={false}
// collapsible="header"
// size="middle"
// expandIconPosition="end"
// items={items}
// defaultActiveKey={["1"]}
// onChange={onChange}
// />

// const items = [
//   {
//     key: "1",
//     label: "Manage Carousel",
//     children: <p>{text}</p>,
//   },
//   {
//     key: "2",
//     label: "Manage Events",
//     children: <p>{text}</p>,
//   },
//   {
//     key: "3",
//     label: "Manage Partners",
//     children: <p>{text}</p>,
//   },
//   {
//     key: "4",
//     label: "Manage Services",
//     children: <p>{text}</p>,
//   },
//   {
//     key: "5",
//     label: "Manage Testomonials",
//     children: <p>{text}</p>,
//   },
// ];
