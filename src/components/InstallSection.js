import React from 'react';
import { imgInstallMobile, imgInstallDesktop } from '../assets/imageLinks';

function InstallSection() {
  return (
    <div className="flex flex-col items-center mt-20 space-y-8">
      <div className="space-y-5">
        <p className="xl:pr-[26rem] lg:pr-20 md:pr-24 md:text-[2.7rem] text-3xl leading-8 md:leading-10 font-bold text-[#032d60]">
          Try Salesforce for free.
          <br />
          No credit card required, no software to install.
        </p>
        <button className="bg-[#278806] hover:bg-[#217405] text-white py-2 px-6 rounded-sm">
          START MY FREE TRIAL
        </button>
      </div>
      <img
        src={imgInstallDesktop}
        alt=""
        className="w-[941px] h-[524px] xl:w-auto xl:h-auto hidden lg:block"
        loading="lazy"
      />
      <img
        src={imgInstallMobile}
        alt=""
        className="block lg:hidden"
        loading="lazy"
      />
    </div>
  );
}

export default InstallSection;
