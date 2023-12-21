import React, { useState } from "react";
import { Drawer } from "antd";
import { AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [isdrawerOpen, setisDrawerOpen] = useState(false);

  const openDrawer = () => {
    setisDrawerOpen(!isdrawerOpen);
  };

  return (
    <>
      <div className="sticky top-0 z-20 bg-slate-300 py-4 lg:py-4 lg:shadow-lg">
        <div className="hidden lg:block">
          <div className="lg:max-w-7xl mx-auto flex justify-end items-center p-2">
            <ul className="flex bg-red-400 w-64 justify-between items-center">
              <li>Home</li>
              <li>Contact</li>
              <li>Features</li>
            </ul>
          </div>
        </div>
        <div className="lg:hidden">
          <AiOutlineMenu size={30} color="black" onClick={openDrawer} />
        </div>
        <Drawer
          width={225}
          onClose={openDrawer}
          title="Basic Drawer"
          placement={"left"}
          closable={false}
          open={isdrawerOpen}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </div>
    </>
  );
};

export default Navbar;
