import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { TbChevronRight } from 'react-icons/tb';
import { TbWorld } from 'react-icons/tb';
import { MdPhone } from 'react-icons/md';
import Products from './mobileNavbarSections/Products';
import Industries from './mobileNavbarSections/Industries';
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
import Learning from './mobileNavbarSections/Learning';
import Support from './mobileNavbarSections/Support';
import Company from './mobileNavbarSections/Company';
import Salesforce from './mobileNavbarSections/Salesforce';
import Login from './mobileNavbarSections/Login';
import Contact from './mobileNavbarSections/Contact';
import ChangeRegion from './mobileNavbarSections/ChangeRegion';

function MobileNavbar({ mobileNavbar }) {
  const [anyModalOpened, setAnyModalOpened] =
    useRecoilState(anyModalOpenedState);
  const [productModal, setProductModal] = useRecoilState(productState);
  const [industriesModal, setIndustriesModal] = useRecoilState(industriesState);
  const [learningModal, setLearningModal] = useRecoilState(learningState);
  const [supportModal, setSupportModal] = useRecoilState(supportState);
  const [companyModal, setCompanyModal] = useRecoilState(companyState);
  const [salesforceModal, setSalesforceModal] = useRecoilState(salesforceState);
  const [loginModal, setLoginModal] = useRecoilState(loginState);
  const [contactModal, setContactModal] = useRecoilState(contactState);
  const [regionModal, setRegionModal] = useRecoilState(regionState);

  const productModalHandler = (e) => {
    setProductModal(true);
    setAnyModalOpened(true);
    setLearningModal(false);
    setIndustriesModal(false);
    setSupportModal(false);
    setCompanyModal(false);
    setSalesforceModal(false);
    setLoginModal(false);
    setContactModal(false);
    setRegionModal(false);
  };
  const industriesModalHandler = (e) => {
    setIndustriesModal(true);
    setAnyModalOpened(true);
    setLearningModal(false);
    setProductModal(false);
    setSupportModal(false);
    setCompanyModal(false);
    setSalesforceModal(false);
    setLoginModal(false);
    setContactModal(false);
    setRegionModal(false);
  };
  const learningModalHandler = (e) => {
    setLearningModal(true);
    setAnyModalOpened(true);
    setIndustriesModal(false);
    setProductModal(false);
    setSupportModal(false);
    setCompanyModal(false);
    setSalesforceModal(false);
    setLoginModal(false);
    setContactModal(false);
    setRegionModal(false);
  };
  const supportModalHandler = (e) => {
    setSupportModal(true);
    setAnyModalOpened(true);
    setLearningModal(false);
    setIndustriesModal(false);
    setProductModal(false);

    setCompanyModal(false);
    setSalesforceModal(false);
    setLoginModal(false);
    setContactModal(false);
    setRegionModal(false);
  };
  const companyModalHandler = (e) => {
    setCompanyModal(true);
    setAnyModalOpened(true);
    setLearningModal(false);
    setIndustriesModal(false);
    setProductModal(false);
    setSupportModal(false);
    setSalesforceModal(false);
    setLoginModal(false);
    setContactModal(false);
    setRegionModal(false);
  };
  const salesforceModalHandler = (e) => {
    setSalesforceModal(true);
    setAnyModalOpened(true);
    setLearningModal(false);
    setIndustriesModal(false);
    setProductModal(false);

    setSupportModal(false);
    setCompanyModal(false);
    setLoginModal(false);
    setContactModal(false);
    setRegionModal(false);
  };
  const loginModalHandler = (e) => {
    setLoginModal(true);
    setAnyModalOpened(true);
    setLearningModal(false);
    setIndustriesModal(false);
    setProductModal(false);

    setSupportModal(false);
    setCompanyModal(false);
    setSalesforceModal(false);
    setContactModal(false);
    setRegionModal(false);
  };
  const contactModalHandler = (e) => {
    setContactModal(true);
    setAnyModalOpened(true);
    setLearningModal(false);
    setIndustriesModal(false);
    setProductModal(false);

    setSupportModal(false);
    setCompanyModal(false);
    setSalesforceModal(false);
    setLoginModal(false);
    setRegionModal(false);
  };
  const regionModalHandler = (e) => {
    setRegionModal(true);
    setAnyModalOpened(true);
    setLoginModal(false);
    setLearningModal(false);
    setIndustriesModal(false);
    setProductModal(false);
    setSupportModal(false);
    setCompanyModal(false);
    setSalesforceModal(false);
    setContactModal(false);
  };

  return (
    <div
      className={`fixed top-0 w-full md:w-[49%] bottom-0 z-40 pl-8 pt-[4rem] flex-col items-stretch overflow-y-auto bg-white  ${
        mobileNavbar ? 'flex' : 'hidden'
      }`}
    >
      {!anyModalOpened && (
        <ul className="space-y-6 text-[#032d60] text-[1.8rem] leading-9 font-bold">
          <li
            className="flex justify-between items-center hover:text-[#014486] cursor-pointer"
            onClick={productModalHandler}
          >
            Products <TbChevronRight className="mr-7 text-2xl text-[#4B4B4B]" />
          </li>
          <li
            className="flex justify-between items-center hover:text-[#014486] cursor-pointer"
            onClick={industriesModalHandler}
          >
            Industries{' '}
            <TbChevronRight className="mr-7 text-2xl text-[#4B4B4B]" />
          </li>
          <li
            className="flex justify-between items-center hover:text-[#014486] cursor-pointer"
            onClick={learningModalHandler}
          >
            Learning <TbChevronRight className="mr-7 text-2xl text-[#4B4B4B]" />
          </li>
          <li
            className="flex justify-between items-center hover:text-[#014486] cursor-pointer"
            onClick={supportModalHandler}
          >
            Support <TbChevronRight className="mr-7 text-2xl text-[#4B4B4B]" />
          </li>
          <li
            className="flex justify-between items-center hover:text-[#014486] cursor-pointer"
            onClick={companyModalHandler}
          >
            Company <TbChevronRight className="mr-7 text-2xl text-[#4B4B4B]" />
          </li>
          <li
            className="flex justify-between items-center hover:text-[#014486] cursor-pointer"
            onClick={salesforceModalHandler}
          >
            Salesforce+{' '}
            <TbChevronRight className="mr-7 text-2xl text-[#4B4B4B]" />
          </li>
        </ul>
      )}
      {!anyModalOpened && (
        <ul className="space-y-4 text-[#032d60] text-[1.8rem] leading-9 font-bold flex flex-col pt-16">
          <li
            className="flex justify-between items-center hover:text-[#014486] cursor-pointer"
            onClick={loginModalHandler}
          >
            <span className="flex items-center space-x-3">
              <BsFillPersonFill className="text-xl" />
              <p className="text-xl">Login</p>
            </span>
            <TbChevronRight className="mr-7 text-2xl text-[#4B4B4B]" />
          </li>
          <li
            className="flex justify-between items-center hover:text-[#014486] cursor-pointer"
            onClick={contactModalHandler}
          >
            <span className="flex items-center space-x-3">
              <MdPhone className="text-xl" />
              <p className="text-xl">Contact</p>
            </span>
            <TbChevronRight className="mr-7 text-2xl text-[#4B4B4B]" />
          </li>
          <li
            className="flex justify-between items-center hover:text-[#014486] cursor-pointer"
            onClick={regionModalHandler}
          >
            <span className="flex items-center space-x-3">
              <TbWorld className="text-xl" />
              <p className="text-xl">Change Region</p>
            </span>
            <TbChevronRight className="mr-7 text-2xl text-[#4B4B4B]" />
          </li>
        </ul>
      )}
      {productModal && <Products />}
      {industriesModal && <Industries />}
      {learningModal && <Learning />}
      {supportModal && <Support />}
      {companyModal && <Company />}
      {salesforceModal && <Salesforce />}
      {loginModal && <Login />}
      {contactModal && <Contact />}
      {regionModal && <ChangeRegion />}
    </div>
  );
}

export default MobileNavbar;
