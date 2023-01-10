import React from 'react';
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb';
import { useRecoilState } from 'recoil';
import { salesforceState, anyModalOpenedState } from '../../util/atoms';

function Salesforce() {
  const [salesforceModal, setSalesforceModal] = useRecoilState(salesforceState);
  const [anyModalOpened, setAnyModalOpened] =
    useRecoilState(anyModalOpenedState);

  return (
    <>
      <div className="pt-2 text-[#032d60] font-bold">
        <p
          className="flex items-center text-xl cursor-pointer -translate-x-1"
          onClick={() => {
            setSalesforceModal(false);
            setAnyModalOpened(false);
          }}
        >
          <TbChevronLeft /> Back
        </p>
        <p className="text-3xl mt-5">Salesforce+</p>
        <ul className="space-y-5 text-xl mt-5 productList h-full">
          <li className="flex items-center justify-between">
            <p>Original Content</p>
            <TbChevronRight className="text-2xl text-gray-500 -translate-x-3" />
          </li>
          <li className="flex items-center justify-between">
            <p>Dreamforce</p>
            <TbChevronRight className="text-2xl text-gray-500 -translate-x-3" />
          </li>
          <li className="flex items-center justify-between">
            <p>My list</p>
            <TbChevronRight className="text-2xl text-gray-500 -translate-x-3" />
          </li>
          <div className="pt-[100px] h-auto space-y-3">
            <p className="text-xl">Explore Salesforce+</p>
            <button className="bg-[#0176d3] hover:bg-[#023248] text-white py-2 px-6 rounded-sm text-lg ">
              Visit Salesforce+
            </button>
          </div>
        </ul>
      </div>
    </>
  );
}

export default Salesforce;
