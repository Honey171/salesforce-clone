import React from 'react';
import {
  imgSkillsOne,
  imgSkillsTwo,
  imgSkillsThree,
} from '../assets/imageLinks';

function SkillsSection() {
  return (
    <div className="flex flex-col items-center mt-28">
      <p className="md:max-w-6xl lg:max-w-5xl xl:pl-0 lg:pr-7 xl:pr-[22rem] xl:max-w-7xl md:text-[2.7rem] text-[#032d60] font-bold mb-10 text-[1.8rem] leading-10">
        Learn new skills from anywhere, free on Trailhead.
      </p>
      <div className="flex md:flex-row flex-col md:space-x-7 space-y-20 md:space-y-0">
        <div className="cursor-pointer">
          <img
            src={imgSkillsOne}
            alt=""
            className="xl:w-[406px] xl:h-[216px] md:w-[294px] md:h-[156px] w-[100vw] rounded-md"
            loading="lazy"
          />
          <p className="pt-7 pl-8 md:pl-4 text-lg font-bold text-[#032d60] md:max-w-[250px] lg:max-w-[240px] xl:max-w-sm leading-5">
            Learn CRM fundamentals for Lightning Experience.
          </p>
        </div>
        <div className="cursor-pointer">
          <img
            src={imgSkillsTwo}
            alt=""
            className="xl:w-[406px] xl:h-[216px] md:w-[294px] md:h-[156px] w-[100vw] rounded-md"
            loading="lazy"
          />
          <p className="pt-7 pl-8 md:pl-4 text-lg font-bold text-[#032d60] md:max-w-[250px] lg:max-w-[240px] xl:max-w-sm leading-5">
            Learn how to sell with as few clicks as possible.
          </p>
        </div>
        <div className="cursor-pointer">
          <img
            src={imgSkillsThree}
            alt=""
            className="xl:w-[406px] xl:h-[216px] md:w-[294px] md:h-[156px] w-[100vw] rounded-md"
            loading="lazy"
          />
          <p className="pt-7 pl-8 md:pl-4 text-lg font-bold text-[#032d60] md:max-w-[250px] lg:max-w-[240px] xl:max-w-sm leading-5">
            Get started with Salesforce CRM and explore Lightning Experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;
