import React from "react";

const Footer = () => {
  return (
    <div className="bg-black h-full w-full mx-auto">
      <div className="mx-8 flex lg:flex-col max-w-7xl h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 lg:grid-cols-3 lg:h-screen lg:place-items-center xl:grid-cols-4 pt-16 xl:pt-[8rem] xl:gap-12 h-2/3">
          <div className="lg:col-span-3 text-white lg:h-52 space-y-5">
            <div className="flex items-center gap-5 ml-auto text-xl text-white font-bold">
              <img
                className="object-cover h-16 w-20"
                src="https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/329651997_882705219666501_2015514526253202395_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=iyrES3bR0FIAX8OORVJ&_nc_ht=scontent.fktm3-1.fna&oh=00_AfA1eLa-LKM237UmYjOPhEI6iYSRGmKWzWFlfNpd481spA&oe=6597F88C"
                alt="logo"
              />
              <p>Lawanya International Books</p>
            </div>
            <p className="text-start  text-white text-base">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
              expedita animi quis velit quos eligendi asperiores autem fugiat
              magni similique?
            </p>
          </div>
          <div className="mt-5 xl:ml-20 text-white lg:max-h-72 lg:min-w-[16.6%] lg:space-y-2">
            <h3 className="font-bold">About</h3>
            <ul className="font-light space-y-2">
              <li>Sell online</li>
              <li>Features</li>
              <li>Examples</li>
              <li>Website editors</li>
              <li>Online retail</li>
            </ul>
          </div>
          <div className="mt-5 xl:ml-20 text-white lg:max-h-72 lg:min-h-8-w-[16.6%] lg:space-y-2">
            <h3 className="font-bold">Services</h3>
            <ul className="font-light space-y-2">
              <li>Events</li>
              <li>News</li>
              <li>Awards</li>
              <li>Testimonials</li>
              <li>Online retail</li>
            </ul>
          </div>
          <div className="mt-5 xl:ml-20 text-white lg:max-h-72 lg:min-w-[16.6%] lg:space-y-2">
            <h3 className="font-bold">Events</h3>
            <ul className="font-light space-y-2">
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
