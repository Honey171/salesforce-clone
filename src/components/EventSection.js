import React from 'react';
import { imgEventOne, imgEventTwo, imgEventThree } from '../assets/imageLinks';

function EventSection() {
  return (
    <div className="flex flex-col items-center mt-10">
      <p className="md:max-w-5xl pl-4 lg:max-w-5xl lg:pl-9 xl:pl-0 xl:pr-20 xl:max-w-7xl md:text-[2.7rem] text-[#032d60] font-bold mb-10 text-[1.8rem] leading-10">
        Salesforce virtual events and demos. Coming to a device near you.
      </p>
      <div className="flex md:flex-row flex-col md:space-x-7 space-y-10 md:space-y-0">
        <div className="cursor-pointer">
          <img
            src={imgEventOne}
            alt=""
            className="xl:w-[406px] xl:h-[216px] md:w-[294px] md:h-[156px] w-[100vw] rounded-md"
            loading="lazy"
          />
          <div className="pt-7 flex flex-col pl-8 md:pl-4 space-y-1">
            <p className="tracking-wider text-sm ">VIRTUAL EVENTS</p>
            <p className="text-lg font-bold text-[#032d60]  md:max-w-[170px] lg:max-w-[240px] xl:max-w-sm leading-5">
              Find passion, learning, and expertise — without the walls.
            </p>
          </div>
        </div>
        <div className="cursor-pointer">
          <img
            src={imgEventTwo}
            alt=""
            className="xl:w-[406px] xl:h-[216px] md:w-[294px] md:h-[156px] w-[100vw] rounded-md"
            loading="lazy"
          />
          <div className="pt-7 flex flex-col pl-8 md:pl-4 space-y-1">
            <p className="tracking-wider text-sm">SALES</p>
            <p className="text-lg font-bold text-[#032d60] md:max-w-[170px] lg:max-w-[240px] xl:max-w-sm leading-5">
              Sell faster and smarter with the world’s #1 sales platform.
            </p>
          </div>
        </div>
        <div className="cursor-pointer">
          <img
            src={imgEventThree}
            alt=""
            className="xl:w-[406px] xl:h-[216px] md:w-[294px] md:h-[156px] w-[100vw] rounded-md"
            loading="lazy"
          />
          <div className="pt-7 flex flex-col pl-8 md:pl-4 space-y-1">
            <p className="tracking-wider text-sm">FOR DEVELOPERS</p>
            <p className="text-lg font-bold text-[#032d60] md:max-w-[170px]  lg:max-w-[240px] xl:max-w-sm leading-5">
              Get free, hands-on instruction to up your Salesforce development
              skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventSection;
