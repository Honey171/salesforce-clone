import React from 'react';
import {
  imgProductOne,
  imgProductTwo,
  imgProductThree,
  imgProductFour,
} from '../assets/imageLinks';
import { TbChevronRight } from 'react-icons/tb';

function ProductSection({ mobileNavbar }) {
  return (
    <>
      <div
        className={`mt-12 xl:mt-24 flex flex-col items-center justify-center ${
          mobileNavbar ? 'delay' : 'brightness-100'
        }`}
      >
        <p className="md:text-[2.7rem] text-[#032d60] font-bold mb-10 text-center text-[2rem]">
          Learn what Salesforce products can do for you
        </p>
        <div className="flex space-y-10 md:space-y-0 md:space-x-10 lg:space-x-14 flex-col md:flex-row">
          <div className="flex flex-col items-center text-center space-y-3 cursor-pointer">
            <img
              src={imgProductOne}
              alt=""
              className="xl:w-[256px] xl:h-[239px] md:w-[171px] md:h-[160px]"
              loading="lazy"
            />
            <p className="pt-9 text-lg text-[#032d60] font-bold">
              Small Business
            </p>
            <p className="xl:max-w-[220px] md:max-w-[180px]">
              Sell smarter and provide support faster in a single app.
            </p>
            <div className="flex md:flex-col space-x-9 md:space-x-0 space-y-5 pt-1 items-center md:space-y-4">
              <button className="bg-[#0b5cab] hover:bg-[#094E91] text-white py-2 px-6 rounded-sm">
                WATCH DEMOS
              </button>
              <div className="cursor-pointer flex items-center text-[#0b5cbd] hover:text-[#032d60]">
                <p className="font-bold ">LEARN MORE</p>
                <TbChevronRight className="text-gray-500" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center text-center space-y-3 cursor-pointer">
            <img
              src={imgProductTwo}
              alt=""
              className="xl:w-[256px] xl:h-[239px] md:w-[171px] md:h-[160px]"
              loading="lazy"
            />
            <p className="pt-9 text-lg text-[#032d60] font-bold">Sales</p>
            <p className="xl:max-w-[220px] md:max-w-[180px]">
              Close more deals and speed up growth with the #1 CRM.
            </p>
            <div className="flex md:flex-col space-x-9 md:space-x-0 space-y-5 pt-1 items-center md:space-y-4">
              <button className="bg-[#0b5cab] hover:bg-[#094E91] text-white py-2 px-6 rounded-sm">
                WATCH DEMOS
              </button>
              <div className="cursor-pointer flex items-center text-[#0b5cbd] hover:text-[#032d60]">
                <p className="font-bold ">LEARN MORE</p>
                <TbChevronRight className="text-gray-500" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center text-center space-y-3 cursor-pointer">
            <img
              src={imgProductThree}
              alt=""
              className="xl:w-[256px] xl:h-[239px] md:w-[171px] md:h-[160px]"
              loading="lazy"
            />
            <p className="pt-9 text-lg text-[#032d60] font-bold">Service</p>
            <p className="xl:max-w-[220px] md:max-w-[180px]">
              Make customers happy faster and build loyalty with Service Cloud.
            </p>
            <div className="flex md:flex-col space-x-9 md:space-x-0 space-y-5 pt-1 items-center md:space-y-4">
              <button className="bg-[#0b5cab] hover:bg-[#094E91] text-white py-2 px-6 rounded-sm">
                WATCH DEMOS
              </button>
              <div className="cursor-pointer flex items-center text-[#0b5cbd] hover:text-[#032d60]">
                <p className="font-bold ">LEARN MORE</p>
                <TbChevronRight className="text-gray-500" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center text-center space-y-3 cursor-pointer">
            <img
              src={imgProductFour}
              alt=""
              className="xl:w-[256px] xl:h-[239px] md:w-[171px] md:h-[160px]"
              loading="lazy"
            />
            <p className="pt-9 text-lg text-[#032d60] font-bold">
              See all products.
            </p>
            <p className="xl:max-w-[240px] md:max-w-[155px]">
              Dig into the full range of Customer 360 offerings.
            </p>
            <div className="flex md:flex-col space-x-9 md:space-x-0 space-y-5 pt-1 items-center md:space-y-4">
              <button className="bg-[#0b5cab] hover:bg-[#094E91] text-white py-2 px-6 rounded-sm">
                WATCH DEMOS
              </button>
              <div className="cursor-pointer flex items-center text-[#0b5cbd] hover:text-[#032d60]">
                <p className="font-bold ">LEARN MORE</p>
                <TbChevronRight className="text-gray-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col mt-14 space-y-5">
        <p className="md:text-[1.7rem] text-xl font-bold text-[#032d60]">
          Find a perfectly tailored solution for any industry.
        </p>
        <button className="text-[#0b5cab] py-2 px-6 border border-[#032d60] rounded-md hover:bg-[#DCDCDC]">
          EXPLORE NOW
        </button>
      </div>
    </>
  );
}

export default ProductSection;
