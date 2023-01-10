import React from 'react';
import {
  industriesOne,
  industriesTwo,
  industriesThree,
  industriesFour,
  industriesFive,
  industriesSix,
  industriesSeven,
  industriesEight,
  industriesNine,
  industriesTen,
  industriesEleven,
  industriesTwelve,
  industriesThirteen,
  expand,
} from '../../assets/mobileNavbarImageLinks';
import { TbChevronLeft } from 'react-icons/tb';
import { useRecoilState } from 'recoil';
import { industriesState, anyModalOpenedState } from '../../util/atoms';

function Products() {
  const [industriesModal, setIndustriesModal] = useRecoilState(industriesState);
  const [anyModalOpened, setAnyModalOpened] =
    useRecoilState(anyModalOpenedState);

  return (
    <>
      <div className="pt-2 text-[#032d60] font-bold">
        <p
          className="flex items-center text-xl cursor-pointer -translate-x-1"
          onClick={() => {
            setIndustriesModal(false);
            setAnyModalOpened(false);
          }}
        >
          <TbChevronLeft /> Back
        </p>
        <p className="text-3xl mt-5">Industries</p>
        <ul className="space-y-8 text-xl mt-5 ml-1 productList h-full">
          <li className="flex space-x-5 items-center">
            <img
              src={industriesOne}
              alt=""
              loading="lazy"
              className="w-5 h-5"
            />
            <p>Automotive</p>
            <img
              src={expand}
              alt=""
              className="-translate-x-3"
            />
          </li>
          <li className="flex items-center space-x-5">
            <img
              src={industriesTwo}
              alt=""
              loading="lazy"
              className="w-5 h-5"
            />
            <p>Communications</p>
          </li>
          <li className="flex items-center space-x-5">
            <img
              src={industriesThree}
              alt=""
              loading="lazy"
              className="w-5 h-5"
            />
            <p>Consumer Goods</p>
          </li>
          <li className="flex items-center space-x-5">
            <img
              src={industriesFour}
              alt=""
              loading="lazy"
              className="w-5 h-5"
            />
            <p>Education</p>
            <img
              src={expand}
              alt=""
              className="-translate-x-3"
            />
          </li>
          <li className="flex items-center space-x-5">
            <img
              src={industriesFive}
              alt=""
              loading="lazy"
              className="w-5 h-5"
            />
            <p>Energy & Utilities</p>
            <img
              src={expand}
              alt=""
              className="-translate-x-3"
            />
          </li>
          <li className="flex items-center space-x-5">
            <img
              src={industriesSix}
              alt=""
              loading="lazy"
              className="w-5 h-5"
            />
            <p>Financial Services</p>
          </li>
          <li className="flex items-center space-x-5">
            <img
              src={industriesSeven}
              alt=""
              loading="lazy"
              className="w-5 h-5"
            />
            <p>Healthcare & Life Sciences</p>
          </li>
          <li className="flex items-center space-x-5">
            <img
              src={industriesEight}
              alt=""
              loading="lazy"
              className="w-5 h-5"
            />
            <p>Manufacturing</p>
          </li>
          <li className="flex items-center space-x-5">
            <img
              src={industriesNine}
              alt=""
              loading="lazy"
              className="w-5 h-5"
            />
            <p>Media</p>
          </li>
          <li className="flex items-center space-x-5">
            <img
              src={industriesTen}
              alt=""
              loading="lazy"
              className="w-5 h-5"
            />
            <p>Nonprofit</p>
            <img
              src={expand}
              alt=""
              className="-translate-x-3"
            />
          </li>
          <li className="flex items-center space-x-5">
            <img
              src={industriesEleven}
              alt=""
              loading="lazy"
              className="w-5 h-5"
            />
            <p>Public Sector</p>
          </li>
          <li className="flex space-x-5 items-center">
            <img
              src={industriesTwelve}
              alt=""
              loading="lazy"
              className="w-5 h-5"
            />
            <p>Retail</p>
          </li>
          <li className="flex space-x-5 items-center">
            <img
              src={industriesThirteen}
              alt=""
              loading="lazy"
              className="w-5 h-5"
            />
            <p>Technology</p>
            <img
              src={expand}
              alt=""
              className="-translate-x-3"
            />
          </li>
          <li className="w-[110px]">
            <p className="text-[#1a2d60] text-base font-medium hover:text-[#0368b4] underline cursor-pointer">
              See all industries
            </p>
          </li>
          <div className="pt-[100px] h-auto space-y-3">
            <p className="text-xl">Explore Salesforce for industries.</p>
            <button className="bg-[#0176d3] hover:bg-[#023248] text-white py-2 px-6 rounded-sm text-lg ">
              See all industries
            </button>
          </div>
        </ul>
      </div>
    </>
  );
}

export default Products;
