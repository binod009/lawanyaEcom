import React, { useState, useEffect } from "react";
import { Drawer } from "antd";
import { AiOutlineMenu } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { motion, useScroll } from "framer-motion";
const Navbar = () => {
  const [isdrawerOpen, setisDrawerOpen] = useState(false);
  const [scroll, setScroll] = useState(null);
  const openDrawer = () => {
    setisDrawerOpen(!isdrawerOpen);
  };
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  }, []);

  return (
    <>
      <div className="p-2.5 z-40 min-w-full bg-gradient-to-r from-orange-300 to-orange-500 text-white md:p-2 lg:p-4">
        <div className="flex justify-center flex-col items-center gap-2 md:flex-col md:gap-2 md:justify-center md:items-center lg:flex-row lg:max-w-7xl mx-auto lg:justify-between">
          <div className="text-white sm:font-semibold md:font-medium text-xs text-[16px] lg:text-lg lg:font-light">
            Call Us At:+9779817062771
          </div>
          <div className="flex items-center justify-center lg:justify-between gap-3 lg:gap-4">
            <div className="text-center text-white font-semibold text-xs text-[16px] lg:text-md lg:font-light">
              contact@devsbinod.com
            </div>
            <div>
              <FaFacebookSquare size={18} />
            </div>
            <div>
              <FaWhatsapp size={18} />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`z-40 cursor-pointer py-4 lg:py-4 w-full ${
          scroll
            ? "fixed top-0 z-[70] lg:transition-all lg:ease-out lg:duration-100 bg-gradient-to-r from-[#e33131] to-red-300 py-4 lg:py-4"
            : "absolute lg:top-10"
        }`}
      >
        {/* Scroll animation */}
        <motion.div
          className="z-[120] fixed top-[72px] left-0 right-0 h-[2px] bg-purple-500 origin-[0%]"
          style={{ scaleX: scrollYProgress }}
        />
        <div className="lg:hidden z-40 p-1.5">
          <AiOutlineMenu size={30} color="white" onClick={openDrawer} />
        </div>
        <div className="">
          <div className="hidden lg:max-w-7xl mx-auto lg:flex justify-end items-center p-2">
            <ul className="flex lg:gap-8 justify-between items-center text-slate-800 font-semibold">
              <li>Home</li>
              <li>Contact</li>
              <li>Features</li>
              <li>About</li>
            </ul>
          </div>
        </div>

        <Drawer
          style={{
            zIndex: 200,
          }}
          width={225}
          onClose={openDrawer}
          title="Basic Drawer"
          placement={"left"}
          closable={false}
          open={isdrawerOpen}
        >
          <ul className="inline text-start w-64 lg:gap-8 space-y-5 text-slate-500 font-medium">
            <li>Home</li>
            <li>Contact</li>
            <li>Features</li>
            <li>About</li>
          </ul>
        </Drawer>
      </div>
    </>
  );
};

export default Navbar;
