import React from 'react';
import { imgDiscover } from '../assets/imageLinks';

function DiscoverSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center xl:space-x-[17rem] mt-10 pl-2 space-y-8 md:space-y-0">
      <div className="space-y-1">
        <p className="text-[#032d60] md:text-[2.7rem] text-3xl leading-10 md:max-w-[550px] font-bold">
          Discover apps and expertise to extend Salesforce.
        </p>
        <p className="xl:max-w-[470px] lg:max-w-[340px] text-lg pb-3">
          Browse our AppExchange marketplace, with thousands of customised apps
          and specialised consulting partners to help any sized business craft a
          perfectly tailored Customer 360 solution.
        </p>
        <button className="bg-[#0b5cab] hover:bg-[#094E91] text-white py-2 px-6 rounded-sm">
          VISIT APPEXCHANGE
        </button>
      </div>
      <img
        src={imgDiscover}
        alt=""
        className="xl:w-[432px] xl:h-[438px] lg:w-[371px] lg:h-[375px] md:w-[330px] md:h-[328px] pr-10 md:pr-0"
        loading="lazy"
      />
    </div>
  );
}

export default DiscoverSection;
