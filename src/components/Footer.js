import React, { useState } from 'react';
import { TbWorld } from 'react-icons/tb';
import { MdKeyboardArrowUp } from 'react-icons/md';

function Footer() {
  const [footerModal, setFooterModal] = useState(false);

  const footerModalHandler = () => {
    setFooterModal(!footerModal);
  };

  return (
    <div className="bg-[#032e61] flex flex-col lg:flex-row justify-center pt-6 pb-5 space-y-5 lg:space-y-0 lg:space-x-5 lg:pr-12">
      <div className="flex items-center justify-center">
        {footerModal && (
          <div className="absolute lg:w-[686px] lg:h-[295px] rounded-xl shadow-gray-400 shadow-md bg-white -translate-y-[355px] lg:-translate-y-[200px] lg:translate-x-[242px] py-5 flex flex-col lg:flex-row lg:space-x-14 space-y-10 lg:space-y-0 lg:px-10 px-20 text-[#385981] text-[14px]">
            <ul className="worldList lg:space-y-1">
              <li>Americas</li>
              <li>América Latina (Español)</li>
              <li>Brasil (Português)</li>
              <li>Canada (English)</li>
              <li>Canada (Français)</li>
              <li>United States (English)</li>
            </ul>
            <ul className="worldList lg:space-y-1">
              <li>Europe, Middle East, and Africa</li>
              <li>España (Español)</li>
              <li>Deutschland (Deutsch)</li>
              <li>France (Français)</li>
              <li>Italia (Italiano)</li>
              <li>Nederland (Nederlands)</li>
              <li>Sverige (Svenska)</li>
              <li>United States (English)</li>
              <li>All other countries (English)</li>
            </ul>
            <ul className="worldList lg:space-y-1">
              <li>Asia Pacific</li>
              <li>Australia & New Zealand (English)</li>
              <li>India (English)</li>
              <li>日本 (日本語)</li>
              <li>中国 (简体中文)</li>
              <li>台灣 (繁體中文)</li>
              <li>한국 (한국어)</li>
              <li>ประเทศไทย (ไทย)</li>
              <li>All other countries (English)</li>
            </ul>
          </div>
        )}
        <div
          className={`flex items-center space-x-2 border  ${
            footerModal ? 'shadow-xl shadow-black' : ''
          } h-[40px] px-6 rounded-[3px] text-white mt-1 self-center lg:self-start cursor-pointer`}
          onClick={footerModalHandler}
        >
          <TbWorld className="text-2xl" />
          <p className={`${footerModal ? 'font-bold' : ''}`}>WORLDWIDE</p>
          <MdKeyboardArrowUp className="text-xl " />
        </div>
      </div>
      <div className="flex flex-col text-[13px] space-y-2 px-8 lg:px-0 text-white">
        <p>
          © Copyright 2023 Salesforce, Inc.{' '}
          <span className="text-[#01a1e0] underline hover:text-white cursor-pointer">
            All rights reserved.
          </span>{' '}
          Various trademarks held by their respective owners.
        </p>
        <p>
          salesforce UK Limited, village 9, floor 26 Salesforce Tower, 110
          Bishopsgate, London, UK, EC2N 4AY. General Enquiries: +353 14403500 |
          Fax: +353 14403501 | Sales: 00800 7253 3333
        </p>
        <ul className="flex flex-row space-x-4 flex-wrap footerLinks">
          <li>Legal</li>
          <li>Terms of Service</li>
          <li>Privacy</li>
          <li>Responsible Disclosure</li>
          <li>Contact Us</li>
          <li>Trust</li>
          <li>Cookie Preferences</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
