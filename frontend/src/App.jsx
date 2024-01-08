import "./App.css";

import HeroSection from "./components/HeroSection";

import Services from "./components/Services";
// import Testomonial from "./components/Testomonial";

import Footer from "./components/Footer";
import EventSection from "./components/EventSection";
import Carousel from "./components/Carousel";
function App() {
  return (
    <>
      <HeroSection />
      <EventSection />
      <Services />
      {/* <Testomonial /> */}
      <Footer />
      {/* <EventSection />

       
      

     */}
    </>
  );
}

export default App;
