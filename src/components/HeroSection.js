import React from 'react';
import { wheel } from '../assets/imageLinks';

function HeroSection({ mobileNavbar }) {
  return (
    <div
      className={`translate-y-24 w-full h-full flex flex-col lg:flex-row items-center justify-center px-8 xl:px-16 lg:space-x-24 xl:space-x-28 heroBg ${
        mobileNavbar ? 'brightness-[80%]' : 'brightness-100'
      }`}
    >
      <div className="space-y-5">
        <p className="text-5xl sm:text-5xl md:text-6xl text-[#032d60] font-semibold md:max-w-4xl lg:max-w-[400px] xl:max-w-[555px] hover:text-[#01162F] cursor-pointer">
          Grow your revenue by up to 29% with Salesforce.
        </p>
        <p className="text-[23px] lg:max-w-[400px] xl:max-w-[560px] opacity-60">
          See how the magic of Salesforce Customer 360 can help you make the
          most of every customer moment.
        </p>
        <div className="flex flex-col items-start space-y-5 sm:flex-row sm:space-y-0 sm:space-x-9">
          <button className="bg-[#278806] hover:bg-[#217405] text-white py-2 px-6 rounded-sm">
            START MY FREE TRIAL
          </button>
          <button className="bg-[#0b5cab] hover:bg-[#094E91] text-white py-2 px-6 rounded-sm">
            WATCH DEMOS
          </button>
        </div>
      </div>
      <img
        src={wheel}
        alt=""
        className="sm:w-[700px] sm:h-[700px] md:w-[770px] md:h-[770px] lg:w-[450px] xl:w-[620px] lg:h-[450px] xl:h-[620px] mb-10 mt-10"
        loading="lazy"
      />
    </div>
  );
}

export default HeroSection;
