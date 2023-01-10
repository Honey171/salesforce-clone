import React from 'react';
import { imgNewOne, imgNewTwo, imgNewThree } from '../assets/imageLinks';

function NewSection() {
  return (
    <div className="flex flex-col items-center justify-center xl:mt-32 mt-44 text-[#032d60] font-bold text-lg leading-5">
      <p className="mb-11 text-[2rem] sm:text-[2.7rem]">
        What's new at salesforce?
      </p>
      <div className="flex flex-col lg:space-x-9 lg:flex-row space-y-10 lg:space-y-0">
        <div className="flex lg:space-x-9 sm:space-x-24 space-x-2">
          <img
            src={imgNewOne}
            alt=""
            className="hidden sm:inline lg:w-[75px] lg:h-[75px] xl:w-[110px] xl:h-[110px] cursor-pointer"
            loading="lazy"
          />
          <div className="xl:max-w-[250px] lg:max-w-[180px] max-w-[570px]">
            <p className="text-sm pb-2 text-[#444449]">SALESFORCE GENIE DEMO</p>
            <p className="hover:text-[#01162F] cursor-pointer">
              Introducing Salesforce Genie, the first real-time platform that
              helps you save money, save time, and grow revenue.
            </p>
          </div>
        </div>
        <div className="flex lg:space-x-9 sm:space-x-24 space-x-2">
          <img
            src={imgNewTwo}
            alt=""
            className="hidden sm:inline lg:w-[75px] lg:h-[75px] xl:w-[110px] xl:h-[110px] cursor-pointer"
            loading="lazy"
          />
          <div className="xl:max-w-[250px] lg:max-w-[180px] max-w-[570px]">
            <p className="text-sm pb-2 text-[#444449]">RESEARCH AND REPORT</p>
            <p className="hover:text-[#01162F] cursor-pointer">
              Discover the trends shaping the future of customer engagement in
              the State of the Connected Customer report.
            </p>
          </div>
        </div>
        <div className="flex lg:space-x-9 sm:space-x-24 space-x-2">
          <img
            src={imgNewThree}
            alt=""
            className="hidden sm:inline lg:w-[75px] lg:h-[75px] xl:w-[110px] xl:h-[110px] cursor-pointer"
            loading="lazy"
          />
          <div className="xl:max-w-[250px] lg:max-w-[180px] max-w-[570px]">
            <p className="text-sm pb-2 text-[#444449]">E-BOOK</p>
            <p className="hover:text-[#01162F] cursor-pointer">
              Explore how customer journeys influence engagement — plus tips for
              success — in our e-book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewSection;
