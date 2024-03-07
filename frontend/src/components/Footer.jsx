import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-900 h-full mx-auto lg:h-full ">
      <div className="mx-8 flex items-center justify-center ">
        <div className="grid grid-cols-1 pt-16 gap-5 lg:space-x-12  xl:space-x-8 md:grid-cols-2 md:place-items-start md:gap-16 md:pt-16 lg:grid-cols-3 lg:gap-y-0 lg:h-screen lg:place-items-start  xl:grid-cols-4 xl:place-items-stretch h-2/3 xl:h-1/2  xl:mt-[5rem]">
          <div className="lg:col-span-3 xl:col-auto lg:text-start text-white space-y-5 xl:w-[250px] xl:h-[350px] ">
            <div className="flex items-center justify-center gap-5 ml-auto text-xl text-white font-bold">
              <img
                className="object-cover h-16 w-20 xl:h-28 xl:w-28"
                src={"../assets/image/logo.jpg"}
                alt="logo"
              />
              <p className="xl:text-lg">Lawanya International Books</p>
            </div>
            <p className="text-start lg:text-start text-white text-base xl:text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
              expedita animi quis velit quos eligendi asperiores autem fugiat
              magni similique?
            </p>
          </div>

          <div className="lg:w-44 lg:p-5 md:text-center md:min-w-[200px] text-white lg:max-h-72 lg:min-w-[calc(100%/4)] xl:min-w-[calc(100%/4)] lg:space-y-2 ">
            <h3 className="font-bold xl:text-4xl">About</h3>
            <ul className="font-light space-y-2 xl:text-lg">
              <li>Sell online</li>
              <li>Features</li>
              <li>Examples</li>
              <li>Website editors</li>
              <li>Online retail</li>
            </ul>
          </div>

          <div className="lg:w-44 lg:p-5  md:text-center text-white lg:max-h-72 md:min-w-[200px] lg:min-w-[calc(100%/4)] xl:min-w-[calc(100%/4)] lg:space-y-2">
            <h3 className="font-bold xl:text-4xl">Services</h3>
            <ul className="font-light space-y-2 xl:text-lg">
              <li>Events</li>
              <li>News</li>
              <li>Awards</li>
              <li>Testimonials</li>
              <li>Online retail</li>
            </ul>
          </div>

          <div className="lg:w-44 lg:p-5 md:text-center text-white lg:max-h-72 md:min-w-[200px] lg:min-w-[calc(100%/4)] xl:min-w-[calc(100%/4)] lg:space-y-2">
            <h3 className="font-bold xl:text-4xl">Events</h3>
            <ul className="font-light space-y-2 xl:text-lg">
              <li>Contact</li>
              <li>Services</li>
              <li>Team</li>
              <li>Career</li>
              <li>Contacts</li>
            </ul>
          </div>
        </div>
      </div>
   
    </div>
  );
};

export default Footer;
