import React, { useState, useEffect } from "react";
import { Drawer } from "antd";
import { RiMenu2Line } from "react-icons/ri";
import { FaFacebook, FaFacebookSquare } from "react-icons/fa";
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
      <div className="py-1 z-40 min-w-full bg-gradient-to-r from-orange-300 to-orange-500 text-white md:p-2 lg:p-4">
        <div className="flex justify-center flex-col items-center gap-1.5 md:flex-col md:gap-2 md:justify-center md:items-center lg:flex-row lg:max-w-7xl mx-auto lg:justify-between">
          <div className="lg:ml-8 lg:mr-12 text-white text-base font-medium md:font-medium  text-[16px] lg:text-lg lg:font-light">
            Call Us At:+9779817062771
          </div>
          <div className="flex items-center justify-center lg:justify-between gap-3 lg:gap-4">
            <div className="text-center text-white font-medium text-base text-[16px] lg:text-md lg:font-light">
              contact@devsbinod.com
            </div>
            <a href="https://www.facebook.com/lawanyaintl/" className="z-40">
              <FaFacebookSquare size={18} />
            </a>

            <div>
              <FaWhatsapp size={18} />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`z-40 cursor-pointer lg:py-5 w-full ${
          scroll
            ? "fixed top-0 z-[70] lg:transition-all lg:ease-out lg:duration-100 bg-gradient-to-r from-[#e33131] to-red-300  py-2 lg:py-4"
            : "absolute lg:top-10"
        }`}
      >
        {/* Scroll animation */}
        <motion.div
          className="z-[120] fixed top-[55px] lg:top-[78px] xl:top-[78px] left-0 right-0 h-[2px] bg-purple-500 origin-[0%]"
          style={{ scaleX: scrollYProgress }}
        />
        <div className="lg:hidden z-40 p-1.5">
          <RiMenu2Line size={28} color="orange" onClick={openDrawer} />
        </div>

        <div className=" hidden w-screen lg:mr-8 lg:flex justify-end items-center p-2">
          <ul className="flex lg:gap-8 justify-between lg:mr-[50px] items-center text-white font-semibold">
            <li>Home</li>
            <li>Contact</li>
            <li>Features</li>
            <li>About</li>
          </ul>
        </div>

        <Drawer
          style={{
            zIndex: 200,
          }}
          width={225}
          onClose={openDrawer}
          title="Menu"
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
