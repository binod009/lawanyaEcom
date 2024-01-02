import React, { useState, useEffect } from "react";
import { Drawer } from "antd";
import { AiOutlineMenu } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const Navbar = () => {
  const [isdrawerOpen, setisDrawerOpen] = useState(false);
  const [scroll, setScroll] = useState(null);
  const openDrawer = () => {
    setisDrawerOpen(!isdrawerOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  }, []);

  return (
    <>
      <div className="z-30 w-full bg-gradient-to-r from-orange-300 to-orange-500 text-white py-2.5">
        <div className="lg:max-w-7xl mx-auto flex items-center justify-between ">
          <div className="text-white font-sans font-normal text-sm">
            call us At:+9779817062771
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="text-center text-white font-normal font-sans text-sm">
              contact@devsbinod.com
            </div>
            <div>
              <FaFacebookSquare />
            </div>
            <div>
              <FaWhatsapp />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`z-40 hover:bg-[#e10816]  cursor-pointer lg:py-4 w-full ${
          scroll
            ? "fixed top-0 z-[70] transition-all ease-in-out duration-500 bg-gradient-to-r from-[#e33131] to-red-300 py-4 lg:py-4"
            : "absolute top-10"
        }`}
      >
        <div className="hidden lg:block">
          <div className="lg:max-w-7xl mx-auto flex justify-end items-center p-2">
            <ul className="flex w-64 lg:gap-8 justify-between items-center text-white font-medium">
              <li>Home</li>
              <li>Contact</li>
              <li>Features</li>
              <li>About</li>
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
