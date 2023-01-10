import React from 'react';
import { logo, fb, yt, lin, tw } from '../assets/imageLinks';

function LinksSection() {
  return (
    <div className="hidden lg:flex justify-center xl:space-x-56  space-x-24 pt-7 pb-5 space-y-5">
      <div className="self-start space-y-7">
        <img
          src={logo}
          alt=""
          loading="lazy"
        />
        <div className="flex space-x-5">
          <img
            src={fb}
            alt=""
            className="w-[30px] h-[30px]"
            loading="lazy"
          />
          <img
            src={tw}
            alt=""
            className="w-[30px] h-[30px]"
            loading="lazy"
          />
          <img
            src={lin}
            alt=""
            className="w-[30px] h-[30px]"
            loading="lazy"
          />
          <img
            src={yt}
            alt=""
            className="w-[30px] h-[30px]"
            loading="lazy"
          />
        </div>
      </div>
      <ul className="space-y-3 text-[13px] linkList">
        <li className="text-base pb-2">New to Salesforce?</li>
        <li>What is Salesforce?</li>
        <li>What is CRM?</li>
        <li>What is Cloud Computing?</li>
        <li>CRM Solutions</li>
        <li>Customer Success Stories</li>
        <li>Product pricing</li>
        <li>Contact Us</li>
      </ul>
      <ul className="space-y-3 text-[13px] linkList">
        <li className="text-base pb-2">Popular Links</li>
        <li>Small Business CRM</li>
        <li>Sales Force Automation</li>
        <li>Customer Service Solutions</li>
        <li>Digital Marketing Solutions</li>
        <li>Industry Solutions</li>
        <li>Salesforce Events</li>
        <li>New Release Features</li>
        <li>Manage Subscription</li>
      </ul>
      <ul className="space-y-3 text-[13px] linkList">
        <li className="text-base pb-2">About Salesforce</li>
        <li>Our Story</li>
        <li>Careers</li>
        <li>Press</li>
        <div className="flex items-center">
          <span className="text-[#4593d1] hover:text-[#8B42A4] cursor-pointer">
            Security and Performance
          </span>
        </div>
        <li>Legal</li>
        <li>Privacy for Salesforce Products</li>
        <li>Salesforce EU Blog</li>
        <li>Salesforce EU Blog Signup</li>
      </ul>
    </div>
  );
}

export default LinksSection;
