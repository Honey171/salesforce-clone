import React from 'react';

function UpdateSection({ mobileNavbar }) {
  return (
    <div
      className={`updateBg flex flex-col items-center justify-center h-[360px] space-y-8 mt-9 ${
        mobileNavbar ? 'brightness-[80%]' : 'brightness-100'
      }`}
    >
      <p className="lg:max-w-3xl text-center md:text-[2.7rem] text-3xl leading-8 md:leading-10 font-bold text-[#032d60]">
        Get timely updates and fresh ideas delivered to your inbox.
      </p>
      <button className="bg-[#0b5cab] hover:bg-[#094E91] text-white py-2 px-6 rounded-sm">
        SIGN UP NOW
      </button>
    </div>
  );
}

export default UpdateSection;
