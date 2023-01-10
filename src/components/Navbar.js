import React, { useState } from 'react';
import {
  logo,
  miniLogo,
  salesforceHamburger,
  salesforceClose,
} from '../assets/imageLinks';
import { AiOutlineSearch } from 'react-icons/ai';
import { TbWorld } from 'react-icons/tb';
import { BsFillPersonFill, BsFillTriangleFill } from 'react-icons/bs';
import { useRecoilState } from 'recoil';
import {
  productState,
  industriesState,
  learningState,
  supportState,
  companyState,
  anyModalOpenedState,
  salesforceState,
  loginState,
  contactState,
  regionState,
} from '../util/atoms';

function Navbar({ setMobileNavbar, mobileNavbar }) {
  const [worldModal, setWorldModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [anyModalOpened, setAnyModalOpened] =
    useRecoilState(anyModalOpenedState);
  const [productModal, setProductModal] = useRecoilState(productState);
  const [industriesModal, setIndustriesModal] = useRecoilState(industriesState);
  const [learningModal, setLearningModal] = useRecoilState(learningState);
  const [supportModal, setSupportModal] = useRecoilState(supportState);
  const [companyModal, setCompanyModal] = useRecoilState(companyState);
  const [salesforceModal, setSalesforceModal] = useRecoilState(salesforceState);
  const [loginSectionModal, setLoginSectionModal] = useRecoilState(loginState);
  const [contactModal, setContactModal] = useRecoilState(contactState);
  const [regionModal, setRegionModal] = useRecoilState(regionState);

  const worldModalHandler = () => {
    setWorldModal(true);
    setLoginModal(false);
  };

  const loginModalHandler = () => {
    setLoginModal(true);
    setWorldModal(false);
  };

  const hamburgerHandler = () => {
    setMobileNavbar(true);
    setAnyModalOpened(false);
    setProductModal(false);
    setLearningModal(false);
    setIndustriesModal(false);
    setSupportModal(false);
    setCompanyModal(false);
    setSalesforceModal(false);
    setLoginSectionModal(false);
    setRegionModal(false);
    setContactModal(false);
  };

  const closeHandler = () => {
    setMobileNavbar(false);
    setAnyModalOpened(false);
    setProductModal(false);
    setLearningModal(false);
    setIndustriesModal(false);
    setSupportModal(false);
    setCompanyModal(false);
    setSalesforceModal(false);
    setLoginSectionModal(false);
    setRegionModal(false);
    setContactModal(false);
  };

  return (
    <>
      <div className="fixed flex items-center justify-between py-3 xl:py-6 px-9 z-50 text-[#032d60] font-semibold text-[17px] bg-white w-screen">
        <ul className="items-center space-x-10 hidden xl:flex">
          <img
            src={logo}
            alt="logo"
            className="w-[3.8rem]"
            loading="lazy"
          />
          <li className="hover:text-[#0176D9] cursor-pointer">Products</li>
          <li className="hover:text-[#0176D9] cursor-pointer">Industries</li>
          <li className="hover:text-[#0176D9] cursor-pointer">Learning</li>
          <li className="hover:text-[#0176D9] cursor-pointer">Support</li>
          <li className="hover:text-[#0176D9] cursor-pointer">Company</li>
          <li className="hover:text-[#0176D9] cursor-pointer">Salesforce+</li>
        </ul>
        <div className="flex items-center space-x-5 xl:hidden">
          {!mobileNavbar ? (
            <img
              src={salesforceHamburger}
              alt=""
              className="w-4 cursor-pointer"
              onClick={hamburgerHandler}
            />
          ) : (
            <img
              src={salesforceClose}
              alt=""
              className="w-4 cursor-pointer"
              onClick={closeHandler}
            />
          )}
          <img
            src={miniLogo}
            alt="logo"
            className="w-10"
          />
        </div>
        <ul className="flex items-center space-x-5">
          <li>
            <AiOutlineSearch className="text-xl hover:text-[#0176D9] cursor-pointer" />
          </li>
          <li className="flex-col items-center font-normal hidden xl:flex">
            <p className="underline text-[13.5px] cursor-pointer hover:text-[#4299DE]">
              Contact Us
            </p>
            <p>00800 7253 3333</p>
          </li>
          <li className="hidden xl:inline">
            <div
              onMouseEnter={worldModalHandler}
              onMouseLeave={() => setWorldModal(false)}
              className="bg-transparent w-8 h-8 rounded-full flex items-center justify-center text-xl hover:text-[#0176D9] cursor-pointer -translate-y-1"
            >
              <TbWorld />
            </div>
            {worldModal && (
              <div
                className="bg-blue-500"
                onMouseEnter={() => setWorldModal(true)}
                onMouseLeave={() => setWorldModal(false)}
              >
                <div className="absolute -translate-x-2  -translate-y-2 bg-transparent w-12 flex items-center justify-center">
                  <BsFillTriangleFill className="text-2xl text-white" />
                </div>
                <div className="absolute top-[4.5rem]  right-20 w-[686px] h-[295px] rounded-xl shadow-gray-400  shadow-m bg-white">
                  <p className="text-xl pt-5 pl-5">Change Region</p>
                  <div className="pl-5 pt-5 flex space-x-14 text-[#385981] text-[14px]">
                    <ul className="worldList">
                      <li>Americas</li>
                      <li>América Latina (Español)</li>
                      <li>Brasil (Português)</li>
                      <li>Canada (English)</li>
                      <li>Canada (Français)</li>
                      <li>United States (English)</li>
                    </ul>
                    <ul className="worldList">
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
                    <ul className="worldList">
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
                </div>
              </div>
            )}
          </li>
          <li>
            <div
              className="flex space-x-1 hover:text-[#0176D9] cursor-pointer bg-transparent rounded-full px-2 py-1"
              onMouseEnter={loginModalHandler}
              onMouseLeave={() => setLoginModal(false)}
            >
              <BsFillPersonFill className="text-xl" />
              <p className="hidden xl:inline">Login</p>
            </div>
            {loginModal && (
              <div
                onMouseEnter={() => setLoginModal(true)}
                onMouseLeave={() => setLoginModal(false)}
              >
                <div className="absolute translate-x-1 -translate-y-1 bg-transparent w-20 flex items-center justify-center">
                  <BsFillTriangleFill className="text-2xl text-white" />
                </div>
                <div className="absolute top-[4.5rem] right-24 w-[290px] h-[359px] rounded-xl shadow-gray-400 shadow-md hidden xl:inline bg-white">
                  <p className="text-xl pt-5 pl-5 font-bold">Login</p>
                  <div className="pl-5 pt-5 flex flex-col space-y-10 text-[#385981] text-[13.5px]">
                    <div className="space-y-3">
                      <p className="text-[#4B4B4B]">Products</p>
                      <span className="flex underline space-x-2 cursor-pointer hover:text-[#4299DE]">
                        <p>Salesforce</p>
                        <img
                          src={miniLogo}
                          alt=""
                        />
                      </span>
                      <p className="underline cursor-pointer hover:text-[#4299DE]">
                        Marketing cloud
                      </p>
                    </div>
                    <div className="space-y-3">
                      <p className="text-[#4B4B4B]">Trailblazer.me</p>
                      <p className="underline cursor-pointer hover:text-[#4299DE]">
                        Trailblazer.me
                      </p>
                      <p className="text-[#4B4B4B]">
                        Access your personal profile, community groups,
                        on-demand learning, events, support, and more.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </li>
          <li>
            <button className="bg-[#2E844A] hover:bg-[#1C3326] text-white rounded-md py-1 px-2 xl:py-2 xl:px-7 font-bold">
              Try for free
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
