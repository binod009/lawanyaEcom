import "./App.css";

import HeroSection from "./components/HeroSection";
import Carousel from "./components/Carousel";
import Services from "./components/Services";
import Testomonial from "./components/Testomonial";
import { motion, useScroll } from "framer-motion";
import Footer from "./components/Footer";
function App() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <div>
        <motion.div
          className="z-[9999] fixed top-[72px] left-0 right-0 h-[2px] bg-orange-500 origin-[0%]"
          style={{ scaleX: scrollYProgress }}
        />
        <HeroSection />
        <Carousel />
        <Services />
        <Testomonial />
        <Footer />
      </div>
    </>
  );
}

export default App;
