import React from 'react';
import {
  productOne,
  productTwo,
  productThree,
  productFour,
  productFive,
  productSix,
  productSeven,
  productEight,
  productNine,
  productTen,
  productEleven,
  productTwelve,
  productThirteen,
  expand,
} from '../../assets/mobileNavbarImageLinks';
import { TbChevronRight, TbChevronLeft } from 'react-icons/tb';
import { useRecoilState } from 'recoil';
import { anyModalOpenedState, productState } from '../../util/atoms';

function Products() {
  const [productModal, setProductModal] = useRecoilState(productState);
  const [anyModalOpened, setAnyModalOpened] =
    useRecoilState(anyModalOpenedState);

  return (
    <>
      <div className="pt-2 text-[#032d60] font-bold">
        <p
          className="flex items-center text-xl cursor-pointer -translate-x-1"
          onClick={() => {
            setProductModal(false);
            setAnyModalOpened(false);
          }}
        >
          <TbChevronLeft /> Back
        </p>
        <p className="text-3xl mt-5">Products</p>
        <ul className="space-y-8 text-xl mt-5 ml-1 productList h-full">
          <li className="flex items-center justify-between">
            <div className="flex space-x-5 items-center">
              <img
                src={productOne}
                alt=""
                loading="lazy"
                className="w-5 h-5"
              />
              <p>Customer 360</p>
            </div>
            <TbChevronRight className="text-2xl text-gray-500 -translate-x-3" />
          </li>
          <li className="flex items-center space-x-5">
            <img
              src={productTwo}
              alt=""
              loading="lazy"
              className="w-5 h-5"
            />
            <p>Genie</p>
          </li>
          <li className="flex items-center space-x-5">
            <img
              src={productThree}
              alt=""
              loading="lazy"
              className="w-5 h-5"
            />
            <p>Sales</p>
          </li>
          <li className="flex items-center space-x-5">
            <img
              src={productFour}
              alt=""
              loading="lazy"
              className="w-5 h-5"
            />
            <p>Service</p>
          </li>
          <li className="flex items-center space-x-5">
            <img
              src={productFive}
              alt=""
              loading="lazy"
              className="w-5 h-5"
            />
            <p>Marketing</p>
          </li>
          <li className="flex items-center space-x-5">
            <img
              src={productSix}
              alt=""
              loading="lazy"
              className="w-5 h-5"
            />
            <p>Commerce</p>
          </li>
          <li className="flex items-center space-x-5">
            <img
              src={productSeven}
              alt=""
              loading="lazy"
              className="w-5 h-5"
            />
            <p>Tableau</p>
          </li>
          <li className="flex items-center space-x-5">
            <img
              src={productEight}
              alt=""
              loading="lazy"
              className="w-5 h-5"
            />
            <p>Mulesoft</p>
            <img
              src={expand}
              alt=""
              className="-translate-x-3"
            />
          </li>
          <li className="flex items-center space-x-5">
            <img
              src={productNine}
              alt=""
              loading="lazy"
              className="w-5 h-5"
            />
            <p>Slack</p>
          </li>
          <li className="flex items-center space-x-5">
            <img
              src={productTen}
              alt=""
              loading="lazy"
              className="w-5 h-5"
            />
            <p>Platform</p>
          </li>
          <li className="flex items-center space-x-5">
            <img
              src={productEleven}
              alt=""
              loading="lazy"
              className="w-5 h-5"
            />
            <p>Net Zero</p>
          </li>
          <li className="flex items-center justify-between">
            <div className="flex space-x-5 items-center">
              <img
                src={productTwelve}
                alt=""
                loading="lazy"
                className="w-5 h-5"
              />
              <p>Partner Apps & Experts</p>
            </div>
            <TbChevronRight className="text-2xl text-gray-500 -translate-x-3" />
          </li>
          <li className="flex items-center justify-between">
            <div className="flex space-x-5 items-center">
              <img
                src={productThirteen}
                alt=""
                loading="lazy"
                className="w-5 h-5"
              />
              <p>Customer Success</p>
            </div>
            <TbChevronRight className="text-2xl text-gray-500 -translate-x-3" />
          </li>
          <li className="w-[90px]">
            <p className="text-[#1a2d60] text-base font-medium hover:text-[#0368b4] underline cursor-pointer">
              See all pricing
            </p>
          </li>
          <div className="pt-[100px] h-auto space-y-3">
            <p className="text-xl">Explore Customer 360.</p>
            <button className="bg-[#0176d3] hover:bg-[#023248] text-white py-2 px-6 rounded-sm text-lg ">
              See all Salesforce products
            </button>
          </div>
        </ul>
      </div>
    </>
  );
}

export default Products;
