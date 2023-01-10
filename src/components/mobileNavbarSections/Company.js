import React from 'react';
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb';
import { useRecoilState } from 'recoil';
import { companyState, anyModalOpenedState } from '../../util/atoms';

function Company() {
  const [companyModal, setCompanyModal] = useRecoilState(companyState);
  const [anyModalOpened, setAnyModalOpened] =
    useRecoilState(anyModalOpenedState);

  return (
    <>
      <div className="pt-2 text-[#032d60] font-bold">
        <p
          className="flex items-center text-xl cursor-pointer -translate-x-1"
          onClick={() => {
            setCompanyModal(false);
            setAnyModalOpened(false);
          }}
        >
          <TbChevronLeft /> Back
        </p>
        <p className="text-3xl mt-5">Company</p>
        <ul className="space-y-5 text-xl mt-5 productList">
          <li className="flex items-center justify-between">
            <p>About Salesforce</p>
            <TbChevronRight className="text-2xl text-gray-500 -translate-x-3" />
          </li>
          <li className="flex items-center justify-between">
            <p>Our Values</p>
            <TbChevronRight className="text-2xl text-gray-500 -translate-x-3" />
          </li>
          <li className="flex items-center justify-between">
            <p>Our Impact</p>
            <TbChevronRight className="text-2xl text-gray-500 -translate-x-3" />
          </li>
          <li className="flex items-center justify-between">
            <p>Careers</p>
            <TbChevronRight className="text-2xl text-gray-500 -translate-x-3" />
          </li>
          <li className="flex items-center justify-between">
            <p>News</p>
            <TbChevronRight className="text-2xl text-gray-500 -translate-x-3" />
          </li>
          <li className="flex items-center justify-between">
            <p>More Salesforce Brands</p>
            <TbChevronRight className="text-2xl text-gray-500 -translate-x-3" />
          </li>
          <div className="pt-[200px] space-y-3 productBg">
            <p className="text-xl">Hear our story.</p>
            <button className="bg-[#0176d3] hover:bg-[#023248] text-white py-2 px-6 rounded-sm text-lg ">
              Learn about us
            </button>
          </div>
        </ul>
      </div>
    </>
  );
}

export default Company;
