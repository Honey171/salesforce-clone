import React from 'react';
import {
  imgContentOne,
  imgContentTwo,
  imgContentThree,
  imgContentFour,
} from '../assets/imageLinks';

function ContentSection({ mobileNavbar }) {
  return (
    <div
      className={`contentBg flex flex-col items-center mt-20 pb-32 ${
        mobileNavbar ? 'brightness-[80%]' : 'brightness-100'
      }`}
    >
      <p className="md:text-[2.7rem] text-[#032d60] font-bold leading-6 sm:-translate-x-10 md:translate-x-0 xl:-translate-x-[268px] lg:-translate-x-[100px] text-[2rem] mb-10">
        All sorts of content. All to help you grow.
      </p>
      <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-10 lg:space-y-0">
        <div>
          <img
            src={imgContentOne}
            alt=""
            className="xl:w-[624px] xl:h-[336px] lg:w-[456px] lg:h-[247px] rounded-md cursor-pointer"
            loading="lazy"
          />
          <div className="flex flex-col pt-4 pl-4 items-start space-y-3 text-lg">
            <p className="pt-4 text-[#032d60] font-bold hover:text-[#01162F] cursor-pointer">
              What is CRM?
            </p>
            <p>Understand CRM and how it fuels business growth.</p>
            <button className="bg-[#0b5cab] hover:bg-[#094E91] text-white py-2 px-6 rounded-[3px] text-base">
              READ THE ARTICLE
            </button>
          </div>
        </div>
        <div className="flex flex-col space-y-10 text-lg">
          <div className="flex flex-col md:flex-row md:space-x-8">
            <img
              src={imgContentTwo}
              alt=""
              className="xl:w-[296px] xl:h-[160px] lg:w-[211px] lg:h-[113px] md:w-[45vw] rounded-md cursor-pointer"
              loading="lazy"
            />
            <div className="flex flex-col space-y-2 pt-5 md:pt-0">
              <p className="text-sm tracking-wider">RESEARCH</p>
              <p className="text-[#032d60] font-bold hover:text-[#01162F] cursor-pointer">
                State of Sales Report
              </p>
              <p className="xl:max-w-[300px] lg:max-w-[200px] leading-5">
                Research shows nearly 6,000 sales pros are selling in a global
                crisis.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-8">
            <img
              src={imgContentThree}
              alt=""
              className="xl:w-[296px] xl:h-[160px] lg:w-[211px] lg:h-[113px] md:w-[45vw] rounded-md cursor-pointer"
              loading="lazy"
            />
            <div className="flex flex-col space-y-2 pt-5 md:pt-0">
              <p className="text-sm tracking-wider">VIDEO SERIES</p>
              <p className="text-[#032d60] font-bold hover:text-[#01162F] cursor-pointer">
                Navigating Through Change
              </p>
              <p className="xl:max-w-[300px] lg:max-w-[200px] leading-5">
                Small businesses evolve to meet customer needs.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-8">
            <img
              src={imgContentFour}
              alt=""
              className="xl:w-[296px] xl:h-[160px] lg:w-[211px] lg:h-[113px] md:w-[45vw] rounded-md cursor-pointer"
              loading="lazy"
            />
            <div className="flex flex-col space-y-2 pt-5 md:pt-0">
              <p className="text-sm tracking-wider">WEBINAR</p>
              <p className="text-[#032d60] font-bold hover:text-[#01162F] cursor-pointer">
                Lead Management 101
              </p>
              <p className="xl:max-w-[300px] lg:max-w-[200px] leading-5">
                Get expert advice on lead management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentSection;
